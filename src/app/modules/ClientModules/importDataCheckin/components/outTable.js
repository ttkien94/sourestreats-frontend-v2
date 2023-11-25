import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import * as XLSX from "xlsx";

export function OutTable(props) {
  return (
    <div className={props.className}>
      <table className={props.tableClassName}>
        {/**
    <tbody>
          <tr className={props.tableHeader || ""}>
            {props.withZeroColumn && !props.withoutRowNum && (
              <th className={props.tableHeaderRowClass || ""}></th>
            )}
            {props.columns.map((c) => (
              <th
                key={c.key}
                className={c.key === -1 ? props.tableHeaderRowClass : ""}
              >
                {c.key === -1 ? "" : c.name}
              </th>
            ))}
          </tr>
          {props.data.map((r, i) => (
            <tr key={i}>
              {!props.withoutRowNum && (
                <td key={i} className={props.tableHeaderRowClass}>
                  {props.renderRowNum ? props.renderRowNum(r, i) : i}
                </td>
              )}
              {props.columns.map((c) => (
                <td key={c.key}>{r[c.key]}</td>
              ))}
              <td>
                <QRCodeCanvas value={r[1]} />
              </td>
            </tr>
          ))}
        </tbody>
    */}

        <tbody>
          {props.data.map((r, i) => {
            console.log("r:", r[1].cccd, i);
            return (
              <tr key={i}>
                {r.map((item, idx) => {
                  return (
                    <td className="tableHeaderRowClass" key={idx}>
                      {item.STT && item.STT}
                      {item.cccd && item.cccd}
                      {item.name && item.name}
                      {item.email && item.email}
                      {item.sdt && item.sdt}
                      {item.gender && item.gender}
                      {item.birthday && item.birthday}
                      {item.job && item.job}
                      {item.course && item.course}
                      {item.old_student && item.old_student}
                    </td>
                  );
                })}
                {i === 0 ? (
                  <td className={props.tableHeaderRowClass}>QR Code</td>
                ) : (
                  <td className={props.tableHeaderRowClass}>
                    <QRCodeCanvas value={r[1].cccd} />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export function ExcelRenderer(file, callback) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    var rABS = !!reader.readAsBinaryString;
    reader.onload = function (e) {
      /* Parse data */
      var bstr = e.target.result;
      var wb = XLSX.read(bstr, { type: rABS ? "binary" : "array" });

      /* Get first worksheet */
      var wsname = wb.SheetNames[0];
      var ws = wb.Sheets[wsname];

      /* Convert array of arrays */
      var json = XLSX.utils.sheet_to_json(ws, { header: 1 });
      var cols = make_cols(ws["!ref"]);

      var data = { rows: json, cols: cols };

      resolve(data);
      return callback(null, data);
    };
    if (file && rABS) reader.readAsBinaryString(file);
    else reader.readAsArrayBuffer(file);
  });
}

function make_cols(refstr) {
  var o = [],
    C = XLSX.utils.decode_range(refstr).e.c + 1;
  for (var i = 0; i < C; ++i) {
    o[i] = { name: XLSX.utils.encode_col(i), key: i };
  }
  return o;
}
