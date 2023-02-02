import React, { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Section = ({ title, description }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-red-400 p-2 m-2">
            <div className="flex justify-between">
                <h2 className="font-bold text-3xl">{title}</h2>
                {!isVisible ? (
                    <button
                        type="button"
                        onClick={() => {
                            setIsVisible(true);
                        }}
                    >
                        <BsArrowDown />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => {
                            setIsVisible(false);
                        }}
                    >
                        <BsArrowUp />
                    </button>
                )}
            </div>
            {isVisible && <p>{description}</p>}
        </div>
    );
};
const Contact = () => {
    return (
        <>
            <h2>FAQ:</h2>
            <Section title="First title" description={"this is 1st FAq"} />
            <Section title="Second Title" description={"this is 2nd FAq"} />
            <Section title="Third title" description={"this is 3rd FAq"} />
            <Section title="Fourth title" description={"this is 4th FAq"} />
        </>
    );
};

export default Contact;
