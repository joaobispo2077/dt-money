import { useContext } from 'react';
import {
  TransactionsContext,
  TransactionsContextData,
} from '../contexts/TransactionsContext';

export function useTransactions(): TransactionsContextData {
  const context = useContext(TransactionsContext);
  return context;
}
