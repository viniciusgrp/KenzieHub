import styled from "styled-components";

const Login = styled.div`
max-width: 350px;
margin: 0 auto;
  h1 {
    color: var(--color-primary);
    text-align: center;
    margin: 80px 0 20px 0;
  }
  div {
    width: 90%;
    margin: 0 auto;
    background-color: var(--color-grey-3);

    display: flex;
    flex-direction: column;

    h2 {
      text-align: center;
      color: var(--color-grey-0);
      margin: 40px 0 20px 0;
    }

    p {
      color: var(--color-grey-1);
      margin-top: 25px;
    }
  }

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      color: var(--color-grey-0);
      margin: 0 5%;
    }

    input {
      width: 90%;
      margin: 10px auto 20px auto;
      padding: 1rem;
      border: solid 1px transparent;
      border-radius: 4px;
      background-color: var(--color-grey-2);
    color: var(--color-grey-1);    }

    input:focus {
      border: 1px solid white;
    }
  }

  .error {
    margin: 0px 5% 10px 5%;
  }

  .createAccount {
    text-align: center;
  }

  .divInput {
    text-align: start;
  }

  .buttonGrey {
    width: 80%;
    margin: 0 auto;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .buttonPrimary {
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    max-width: 30%;
    min-width: 350px;
    margin: 0 auto;
  }
`;

export default Login;
