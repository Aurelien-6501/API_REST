import AxiosInstance from "./AxiosInstance";

class ApiService {
  async getLoggedUser() {
    const { data } = await AxiosInstance.get(`/users/@me`);
    return data;
  }

  async getRestaurantAccounts() {
    return [
      {
        _id: 1,
        email: "restaurateur@gmail.com",
        name: "Le restaurateur",
      },
      {
        _id: 2,
        email: "restaurateur2@gmail.com",
        name: "Le restaurateur 2",
      },
    ];
  }

  async createRestaurantUser(restaurantUser) {
    /* const { data } = await AxiosInstance.post(`/users`, {
      data: restaurantUser
    }); */
    return {
      _id: 1,
      email: "restaurateur@gmail.com",
      name: "Le restaurateur",
      address: "",
      postalCode: "",
      city: "",
    };
  }
  async updateRestaurantUser(restaurantUser) {
    /* const { data } = await AxiosInstance.patch(`/users/@me`, {
      data: restaurantUser
    }); */
    return {
      _id: 1,
      ...restaurantUser,
    };
  }

  async getPlate(plateId) {
    return {
      _id: plateId,
      name: "spagetthi",
      image:
        "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
      price: 10.99,
    };
  }

  async updatePlate(plateId, newPlate) {
    return newPlate;
  }

  async createPlate(newPlate) {
    return newPlate;
  }

  async getRestaurantPlates() {
    return [
      {
        _id: 3,
        name: "spagetthi",
        image:
          "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
        price: 3.99,
      },
      {
        _id: 4,
        name: "spagetthi",
        image:
          "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
        price: 3.99,
      },
      {
        _id: 5,
        name: "spagetthi",
        image:
          "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
        price: 3.99,
      },
      {
        _id: 6,
        name: "spagetthi",
        image:
          "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
        price: 3.99,
      },
    ];
  }

  async cancelOrder(orderId) {
    //patch en changeant le statut
    return {
      createdAt: new Date(),
      user: {
        _id: 5,
        email: "bob@gmail.com",
      },
      items: [
        {
          image:
            "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
          name: "spagetthi",
          price: 3.99,
        },
        {
          image:
            "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
          name: "spagetthi",
          price: 2.99,
        },
      ],
      status: "CANCELED",
    };
  }

  async getRestaurantOrders() {
    return [
      {
        createdAt: new Date(),
        user: {
          _id: 5,
          email: "bob@gmail.com",
        },
        items: [
          {
            image:
              "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
            name: "spagetthi",
            price: 3.99,
          },
          {
            image:
              "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
            name: "spagetthi",
            price: 2.99,
          },
        ],
        status: "PROCESSED",
      },
    ];
  }
}

export default new ApiService();
