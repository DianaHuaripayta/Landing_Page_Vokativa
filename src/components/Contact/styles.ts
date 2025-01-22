import styled from "styled-components";


export const Container = styled.section`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    text-align: center;
    margin-bottom: 2rem;

    h2 {
      font-size: 4rem;
      font-weight: bold;
    }

    p {
      color: var(--green);
      font-weight: 500;
      margin-top: 0.5rem;
      font-size: 2.3rem;
    }
  }

  .container-form {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
    background-color: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .content-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;

    @media (min-width: 768px) {
      flex-direction: row;
      gap: 2rem;
    }
  }

  .input-styled {
    width: 100%;
    padding: 1rem;
    font-size: 2rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    transition: all 0.3s;

    &:focus {
      border-color: var(--green);
      box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.25); /* Verde suave */
    }
  }

  textarea {
    width: 100%;
    height: 30vh;
    padding: 0.75rem;
    font-size: 2rem;
    border: 1px solid #d1d5db;
    border-radius: 8px;
    outline: none;
    resize: none;
    transition: all 0.3s;

    &:focus {
      border-color: var(--pink);
      box-shadow: 0 0 0 3px rgba(244, 114, 182, 0.25); /* Rosa suave */
    }
  }

  button {
    padding: 0.75rem;
    background-color: var(--green);
    color: #ffffff;
    font-size: 2rem ;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--pink);
    }

    &:disabled {
      background-color: #d1d5db;
      cursor: not-allowed;
    }
  }

  p {
    color: #ef4444; /* Rojo para los mensajes de error */
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 960px) {
    .container-form {
      width: 90%;
    }

    .content-form {
      flex-direction: column;
    }
  }
  a{
    color:var(--pink);
    font-size: 2rem;
    text-decoration: underline;
    font-weight: bold;
  }
`;