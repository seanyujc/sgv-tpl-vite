import { BaseService } from "./base.serv";

export class CommonService extends BaseService {
  constructor() {
    super();
  }

  login(userName: string, password: string): Promise<any> {
    return this.proxyHttp.post("login", { userName, password });
  }
}
