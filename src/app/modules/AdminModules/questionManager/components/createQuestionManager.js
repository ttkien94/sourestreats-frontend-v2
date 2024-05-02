import React from "react";
import { Formik, Form, FastField } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import InputField from "app/components/customField/inputField";

import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

// import { DEFALT_OPTIONS } from "app/components/customField/selectField/options";
import {
  createQuestionAction,
  editQuestionAction,
} from "core/redux/actions/questionAction";
// import { useSelect } from "@mui/base";
import { useSelector } from "react-redux";
// import {
//   FormControlLabel,
//   FormGroup,
//   Radio,
//   RadioGroup,
// } from "@material-ui/core";
const ButtonSubmit = styled(Button)`
  color: #fff;
  background: #3777bc;
  padding: 15px;
  :hover {
    color: #fff;
    background: #3777bc;
  }
`;

const ButtonCancel = styled(Button)`
  color: #adb5bd;
`;
function CreateQuestionManager({ onToggleDrawer, onEdit }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.question);
  const initialValues = onEdit
    ? onEdit
    : {
        question: "",
        options: [
          {
            value: "",
            name: "",
            answer: true,
          },
          {
            value: "",
            name: "",
            answer: false,
          },
          {
            value: "",
            name: "",
            answer: false,
          },
        ],
      };

  const handleCreateQuestion = (question) => {
    dispatch(createQuestionAction(question));
  };
  const handleEditQuestion = (_id, question) => {
    dispatch(editQuestionAction(_id, question));
  };
  const validationSchema = Yup.object().shape({
    question: Yup.string().required("Vui lòng nhập trường này."),
    option: Yup.array().required("Vui lòng nhập trường này."),
    answer: Yup.string().required("Vui lòng nhập trường này."),
  });
  const handleCloseDrawer = () => {
    onToggleDrawer && onToggleDrawer();
  };
  const handleSelected = (e, values, setFieldValue) => {
    const newOption = values.options;
    const index = e.target.value;
    const oldAnswerIndex = newOption.findIndex((x) => x.answer === true);
    if (oldAnswerIndex !== index) {
      newOption[oldAnswerIndex].answer = false;
      newOption[index].answer = true;
    }
    setFieldValue("options", newOption);
  };

  return (
    <div className="admin-question">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          handleCreateQuestion(values);
        }}
      >
        {(formikProps) => {
          const { values, setFieldValue } = formikProps;

          // console.log("values.option", values.option);

          return (
            <div>
              <Form
                className="row "
                style={{
                  maxWidth: "600px",
                  margin: "20px 0",
                }}
              >
                <div className="col-12">
                  <FastField
                    name="question"
                    component={InputField}
                    label="Câu hỏi"
                    placeholder="Nhập tên"
                    className="w-100 mb-4"
                  />
                </div>
                <div className="col-12">
                  {values.options.map((item, index) => {
                    return (
                      <div className="row" key={index}>
                        <div className="col-8">
                          <FastField
                            name={`options[` + index + `].value`}
                            component={InputField}
                            label="Đáp án"
                            placeholder="Nhập đáp án"
                            className="w-100 mb-4"
                          />
                        </div>
                        <div className="col-4 ">
                          <input
                            type="radio"
                            name="answer"
                            value={index}
                            className="radio-button mt-3"
                            checked={item.answer === true}
                            onChange={(e) => {
                              handleSelected(e, values, setFieldValue);
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="col-12 justify-content-end d-flex">
                  <ButtonSubmit
                    type="submit"
                    onClick={() =>
                      onEdit
                        ? handleEditQuestion(values._id, values)
                        : handleCreateQuestion(values)
                    }
                  >
                    Xác nhận
                    {loading && <div className="loader ml-1"></div>}
                  </ButtonSubmit>

                  <ButtonCancel onClick={handleCloseDrawer}>Hủy</ButtonCancel>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}

export default CreateQuestionManager;
