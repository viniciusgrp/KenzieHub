import Routes from "./Routes";
import Global from "./styles/Global/styles";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./Providers/user";

function App() {
  return (
    <>
      <Global />
      <ToastContainer limit={2} />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
}

export default App;
