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
    const newTransaction = {
      ...data,
      createdAt: String(new Date()),
    };

    const response = await api.post('/transactions', newTransaction);
    const { transaction } = response.data;

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
