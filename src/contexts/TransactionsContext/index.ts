import { createContext } from 'react';

export interface Transaction {
  id: number;
  title: string;
  category: string;
  amount: number;
  type: string;
  createdAt: string;
}

export const TransactionsContext = createContext<Transaction[]>([]);
