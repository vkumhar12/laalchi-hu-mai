import * as Yup from "yup";

const addProductMutation = () => {
  const addProductSchema = [
    {
      key: "1",
      name: "productName",
      label: "Product Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Product Name is Required"),
      placeHolder: "Product Name",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },

    {
      key: "2",
      name: "selectProduct",
      label: "Select Product",
      type: "select",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Select Product is Required"),
      placeHolder: "Select Product",
      initialValue: "",
      options: [
        {
          label: "Nike",
          value: "nike",
        },
        {
          label: "Addidas",
          value: "addidas",
        },
        {
          label: "Puma",
          value: "puma",
        },
        {
          label: "Reebook",
          value: "reebok",
        },
      ],
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "3",
      name: "mrp",
      label: "MRP",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("MRP is Required"),
      placeHolder: "MRP",
      initialValue: "",
      //   options: countryOptions,
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "4",
      name: "sellingPrice",
      label: "Selling Price",
      type: "text",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Selling Price is Required"),
      placeHolder: "Selling Price",
      initialValue: "",
      //   options: stateOptions,
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "5",
      name: "quantity",
      label: "Quantity",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("City is Required"),
      placeHolder: "City",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "6",
      name: "photo",
      label: "Product Photo",
      type: "file",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Product Photo is Required"),
      placeHolder: "Product Photo",
      initialValue: "",

      className: "md:col-span-4 col-span-12",
    },
    {
      key: "7",
      name: "desc",
      label: "Product Description",
      type: "text",
      multiLine: true,
      rows: 4,
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Product Description is Required"),
      placeHolder: "Pincode",
      initialValue: "",
      className: "col-span-12",
    },
  ];

  const addProductSchemaInitialValue = addProductSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const addProductSchemaValidation = addProductSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    addProductSchema,
    addProductSchemaInitialValue,
    addProductSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { addProductMutation };
// export type { clientValueType };
