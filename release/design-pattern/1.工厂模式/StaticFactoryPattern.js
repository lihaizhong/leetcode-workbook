"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    name;
    viewPage;
    constructor(options) {
        this.name = options.name;
        this.viewPage = options.viewPage;
    }
    static getInstance(role) {
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
                });
            default:
                throw new Error("参数错误，可选参数：superAdmin、admin、user");
        }
    }
    exec() {
        console.log(this.name, this.viewPage);
    }
}
exports.User = User;
//# sourceMappingURL=StaticFactoryPattern.js.map