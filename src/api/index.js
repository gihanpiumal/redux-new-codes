import axios from "axios";

const url = "http://localhost:8081/api/user/get_all";
const url2 = "http://localhost:8081/api/user_role/get_all";

let obj = {
  firstName: "",
  userRoleId: "",
};

let obj2 = {
  roleName: "",
};

export const fetchUsers = () => axios.post(url, obj);

export const fetchUserRoles = () => axios.post(url2, obj2);
