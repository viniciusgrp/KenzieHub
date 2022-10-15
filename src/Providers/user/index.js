import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../request";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function login(data) {
    const body = {
      email: data.email,
      password: data.password,
    };

    function showToast() {
      toast.success("Login realizado com sucesso", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    try {
      const response = await Api.post("/sessions", body);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      setUser(response.data.user);
      showToast();
      response.data && navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao fazer login.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async function signup(data) {
    const body = {
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.module,
    };

    function success(data) {
      const loginData = {
        email: data.email,
        password: data.password,
      };
      login(loginData);
      toast.success("Registro realizado com sucesso", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    try {
      const resp = (await Api.post("/users", body))
      resp.data  ? success(body)
        : toast("Erro ao cadastrar.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    } catch (error) {
      console.log(error);
      let message;
      if (error.response.data.message == "Email already exists") {
        message = "Email já cadastrado"
      }
      toast.error(message || 'Erro ao cadastrar', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async function checkAuthentication() {
    try {
      const token = localStorage.getItem("@TOKEN");

      const authentication = await Api.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (authentication.data) {
        setUser(authentication.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      navigate("/login");
    }
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, login, loading, checkAuthentication, signup }}
    >
      {children}
    </UserContext.Provider>
  );
};
