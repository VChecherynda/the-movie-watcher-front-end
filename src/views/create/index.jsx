import React from "react";
import { Link } from "react-router-dom";
import { Formik } from "formik";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Header from "@components/header";
import Input from "@components/forms/input";
import Select from "@components/forms/select";

import schemaMovie from "@validations/movie";
import { initialData, formInputs } from "@configs/movie";

import { defaultTypes, types } from "./types";
import withHooks from "./withHooks";

const Create = ({ handleCreate }) => (
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
            enableReinitialize
            validationSchema={schemaMovie}
            onSubmit={handleCreate}
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
        </Col>
      </Row>
    </Container>
  </>
);

Create.defaultProps = defaultTypes;
Create.propTypes = types;

export default withHooks(Create);
