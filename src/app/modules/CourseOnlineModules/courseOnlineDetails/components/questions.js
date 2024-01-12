import React from "react";
import { Modal, Box } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
function Question(props) {
  const {
    question,
    selectedOption,
    onOptionChange,
    onSubmit,
    className,
    showModal,
    handleCloseModal,
  } = props;

  const renderOption = () => {
    return (
      <div className="options">
        {question.options.map((option, index) => (
          <div key={index} className="form-check">
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              id={option}
              className="form-check-input"
              required
            />
            <label className="form-check-label" htmlFor={option}>
              {option}
            </label>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Modal
      open={showModal}
      onClose={() => {
        handleCloseModal();
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={{ ...style }}>
        <div className={className}>
          <h3>Question {question.id}</h3>
          <h5 className="mt-2">{question.question}</h5>
          <form onSubmit={onSubmit} className="mt-2 mb-2">
            {renderOption()}
            <button type="submit" className="btn btn-primary mt-2">
              SUBMIT
            </button>
          </form>
        </div>
      </Box>
    </Modal>
  );
}

export default Question;
