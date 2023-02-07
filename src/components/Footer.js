import { useContext } from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import UserContext from "../context/UserContext";

export const Footer = () => {
    return (
        <div className="fixed w-full bottom-0 p-6 lg:px-8 border shadow-md  bg-pink-100 sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023
                <a
                    href="https://mdimranhossain.netlify.app/"
                    className="hover:underline"
                    target="_blank"
                >
                    Md Imran Hossain
                </a>
                . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                {[
                    {
                        name: "github",
                        url: "https://github.com/mdimran1409036/",
                    },
                    {
                        name: "faceboook",
                        url: "https://facebook.com/r.rudronil",
                    },
                ].map((item) => (
                    <a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
                    >
                        {item.name === "github" ? (
                            <AiFillGithub size={30} />
                        ) : (
                            <AiFillFacebook size={30} />
                        )}
                        <span className="sr-only">{item.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};
