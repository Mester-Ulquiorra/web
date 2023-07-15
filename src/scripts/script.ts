import { getUserData } from "./userData"

const apiUrl = new URL(`https://ucp.mester.info/api/user?test=true`)
const userData = await getUserData(apiUrl)

if (userData) {
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
}