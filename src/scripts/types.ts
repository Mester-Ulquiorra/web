export interface UserData {
    userId: string;
    avatar: string;
    lastFetch: string;
    userTag: string;
    alerts: Alert[];
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

export interface Alert {
    type: string;
    data: {
        status: "accepted" | "rejected";
        reason: string;
    };
}
