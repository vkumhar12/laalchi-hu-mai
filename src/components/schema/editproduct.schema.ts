import * as Yup from "yup";

const editProductMutation = ({ productData }: { productData: any }) => {
  const editProductSchema = [
    {
      key: "1",
      name: "name",
      label: "Product Name",
      type: "text",
      required: true,
      validationSchema: Yup.string().required("Product Name is Required"),
      placeHolder: "Product Name",
      initialValue: productData?.name ? productData?.name : "",
      className: "  col-span-12",
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
      placeHolder: "Product Code",
      initialValue: productData?.productCode ? productData?.productCode : "",

      className: "col-span-12",
    },
    {
      key: "3",
      name: "mrp",
      label: "MRP",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("MRP is Required"),
      placeHolder: "MRP",
      initialValue: productData?.mrp ? productData?.mrp : "",
      //   options: countryOptions,
      className: "  col-span-12",
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
      initialValue: productData?.sellingPrice ? productData?.sellingPrice : "",
      //   options: stateOptions,
      className: "  col-span-12",
    },
    {
      key: "5",
      name: "quality",
      label: "Quality",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Quality is Required"),
      placeHolder: "Quality",
      initialValue: productData?.quality ? productData?.quality : "",
      className: "col-span-12",
    },
    {
      key: "6",
      name: "color",
      label: "Color",
      type: "text",
      required: true,
      validationSchema: Yup.string().trim().required("Color is Required"),
      placeHolder: "Color",
      initialValue: productData?.color ? productData?.color : " ",
      className: "col-span-12",
    },
    // {
    //   key: "6",
    //   name: "photo",
    //   label: "Product Photo",
    //   type: "file",
    //   required: true,
    //   validationSchema: Yup.string()
    //     .trim()
    //     .required("Product Photo is Required"),
    //   placeHolder: "Product Photo",
    //   initialValue:  "",

    //   className: " col-span-12",
    // },
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
      placeHolder: "Product Description",
      initialValue: productData?.desc ? productData?.desc : "",
      className: "col-span-12",
    },
  ];

  const editProductSchemaInitialValue = editProductSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue?.name] = currentValue.initialValue;
      return accumulator;
    },
    {} as { [key: string]: string }
  );

  const editProductSchemaValidation = editProductSchema.reduce(
    (accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.validationSchema;
      return accumulator;
    },
    {} as { [key: string]: Yup.StringSchema }
  );

  return {
    editProductSchema,
    editProductSchemaInitialValue,
    editProductSchemaValidation,
  };
};

// type clientValueType =
//   | ClientType
//   | {
//       [key: string]: string;
//     };
export { editProductMutation };
// export type { clientValueType };
