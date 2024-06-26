import React, { useEffect, useState } from "react";
function Quiz(props) {
  const [step, setStep] = useState(0);
  const [quizs, setQuizs] = useState([]);
  const [pharse, setPharse] = useState({});
  const [question, setQuestion] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [error, setError] = useState("");
  const [count, setCount] = useState(0);
  const showQuiz = true;
  useEffect(() => {
    handleReset();
  }, [props.video]);

  const handleReset = () => {
    console.log("handleReset", props.video, props.pharse);
    setStep(0);
    setQuizs(props.video.questionList);
    setQuestion(props.video.questionList[0]);
    setQuestionIndex(0);
    // setSelectedAnswer([]);
    setError("");
    setSelectedAnswer(props.video.answerList);
    setPharse(props.pharse);
    setCount(props.pharse?.videoList?.filter((item) => item.answerList).length); // 6
  };
  const handleQuestion = (type) => {
    if (type === "pre") {
      setQuestionIndex(questionIndex - 1);
      setQuestion(props.video.questionList[questionIndex - 1]);
    } else if (selectedAnswer?.length > questionIndex) {
      setQuestionIndex(questionIndex + 1);
      setQuestion(props.video.questionList[questionIndex + 1]);
      setError("");
    } else {
      setError("Bạn chưa chọn đáp án");
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer?.length > questionIndex) {
      props?.handleSendAnswer(selectedAnswer);
      setStep(1);
    } else {
      setError("Bạn chưa chọn đáp án");
    }
  };
  const renderQuestion = () => {
    return (
      <>
        <div className="d-flex justify-content-between gap-md-3">
          <h5 className="mb-2 fs-normal lh-base text-white">
            {question?.question}
          </h5>
          <h5
            style={{
              color: "#60d600",
              width: "100px",
              textAlign: "right",
            }}
          >
            {quizs.indexOf(question) + 1} / {quizs?.length}
          </h5>
        </div>
        {error && <p className="text-danger ">{error}</p>}
        <div>
          {question?.options?.length > 0 &&
            question?.options?.map((item, index) => (
              <button
                key={index}
                className={`option w-100 text-start text-white py-2 px-3 mt-3 rounded btn btn-dark
                        ${
                          selectedAnswer[questionIndex]?.value === item.value &&
                          "bg-success"
                        }`}
                onClick={(event) => {
                  let newAnswer = [...selectedAnswer];
                  newAnswer[questionIndex] = question.options[index];
                  setSelectedAnswer(newAnswer);
                }}
                // disabled={correctAnswer !== -1 ? true : false}
              >
                {item.value}
              </button>
            ))}
        </div>

        {questionIndex + 1 !== quizs.length ? (
          <div className="mt-3 d-flex justify-content-center">
            {questionIndex !== 0 && (
              <button
                className="btn py-2 w-25 mr-5 bg-primary text-light fw-bold"
                onClick={() => handleQuestion("pre")}
                disabled={!selectedAnswer}
              >
                Câu hỏi Trước
              </button>
            )}
            <button
              className="btn py-2 w-25  bg-primary text-light fw-bold"
              onClick={() => handleQuestion("next")}
              disabled={!selectedAnswer}
            >
              Câu hỏi tiếp theo
            </button>
          </div>
        ) : (
          <>
            <button
              className="btn py-2 w-100 mt-3 bg-primary text-light fw-bold"
              onClick={handleSubmitAnswer}
            >
              Hoàn Thành & Xem Kết Quả
            </button>
          </>
        )}
      </>
    );
  };
  const renderResult = () => {
    return (
      <div>
        <div
          className="title-h2 text-center mb-3"
          style={{ color: "rgb(0, 171, 85)" }}
        >
          Chúc mừng bạn đã đúng {count + 1}/{quizs?.length} câu
        </div>
        {quizs?.length > 0 &&
          quizs.map((items, index) => {
            return (
              <div className="mb-5" key={items._id}>
                <div className=" d-flex align-items-start">
                  <p className="text-white title-h2">
                    <span
                      style={{
                        color: "#60d600",
                      }}
                      className="title-h2 mr-3"
                    >
                      {index + 1}/
                    </span>
                    {items.question}
                  </p>
                </div>
                {items.options?.length > 0 &&
                  items.options.map((item2, index2) => {
                    return (
                      <div
                        className={`option w-100 text-start text-white py-2 px-3 mt-3 rounded btn btn-dark
                    ${
                      selectedAnswer[index]?.value === item2.value &&
                      item2.answer !== true &&
                      "bg-danger"
                    } 
                    ${item2.answer === true && "bg-success"} 
                    `}
                        key={index2}
                      >
                        {item2.value}
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    );
  };
  return (
    <section
      className="bg-dark text-white quiz"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row min-vh-100 align-items-center justify-content-center py-5">
          <div className="col-lg-8">
            <div
              className="card p-4"
              style={{ background: "#3d3d3d", borderColor: "#646464" }}
            >
              {step === 0 ? renderQuestion() : renderResult()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quiz;
