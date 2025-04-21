export const truncate = (text: string, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return `${text.slice(0, maxLength)}...`;
};

export const formatPrice = (price: number) => {
    return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
};