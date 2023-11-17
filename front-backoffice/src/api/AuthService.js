import AxiosInstance from "./AxiosInstance";

class AuthService {
  async login(email, password) {
    const { data } = await AxiosInstance.post(`/login`, {
      email,
      password,
    });

    return data.accessToken;
  }
  async register(email, name, password) {
    const { data } = await AxiosInstance.post(`/register`, {
      name,
      email,
      password,
    });
    return data.accessToken;
  }
}

export default new AuthService();
