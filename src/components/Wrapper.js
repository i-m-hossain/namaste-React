import React from "react";

function Wrapper({children}) {
    return (
        <div className="mx-auto max-w-2xl py-6 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8">
            {children}
        </div>
    );
}

export default Wrapper;
