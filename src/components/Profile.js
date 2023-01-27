import React, { useEffect, useState } from "react";

function Profile() {
    const [time, setTime] = useState({ hour: "", min: "", seconds: "" });
    useEffect(async() => {
        const interval = setInterval(() => {
            const hour = new Date().getHours();
            const min = new Date().getMinutes();
            const seconds = new Date().getSeconds();
            setTime((prev) => (prev = { hour, min, seconds }));
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div style={{ border: "1px solid red" }}>
            hello this is functional profile
        </div>
    );
}

export default Profile;
