import React from "react";
import { Modal, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "100%",
  bgcolor: "#282C38",
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
    video,
  } = props;
  console.log(video);
  const { t } = useTranslation("common");
  const [selected, setSelected] = useState();
  const videoName = video.name;
  const length = video.question.length;
  const handlePreQuestion = (e) => {
    onSubmit(e, "pre");
  };
  const handleNextQuestion = (e) => {
    onSubmit(e, "next");
  };
  const handleSelected = (option) => {
    // selectedOption === option;
  };
  const renderOption = () => {
    console.log("selectedOption", selectedOption);

    return (
      <div className="options ">
        {question.options.map((option, index) => (
          <div
            key={index}
            className="form-check d-flex justify-content-between  custom-cursor-on-hover"
            onClick={() => {
              onOptionChange(option);
            }}
          >
            <label className="form-check-label" htmlFor={option}>
              {option}
            </label>
            <input
              type="radio"
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={(e) => {
                console.log("option", option);
                onOptionChange(e);
              }}
              id={option}
              className="form-check-input"
              required
            />
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
        <div className={`container ${className}`}>
          <div className="row">
            <div className="col-3 flex-alignitem">
              <button
                onClick={(e) => handlePreQuestion(e)}
                className="button pre-button"
              >
                {t("pre_question")}
              </button>
            </div>
            <div className="col-6">
              <h2 className="justify-content-center d-flex question-title mt-4">
                {videoName}
              </h2>
              <div className="process-bar"></div>
              <p className="question-length">
                Question {question.id}
                <span className="text-secondary">/{length}</span>
              </p>
              <hr style={{ borderTopColor: "lightgray" }} />
              <p className="mt-2 question-title">{question.question}</p>
              {renderOption()}
              {/* <form onSubmit={onSubmit} className="mt-2 mb-2">
               
                <button type="submit" className="btn btn-primary mt-2">
                  SUBMIT
                </button>
              </form> */}
            </div>
            <div className="col-3 flex-alignitem">
              <button
                onClick={(e) => handleNextQuestion(e)}
                className="button next-button "
              >
                {t("next_question")}
              </button>
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
}

export default Question;
