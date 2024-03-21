/* eslint-disable react-hooks/exhaustive-deps */
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
  PassedComponent: React.ComponentType<PassedComponentProps>,
  allowedRoles: string[]
) =>
  function NewComponent(props: PassedComponentProps) {
    const { user, isUserLoading } = useAuth();
    const { push } = useRouter();
    let mounted = useRef<boolean>(false);

    useEffect(() => {
      mounted.current = true;
      if (!isUserLoading) {
        if (!user) {
          // User not authenticated, redirect to login
          push("/");
        } else if (!allowedRoles.includes(user.role)) {
          // User is authenticated but doesn't have the required role, redirect to appropriate page
          push("/");
        }
      }
      return () => {
        mounted.current = false;
      };
    }, [isUserLoading, user, push, allowedRoles]);

    return (
      <>
        {user && allowedRoles.includes(user.role) ? (
          <PassedComponent {...props} />
        ) : (
          <Loader visible={true} />
        )}
      </>
    );
  };

export default withProtectedRoute;
