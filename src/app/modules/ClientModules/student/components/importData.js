import React, { useState } from "react";
import { ExcelRenderer, OutTable } from "./outTable";
function ImportData(props) {
  const [table, setTable] = useState([]);
  const fileHandler = (event) => {
    let fileObj = event.target.files[0];
    //just pass the fileObj as parameter
    ExcelRenderer(fileObj, (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let res = [];

        Object.keys(resp.rows).map((propKey) => {
          let array = [];
          Object.keys(resp.rows[propKey]).map((childPropKey) => {
            let obj = {};
            let key = resp.rows[0][childPropKey];
            let value = resp.rows[propKey][childPropKey];
            obj[key] = value;
            array.push(obj);
          });
          res[propKey] = array;
        });
        setTable(res);
      }
    });
  };
  return (
    <div className="row">
      <div className="mt-3">
        <h3>Nhập dữ liệu học viên</h3>
        <input type="file" onChange={(e) => fileHandler(e)} className="my-3" />
        <p>Kiểm tra trùng học viên, xóa dòng học viên</p>
        <OutTable
          data={table}
          tableClassName="ExcelTable2007"
          tableHeaderRowClass="tableHeaderRowClass"
          // withZeroColumn={true}
          // withoutRowNum={true}
          // withZeroColumn={true}
          tableHeader="tableHeader"
        />
      </div>
    </div>
  );
}

export default ImportData;
