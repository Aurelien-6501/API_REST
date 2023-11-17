import AxiosInstance from "./AxiosInstance";

class AuthService {
  async login(email, password) {
    /* const { data } = await AxiosInstance.get(`/login`, {
      data: {
        email,
        password,
      },
    }); */

    //@todo
    //return data.accessToken;
    return "remplacer par l'access token récupéré";
  }
  async register(email, name, password) {
    /* const { data } = await AxiosInstance.get(`/register`, {
      name,
      email,
      password,
    }); */
    return "remplacer par l'access token récupéré";
    //@todo
    //return data.accessToken;
  }
}

export default new AuthService();
