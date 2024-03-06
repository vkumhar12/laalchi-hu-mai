import { BASE_URL, getFromLocalStorage } from "@/utils";
import useSWR, { SWRConfiguration } from "swr";

type responseType = {
  pagination: {
    haveNextPage?: boolean;
    take?: number;
    skip?: number;
    total?: number;
  };
  msg?: string;
  success: boolean;
};

const useSwr = <T>(url: string | null, options?: SWRConfiguration) => {
  const accessToken = getFromLocalStorage("ACCESS_TOKEN");
  const fetcher = async (url: string) => {
    const headers: {
      Authorization?: string;
      "Content-Type"?: string;
    } = {};
    accessToken && (headers["Authorization"] = `Bearer ${accessToken}`);
    headers["Content-Type"] = "application/json";
    const res = await fetch(url, {
      method: "GET",
      headers,
    });
    const data = await res.json();
    return data as T & responseType;
  };
  console.log(`${BASE_URL}/${url}`);
  const { data, error, mutate, isValidating } = useSWR<T & responseType>(
    url ? [`${BASE_URL}/${url}`] : null,
    fetcher,
    {
      ...options,
      revalidateOnFocus: false,
    }
  );
  return {
    data,
    error,
    isValidating,
    mutate,
  };
};
export default useSwr;
