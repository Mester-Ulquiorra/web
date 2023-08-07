import { getAPIRoute, APIRouteType } from "./functions";
import type { UserData, UserPunishments } from "./types";

/**
 * Get the response of an authorised route
 * @param route the route to get 
 * @param token the token to use
 */
function getAuthorisedRoute(route: APIRouteType, token: string) {
  const url = new URL(getAPIRoute(route));
  return fetch(url, {
    headers: {
      Authorization: token
    }
  })
    .then(async response => {
      if (!response.ok) {
        throw new Error("Authentication failed");
      }
      // return as json
      return response.json();
    })
    .catch(error => {
      console.error(error);
      return null;
    });
}

export async function getUserData(token: string) {
  const userData = await getAuthorisedRoute("user", token) as UserData;
  return userData;
}

export async function getUserPunishments(token: string) {
  const response = await getAuthorisedRoute("punishments", token) as UserPunishments[];
  return response;
}
