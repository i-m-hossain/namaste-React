const Shimmer = ({ length }) => {
    console.log(length);
    return (
        <>
            {Array(length)
                .fill("")
                .map((item, i) => (
                    <div className="shimmer-card" key={i}>
                        <div className="shimmerBG media"></div>
                        <div className="p-32">
                            <div className="shimmerBG title-line"></div>
                            <div className="shimmerBG title-line end"></div>

                            <div className="shimmerBG content-line m-t-24"></div>
                            <div className="shimmerBG content-line"></div>
                            <div className="shimmerBG content-line"></div>
                            <div className="shimmerBG content-line"></div>
                            <div className="shimmerBG content-line end"></div>
                        </div>
                    </div>
                ))}
        </>
    );
};

export default Shimmer;
