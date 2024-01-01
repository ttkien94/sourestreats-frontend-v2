import React, { memo } from "react";
import { Box, Table, TableContainer, Paper } from "@mui/material";
import { TableCell, TableRow, TableHead, TableBody } from "@mui/material";

import TableUserList from "./components/tableUserList";
import TableCourseOnlineList from "./components/tableCourseOnlineList";
function AdminTable({ tableHead, tableData, view, ...rest }) {
  const onHandleClick = () => {};
  const onHandleEdit = () => {};

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

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
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
      </Paper>
    </Box>
  );
}

export default memo(AdminTable);
