import type { Alert, AlertType } from "./alerts";
import { getAPIRoute, APIRouteType } from "./api";

interface UserData {
  userId: string;
  avatar: string;
  lastFetch: string;
  userTag: string;
  alerts: Alert<AlertType>[];
}
export interface UserPunishments {
  punishmentId: string;
  user: string;
  mod: string;
  type: number;
  reason: string;
  at: number;
  until: number;
  active: boolean;
  appealed: boolean;
}

interface UserProfile {
  firstJoin: number;
  lastJoin: number;
  mod: string;
  xp: number;
  lbPos: number;
  level: number;
}

/**
 * Get the response of an authorised route
 * @param route the route to get
 * @param token the token to use
 */
async function getAuthorisedRoute(route: APIRouteType, token: string) {
  const url = new URL(getAPIRoute(route));
  try {
    const response = await fetch(url, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) {
      throw new Error("Authentication failed");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function getUserData(token: string) {
  const userData = (await getAuthorisedRoute("user", token)) as UserData;
  return userData;
}

export async function getUserPunishments(token: string) {
  const response = (await getAuthorisedRoute("punishments", token)) as UserPunishments[];
  return response;
}

export async function getUserProfile(token: string) {
  const response = (await getAuthorisedRoute("profile", token)) as UserProfile;
  return response;
}
