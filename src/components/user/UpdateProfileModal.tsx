import InputField from "@/components/core/InputField";
import { useMutation } from "@/hooks";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import * as Yup from "yup";
import LoadingButton from "../core/CustomLoadingButton";
import { formikProps } from "../schema/log.schema";
import { updateProfileMutation } from "../schema/updateProfile.schema";

export default function UpdateProfileModal({
  setIsOpen,
  mutate,
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  mutate: () => void;
}) {
  const { mutation, isLoading } = useMutation();

  const {
    updateProfileSchema,
    updateProfileSchemaInitialValue,
    updateProfileSchemaValidation,
  } = updateProfileMutation();

  const handleUpdateProfile = async (value: any, props: formikProps) => {
    try {
      let res: ResType;
      res = await mutation(`users/update-profile`, {
        method: "POST",
        isAlert: true,
        body: {
          name: value?.name,
          email: value?.email,
        },
      });
      if (res?.results?.success) {
        props.resetForm();
        setIsOpen(false);
        mutate();
      }
    } catch (error) {
      errorHelper(error);
    }
  };
  return (
    <div>
      <div className=" w-full flex flex-col gap-5 p-8 ">
        <div className="flex justify-between items-center ">
          <p className="text-xl font-semibold text-primary-text ">
            Update Profile :
          </p>
          <p
            className="text-pinterest p-1 rounded-full bg-pinterest/20 text-xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <IoMdClose />
          </p>
        </div>
        <Formik
          initialValues={updateProfileSchemaInitialValue}
          validationSchema={Yup.object(updateProfileSchemaValidation)}
          onSubmit={handleUpdateProfile}
        >
          {(formik) => (
            <Form className="grid grid-cols-12 gap-4 p-3">
              {updateProfileSchema.map((inputItem) => (
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
                              if (inputItem?.name === "mediaFile") {
                                formik.setFieldValue(
                                  "mediaFile",
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
                  title="Save"
                  loading={isLoading}
                  type="submit"
                  className="btn-primary py-3 rounded-md w-full"
                />
                {/* <button
                  type="submit"
                  className="!bg-whatsapp text-white p-2 text-xl rounded-md w-full whitespace-nowrap"
                >
                  Save
                </button> */}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
