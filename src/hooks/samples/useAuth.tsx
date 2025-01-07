import { useState } from "react";

export const useAuth = () => {
    const [user, setUser] = useState<any>(null);

    const login = (userData: any) => {
        setUser(userData);
    };

    const logout = () => {
        setUser(null);
    };

    return [user, login, logout];
};