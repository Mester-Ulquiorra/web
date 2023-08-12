export interface UserData {
  userId: string;
  avatar: string;
  lastFetch: string;
  userTag: string;
  alerts: Alert<AlertType>[];
}

export interface UserPunishments {
  id: string;
  type: number;
  reason: string;
  moderator: string;
  at: number;
  until: number;
  active: boolean;
  appealed: boolean;
}

// currently only appeal exists, but maybe more in the future
export type AlertType = "appeal";

type AlertData<T extends AlertType> = T extends "appeal"
  ? {
      status: "accepted" | "rejected";
      reason: string;
    }
  : never;

export interface Alert<T extends AlertType> {
  type: T;
  data: AlertData<T>;
}

export function isAppealAlert(alert: Alert<AlertType>): alert is Alert<"appeal"> {
  return alert.type === "appeal";
}
