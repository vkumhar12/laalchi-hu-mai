import * as Yup from "yup";

const updateProfileMutation = () => {
  const updateProfileSchema = [
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
  ];

  const updateProfileSchemaInitialValue = updateProfileSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const updateProfileSchemaValidation = updateProfileSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    updateProfileSchema,
    updateProfileSchemaInitialValue,
    updateProfileSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { updateProfileMutation };
// export type { clientValueType };
