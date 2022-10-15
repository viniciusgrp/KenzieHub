import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/user";
import Api from "../../request";
import Dashboard from "../../styles/Dashboard/style";
import Card from "../../components/CardTech";
import Modal from "../../components/Modal";

function DashboardElem() {
  const { user, loading, checkAuthentication } = useContext(UserContext);

  const token = localStorage.getItem("@TOKEN");

  Api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const { register, handleSubmit, reset } = useForm();

  const [modal, setModal] = useState(false);

  useEffect(() => {
    reset()
  }, [modal])

  async function deleteTech(id) {
    try {
      const deleteTech = await Api.delete(`/users/techs/${id}`);
      checkAuthentication();
      if (deleteTech) {
        toast.success("Tecnologia deletada com sucesso!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Erro ao deletar tecnologia", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  async function createTecnologie(data) {
    try {
      const tech = await Api.post("/users/techs", data);
      checkAuthentication();
      tech.data &&
        toast.success("Tecnologia cadastrada com sucesso!", {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      setModal(false)
      
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar tecnologia", {
        position: "top-right",
        autoClose: 1200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }

  useEffect(() => {
    checkAuthentication();
  }, []);

  if (loading) {
    return (
      <Dashboard>
        <div className="loadingDiv">
          <h1 className="loadingH1">Loading</h1>
        </div>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <Header />
      <section>
        <div className="container">
          <p>Olá {user.name}</p>
          <p className="userModule">{user.course_module}</p>
        </div>
      </section>
      <div className="container tecnologiesHeader ">
        <p>Tecnologias</p>
        <button onClick={() => setModal(true)} className="buttonAdd">
          +
        </button>
      </div>
      <div className="tecnologies">
        {!user.techs.length ? (
          <div className="noTecnologies">
            <p>Você ainda não tem nenhuma tecnologia cadastrada</p>
            <p>Clique no botão + para adicionar</p>
          </div>
        ) : (
          <ul className="listTechnologies">
            {user.techs.map((elem) => (
              <Card elem={elem} deleteTech={deleteTech} />
            ))}
          </ul>
        )}
      </div>
      {modal && <Modal setModal={setModal} handleSubmit={handleSubmit} register={register} createTecnologie={createTecnologie} />}
    </Dashboard>
  );
}

export default DashboardElem;
