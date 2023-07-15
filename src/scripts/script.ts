import { getUserData } from "./userData";

let userData
const apiUrl = new URL(`https://ucp.mester.info/api/user?test=true`)

if (!userData) {
    userData = await getUserData(apiUrl)
}
