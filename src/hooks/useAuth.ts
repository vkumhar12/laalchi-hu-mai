// import { BASE_URL, getFromLocalStorage, removeFromLocalStorage } from "@/utils";
// import { create } from "zustand";

// type AuthState = {
//   isUserLoading: boolean;
//   user?: Partial<any>;
//   setUser: (user: Partial<any>) => Promise<void>;
//   logout: () => void;
//   getUser: () => void;
// };
// const useAuth = create<AuthState>((set) => ({
//   isUserLoading: true,
//   user: {},
//   setUser: async (user: Partial<any>) => {
//     set({ user: { ...user } });
//   },
//   logout() {
//     set({ user: undefined });
//     typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
//   },
//   getUser: async () => {
//     const accessToken = getFromLocalStorage("ACCESS_TOKEN");
//     if (!accessToken) {
//       set({ user: {}, isUserLoading: false });
//       return;
//     }
//     try {
//       console.log("Response from useAuth");

//       const res = await fetch(`${BASE_URL}/users/current`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });
//       if (!res?.status) {
//         window?.localStorage?.removeItem("ACCESS_TOKEN");
//         set({ user: {}, isUserLoading: false });
//       }
//       if (res?.status) {
//         const data = await res.json();
//         console.log(data);
//         const userData = data?.data;
//         set({ user: { ...userData }, isUserLoading: false });
//       }
//     } catch (error) {
//       set({ user: {} });
//     }
//   },
// }));
// //
// export default useAuth;

import { BASE_URL, getFromLocalStorage, removeFromLocalStorage } from "@/utils";
import { create } from "zustand";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<any>;
  setUser: (user: Partial<any>) => Promise<void>;
  logout: () => void;
  getUser: () => Promise<any>;
};
const useAuth = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {},
  setUser: async (user: Partial<any>) => {
    set({ user: { ...user } });
  },
  logout: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    // console.log(accessToken);
    if (!accessToken) {
      set({ user: {}, isUserLoading: false });
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/auth/logout`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(res);

      // if (res?.status !== 200) {
      //   window?.localStorage?.removeItem("ACCESS_TOKEN");
      //   set({ user: {}, isUserLoading: false });
      // } else {
      //   const data = await res.json();
      //   const userData = data?.success?.data;
      //   set({ user: { ...userData }, isUserLoading: false });
      // }
    } catch (error) {
      set({ user: {} });
    } finally {
      set({ user: undefined });
      typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
    }
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    // console.log(accessToken, "accessToken");

    if (typeof accessToken !== "string") {
      return set({ user: {}, isUserLoading: false });
    }
    try {
      const res = await fetch(`${BASE_URL}/users/current`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      // console.log(res?.status, "response");

      if (res?.status !== 200) {
        window?.localStorage?.removeItem("ACCESS_TOKEN");
        set({ user: {}, isUserLoading: false });
      } else {
        const data = await res.json();
        console.log(data?.data, "response");
        const user = data?.data;
        set({ user, isUserLoading: false });
      }
    } catch (error) {
      set({ user: {} });
    }
  },
}));

export default useAuth;
