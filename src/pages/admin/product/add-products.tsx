import LoadingButton from "@/components/core/CustomLoadingButton";
import InputField from "@/components/core/InputField";
import { addProductMutation } from "@/components/schema/addProducts.schema";
import { formikProps } from "@/components/schema/log.schema";
import { useMutation } from "@/hooks";
import AdminLayout from "@/layout/admin";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

export default function AddProducts() {
  const {
    addProductSchema,
    addProductSchemaInitialValue,
    addProductSchemaValidation,
  } = addProductMutation();

  const { mutation, isLoading } = useMutation();
  const handleAddProduct = async (values: any, props: formikProps) => {
    // console.log(values);
    // return;
    try {
      let res: ResType;
      const formData = new FormData();
      formData.append("name", values?.name as string);
      formData.append("productCode", values?.productCode as string);
      formData.append("mrp", values?.mrp as string);
      formData.append("sellingPrice", values?.sellingPrice as string);
      formData.append("quality", values?.quality as string);
      formData.append("color", values?.color as string);
      formData.append("productImage", values?.productImage as string);
      formData.append("desc", values?.desc as string);

      res = await mutation(`product`, {
        method: "POST",
        isAlert: true,
        isFormData: true,
        body: formData,
      });

      // console.log(res);

      if (res?.results?.success) {
        props.resetForm();
      }
    } catch (error) {
      {
        errorHelper(error);
      }
    }
  };

  return (
    <AdminLayout title="Add Products">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Add Products</div>
        <div className="">
          <Formik
            initialValues={addProductSchemaInitialValue}
            validationSchema={Yup.object(addProductSchemaValidation)}
            onSubmit={handleAddProduct}
          >
            {(formik) => (
              <Form className="grid grid-cols-12 gap-4 p-3">
                {addProductSchema.map((inputItem) => (
                  <Field name={inputItem.name} key={inputItem.key}>
                    {(props: FieldProps<string>) => (
                      <div
                        className={`flex w-full flex-col justify-center  ${inputItem?.className}`}
                      >
                        <div
                          className={`font-medium text-sm  ${
                            inputItem?.key ? "text-dark/60" : "text-secondary"
                          }`}
                        >
                          {inputItem.label}{" "}
                          <span>{inputItem?.required ? "*" : ""}</span>
                        </div>
                        {inputItem?.key ? (
                          <div className="relative">
                            <InputField
                              fullWidth
                              key={inputItem?.key}
                              name={inputItem?.name}
                              type={inputItem?.type}
                              multiline={inputItem?.multiLine}
                              rows={inputItem?.rows}
                              placeholder={inputItem?.placeHolder}
                              onChange={(e: any) => {
                                if (inputItem?.name === "productImage") {
                                  formik.setFieldValue(
                                    "productImage",
                                    e?.target?.files[0]
                                  );
                                } else formik.handleChange(e);
                              }}
                              onBlur={formik.handleBlur}
                            />
                            <p className="absolute -bottom-5 text-youtube/80 text-sm">
                              {Boolean(
                                formik?.touched[inputItem?.name] &&
                                  formik?.errors[inputItem?.name]
                              )}
                              {formik?.touched[inputItem?.name] &&
                                formik?.errors[inputItem?.name]}
                            </p>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    )}
                  </Field>
                ))}
                <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
                  <LoadingButton
                    title="Add Product"
                    loading={isLoading}
                    type="submit"
                    className="btn-primary py-3 rounded-md w-full"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </AdminLayout>
  );
}
