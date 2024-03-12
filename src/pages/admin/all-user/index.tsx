/* eslint-disable react-hooks/rules-of-hooks */
import { useSwr } from "@/hooks";

export default function index() {
  const { data } = useSwr<{
    data: any[];
  }>(`users`);
  console.log(data?.data);

  return <div></div>;
}
