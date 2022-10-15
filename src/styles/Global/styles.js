import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;500;600&display=swap');

    :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    --color-grey-4: #121214;
    --color-grey-3: #212529;
    --color-grey-2: #343B41;
    --color-grey-1: #868E96;
    --color-grey-0: #F8F9FA;

    --color-success: #3FE864;
    --color-negative: #E83F5B;
    }

    body {
    font-family: 'Inter', sans-serif;
    }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  .title-1 {
      font-size: 18px;
    }
    
    .title-2 {
      font-size: 16px;
    }
    
    .title-3 {
      font-size: 14px;
    }
    
    .text {
      font-size: 12px;
    }
    
    .text-bold {
      font-size: 12px;
      font-weight: bold;
    }
    
    .text-italic {
      font-size: 12px;
      font-style: italic;
    }

    .buttonPrimary {
      background-color: var(--color-primary);
      width: 80%;
      border: none;
      padding: 20px;
      border-radius: 4px;
      color: var(--color-grey-0);
      font-size: 16px;
  }
    .buttonPrimary:hover {
      background-color: var(--color-primary-focus);
  }
  .buttonGrey {
    background-color: var(--color-grey-1);
    color: white;
    border-radius: 4px;
  }

  .buttonGrey:hover {
      background-color: var(--color-grey-2);
  }

  button {
    cursor: pointer;
  }
    `;

export default Global;
