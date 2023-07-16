import { createToast, localDate } from "./functions"
import { getUserPunishments } from "./userData"

const url = `https://ucp.mester.info/api/user/punishments${process.env.NODE_ENV === "development" ? "?test=true" : ""}`
const apiUrl = new URL(url)
const userPunishments = await getUserPunishments(apiUrl)

if (userPunishments) {
    const punishmentsElement = document.querySelector("#punishments") as HTMLElement

    punishmentsElement.innerHTML = userPunishments.map(punishment => {
        console.log(punishment.until)
        const at = localDate(punishment.at)
        const until = localDate(punishment.until)
        const types = [
            "Warning",
            "Mute",
            "Kick",
            "Ban"
        ]

        return `<div id="id-${punishment.id}" class="punishment ${punishment.active ? "active" : ""}">
            <p class="punishment-type"><b>Type:</b> ${types[punishment.type]}</p>
            <p class="punishment-reason"><b>Reason:</b> ${punishment.reason}</p>
            <p class="punishment-moderator"><b>Moderator:</b> ${punishment.moderator}</p>
            <p class="punishment-at"><b>At:</b> ${at}</p>
            ${punishment.until >= 0 ? `<p class="punishment-until"><b>Until:</b> ${until}</p>` : ""}
        </div>`
    }).join("")

    userPunishments.forEach(punishment => {
        createToast(`#id-${punishment.id}`, punishment.id, "Copied punishment ID to clipboard")
    })
}
