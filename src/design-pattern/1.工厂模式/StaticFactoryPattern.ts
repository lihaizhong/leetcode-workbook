export class User {
  private name: string;

  private viewPage: string[];

  constructor(options: any) {
    this.name = options.name;
    this.viewPage = options.viewPage;
  }

  static getInstance(role: string) {
    switch (role) {
      case "superAdmin":
        return new User({
          name: "超级管理员",
          viewPage: ["首页", "通讯录", "发现页", "应用数据", "权限管理"],
        });
      case "admin":
        return new User({
          name: "管理员",
          viewPage: ["首页", "通讯录", "发现页", "应用数据"],
        });
      case "user":
        return new User({
          name: "普通用户",
          viewPage: ["首页", "通讯录", "发现页"],
        })
      default:
        throw new Error("参数错误，可选参数：superAdmin、admin、user");
    }
  }

  exec() {
    console.log(this.name, this.viewPage);
  }
}
