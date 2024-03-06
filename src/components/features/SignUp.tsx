import React, { useEffect, useMemo, useState } from "react";
import AuthForm from "../common/AuthForm";
import { Link, useNavigate } from "react-router-dom";
import { FormDataTypes } from "../../types";
import { useAppDispatch } from "../../redux/store";
import { setUserToken } from "../../redux/actions";
import { signUp } from "../../utils/api/user";
import { route } from "../../constants/routes";

export default function SignIn() {
  const dispatch = useAppDispatch();
  const navigate  = useNavigate();

  const initialMessage = useMemo(
    () => ({
      message: "",
      type: "",
    }),
    []
  );

  const [message, setMessage] = useState(initialMessage);

  const onSubmit = (formData: FormDataTypes) => {
    signUp(formData)
      .then((res) => {
        setMessage({ message: "User Sign Up successfullly", type: "success" });
        dispatch(setUserToken(res.data.token));
        navigate(route.dashboard.path)
      })
      .catch((err) =>
        setMessage({ message: err.response.data.error, type: "error" })
      );
  };

  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setMessage(initialMessage);
      }, 2000);
    }
  }, [message, initialMessage]);
  return (
    <>
      {!!message.message && (
        <p
          className={`mt-10 text-center text-sm text-${
            message.type === "success" ? "green" : "red"
          }-800 absolute top-0 right-20`}
        >
          {message.message}
        </p>
      )}

      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign Up to your account
      </h2>
      <AuthForm onSubmit={onSubmit} buttonText="Sign Up" />
      <p className="mt-10 text-center text-sm text-gray-500">
        Already a member?{" "}
        <Link
          to="/sign-in"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          SignIn
        </Link>
      </p>
    </>
  );
}
