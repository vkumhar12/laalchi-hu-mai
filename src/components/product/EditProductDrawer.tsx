import { CustomDrawer } from "@/components/core";
import { useMutation } from "@/hooks";
import errorHelper from "@/utils/error";
import { Field, FieldProps, Form, Formik } from "formik";
import { Dispatch, SetStateAction } from "react";
import * as Yup from "yup";
import LoadingButton from "../core/CustomLoadingButton";
import InputField from "../core/InputField";
import { editProductMutation } from "../schema";
import { formikProps } from "../schema/log.schema";

type Props = {
  openDrawer: boolean;
  productData: any;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>;
  mutate: () => void;
};

export default function EditProductDrawer({
  productData,
  openDrawer,
  setOpenDrawer,
  mutate,
}: Props) {
  const {
    editProductSchema,
    editProductSchemaInitialValue,
    editProductSchemaValidation,
  } = editProductMutation({ productData });
  console.log(productData, "product data");
  const { mutation, isLoading } = useMutation();

  const handleEditProduct = async (values: any, props: formikProps) => {
    try {
      let res: ResType;
      const formData = new FormData();
      // formData.append("name", values?.name as string);
      // formData.append("productCode", values?.productCode as string);
      // formData.append("mrp", values?.mrp as string);
      // formData.append("sellingPrice", values?.sellingPrice as string);
      // formData.append("quality", values?.quality as string);
      // formData.append("color", values?.color as string);
      // formData.append("photo", values?.photo as string);
      // formData.append("desc", values?.desc as string);

      res = await mutation(`product/${productData?._id}`, {
        method: "PUT",
        isAlert: true,

        body: {
          name: values?.name,
          productCode: values?.productCode,
          mrp: values?.mrp,
          sellingPrice: values?.sellingPrice,
          quality: values?.quality,
          color: values?.color,
          desc: values?.desc,
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
        <div className="graph-title underline p-5">Edit Products</div>
        <div className=" p-2">
          <Formik
            initialValues={editProductSchemaInitialValue}
            validationSchema={Yup.object(editProductSchemaValidation)}
            onSubmit={handleEditProduct}
            enableReinitialize={true}
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
                    title="Edit Product"
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
