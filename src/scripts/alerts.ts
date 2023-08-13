import type { Alert, AlertType } from "./types";

function capitalise(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}
export function createAlert(alert: Alert<AlertType>, alertsMainElem: HTMLElement) {
    console.log(typeof alert);
    const alertElement = document.createElement("div");
    if (alert.type === "appeal") {
        alertElement.dataset.status = alert.data.status; // Getting an error here on `alert.data.status`
    } else if (alert.type === "punishment") {
        alertElement.dataset.active = alert.data.active; // Getting an error here on `alert.data.active`
    }

    alertElement.innerHTML = `<h3>Type: ${ capitalise(alert.type) }</h3><p>${ alert.type === "appeal"
        ? `Your appeal has been ${ alert.data.status }: ` // Getting an error here on `alert.data.status`
        : ""
        }</p><p>Reason: ${ alert.data.reason }</p>`;

    alertsMainElem.prepend(alertElement);
}
