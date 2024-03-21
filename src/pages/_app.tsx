import useAuth from "@/hooks/useAuth";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { getUser } = useAuth();
  const { asPath } = useRouter();
  useEffect(() => {
    (() => {
      // …
      getUser();
    })();
  }, [asPath, getUser]);

  return <Component {...pageProps} />;
}
