/* eslint-disable react-hooks/rules-of-hooks */
import LoadingButton from "@/components/core/CustomLoadingButton";
import InputField from "@/components/core/InputField";
import { formikProps } from "@/components/schema/log.schema";
import { registerUserMutation } from "@/components/schema/register.scehma";
import { useMutation } from "@/hooks";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import router from "next/router";
import * as Yup from "yup";

export default function register() {
  const {
    registerUserchema,
    registerUserchemaInitialValue,
    registerUserchemaValidation,
  } = registerUserMutation();
  const { mutation, isLoading } = useMutation();

  const handleRegisterDetails = async (values: any, props: formikProps) => {
    try {
      let res: ResType;
      res = await mutation(`users/register`, {
        method: "POST",
        isAlert: true,
        body: {
          name: values?.name,
          password: values?.password,
          email: values?.email,
        },
      });
      if (res?.results?.success) {
        props.resetForm();
      }
    } catch (error: unknown) {
      errorHelper(error);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className=" w-1/3 flex flex-col admin-gap">
        <div className="graph-title text-center">Create Your Account</div>

        <div className="admin-card">
          <Formik
            initialValues={registerUserchemaInitialValue}
            validationSchema={Yup.object(registerUserchemaValidation)}
            onSubmit={handleRegisterDetails}
          >
            {(formik) => (
              <Form className="grid grid-cols-12 gap-4 p-3">
                {registerUserchema.map((inputItem) => (
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
                    title="Register"
                    loading={isLoading}
                    type="submit"
                    className="btn-primary py-3 rounded-md w-full"
                  />
                </div>
              </Form>
            )}
          </Formik>
          <div>
            Already have an account?{" "}
            <span
              className="font-medium hover:underline text-pink-blue cursor-pointer"
              onClick={() => router.push(`/login-page`)}
            >
              Login here
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
