import { FormEvent, useContext, useState } from 'react';
import { api } from '../../services/api';
import Modal from 'react-modal';
import {
  Container,
  TransactionButtonWrapper,
  TransactionRadioButton,
} from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { TransactionsContext } from '../../contexts/TransactionsContext';

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useContext(TransactionsContext);

  const [transactionType, setTransactionType] = useState('deposit');

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');

  const handleCreateNewTransaction = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    const transaction = {
      title,
      amount: price,
      category,
      type: transactionType,
    };

    await createTransaction(transaction);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <>
        <button
          className="react-modal-close"
          type="button"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container onSubmit={handleCreateNewTransaction}>
          <h2>Cadastrar transação</h2>

          <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <input
            type="number"
            placeholder="Preço"
            value={price}
            onChange={(event) => setPrice(Number(event.target.value))}
          />

          <TransactionButtonWrapper>
            <TransactionRadioButton
              isActive={transactionType === 'deposit'}
              type="button"
              onClick={() => setTransactionType('deposit')}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TransactionRadioButton>
            <TransactionRadioButton
              isActive={transactionType === 'withdraw'}
              type="button"
              onClick={() => setTransactionType('withdraw')}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </TransactionRadioButton>
          </TransactionButtonWrapper>

          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </>
    </Modal>
  );
}
