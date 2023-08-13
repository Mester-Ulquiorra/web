import { capitalise } from "./functions";

export type AlertType = "appeal" | "punishment";

type AlertData<T extends AlertType> = T extends "appeal"
    ? {
        status: "accepted" | "rejected";
        reason: string;
    }
    : T extends "punishment" ? {
        punishmentId: string,
        user: string;
        mod: string;
        type: number;
        reason: string;
        at: number;
        until: number;
        active: boolean;
        appealed: false;
    } : never;

export interface Alert<T extends AlertType> {
    type: T;
    data: AlertData<T>;
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
