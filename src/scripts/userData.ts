interface UserData {
    userId: string,
    avatar: string,
    guilds: {
        id: string,
        name: string,
        icon: string
    }[],
    lastFetch: string,
    userTag: string
}

export async function getUserData(url: URL) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error("Authentication failed")
        }
        const userData = await response.json() as UserData
        return userData
    } catch (error) {
        console.error(error)
    }
}
