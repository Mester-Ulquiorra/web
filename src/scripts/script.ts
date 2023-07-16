import { getUserData } from "./userData"

const url = `https://ucp.mester.info/api/user${process.env.NODE_ENV === "development" ? "?test=true" : ""}`
const apiUrl = new URL(url)
const userData = await getUserData(apiUrl)

if (userData) {
    // Only show page if there is user data
    (document.querySelector("main") as HTMLElement).style.display = "grid";
    (document.querySelector("#placeholder") as HTMLHeadingElement).style.display = "none";

    // Setting the user avatar
    const userAvatar = document.querySelector("#avatar") as HTMLImageElement
    userAvatar.src = `https://media.discordapp.net/avatars/${userData?.userId}/${userData?.avatar}.png`

    // Setting the user tag
    const username = document.querySelector("#username") as HTMLParagraphElement
    username.innerHTML = userData?.userTag ?? ""

    const loginButton = document.querySelector("#login") as HTMLFormElement
    loginButton.style.display = "none"

    const userInfo = document.querySelector("#user-info") as HTMLDivElement
    userInfo.style.display = "inline-flex"

    // Last updated text in footer
    const lastUpdated = new Date(userData.lastFetch).toDateString()
    const lastUpdatedElement = document.querySelector("#last-updated") as HTMLElement
    lastUpdatedElement.innerHTML = `Last updated: ${lastUpdated}`

    createToast("#server-link", "https://discord.gg/MfmUFk5kbe", "Copied server link to keyboard")
}

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
