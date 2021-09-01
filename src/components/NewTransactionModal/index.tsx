import Modal from 'react-modal';
import {
  Container,
  TransactionButtonWrapper,
  TransactionRadioButton,
} from './styles';

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

          <TransactionButtonWrapper>
            <TransactionRadioButton
              isActive={transactionType === 'income'}
              type="button"
              onClick={() => setTransactionType('income')}
              activeColor="green"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </TransactionRadioButton>
            <TransactionRadioButton
              isActive={transactionType === 'outcome'}
              type="button"
              onClick={() => setTransactionType('outcome')}
              activeColor="red"
            >
              <img src={outcomeImg} alt="Saída" />
              <span>Saída</span>
            </TransactionRadioButton>
          </TransactionButtonWrapper>

          <input type="text" placeholder="Categoria" />

          <button type="submit">Cadastrar</button>
        </Container>
      </>
    </Modal>
  );
}
