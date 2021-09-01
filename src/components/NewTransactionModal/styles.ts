import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background: var(--input-background);
    border: 1px solid var(--input-border);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type='submit'] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    background: var(--green);
    border-radius: 0.25rem;
    border: none;

    font-size: 1rem;
    font-weight: 600;
    color: var(--shape);
    margin-top: 1.5rem;

    transition: filter 0.2s ease-in-out;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const TransactionTypeWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  margin: 1rem 0;

  button {
    width: 50%;
    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid var(--input-border);
    background: var(--background);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    transition: border-color 0.2s;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    span {
      font-size: 1rem;
      color: var(--text-title);
    }

    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
  }

  /* .income:hover,
  .income.active {
    background: #12a454;
  }

  .outcome:hover,
  .outcome.active {
    background: #12a454;
  } */
`;
