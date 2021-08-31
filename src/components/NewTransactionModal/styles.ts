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
