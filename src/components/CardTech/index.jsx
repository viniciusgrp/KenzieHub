import uuid from 'react-uuid';
import { BsTrash } from "react-icons/bs"

function Card({elem, deleteTech}) {
  return (
    <li key={uuid()}>
      <p>{elem.title}</p>
      <div className="techRight">
        <span>{elem.status}</span>
        <button
          id={elem.id}
          onClick={(event) => deleteTech(event.currentTarget.id)}
          className="techRemove"
        >
          <BsTrash />
        </button>
      </div>
    </li>
  );
}

export default Card