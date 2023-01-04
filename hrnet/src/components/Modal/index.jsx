import "./style.scss";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>CONFIRMATION</h2>
      <p>Your employee has been well recorded !</p>
      <button className="modal-div" onClick={props.onclick}>
        close
      </button>
    </div>
  );
};

export default Modal;
