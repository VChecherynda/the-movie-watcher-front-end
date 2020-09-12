import React from "react";
import { Formik } from "formik";

import {  Col, Form, Button } from "react-bootstrap";

import Input from "@components/forms/input";
import Select from "@components/forms/select";

import schemaMovie from "@validations/movie";
import { initialData, formInputs } from "@configs/movie";


const Movie = ({ onSubmit }) => (
  <Formik
    validationSchema={schemaMovie}
    onSubmit={onSubmit}
    initialValues={initialData}
  >
    {({
      isValid,
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      touched,
      errors
    }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Form.Row>
          {formInputs.map(element => {
            if (element.type === "text") {
              return (
                <Input
                  id={element.id}
                  key={element.id}
                  title={element.title}
                  name={element.name}
                  value={values[element.name]}
                  placeholder={element.placeholder}
                  touched={touched[element.name]}
                  error={errors[element.name]}
                  changed={handleChange}
                  blured={handleBlur}
                />
              );
            }

            if (element.type === "select") {
              return (
                <Select
                  id={element.id}
                  key={element.id}
                  title={element.title}
                  name={element.name}
                  value={values[element.name]}
                  placeholder={element.placeholder}
                  options={element.options}
                  touched={touched[element.name]}
                  error={errors[element.name]}
                  changed={handleChange}
                  blured={handleBlur}
                />
              );
            }
          })}

          <Form.Group as={Col} md="12">
            <Button disabled={!isValid} type="submit">
              Add movie
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    )}
  </Formik>
);

export default Movie;