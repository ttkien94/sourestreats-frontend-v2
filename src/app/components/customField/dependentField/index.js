import { FastField } from "formik";
import SelectField from "app/components/customField/selectField";
import { useEffect } from "react";
import { useState } from "react";
const { useFormikContext } = require("formik");

function DependentField(props) {
  const { values } = useFormikContext();
  // const [field, meta] = useField(props);
  const [data, setData] = useState(values?.option || []);

  useEffect(() => {
    //   // set the value of textC, based on textA and textB
    //   // console.log("values.option DependentField", values.option);
    //   // setFieldValue(props.name, values.option);
    setData(values.option);
  }, [values.option]);

  return (
    <>
      {/* <input {...props} {...field} /> */}

      <FastField
        name="answer"
        component={SelectField}
        label="Đáp án đúng"
        placeholder="Chọn đáp án đúng"
        className="w-100 mb-4"
        options={data}
      />

      {/* {!!meta.touched && !!meta.error && <div>{meta.error}</div>} */}
    </>
  );
}

export default DependentField;
