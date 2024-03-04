import { CustomDrawer } from "@/components/core";
import { Dispatch, SetStateAction } from "react";

type Props = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
};

export default function EditProductDrawer({
  openDrawer,
  setOpenDrawer,
}: Props) {
  return (
    <CustomDrawer
      open={openDrawer}
      onClose={() => setOpenDrawer(false)}
      anchor="right"
      drawerStyle="w-[75vw] md:w-[25vw] h-screen "
    >
      <div>hii</div>
    </CustomDrawer>
  );
}
{
  /* <div className="">
        <Formik
          initialValues={editProductSchemaInitialValue}
          validationSchema={Yup.object(editProductSchemaValidation)}
          onSubmit={handleAddClientDetails}
        >
          {(formik) => (
            <Form className="grid grid-cols-12 gap-4 p-3">
              {editProductSchema.map((inputItem) => (
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
      </div> */
}
