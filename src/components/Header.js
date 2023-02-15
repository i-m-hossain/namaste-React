import { useContext, useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../assets/img/logo.svg";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import { SlLogin, SlLogout } from "react-icons/sl";
import useAvatar from "../hooks/useAvatar";
import Cart from "./common/Cart";

const navigation = [
    { name: "about", link: "/about" },
    { name: "contact", link: "/contact" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(null);
    const { user } = useContext(UserContext);
    const { avatar } = useAvatar(user.name);
    return (
        <div className=" bg-pink-100 mb-8  relative sticky top-0 z-30">
            <div className="px-6 py-6 lg:px-8 border shadow-md ">
                <nav
                    className="flex items-center justify-between"
                    aria-label="Global"
                >
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Food U</span>
                            <img className="h-8" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <HiMenu />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.link}
                                className="text-sm font-semibold leading-6 text-gray-900"
                            >
                                {item.name.toUpperCase()}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-2 cursor-pointer">
                        <Cart/>
                        <div>
                            {user && <img src={avatar} className="w-10" />}
                        </div>

                        {isLoggedIn ? (
                            <>
                                <button
                                    type="button"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Log in
                                </button>
                                <SlLogin />
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    className="text-sm font-semibold leading-6 text-gray-900"
                                >
                                    Log out
                                </button>
                                <SlLogout />
                            </>
                        )}
                    </div>
                </nav>

                {/* mobile menu */}
                <Dialog
                    as="div"
                    open={mobileMenuOpen}
                    onClose={setMobileMenuOpen}
                >
                    <Dialog.Panel
                        focus="true"
                        className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 lg:hidden"
                    >
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8" src={logo} alt="" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <HiX />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            to={item.link}
                                            className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-400/10"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Cart/>
                                    {isLoggedIn ? (
                                        <div className="flex items-center space-x-4">
                                            <button
                                                type="button"
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                Log in
                                            </button>
                                            <SlLogin />
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-4">
                                            <button
                                                type="button"
                                                className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-400/10"
                                            >
                                                Log out
                                            </button>
                                            <SlLogout />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </div>
        </div>
    );
}
