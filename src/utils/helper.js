export const filterData = (restaurants, searchTerm) => {
    return restaurants.filter((item) =>
        item.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

