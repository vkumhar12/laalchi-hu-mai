// import { Loader } from "@/components/core";
import Loader from "@/components/core/Loader";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import useAuth from "./useAuth";

type PassedComponentProps = {
  title?: string;
  children: JSX.Element[] | JSX.Element;
  description?: string;
  ogImage?: string;
};

const withProtectedRoute = (
  PassedComponent: React.ComponentType<PassedComponentProps>
) =>
  function NewComponent(props: PassedComponentProps) {
    const { user, isUserLoading } = useAuth();
    const { push, asPath } = useRouter();
    const urlRole = asPath.split("/")[1];
    let mounted = useRef<boolean>(false);
    useEffect(() => {
      mounted.current = true;
      if (!isUserLoading && !user?.id) push("/");
      if (!isUserLoading && user?.isBlocked) push("/");
      if (!isUserLoading && user?.role && user?.role.toLowerCase() !== urlRole)
        push("/");
      return () => {
        mounted.current = false;
      };
    }, [isUserLoading, user, push, urlRole, asPath]);

    return (
      <>
        {user?.id && user?.role ? (
          <PassedComponent {...props} />
        ) : (
          <Loader visible={true} />
        )}
      </>
    );
  };

export default withProtectedRoute;
