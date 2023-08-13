import { capitalise } from "./functions";

export type AlertType = "appeal" | "punishment";

type AlertData<T extends AlertType> = T extends "appeal"
  ? {
      status: "accepted" | "rejected";
      reason: string;
    }
  : T extends "punishment"
  ? {
      punishmentId: string;
      user: string;
      mod: string;
      type: number;
      reason: string;
      at: number;
      until: number;
      active: boolean;
      appealed: false;
    }
  : never;

export interface Alert<T extends AlertType> {
  type: T;
  data: AlertData<T>;
}
export function createAlert(alert: Alert<AlertType>, alertsMainElem: HTMLElement) {
  const alertElement = document.createElement("div");
  if (isAppealAlert(alert)) {
    alertElement.dataset.status = alert.data.status; // Getting an error here on `alert.data.status`
  }

  if (isPunishmentAlert(alert)) {
    alertElement.dataset.active = String(alert.data.active); // Getting an error here on `alert.data.active`
  }

  alertElement.innerHTML = `<h3>Type: ${capitalise(alert.type)}</h3><p>${
    isAppealAlert(alert)
      ? `Your appeal has been ${alert.data.status}: ` // Getting an error here on `alert.data.status`
      : ""
  }</p><p>Reason: ${alert.data.reason}</p>`;

  alertsMainElem.prepend(alertElement);
}

export function isAppealAlert(alert: Alert<AlertType>): alert is Alert<"appeal"> {
  return alert.type === "appeal";
}

export function isPunishmentAlert(alert: Alert<AlertType>): alert is Alert<"punishment"> {
  return alert.type === "punishment";
}
