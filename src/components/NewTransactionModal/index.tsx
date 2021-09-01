import Modal from 'react-modal';
import { Container, TransactionTypeWrapper } from './styles';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useState } from 'react';

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [transactionType, setTransactionType] = useState('income');

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

        <Container>
          <h2>Cadastrar transação</h2>

          <input type="text" placeholder="Título" />
          <input type="number" placeholder="Preço" />

          <TransactionTypeWrapper>
            <button
              className="income active"
              type="button"
              onClick={() => setTransactionType('income')}
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>
            <button
              className="outcome active"
              type="button"
              onClick={() => setTransactionType('outcome')}
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </button>
          </TransactionTypeWrapper>

          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
      </>
    </Modal>
  );
}
