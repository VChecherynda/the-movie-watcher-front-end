import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Header from "@components/header";
import Input from "@components/forms/input";

import schemaMovie from "@validations/movie";
import { initialData, formInputs } from "@configs/movie";

const Create = () => {
  return (
    <>
      <Header />

      <Container>
        <Row className="mb-4">
          <Col>
            <Link to="/">
              <Button>Back</Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col>
            <Formik
              validationSchema={schemaMovie}
              onSubmit={console.log}
              initialValues={initialData}
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                errors
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Row>
                    {formInputs.map(input => (
                      <Input
                        id={input.id}
                        key={input.id}
                        title={input.title}
                        name={input.name}
                        value={values[input.name]}
                        touched={touched[input.name]}
                        error={errors[input.name]}
                        changed={handleChange}
                        blured={handleBlur}
                      />
                    ))}

                    <Form.Group as={Col} md="12">
                      <Button type="submit">Add movie</Button>
                    </Form.Group>
                  </Form.Row>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Create;
