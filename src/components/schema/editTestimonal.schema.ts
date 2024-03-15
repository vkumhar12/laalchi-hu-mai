import * as Yup from "yup";

const EditTestimonalMutation = ({ testData }: { testData: any }) => {
  const editTestimonalSchema = [
    {
      key: "1",
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Title is Required"),
      placeHolder: "Title",
      initialValue: testData?.title ? testData?.title : "",
      className: "col-span-12",
    },

    {
      key: "2",
      name: "rating",
      label: "Rating",
      type: "number",
      required: true,
      validationSchema: Yup.string().trim().required("Rating is Required"),
      placeHolder: "Rating from 5",
      initialValue: testData?.rating ? testData?.rating : "",

      className: "col-span-12",
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

    //   className: "col-span-12",
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
      initialValue: testData?.desc ? testData?.desc : "",
      className: "col-span-12",
    },
  ];

  const editTestimonalSchemaInitialValue = editTestimonalSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const editTestimonalSchemaValidation = editTestimonalSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    editTestimonalSchema,
    editTestimonalSchemaInitialValue,
    editTestimonalSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { EditTestimonalMutation };
// export type { clientValueType };
