import React, { useState } from "react";
import { omit } from "lodash";

const useForm = ({ onSubmit, defaultInputValues }) => {
  const [inputs, setInputs] = useState(defaultInputValues);
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) =>
    new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ).test(email);

  const validateInputs = async () => {
    let newErrors = {};

    for (const input in inputs) {
      const { value, label } = inputs[input];
      if (input === "email" && value && !isValidEmail(value)) {
        newErrors[input] = "Looks like this is not an email";
      }

      if (!value) {
        newErrors[input] = `${label} cannot be empty`;
      }
    }

    setErrors(newErrors);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInputs({
      ...inputs,
      [name]: {
        ...[name],
        value: value,
      },
    });
  };

  //TODO call onSubmit when validation does not fail
  const handleSubmit = (event) => {
    event.preventDefault();
    validateInputs();
  };

  return {
    inputs,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
