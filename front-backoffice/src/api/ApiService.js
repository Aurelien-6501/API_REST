import AxiosInstance from "./AxiosInstance";

class ApiService {
  async getLoggedUser() {
    const { data } = await AxiosInstance.get(`/user/@me`);
    return data;
  }

  async getLoggedRestaurant() {
    const { data } = await AxiosInstance.get(`/restaurants/@me`);
    return data;
  }

  async getRestaurantAccounts() {
    const { data } = await AxiosInstance.get(`/restaurants`);
    return data;

  }

  async createRestaurantUser(restaurantUser) {
    const { data } = await AxiosInstance.post(`/restaurants`, restaurantUser);
    return data;
  }

  async deleteRestaurant(restaurantUserId) {
    const { data } = await AxiosInstance.delete(`/restaurants/${restaurantUserId}`);
    return data;
  }

  async updateRestaurantUser(restaurantUser) {
    const { data } = await AxiosInstance.patch(`/restaurants/@me`, restaurantUser);
    return data;
  }

  async getRestaurant (restaurantId) {
    const { data } = await AxiosInstance.get(`/restaurants/${restaurantId}`);
    return data;
  }

  async getPlate(plateId) {
    const { data } = await AxiosInstance.get(`/plates/${plateId}`);
    return data;
  }

  async updatePlate(plateId, newPlate) {
    const { data } = await AxiosInstance.patch(`/plates/${plateId}`, newPlate);
    return data;
  }

  async createPlate(newPlate) {
    const { data } = await AxiosInstance.post(`/plates`, newPlate);
    return data;
  }

  async getRestaurantPlates() {
    const { data } = await AxiosInstance.get(`/plates`);
    return data;
  }

  async cancelOrder(orderId) {
    const { data } = await AxiosInstance.patch(`/orders/${orderId}`);
    return data;
  }

  async getRestaurantOrders() {
    const { data } = await AxiosInstance.get(`/orders`);
    return data;
  }
}

export default new ApiService();
