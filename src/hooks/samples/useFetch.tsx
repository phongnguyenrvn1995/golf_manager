import { useEffect, useState } from "react";

export const useFetch = (url: string) =>{
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setData(json);
            } catch(error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [url]);

    return [data, error, loading];
};