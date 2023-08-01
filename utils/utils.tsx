// utils/localStorage.ts

import { User } from "@/types/type";

export const setUserData = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUserData = (): User | null => {
  const storedData = localStorage.getItem("user");
  return storedData ? JSON.parse(storedData) : null;
};
