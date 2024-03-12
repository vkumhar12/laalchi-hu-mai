import { toast } from "react-toastify";

export default function errorHelper(error: unknown) {
  return toast.error(
    error instanceof Error ? error.message : "Something went wrong"
  );
}
