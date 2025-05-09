export const truncate = (text: string, maxLength = 50) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const formatPrice = (price: number) => {
  return `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
};

export const TEST_NAME_4 = 'test name 4';
export const TEST_NAME_5 = 'test name 5';
export const TEST_NAME_6 = 'test name 6';
export const TEST_NAME_7 = 'test name 7';
