const Modal = ({ image, closeModal }) => {
  return (
    <div>
      <div>
        <button type="button" onClick={closeModal}>
          Close
        </button>
        <img src={`https://image.tmdb.org/t/p/w500${image}`} alt="poster" />
      </div>
    </div>
  );
};

export default Modal;
