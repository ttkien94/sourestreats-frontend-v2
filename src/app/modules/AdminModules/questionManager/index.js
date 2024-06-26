import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getQuestionAction,
  deleteQuestionAction,
} from "core/redux/actions/questionAction";
import IsLoadingSkeleton from "app/components/loadingSkeleton";
import AdminTable from "share/adminTable";
import { Button } from "@mui/material";
import LPEDrawer from "app/components/drawer";
import CreateQuestionManager from "./components/createQuestionManager";

function ScheduleCourse(props) {
  const LIMIT = 10;
  const headCells = [
    { id: "STT", label: "STT" },
    { id: "question", label: "Question" },
    { id: "options", label: "Options" },
    { id: "answer", label: "Answer" },
    { id: "action", label: "Thao tác" },
  ];
  // const [isFiltered, setIsFiltered] = useState(false);
  // const [dataFilter, setDataFilter] = useState({});
  const [openDrawer, setOpenDrawer] = useState(false);
  const [question, setQuestion] = useState("");
  const { loading, questionList } = useSelector((state) => state.question);
  const dispatch = useDispatch();

  useEffect(() => {
    loadData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadData = (page = 1, dataFilter, isFiltered) => {
    dispatch(getQuestionAction());
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };
  const handleOpenDrawer = (data) => {
    setQuestion(data);
    setOpenDrawer(true);
  };
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  // const onChangePage = (page) => {
  //   loadData(page, dataFilter);
  // };

  // const handleFilter = (filter) => {
  //   setIsFiltered(true);
  //   loadData(1, filter, true);
  //   setDataFilter(filter);
  // };

  const handleDelete = (question_id) => {
    dispatch(deleteQuestionAction(question_id));
  };

  const renderNoData = () => {
    return <div>Khong có dữ liệu</div>;
  };
  const renderData = () => {
    return (
      <AdminTable
        tableHead={headCells}
        tableData={questionList.data}
        view="question"
        onHandleDelete={(question_id) => handleDelete(question_id)}
        handleOpenDrawer={(data) => {
          handleOpenDrawer(data);
        }}
        {...props}
      />
    );
  };
  return loading ? (
    <IsLoadingSkeleton count={LIMIT + 1} />
  ) : (
    <>
      <div className="mb-3">
        <Button
          onClick={() => {
            handleOpenDrawer();
          }}
          variant="contained"
        >
          Thêm câu hỏi
        </Button>
      </div>

      {questionList && questionList.data && questionList.data.length > 0
        ? renderData()
        : renderNoData()}
      {/* Drawer edit screen here */}

      <LPEDrawer
        anchor="left"
        isOpen={openDrawer}
        onToggle={handleCloseDrawer}
        disableScrollLock
      >
        <CreateQuestionManager
          onToggleDrawer={toggleDrawer}
          onEdit={question}
        />
      </LPEDrawer>
    </>
  );
}

export default ScheduleCourse;
