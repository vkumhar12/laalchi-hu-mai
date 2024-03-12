import { BASE_URL, getFromLocalStorage } from "@/utils";
import { useState } from "react";
import { toast } from "react-toastify";

type MutationOptions = {
  method?: "POST" | "PUT" | "PATCH" | "DELETE";
  isFormData?: boolean;
  body?: any;
  isAlert?: boolean;
};

const useMutation = () => {
  const [isLoading, setIsLoading] = useState(false);
  const mutation = async (path: string, options?: MutationOptions) => {
    try {
      const token = getFromLocalStorage("ACCESS_TOKEN");
      const url = BASE_URL;
      console.log(BASE_URL, " Base url");
      // const url = configs.serverUrl;
      setIsLoading(true);
      const method = options?.method || "POST";
      const body = options?.body
        ? options?.isFormData
          ? options?.body
          : JSON.stringify(options.body)
        : `{}`;
      const headers: HeadersInit = options?.isFormData
        ? {}
        : { "Content-Type": "application/json" };
      if (token) headers["Authorization"] = `Bearer ${token}`;
      const response = await fetch(`${BASE_URL}/${path}`, {
        method,
        headers,
        body,
      });
      const status = response.status;
      const results = await response.json();
      if (options?.isAlert && !results?.success) toast.error(results?.msg);
      else if (options?.isAlert && results?.success)
        toast.success(results?.msg);
      setIsLoading(false);
      return { results, status };
    } catch (error) {
      setIsLoading(false);
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    }
  };
  return { mutation, isLoading };
};

export default useMutation;
