import "./style.scss";

const Modal = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-window">
        <h2>CONFIRMATION</h2>
        <p>Your employee has well been recorded !</p>
        <button className="modal-btn" onClick={props.onclick}>
          CLOSE
        </button>
      </div>
    </div>
  );
};

export default Modal;
