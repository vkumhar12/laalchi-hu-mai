import LoadingButton from "@/components/core/CustomLoadingButton";
import InputField from "@/components/core/InputField";
import { addTestimonalMutation } from "@/components/schema/addTestimonal.schema";
import { formikProps } from "@/components/schema/log.schema";
import { useMutation } from "@/hooks";
import AdminLayout from "@/layout/admin";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

export default function AddProducts() {
  const {
    addTestimonalSchema,
    addTestimonalSchemaInitialValue,
    addTestimonalSchemaValidation,
  } = addTestimonalMutation();
  const { mutation, isLoading } = useMutation();

  const handleAddTestimonal = async (values: any, props: formikProps) => {
    try {
      let res: ResType;
      const formData = new FormData();
      formData.append("title", values?.title as string);
      formData.append("rating", values?.rating as string);
      formData.append("desc", values?.desc as string);
      formData.append("productCode", values?.productCode as string);
      // formData.append("photo", values?.photo as string);

      res = await mutation(`testimonial`, {
        method: "POST",
        isAlert: true,
        // isFormData: true,
        body: {
          title: values?.title,
          desc: values?.desc,
          rating: values?.rating,
        },
      });
      console.log(res);
      if (res?.results?.success) {
        props.resetForm();
      }
    } catch (error) {
      errorHelper(error);
    }
  };

  return (
    <AdminLayout title="Add Testimonal">
      <section className="flex flex-col admin-gap pt-5">
        <div className="graph-title">Add Testimonal</div>
        <div className="">
          <Formik
            initialValues={addTestimonalSchemaInitialValue}
            validationSchema={Yup.object(addTestimonalSchemaValidation)}
            onSubmit={handleAddTestimonal}
          >
            {(formik) => (
              <Form className="grid grid-cols-12 gap-4 p-3">
                {addTestimonalSchema.map((inputItem) => (
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
                  <LoadingButton
                    title="Add"
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
