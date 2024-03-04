import { addProductMutation } from "@/components/schema/addProducts.schema";
import InputField from "@/core/InputField";
import AdminLayout from "@/layout/admin";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

export default function AddProducts() {
  const {
    addProductSchema,
    addProductSchemaInitialValue,
    addProductSchemaValidation,
  } = addProductMutation();
  const handleAddClientDetails = () => {};

  return (
    <AdminLayout title="Add Products">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Add Products</div>
        <div className="">
          <Formik
            initialValues={addProductSchemaInitialValue}
            validationSchema={Yup.object(addProductSchemaValidation)}
            onSubmit={handleAddClientDetails}
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
                              options={inputItem?.options}
                              onChange={(e: any) => {
                                if (inputItem?.name === "photo") {
                                  formik.setFieldValue(
                                    "photo",
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
                <div className="col-span-12 pt-4">
                  <button
                    type="submit"
                    className="!bg-pink-blue text-white p-2 text-xl rounded-md w-full whitespace-nowrap"
                  >
                    Add
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </AdminLayout>
  );
}
