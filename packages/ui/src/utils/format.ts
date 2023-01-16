import { format, isValid, parseISO } from 'date-fns';

export const formatCurrency = (amount: number): string =>
  Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency',
  })
    .format(amount / 100)
    .trim();

export const formatZipCode = (zipCode: string): string =>
  `${zipCode}`.replace(/\D/g, '').replace(/(\d{5})(\d)/g, '$1-$2');

export const formatDate = (date: Date | string): string => {
  const isISODate = typeof date === 'string' && isValid(parseISO(date));
  const _date = isISODate ? parseISO(date) : new Date(date);

  return format(_date, 'dd/MM/yyyy');
};
