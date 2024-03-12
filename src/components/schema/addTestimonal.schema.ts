import * as Yup from "yup";

const addTestimonalMutation = () => {
  const addTestimonalSchema = [
    {
      key: "1",
      name: "customerName",
      label: "Customer Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Customer Name is Required"),
      placeHolder: "Customer Name",
      initialValue: "",
      className: "md:col-span-6 col-span-12",
    },

    {
      key: "2",
      name: "productNameCategory",
      label: "Product Name/Category",
      type: "text",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Product Name/Category is Required"),
      placeHolder: "Product Name/Category",
      initialValue: "",

      className: " md:col-span-6 col-span-12",
    },

    {
      key: "3",
      name: "date",
      label: "Date",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Date is Required"),
      placeHolder: "Date",
      initialValue: "",
      className: " md:col-span-6 col-span-12",
    },
    {
      key: "4",
      name: "photo",
      label: "Customer Image",
      type: "file",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Customer Image is Required"),
      placeHolder: "Customer Image",
      initialValue: "",

      className: "md:col-span-4 col-span-12",
    },
    {
      key: "5",
      name: "testimonialContent",
      label: "Testimonial Content",
      type: "text",
      multiLine: true,
      rows: 4,
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Testimonial Content is Required"),
      placeHolder: "Testimonial Content",
      initialValue: "",
      className: "col-span-12",
    },
  ];

  const addTestimonalSchemaInitialValue = addTestimonalSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const addTestimonalSchemaValidation = addTestimonalSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    addTestimonalSchema,
    addTestimonalSchemaInitialValue,
    addTestimonalSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { addTestimonalMutation };
// export type { clientValueType };
