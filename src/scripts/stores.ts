import { atom } from "nanostores"

export const $toastText = atom("")

$toastText.listen(text => {
    if (text === "") return

    const toast = document.querySelector(".toast") as HTMLDivElement
    toast.innerHTML = text

    toast.style.visibility = "visible";
    toast.style.opacity = "1";

    setTimeout(() => {
        toast.style.visibility = "hidden";
        toast.style.opacity = "0";
    }, 1500);

    $toastText.set("")
})
