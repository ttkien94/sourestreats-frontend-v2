import React, { memo } from "react";
import { Box, Table, TableContainer, Paper } from "@mui/material";
import { TableCell, TableRow, TableHead, TableBody } from "@mui/material";

import TableUserList from "./components/tableUserList";
import TableQuestionList from "./components/tableQuestionList";
import TableVideoList from "./components/tableVideoList";
import TableCourseOnlineList from "./components/tableCourseOnlineList";
import TableScheduleCourseOnline from "./components/tableScheduleCourseOnline";

function AdminTable({ tableHead, tableData, view, ...rest }) {
  // const onHandleClick = () => {};
  // const onHandleEdit = () => {};
  const renderHeader = () => {
    return (
      <TableHead>
        <TableRow>
          {tableHead.map((item) => {
            return <TableCell key={item.id}>{item.label}</TableCell>;
          })}
        </TableRow>
      </TableHead>
    );
  };

  const renderBody = () => {
    return (
      <TableBody>
        {view === "user" &&
          tableData.map((item, index) => {
            return (
              <TableUserList
                view={view}
                dataItem={item}
                key={index}
                {...rest}
              />
            );
          })}

        {view === "question"
          ? tableData.map((item, index) => {
              return (
                <TableQuestionList
                  view={view}
                  dataItem={item}
                  index={index}
                  {...rest}
                />
              );
            })
          : null}

        {view === "course_online"
          ? tableData.map((item, index) => {
              return (
                <TableCourseOnlineList
                  view={view}
                  dataItem={item}
                  key={index}
                  {...rest}
                />
              );
            })
          : null}
        {view === "scheduleCourseOnline"
          ? tableData.map((item, index) => {
              return (
                <TableScheduleCourseOnline
                  view={view}
                  dataItem={item}
                  key={index}
                  {...rest}
                />
              );
            })
          : null}
        {tableData.length === 0 && (
          <TableRow
            style={{
              height: 70,
            }}
          >
            <TableCell>
              <p className="text-center">Danh sách rỗng</p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    );
  };
  //   <TableContainer>
  //   <Table
  //     sx={{ minWidth: 750 }}
  //     aria-labelledby="tableTitle"
  //     size={"medium"}
  //   >
  //     {renderHeader()}
  //     {renderBody()}
  //   </Table>
  // </TableContainer>
  return (
    <Box sx={{ width: "100%", ...rest.style }} className={rest.className}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        {view === "video" ? (
          tableData.map((pharse, index) => {
            return (
              <div key={index}>
                <div className="title-h2 mt-5">{pharse.pharse}</div>
                {pharse.videoList.length > 0 ? (
                  <TableContainer>
                    <Table
                      sx={{ minWidth: 750 }}
                      aria-labelledby="tableTitle"
                      size={"medium"}
                    >
                      {renderHeader()}
                      {pharse.videoList.map((video, idx) => {
                        return (
                          <TableVideoList
                            pharse={pharse}
                            view={view}
                            dataItem={video}
                            index={idx}
                            {...rest}
                          />
                        );
                      })}
                    </Table>
                  </TableContainer>
                ) : (
                  <div className="title-h3">Chưa có video</div>
                )}
              </div>
            );
          })
        ) : (
          <TableContainer>
            <Table
              sx={{ minWidth: 750 }}
              aria-labelledby="tableTitle"
              size={"medium"}
            >
              {renderHeader()}
              {renderBody()}
            </Table>
          </TableContainer>
        )}
      </Paper>
    </Box>
  );
}

export default memo(AdminTable);
