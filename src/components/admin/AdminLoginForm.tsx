/* eslint-disable @next/next/no-img-element */
import InputField from "@/core/InputField";
import { Field, FieldProps, Form, Formik } from "formik";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import * as Yup from "yup";
import {
  loginInitialValues,
  loginSchema,
  loginValidationSchema,
} from "../schema/log.schema";

const AdminLogin = () => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = () => {};

  return (
    <section className="flex flex-col bg-whatsapp/20 justify-center h-screen items-center">
      <div className=" bg-slate-50 md:shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] lg:w-2/3 w-full md:w-1/2 grid lg:grid-cols-2 rounded-xl md:rounded-3xl p-6 md:p-3 items-center gap-6 md:gap-0">
        <div className="w-full h-fit md:flex items-center rounded-[0.75rem]">
          <div className="flex items-center justify-center w-full h-fit">
            {/* Replace with your logo */}
            <img src="/main-logo.png" alt="logo" className="w-48 md:w-56" />
          </div>
        </div>
        <div className="flex flex-col py-8 px-1 md:p-6 w-full gap-4">
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-2xl md:text-3xl font-semibold md:leading-6">
              Welcome Back!
            </h1>
            <p className="md:text-lg text-base font-semibold">
              Sign in to continue
            </p>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Formik
              initialValues={loginInitialValues}
              validationSchema={Yup.object(loginValidationSchema)}
              onSubmit={handleSubmit}
            >
              {(formik) => (
                <Form className="w-full grid grid-cols-12 gap-3 md:gap-4">
                  {loginSchema.map((inputItem) => (
                    <Field name={inputItem.name} key={inputItem.key}>
                      {(props: FieldProps<string>) => (
                        <div
                          className={`flex flex-col justify-center ${inputItem.className}`}
                        >
                          <div className="text-sm">{inputItem.label}</div>
                          <div className="relative col-span-12 w-full border">
                            <InputField
                              fullWidth
                              key={inputItem?.key}
                              placeholder={inputItem.placeholder}
                              id={inputItem?.key}
                              name={inputItem?.name}
                              type={isPasswordVisible ? "text" : inputItem.type}
                              value={formik?.values[inputItem?.name]}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={Boolean(
                                formik?.touched[inputItem?.name] &&
                                  formik?.errors[inputItem?.name]
                              )}
                              helperText={
                                formik?.touched[inputItem?.name] &&
                                formik?.errors[inputItem?.name]
                              }

                              // formik={formik}
                            />
                            {inputItem.type === "password" && (
                              <div className="absolute top-5 right-4 flex justify-end">
                                <button
                                  type="button"
                                  onClick={togglePasswordVisibility}
                                >
                                  {isPasswordVisible ? (
                                    <AiFillEyeInvisible className="text-xl" />
                                  ) : (
                                    <AiFillEye className="text-xl" />
                                  )}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </Field>
                  ))}
                  <div className="flex items-center col-span-12 justify-center flex-col gap-2 pt-2">
                    <button
                      type="submit"
                      className="p-2 bg-whatsapp text-white w-full cursor-pointer rounded"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
