import Modal from 'react-modal';
import { Container } from './styles';

export type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
      <Container>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" />
        <input type="number" placeholder="Preço" />

        {/* <button>Entrada</button>
        <button>Saída</button> */}

        <input type="text" placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
