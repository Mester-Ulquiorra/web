import type { Alert, AlertType } from "./alerts";

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

export function localDate(time: number | string) {
  if (typeof time === "number") {
    return new Date(time * 1000).toLocaleString();
  } else {
    return new Date(time).toLocaleString();
  }
}

export function capitalise(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}