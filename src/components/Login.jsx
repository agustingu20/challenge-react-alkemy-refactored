import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router";
import axios from "axios";

const Login = ({ setToken }) => {
  const history = useHistory();

  return (
    <div className="home-component">
      <h2 className="text-center mb-4 form-title-login">INGRESO DE USUARIO</h2>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            } else if (!values.password) {
              errors.password = "Required";
            } else if (!/^[A-Z0-9._%+-@*]{2,}$/i.test(values.password)) {
              errors.password = "Invalid Password";
            }
            return errors;
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const datos = values;
            const response = await axios.post(
              "http://challenge-react.alkemy.org/",
              datos
            );
            localStorage.setItem("token", JSON.stringify(response.data));
            setToken(response.data);
            history.push("/");
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form className="d-flex justify-content-center flex-column">
              <h4 className="mb-3">Ingrese su email</h4>
              <Field
                className="mb-3"
                type="email"
                name="email"
                placeholder="ejemplo@ejemplo.com"
              />
              <ErrorMessage name="email" component="div" />
              <h4 className="mb-3">Ingrese su contraseña</h4>
              <Field type="password" name="password" placeholder="******" />
              <ErrorMessage name="password" component="div" />
              <button
                className="btn btn-success btn-sm mt-3"
                type="submit"
                disabled={isSubmitting}
              >
                Iniciar sesión
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Login;
