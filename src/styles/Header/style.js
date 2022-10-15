import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  margin-top: 0px;
  height: 100px;
  box-shadow: 0px 1px 10px rgba(255, 255, 255, 0.2);

  .containerHeader {
    height: 100%;
    margin: 0 auto;
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    color: var(--color-primary);
  }

  button {
    padding: 10px 20px;
  }

  @media screen and (min-width: 768px) {
    .containerHeader {
      width: 70%;
    }
  }
`;

export const HeaderLink = styled(Link)`
  background-color: var(--color-grey-3);
  color: var(--color-grey-1);
  border-radius: 4px;
  text-decoration: none;
  padding: 10px 20px;
`;

export default Header;
