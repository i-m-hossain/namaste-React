import React, { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ menu }) {
    const [category, setCategory] = useState("");
    console.log(menu);

    return (
        <>
            <div className="mt-3 text-center">
                {[...new Set(Object.values(menu).map((it) => it.category))].map(
                    (item, i) => (
                        <button
                            onClick={() => {
                                setCategory(item);
                            }}
                            key={i}
                            className={`border-b-2 ${
                                category === item && "border-pink-400 text-lg font-bold"
                            } py-2 block hover:text-pink-400`}
                        >
                            {item}
                        </button>
                    )
                )}
            </div>
            <div className="flex flex-col w-full">
                <h2 className=" text-lg font-bold text-pink-400">
                    {category ? category : "All food items"}
                </h2>
                {category
                    ? Object.values(menu)
                          .filter((it) => it.category === category)
                          .map((item, i) => <MenuItem key={i} {...item} />)
                    : Object.values(menu).map((item, i) => (
                          <MenuItem key={i} {...item} />
                      ))}
            </div>
        </>
    );
}

export default MenuList;
