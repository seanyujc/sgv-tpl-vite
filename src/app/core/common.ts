import { ElMessage } from "element-plus";

export function messageError(
  error: any,
  {
    type: type = "error",
  }: { type?: "success" | "warning" | "info" | "error" } = {}
) {
  if (error) {
    let message = "";
    if (typeof error.subMessage !== "undefined") {
      message = error.subMessage || error.errorMessage;
    } else if (typeof error === "string") {
      message = error;
    } else if (error instanceof Error) {
      message = error.message;
    }
    if (message) {
      ElMessage({
        type,
        message,
      });
    }
  }
}

export default class Common {
  /**
   * 是否有样式名
   * @param el Dom对象
   * @param className 样式名
   */
  static hasClass(el: Element, className: any) {
    const reg = new RegExp("(^|\\s)" + className + "(\\s|$)");
    return reg.test(el.className);
  }
  /**
   * 添加class
   * @param el Dom对象
   * @param className 样式名
   */
  static addClass(el: Element | HTMLElement | null, className: any) {
    if (el == null || this.hasClass(el, className)) {
      return;
    }
    const newClass = el.className.split(" ");
    newClass.push(className);
    el.className = newClass.join(" ");
  }
  /**
   * 删除class
   * @param el Dom对象
   * @param className 样式名
   */
  static removeClass(el: Element | null, className: string) {
    if (el == null || !this.hasClass(el, className)) {
      return;
    }
    const newClass = el.className.split(" ");
    newClass.indexOf(className);
    newClass.splice(newClass.indexOf(className), 1);
    el.className = newClass.join(" ");
  }
}
