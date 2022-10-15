import styled from "styled-components";

const Signup = styled.div`
  max-width: 400px;
  margin: 0 auto;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 90%;
    margin: 70px auto 0 auto;

    h1 {
      color: var(--color-primary);
    }

    .buttonBack {
      background-color: var(--color-grey-3);
      color: var(--color-grey-0);
      padding: 10px 20px;
      text-decoration: none;
      border-radius: 4px;
    }
  }

  form {
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: var(--color-grey-3);
    padding-bottom: 30px;

    h2 {
      color: var(--color-grey-0);
      margin-top: 30px;
    }

    p {
      color: var(--color-grey-1);
      margin: 15px 0;
    }

    input {
      width: 90%;
      margin: 0 auto;
      background-color: var(--color-grey-2);
      border-color: transparent;
      border-radius: 4px;
      padding: 10px;
      color: var(--color-grey-1);
    }

    .error {
      margin: 10px 5%;
    }

    select {
      width: 90%;
      margin: 0 auto;
      background-color: var(--color-grey-2);
      padding: 10px;
      color: var(--color-grey-1);
      border-radius: 4px;
      border-color: transparent;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      margin: 0 5%;
      color: var(--color-grey-1);
      margin-bottom: 10px;
    }
  }

  .buttonPrimary {
    width: 90%;
  }

  @media screen and (min-width: 768px) {
    max-width: 40%;
    min-width: 450px;
    margin: 0 auto;
  }
`;

export default Signup;
