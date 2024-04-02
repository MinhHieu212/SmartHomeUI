import { baseAPI } from "./baseAPI";

export const LoginAPI = async (data) => {
  const responseLogin = await baseAPI
    .post("/v1/user/login", data)
    .then((response) => {
      console.log("Success Login");
      return response.data;
    })
    .catch((error) => {
      console.log("Fail Login");
      return error;
    });

  return responseLogin;
};
