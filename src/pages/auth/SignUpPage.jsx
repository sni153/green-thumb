import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../services/user";

const SignUpPage = () => {
  const [error, setError] = useState("");
  return (
    <FormContainer>
      <div className="text-red-700 font-lato>">{error}</div>
      <AuthForm
        fields={[
          {
            label: "username",
            type: "text",
          },
          {
            label: "password",
            type: "password",
          },
          {
            label: "confirm password",
            type: "password",
          },
        ]}
        submitButtonText="create an account"
        onSubmit={async (values) => {
          if (values.username.length < 4) {
            setError("username too short");
            return;
          }
          if (values.password.length < 4) {
            setError("password too short");
            return;
          }
          if (values.password !== values["confirm password"]) {
            setError("passwords do not match");
            return;
          }
          const response = await userService.createUser({
            username: values.username,
            password: values.password,
          });

          if (response.status === 201) {
            setError("");
          } else {
            const data = await response.json();
            setError(data.error);
          }
        }}
      />
      <Link to="/" className="text-sm text-green-600 underline">
        sign in
      </Link>
    </FormContainer>
  );
};
export default SignUpPage;
