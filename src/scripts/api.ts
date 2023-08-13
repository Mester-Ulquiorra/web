/**
 * There are two development environments: one with a test API (Mester) and one that uses dev frontend with prod API (noClaps)
 * the test API is enabled by checking if there is DEV_MESTER in the environment variables
 */
const APIBase = process.env.DEV_MESTER === "sure" ? "http://localhost:5657" : "https://ucp-api.mester.info";

/**
 * The API routes are defined here
 * This is only the path, the base is defined above
 */
const APIRoutes = {
    hello: "/",
    auth: "/auth",
    user: "/user",
    punishments: "/user/punishments",
    createAppeal: "/user/create-appeal",
    logout: "/user/logout",
    ws: "/ws"
};

export type APIRouteType = keyof typeof APIRoutes;

/**
 * Gets the full API route with the base
 * @param route The route to get
 * @returns The full API route with the base
 */
export function getAPIRoute(route: APIRouteType) {
    let url = APIBase + APIRoutes[route];
    if (route === "ws") {
        url = url.replace(/https?/, process.env.DEV_MESTER === "sure" ? "ws" : "wss");
    }
    // add a ?test=true at the end if NODE_ENV is development
    if (process.env.NODE_ENV === "development") {
        return url + "?test=true";
    }
    return url;
}
