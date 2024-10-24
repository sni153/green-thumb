/* eslint-disable react/prop-types */
import { useState } from "react";
import Field from "./Field";

const AuthForm = (props) => {
  const { fields, submitButtonText } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }
    return initialState;
  });

  return (
    <form className="m-4 p-4 bg-white border border-slate-300 rounded-lg font-lato">
      {fields.map((field) => (
        <Field
          label={field.label}
          type={field.type}
          key={field.label}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="w-full text-white rounded-lg bg-emerald-700 py-2 mt-4">
        {submitButtonText}
      </button>
    </form>
  );
};

export default AuthForm;
