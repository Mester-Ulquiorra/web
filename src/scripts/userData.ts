interface UserData {
  userId: string;
  avatar: string;
  lastFetch: string;
  userTag: string;
}

interface UserPunishments {
  id: string;
  type: number;
  reason: string;
  moderator: string;
  at: number;
  until: number;
  active: boolean;
}

export async function getUserData(url: URL) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Authentication failed");
    }
    const userData = await response.json() as UserData;
    return userData;
  } catch (error) {
    console.error(error);
  }
}

export async function getUserPunishments(url: URL) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to get punishments");
    }
    const userPunishments = await response.json() as UserPunishments[];
    return userPunishments;
  } catch (error) {
    console.error(error);
  }
}
