import { User } from "./StaticFactoryPattern"
import { UserFactory } from "./FactoryMethodPattern"

const superAdmin = User.getInstance("superAdmin");
const admin = User.getInstance("admin");
const user = User.getInstance("user");

superAdmin.exec();
admin.exec();
user.exec();

const factory = new UserFactory();
const superAdminFactory = factory.create("superAdmin")
const adminFactory = factory.create("admin")
const userFactory = factory.create("user")

superAdminFactory.exec();
adminFactory.exec();
userFactory.exec();
