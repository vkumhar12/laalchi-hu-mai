import { configs } from "@/config";
import { getFromLocalStorage } from "@/utils";
import useSWR, { SWRConfiguration } from "swr";

type responseType = {
  haveNextPage?: boolean;
  pageNo?: number;
  perPage?: number;
  totalCount?: number;
};

const useSwr = <T>(url: string | null, options?: SWRConfiguration) => {
  // console.log({ url });
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
    return data?.data as T & responseType;
  };

  const { data, error, mutate, isValidating } = useSWR<T & responseType>(
    url ? [`${configs.serverUrl}/${url}`] : null,
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
