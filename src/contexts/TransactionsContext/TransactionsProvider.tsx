import React, { useEffect, useState } from 'react';
import { Transaction, TransactionInput, TransactionsContext } from '.';
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

  const createTransaction = async (data: TransactionInput) => {
    const transaction = {
      ...data,
      id: transactions.length - 1,
      createdAt: String(new Date()),
    };

    await api.post('/transactions', transaction);
    setTransactions((previousTransaction) =>
      previousTransaction.concat(transaction),
    );
  };

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
