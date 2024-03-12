import * as Yup from "yup";

const registerUserMutation = () => {
  const registerUserchema = [
    {
      key: "1",
      name: "name",
      label: "Full Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Full Name is Required"),
      placeHolder: "Full Name",
      initialValue: "",
      className: "col-span-12",
    },
    {
      key: "2",
      name: "email",
      label: "Email",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Email Name is Required"),
      placeHolder: "Email",
      initialValue: "",
      className: "col-span-12",
    },
    // {
    //   key: "3",
    //   name: "phone",
    //   label: "Phone Number",
    //   type: "number",
    //   required: true,
    //   validationSchema: Yup.string().required("Phone Number is Required"),
    //   placeHolder: "Phone Number",
    //   initialValue: "",
    //   className: "col-span-12",
    // },
    {
      key: "3",
      name: "password",
      label: "Password",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Password is Required"),
      placeHolder: "Password",
      initialValue: "",
      className: "col-span-12",
    },
    // {
    //   key: "5",
    //   name: "confirmPassword",
    //   label: "Confirm Password",
    //   type: "number",
    //   required: true,
    //   validationSchema: Yup.string().required("Confirm Password is Required"),
    //   placeHolder: "Confirm Password",
    //   initialValue: "",
    //   className: "col-span-12",
    // },
    // {
    //   key: "6",
    //   name: "confirmPassword",
    //   label: "Confirm Password",
    //   type: "number",
    //   required: true,
    //   validationSchema: Yup.string().required("Confirm Password is Required"),
    //   placeHolder: "Confirm Password",
    //   initialValue: "",
    //   className: "col-span-12",
    // },
  ];

  const registerUserchemaInitialValue = registerUserchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const registerUserchemaValidation = registerUserchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    registerUserchema,
    registerUserchemaInitialValue,
    registerUserchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { registerUserMutation };
// export type { clientValueType };
