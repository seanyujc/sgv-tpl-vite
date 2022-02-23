import type { UserInfo } from "../domain/UserInfo";
import { post } from "../resource";

function login(userName: string, password: string): Promise<UserInfo> {
  return post("login", { userName, password });
}

export const user = { login };
