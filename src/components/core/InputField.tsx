import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputBaseComponentProps,
  InputLabel,
  InputProps,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ChangeEvent, FocusEvent } from "react";
import UploadImage from "./UploadImage";

interface Props {
  type?:
    | "text"
    | "select"
    | "date"
    | "file"
    | "number"
    | "email"
    | "autocomplete"
    | "string"
    | any;
  value?: any;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  error?: boolean;
  defaultImage?: string;
  key?: string | number;
  helperText?: any;
  fullWidth?: boolean;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  options?: { label: string | number; value: string | number }[];
  id?: string | number;
  checked?: boolean;
  image?: string;
  variant?: "filled" | "outlined" | "standard";
  InputProps?: InputProps;
  inputProps?: InputBaseComponentProps;
  styleContact?: string;
  styleField?: string;
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  multiline?: boolean;
  rows?: number;
  defaultValue?: string | number | [] | object;
  label?: string;
  setIsImage?: any;
  size?: "small" | "medium";
}

export default function InputField({
  type,
  value,
  label,
  onChange,
  onBlur,
  error,
  helperText,
  fullWidth,
  placeholder,
  name,
  disabled,
  defaultImage,
  InputProps,
  id,
  variant,
  options,
  styleContact,
  image,
  styleField,
  onFileChange,
  rows,
  setIsImage,
  multiline,
  defaultValue,
  size,
}: Props) {
  switch (type) {
    case "text":
    case "password":
    case "number":
    case "date":
    case "email":
    case "time":
    case "string":
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          type={type}
          size={size}
          id={String(id)}
          disabled={disabled}
          variant={variant}
          className={styleContact}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          multiline={multiline}
          rows={rows}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
    case "photo":
      return (
        <div className={styleField}>
          <UploadImage
            image={image}
            defaultImage={defaultImage}
            onChange={onFileChange}
            className={styleField}
            setIsImage={setIsImage}
            // clearImage={() => onFileChange()}
          />
        </div>
      );
    case "select":
      return (
        <FormControl fullWidth>
          <InputLabel
            className={`${
              typeof value === "string" && value?.length !== 0 ? "!hidden" : ""
            }`}
          >
            {placeholder}
          </InputLabel>
          <TextField
            fullWidth={fullWidth}
            id={String(id)}
            size={size}
            select={true}
            name={name}
            value={value}
            onChange={onChange}
            className={styleContact}
            disabled={disabled}
            // label={label}
            variant={variant}
            InputProps={InputProps}
            error={error}
            helperText={helperText}
            defaultValue={defaultValue}
          >
            {options?.map((option) => (
              <MenuItem key={option?.value} value={option?.value}>
                {option?.label}
              </MenuItem>
            ))}
          </TextField>
        </FormControl>
      );
    case "radio":
      return (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <RadioGroup
            defaultValue={value}
            name={name}
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
          >
            {options?.map((data) => (
              <FormControlLabel
                className={styleContact}
                onChange={onChange as any}
                key={data?.value}
                value={data?.value}
                control={<Radio />}
                label={data?.label}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    case "checkbox":
      return (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <FormGroup row>
            {options?.map((data) => (
              <FormControlLabel
                className={styleContact}
                onChange={onChange as any}
                key={data?.value}
                value={data?.value}
                control={<Checkbox />}
                label={data.label}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    default:
      return (
        <TextField
          fullWidth={fullWidth}
          placeholder={placeholder}
          name={name}
          disabled={disabled}
          size={size}
          type={type}
          id={String(id)}
          variant={variant}
          className={styleContact}
          InputProps={InputProps}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          helperText={helperText}
          defaultValue={defaultValue}
        />
      );
  }
}

InputField;
