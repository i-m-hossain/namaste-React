const Container = ({ title = "", children }) => {
    return (
        <div className="bg-white" >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                {title}
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8" data-testid="container">
                {children}
            </div>
        </div>
    );
};

export default Container;
