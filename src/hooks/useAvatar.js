import { useEffect, useState } from "react";

const useAvatar = (name) => {
    const [avatar, setAvatar] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetchImage(name);
    }, [name]);

    async function fetchImage(name) {
        try {
            setLoading(true);
            const response = `https://ui-avatars.com/api/?name=${name.replace(
                / /g,
                "+"
            )}&rounded=true&background=ff3e00&color=fff&bold=true`;
            setAvatar(response);
            setLoading(false);
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }
    return { loading, error, avatar };
};
export default useAvatar;
