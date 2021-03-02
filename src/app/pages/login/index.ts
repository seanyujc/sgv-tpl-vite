import { dealOccurred } from "@/app/pages";

export function loginPagePreloading(): Promise<any> {
  return import("./login.vue").catch((error) => {
    return dealOccurred(error, "Login");
  });
}
