import { useEffect, useState } from "react";
import { getUser, User } from "../../services/api/samples/userService";


export const useUser = (userId: string) => {
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const users = await getUser(userId);
                setUser(users);
            } catch(error) {
                setError("Fetch user failed");
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    });

    return [user, error, loading] as const;
};