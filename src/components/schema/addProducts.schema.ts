import * as Yup from "yup";

const addProductMutation = () => {
  const addProductSchema = [
    {
      key: "1",
      name: "name",
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
      name: "productCode",
      label: "Product Code",
      type: "text",
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Product Code is Required"),
      placeHolder: "Select Product",
      initialValue: "",

      className: " md:col-span-4 col-span-12",
    },
    {
      key: "3",
      name: "mrp",
      label: "MRP",
      type: "number",
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
      type: "number",
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
      name: "quality",
      label: "Quality",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Quality is Required"),
      placeHolder: "Quality",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "6",
      name: "color",
      label: "Color",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Color is Required"),
      placeHolder: "Color",
      initialValue: "",
      className: " md:col-span-4 col-span-12",
    },
    {
      key: "7",
      name: "productImage",
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
      key: "8",
      name: "desc",
      label: "Product Description",
      type: "text",
      multiLine: true,
      rows: 4,
      required: true,
      validationSchema: Yup.string()
        .trim()
        .required("Product Description is Required"),
      placeHolder: "Product Description",
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
