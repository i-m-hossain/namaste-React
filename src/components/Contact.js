import React, { useState } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { FAQList } from "../config";

const Section = ({ title, description, isVisible, setIsVisible }) => {
    return (
        <div className={`border`}>
            <div
                className={`${
                    isVisible && "bg-pink-100"
                } flex justify-between p-2`}
            >
                <h2 className="font-bold  uppercase">{title} </h2>
                {!isVisible ? (
                    <button
                        type="button"
                        onClick={() => setIsVisible(true)}
                        className="p-2 border bg-pink-50"
                    >
                        <SlArrowUp />
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={() => setIsVisible(false)}
                        className="p-2 border bg-gray-100"
                    >
                        <SlArrowDown />
                    </button>
                )}
            </div>

            {isVisible && <p className="p-2">{description}</p>}
        </div>
    );
};
const Contact = () => {
    const [visibleSection, setVisibleSection] = useState({
        [FAQList[0]["id"]]: true,
    });

    return (
        <>
            <h2>FAQ:</h2>
            {FAQList.map((item) => (
                <Section
                    title={item.title}
                    description={item.description}
                    isVisible={visibleSection[item.id]}
                    setIsVisible={(status) =>
                        setVisibleSection({ [item.id]: status })
                    }
                    key={item.id}
                />
            ))}
        </>
    );
};

export default Contact;
