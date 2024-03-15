import * as Yup from "yup";

const contactMutation = () => {
  const contactSchema = [
    {
      key: "1",
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Title is Required"),
      placeHolder: "Title",
      initialValue: "",
      className: "  col-span-12",
    },
    {
      key: "2",
      name: "message",
      label: "Message",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Message is Required"),
      placeHolder: "Message",
      multiline: true,
      rows: 4,
      initialValue: "",
      className: "  col-span-12",
    },
  ];

  const contactSchemaInitialValue = contactSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const contactSchemaValidation = contactSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    contactSchema,
    contactSchemaInitialValue,
    contactSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { contactMutation };
// export type { clientValueType };
