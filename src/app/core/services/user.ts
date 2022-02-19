import { post } from "../resource";

function login(userName: string, password: string): Promise<any> {
  return post("login", { userName, password });
}

export const user = { login };
