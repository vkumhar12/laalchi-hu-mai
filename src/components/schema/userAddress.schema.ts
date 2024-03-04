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
      name: "firstName",
      label: "First Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("First Name is Required"),
      placeHolder: "First Name",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "2",
      name: "phoneNumber",
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
      key: "3",
      name: "address",
      label: "Address",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Address is Required"),
      placeHolder: "Address",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "4",
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      validationSchema: Yup.string().trim().required("Country is Required"),
      placeHolder: "Country",
      initialValue: "",
      options: countryOptions,
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
      name: "pincode",
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
      name: "addressType",
      label: "Address Type",
      type: "select",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Address Type is Required"),
      placeHolder: "Address Type",
      initialValue: "",
      options: [
        {
          value: "work",
          label: "Work",
        },
        {
          value: "home",
          label: "Home",
        },
        {
          value: "other",
          label: "Other.",
        },
      ],
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
