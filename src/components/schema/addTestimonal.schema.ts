import * as Yup from "yup";

const addTestimonalMutation = () => {
  const addTestimonalSchema = [
    {
      key: "1",
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Title is Required"),
      placeHolder: "Title",
      initialValue: "",
      className: "md:col-span-6 col-span-12",
    },

    {
      key: "2",
      name: "rating",
      label: "Rating",
      type: "number",
      required: true,
      validationSchema: Yup.string().trim().required("Rating is Required"),
      placeHolder: "Rating from 5",
      initialValue: "",

      className: "md:col-span-6 col-span-12",
    },
    // {
    //   key: "4",
    //   name: "photo",
    //   label: "Product Image",
    //   type: "file",
    //   required: true,
    //   validationSchema: Yup.string()
    //     .trim()
    //     .required("Product Image is Required"),
    //   placeHolder: "Customer Image",
    //   initialValue: "",

    //   className: "md:col-span-6 col-span-12",
    // },
    {
      key: "3",
      name: "desc",
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
