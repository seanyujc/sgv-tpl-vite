import { homePagePreloading } from "./home";
import { loginPagePreloading } from "./login";
export { homePagePreloading, loginPagePreloading };
/**
 * Catching Errors
 */
export function dealOccurred(error: any, pageName = "") {
  location.href = (window as any).__SWNextFullPath;
}
