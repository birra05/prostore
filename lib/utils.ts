import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertToPlainObject = <T>(value: T): T => {
  return JSON.parse(JSON.stringify(value));
};

export const formatNumberWithDecimal = (number: number): string => {
  const [int, decimal = ''] = number.toString().split('.');

  return `${int}.${decimal.padEnd(2, '0')}`;
};
