import { CustomDrawer } from "@/components/core";
import { useMutation } from "@/hooks";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import LoadingButton from "../core/CustomLoadingButton";
import InputField from "../core/InputField";
import { EditTestimonalMutation } from "../schema/editTestimonal.schema";
import { formikProps } from "../schema/log.schema";

type Props = {
  openDrawer: boolean;
  testData: any;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  mutate: () => void;
};

export default function EditTestimonalDrawer({
  testData,
  openDrawer,
  setOpenDrawer,
  mutate,
}: Props) {
  const {
    editTestimonalSchema,
    editTestimonalSchemaInitialValue,
    editTestimonalSchemaValidation,
  } = EditTestimonalMutation({ testData });
  console.log(testData, "product data");
  const { mutation, isLoading } = useMutation();

  const handleEditTestimonal = async (values: any, props: formikProps) => {
    try {
      let res: ResType;

      res = await mutation(`testimonial/${testData?._id}`, {
        method: "PUT",
        isAlert: true,

        body: {
          title: values?.title,
          desc: values?.desc,
          rating: values?.rating,
        },
      });
      if (res?.results?.success) {
        props.resetForm();
        setOpenDrawer(false);
        mutate();
      }
    } catch (error) {
      {
        errorHelper(error);
      }
    }
  };

  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[25vw] h-screen "
    >
      <section>
        <div className="graph-title underline p-5">Edit Testimonal</div>
        <div className=" p-2">
          <Formik
            initialValues={editTestimonalSchemaInitialValue}
            validationSchema={Yup.object(editTestimonalSchemaValidation)}
            onSubmit={handleEditTestimonal}
            enableReinitialize={true}
          >
            {(formik) => (
              <Form className="grid grid-cols-12 gap-4 p-3">
                {editTestimonalSchema.map((inputItem) => (
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
                              placeholder={inputItem?.placeHolder}
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
                    title="Edit Testimonal"
                    loading={isLoading}
                    type="submit"
                    className="btn-primary py-3 rounded-md w-full"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>{" "}
      </section>
    </CustomDrawer>
  );
}
{
}
