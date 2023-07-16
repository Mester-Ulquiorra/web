export function createToast(srcElem: string, copyText: string, message: string) {
    const srcElems = document.querySelectorAll(srcElem);
    srcElems.forEach((elem) => {
        elem.addEventListener("click", () => {
            navigator.clipboard.writeText(copyText);

            const toast = document.createElement("div")
            toast.className = "toast"
            toast.innerHTML = message
            document.body.append(toast)

            setTimeout(() => {
                toast.style.visibility = "visible"
                toast.style.opacity = "1";
            }, 0)

            setTimeout(() => {
                toast.style.visibility = "hidden";
                toast.style.opacity = "0";
            }, 1000);

            setTimeout(() => {
                toast.remove()
            }, 1250)

        });
    });
}

export function localDate(unixTime: number) {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
    return new Date(unixTime * 1000).toLocaleString(locale, { timeZone: timeZone })
}
