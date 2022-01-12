const currencySymbol = '$';
// const currencySymbol = '₡';

export const truncate = (long: string): string =>
  long.replace(/(.{100})..+/, '$1…');

export const camelToTitle = (camelCase: string) =>
  camelCase
    .replace(/([A-Z])/g, match => ` ${match}`)
    .replace(/^./, match => match.toUpperCase())
    .trim();

export const toAmount = (amount: number) => `${currencySymbol}${new Intl.NumberFormat().format(amount)}`;


