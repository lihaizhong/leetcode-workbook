class User {
  private name: string;

  private viewPage: string[];

  constructor(name: string, viewPage: string[]) {
    if (new.target && new.target.name === "User") {
      throw new Error("不能实例化");
    }

    this.name = name;
    this.viewPage = viewPage;
  }

  exec() {
    console.log(this.name, this.viewPage);
  }
}

export class UserFactory extends User {
  constructor(name: string, viewPage: string[]) {
    super(name, viewPage);
  }

  create(role: string) {
    switch (role) {
      case 'superAdmin':
        return new UserFactory( '超级管理员', ['首页', '通讯录', '发现页', '应用数据', '权限管理'] );
        break;
      case 'admin':
        return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        break;
      case 'user':
        return new UserFactory( '普通用户', ['首页', '通讯录', '发现页'] );
        break;
      default:
        throw new Error('参数错误, 可选参数:superAdmin、admin、user')
    }
  }
}
