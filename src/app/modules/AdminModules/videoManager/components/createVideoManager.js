import React, { useState, useEffect } from "react";
import { Formik, Form, FastField } from "formik";
import * as Yup from "yup";
import InputField from "app/components/customField/inputField";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";
import _ from "lodash";

import { useSelector, useDispatch } from "react-redux";
import {
  createVideoAction,
  // deleteVideoAction,
  editVideoAction,
} from "core/redux/actions/videoAction";
import { getQuestionAction } from "core/redux/actions/questionAction";
import AdminTable from "share/adminTable";
import SearchBar from "share/searchBar";

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
function CreateVideoManager({ onToggleDrawer, onEdit }) {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.video);
  const { questionList } = useSelector((state) => state.question);
  const [currentQuestionList, setCurrentQuestionList] = useState([]);
  const [searchQuestionList, setSearchQuestionList] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState("");
  const [txtSearch, setTxtSearch] = useState("");
  const headCells = [
    { id: "STT", label: "STT" },
    { id: "question", label: "Question" },
    { id: "action", label: "Thao tác" },
  ];

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Vui lòng nhập trường này."),
    url: Yup.string().required("Vui lòng nhập trường này."),
    questionList: Yup.array().required("Vui lòng nhập trường này."),
    duration: Yup.number().required("Vui lòng nhập thời lượng video"),
  });
  const initialValues = onEdit
    ? onEdit
    : {
        name: "NLP là gì?",
        url: "https://player.vimeo.com/video/897490048?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
        duration: "843",
        questionList: [],
      };
  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    // xu ly on_edit
    if (questionList && questionList.data && questionList.data.length > 0) {
      if (onEdit) {
        let newQuestionList = _.cloneDeep(questionList.data);
        onEdit.questionList.forEach((question, index) => {
          let i = newQuestionList.findIndex((x) => x._id === question._id);
          if (i !== -1) {
            newQuestionList.splice(i, 1);
          }
        });
        setCurrentQuestionList(newQuestionList);
        setSearchQuestionList(newQuestionList);
        setSelectedQuestion(newQuestionList[0]._id);
      } else {
        setSelectedQuestion(questionList.data[0]._id);
        setCurrentQuestionList(questionList.data);
        setSearchQuestionList(questionList.data);
      }
    }
  }, [questionList, onEdit]);

  useEffect(() => {
    // Iterate through each object in the array
    if (
      currentQuestionList &&
      currentQuestionList.length > 0 &&
      txtSearch !== ""
    ) {
      let results = [];
      currentQuestionList.forEach((obj) => {
        // Iterate through each property of the object
        if (obj.question.toString().includes(txtSearch)) {
          results.push(obj);
        }
      });
      setSearchQuestionList(results);
    }
  }, [txtSearch]);

  const loadData = () => {
    dispatch(getQuestionAction());
  };

  const handleCreateVideo = (data) => {
    dispatch(createVideoAction(data));
  };
  const handleEditVideo = (_id, data) => {
    dispatch(editVideoAction(_id, data));
  };

  const handleCloseDrawer = () => {
    onToggleDrawer && onToggleDrawer();
  };

  const handleAddQuestion = (e, values, setFieldValue) => {
    let newList = values.questionList;
    let i = currentQuestionList.findIndex((x) => x._id === selectedQuestion);
    if (i !== -1) {
      let newCurrentQuestion = _.cloneDeep(currentQuestionList);
      newList.push(newCurrentQuestion[i]);
      newCurrentQuestion.splice(i, 1);
      setSelectedQuestion(newCurrentQuestion[0]._id);
      setCurrentQuestionList(newCurrentQuestion);
      setSearchQuestionList(newCurrentQuestion);
      setFieldValue("questionList", newList);
      setTxtSearch("");
    }
  };
  const handleDeleteQuestion = (question_id, values, setFieldValue) => {
    let newList = values.questionList;
    let i = newList.findIndex((x) => x._id === question_id);
    if (i !== -1) {
      const object = newList[i];
      let newCurrentQuestion = _.cloneDeep(currentQuestionList);
      newCurrentQuestion.push(object);
      newList.splice(i, 1);
      setSelectedQuestion(object._id);
      setCurrentQuestionList(newCurrentQuestion);
      setSearchQuestionList(newCurrentQuestion);
      setFieldValue("questionList", newList);
    }
  };
  const renderNodata = () => {
    return <>Chưa đủ dữ liệu</>;
  };
  const renderData = () => {
    return (
      <div className="admin-video">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // handleCreateQuestion(values);
          }}
        >
          {(formikProps) => {
            const { values, setFieldValue } = formikProps;

            // console.log("values.questionList ", values.questionList);

            return (
              <Form
                className="row"
                style={{
                  maxWidth: "850px",
                  margin: "20px 0",
                }}
              >
                <div className="col-12">
                  <FastField
                    name="name"
                    component={InputField}
                    label="Tên Video"
                    placeholder="Nhập tên"
                    className="w-100 mb-4"
                  />
                </div>
                <div className="col-12">
                  <FastField
                    name="url"
                    component={InputField}
                    label="Link Video"
                    placeholder="Nhập url video"
                    className="w-100 mb-4"
                  />
                </div>

                <div className="col-12">
                  <FastField
                    name="duration"
                    component={InputField}
                    label="Thời lượng video (s)"
                    placeholder="Nhập thời lượng video "
                    className="w-100 mb-4"
                  />
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center mb-3">
                  <SearchBar
                    txtSearch={txtSearch}
                    handleDebouceSearch={(txt) => {
                      setTxtSearch(txt);
                    }}
                  />
                  <ButtonSubmit
                    onClick={(e) => handleAddQuestion(e, values, setFieldValue)}
                    className="ml-3"
                    style={{ minWidth: "150px" }}
                  >
                    Thêm câu hỏi
                  </ButtonSubmit>
                </div>
                <div
                  className="input-select  px-3 py-3  "
                  style={{ height: "200px", overflow: "scroll" }}
                  onChange={(e) => setSelectedQuestion(e.target.value)}
                >
                  {searchQuestionList.map((item, index) => {
                    return (
                      <button
                        key={index}
                        value={item._id}
                        className={`display-block mb-2 p-1 ${
                          selectedQuestion === item._id && "bg-success"
                        }`}
                        // selected={selectedQuestion === item._id ? true : false}
                        onClick={(e) => {
                          setSelectedQuestion(e.target.value);
                        }}
                      >
                        {item.question}
                      </button>
                    );
                  })}
                </div>

                <AdminTable
                  tableHead={headCells}
                  tableData={values.questionList}
                  type="videoManager"
                  view="question"
                  onHandleDelete={(question_id) =>
                    handleDeleteQuestion(question_id, values, setFieldValue)
                  }
                  className="col-12"
                  style={{ minHeight: "300px" }}
                />

                <div className="d-flex col-12 justify-content-end align-items-end">
                  <div className="justify-content-end align-items-end">
                    <ButtonSubmit
                      type="submit"
                      onClick={() =>
                        onEdit
                          ? handleEditVideo(values._id, values)
                          : handleCreateVideo(values)
                      }
                    >
                      Xác nhận
                      {loading && <div className="loader ml-1"></div>}
                    </ButtonSubmit>

                    <ButtonCancel onClick={handleCloseDrawer}>Hủy</ButtonCancel>
                  </div>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    );
  };
  return questionList && questionList.data && questionList.data.length > 0
    ? renderData()
    : renderNodata();
}

export default CreateVideoManager;
