import styled from "styled-components";

const Dashboard = styled.div`
  .loadingDiv {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .loadingH1 {
    color: #ffffff;
  }
  section {
    box-shadow: 0px 1px 5px rgba(255, 255, 255, 0.3);
  }

  .container {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: space-between;
    margin: 0 auto;
    padding: 45px 0;
  }

  p {
    color: var(--color-grey-0);
  }

  .userModule {
    color: var(--color-grey-1);
  }

  .inWork {
    display: none;
  }

  .tecnologiesHeader {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .buttonAdd {
    width: 32px;
    height: 32px;
    font-size: 22px;
    background-color: var(--color-grey-3);
    color: var(--color-grey-0);
    border: transparent;
  }

  .tecnologies {
    width: 90%;
    margin: 0 auto;
    background-color: var(--color-grey-2);
    border-radius: 8px;
    padding: 10px;

    .noTecnologies {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: var(--color-grey-3);
      padding: 5px;
      text-align: center;
    }
  }

  .filterModal {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .modal {
      width: 90%;
      background-color: var(--color-grey-3);
      border-radius: 8px;
    }

    .modalHeader {
      display: flex;
      justify-content: space-between;
      padding: 15px 20px;
      background-color: var(--color-grey-2);
      border-radius: 8px 8px 0 0;
    }

    form {
      padding: 20px 10px;
      display: flex;
      flex-direction: column;

      label {
        color: var(--color-grey-1);
        margin-bottom: 15px;
      }

      input {
        padding: 15px;
        border-radius: 5px;
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-0);
        margin-bottom: 15px;
        color: var(--color-grey-1);
      }

      select {
        padding: 15px;
        border-radius: 5px;
        background-color: var(--color-grey-2);
        border: 1px solid var(--color-grey-0);
        margin-bottom: 15px;
        color: var(--color-grey-1);
      }

      .buttonPrimary {
        margin-top: 10px;
        width: 100%;
      }
    }

  }

  #btnCloseModal {
    background-color: transparent;
    color: var(--color-grey-1);
    border: none;
  }
  .listTechnologies {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      list-style: none;

      li {
        background-color: var(--color-grey-3);
        width: 100%;
        padding: 10px 15px;
        border-radius: 8px;
        display: flex;
        justify-content: space-between;

        span {
          color: var(--color-grey-1);
        }
        .techRemove {
          display: none;
        }
      }
    }

  @media screen and (min-width: 768px) {
    .container {
      width: 70%;
      flex-direction: row;
    }

    .inWork {
      display: flex;
      flex-direction: column;
      width: 70%;
      margin: 0 auto;
      gap: 1rem;
      padding: 35px 0;

      .inDevelopment {
        color: var(--color-grey-1);
      }
    }

    .tecnologies {
      width: 70%;
    }

    .listTechnologies {

      li {


        .techRight {
          display: flex;
          gap: 1rem;
        }
        .techRemove {
          display: block;
          background-color: transparent;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--color-grey-0);
        }


      }
    }

    .modal {
      max-width: 400px;
    }
  }
`;

export default Dashboard;
