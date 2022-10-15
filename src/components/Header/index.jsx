import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Providers/user";
import Header, { HeaderLink } from "../../styles/Header/style";

function HeaderElem() {
  const {setUser} = useContext(UserContext)
  const navigate = useNavigate()

  function exit() {
    localStorage.clear()
    setUser(null)
    navigate('/login')

  }
  return (
    <Header>
      <div className="containerHeader">
        <h1>Kenzie Hub</h1>
        <HeaderLink to={'/login'} onClick={exit}>Sair</HeaderLink>
      </div>
    </Header>
  );
}

export default HeaderElem;
