import LoadingButton from "@/components/core/CustomLoadingButton";
import InputField from "@/components/core/InputField";
import { contactMutation } from "@/components/schema/contact.schema";
import { formikProps } from "@/components/schema/log.schema";
import { useMutation } from "@/hooks";
import Layout from "@/layout/public";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";

export default function ContactPage() {
  const { contactSchema, contactSchemaInitialValue, contactSchemaValidation } =
    contactMutation();
  const { mutation, isLoading } = useMutation();

  const handleSubmitContact = async (values: any, props: formikProps) => {
    try {
      let res: ResType;
      res = await mutation(`contact`, {
        method: "POST",
        isAlert: true,
        body: {
          title: values?.title,
          message: values?.message,
        },
      });
      if (res?.results?.success) {
        props.resetForm();
      }
      // console.log(res);
    } catch (error) {
      errorHelper(error);
    }
  };
  return (
    <Layout title="Contact us">
      <section className="text-gray-600  relative bottom-spacing main-container">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bhubaneswar,Odisha,India&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">
                  460 West 34th Street, 15th floor, New York
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed">
                  example@email.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">123-456-7890</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
              CONTACT US
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600">
              Share your review and feedback for our betterment
            </p>
            <section className="flex flex-col admin-gap pt-5">
              <div className="">
                <Formik
                  initialValues={contactSchemaInitialValue}
                  validationSchema={Yup.object(contactSchemaValidation)}
                  onSubmit={handleSubmitContact}
                >
                  {(formik) => (
                    <Form className="grid grid-cols-12 gap-4 p-3">
                      {contactSchema.map((inputItem) => (
                        <Field name={inputItem.name} key={inputItem.key}>
                          {(props: FieldProps<string>) => (
                            <div
                              className={`flex w-full flex-col justify-center  ${inputItem?.className}`}
                            >
                              <div
                                className={`font-medium text-sm  ${
                                  inputItem?.key
                                    ? "text-dark/60"
                                    : "text-secondary"
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
                                    multiline={inputItem?.multiline}
                                    rows={inputItem?.rows}
                                    placeholder={inputItem?.placeHolder}
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
                      <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
                        <LoadingButton
                          title="Send"
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
            <p className="text-xs text-gray-500 mt-3">
              Chicharrones blog helvetica normcore iceland tousled brook viral
              artisan.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
