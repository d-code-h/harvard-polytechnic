import axios from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const convertNairaToKobo = (naira: number) => {
  return naira * 100;
};

export const verifyTransaction = async (transactionReference: string) => {
  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${transactionReference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error('Error verifying transaction:', error);
    return null;
  }
};

export const isLegitTransaction = async (
  user: Application,
  transaction: {
    status?: string;
    data?: {
      status?: string;
      customer?: {
        email?: string;
      };
      metadata?: {
        phone?: string;
      };
    };
  },
) => {
  if (!transaction?.status || transaction.data?.status !== 'success') {
    return false; // Transaction failed or not verified
  }

  const transactionEmail = transaction.data.customer?.email?.toLowerCase();
  const transactionPhone = transaction.data.metadata?.phone?.replace(/\D/g, ''); // remove non-digit characters
  const userEmail = user.email?.toLowerCase();
  const userPhone = user.phone?.replace(/\D/g, '');

  const emailsMatch = transactionEmail === userEmail;
  const phonesMatch = transactionPhone === userPhone;

  return emailsMatch && phonesMatch;
};
