import * as Yup from "yup";

const userAddressMutation = ({
  countryOptions,
  stateOptions,
}: {
  countryOptions: any[];
  stateOptions: any[];
}) => {
  const userAddressSchema = [
    {
      key: "1",
      name: "phone",
      label: "Phone Number",
      type: "number",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Phone Number is Required"),
      placeHolder: "Phone Number",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "2",
      name: "alternatePhone",
      label: "Alternative Number",
      type: "number",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Alternative Number is Required"),
      placeHolder: "Alternative Number",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "3",
      name: "houseNo",
      label: "House No.",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("House No. is Required"),
      placeHolder: "House No.",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "4",
      name: "street",
      label: "Street",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Street is Required"),
      placeHolder: "Street",
      initialValue: "",
      // options: countryOptions,
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "5",
      name: "state",
      label: "State",
      type: "select",
      required: true,
      validationSchema: Yup.string().trim().required("State is Required"),
      placeHolder: "State",
      initialValue: "",
      options: stateOptions,
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "6",
      name: "city",
      label: "City",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("City is Required"),
      placeHolder: "City",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "7",
      name: "pinCode",
      label: "Pincode",
      type: "number",
      required: true,
      validationSchema: Yup.string().trim().required("Pincode is Required"),
      placeHolder: "Pincode",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "8",
      name: "landmark",
      label: "Land Mark",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Land Mark is Required"),
      placeHolder: "Land Mark",
      initialValue: "",

      className: " md:col-span-4 col-span-12",
    },
  ];

  const userAddressSchemaInitialValue = userAddressSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const userAddressSchemaValidation = userAddressSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    userAddressSchema,
    userAddressSchemaInitialValue,
    userAddressSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { userAddressMutation };
// export type { clientValueType };
