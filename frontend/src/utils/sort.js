// lowest to highest
export const ascendingOrder = (arr) => {
    return arr?.sort((a, b) => (a.price > b.price ? 1 : -1));
};

// highest to lowest
export const decendingOrder = (arr) => {
    return arr?.sort((a, b) => (a.price < b.price ? 1 : -1));
};