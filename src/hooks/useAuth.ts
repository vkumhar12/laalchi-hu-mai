import { BASE_URL, getFromLocalStorage, removeFromLocalStorage } from "@/utils";
import { create } from "zustand";

type AuthState = {
  isUserLoading: boolean;
  user?: Partial<any>;
  setUser: (user: Partial<any>) => Promise<void>;
  logout: () => void;
  getUser: () => void;
};
const useAuth = create<AuthState>((set) => ({
  isUserLoading: true,
  user: {},
  setUser: async (user: Partial<any>) => {
    set({ user: { ...user } });
  },
  logout() {
    set({ user: undefined });
    typeof window !== "undefined" && removeFromLocalStorage("ACCESS_TOKEN");
  },
  getUser: async () => {
    const accessToken = getFromLocalStorage("ACCESS_TOKEN");
    if (!accessToken) {
      set({ user: {}, isUserLoading: false });
      return;
    }
    try {
      const res = await fetch(`${BASE_URL}/users/current/user`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (!res?.status) {
        window?.localStorage?.removeItem("ACCESS_TOKEN");
        set({ user: {}, isUserLoading: false });
      }
      if (res?.status) {
        const data = await res.json();
        console.log(data);
        const userData = data?.data;
        set({ user: { ...userData }, isUserLoading: false });
      }
    } catch (error) {
      set({ user: {} });
    }
  },
}));

export default useAuth;
