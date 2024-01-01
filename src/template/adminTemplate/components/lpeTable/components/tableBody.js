import React, { memo } from "react";
import { TableRow, TableBody, TableCell } from "@mui/material";

import TableUserList from "./tableUserList";
import TableCourseOnlineList from "./tableCourseOnlineList";

function LPETableBody({
  view,
  dataTable,
  onHandleClick,
  onHandleEdit,
  onOpenDrawer,
  onHandleDelete,
}) {
  return (
    <TableBody>
      {dataTable?.map((item, index) => {
        switch (view) {
          case "user":
            return (
              <TableUserList
                view={view}
                onHandleClick={onHandleClick}
                onHandleEdit={onHandleEdit}
                onOpenDrawer={onOpenDrawer}
                onHandleDelete={onHandleDelete}
                dataItem={item}
              />
            );
          case "course_online":
            return (
              <TableCourseOnlineList
                view={view}
                onHandleClick={onHandleClick}
                onHandleEdit={onHandleEdit}
                onOpenDrawer={onOpenDrawer}
                onHandleDelete={onHandleDelete}
                dataItem={item}
              />
            );
          default:
        }
      })}

      {dataTable.length === 0 && (
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
}

export default memo(LPETableBody);
