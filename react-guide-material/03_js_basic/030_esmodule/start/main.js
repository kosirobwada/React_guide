import { hello, User } from "./module.js";
import func from "./module.js";
// import { User } from "./module.js"

// hello();

func();

const user = new User('Tom');
user.hello();