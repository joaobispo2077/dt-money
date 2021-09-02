import React, { useEffect, useState } from 'react';
import { Transaction, TransactionsContext } from '.';
import { api } from '../../services/api';

export type TransactionsProviderProps = {
  children: React.ReactNode;
};

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get('/transactions')
      .then((response) => setTransactions(response.data.transactions));
  }, []);

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}
