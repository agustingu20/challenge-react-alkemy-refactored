import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../services/superHeroCard.css";
import { useDispatch } from "react-redux";
import { fetchHero } from "../actions";

const SearchForm = ({ setLoad }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="mb-4 text-center mt-5">Búsqueda de héroes</h1>
      <div className="d-flex justify-content-center">
        <Formik
          initialValues={{ hero: "" }}
          validationSchema={Yup.object({
            heroe: Yup.string()
              .min(2, "Must be 2 characters o more")
              .max(30, "Must be 30 characters or less"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const datos = values;
            dispatch(fetchHero(datos.hero));
            setLoad(true);
            resetForm();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <h4>Ingrese el nombre del héroe</h4>
              <Field type="text" id="hero" name="hero" placeholder="Batman" />
              <ErrorMessage name="hero" component="div" />
              <button type="submit" disabled={isSubmitting}>
                Buscar
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SearchForm;
