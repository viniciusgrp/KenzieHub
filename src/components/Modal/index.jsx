function Modal({setModal, handleSubmit, register, createTecnologie}) {
    return (
        <div className="filterModal">
          <div className="modal">
            <div className="modalHeader">
              <p>Cadastrar tecnologia</p>
              <button id="btnCloseModal" onClick={() => setModal(false)}>X</button>
            </div>
            <form onSubmit={handleSubmit(createTecnologie)}>
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Nome da tecnologia"
                {...register("title")}
              />
              <label htmlFor="status">Selecionar status</label>
              <select name="status" {...register("status")}>
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <button type="submit" className="buttonPrimary">
                Cadastrar tecnologia
              </button>
            </form>
          </div>
        </div>
    )
}


export default Modal