import AxiosInstance from "./AxiosInstance";

class ApiService {
  async getLoggedUser() {
    return {
      email: "bob@gmail.com",
      name: "Bob",
    };
  }
  async updateLoggedUser(email, name) {
    return {
      email,
      name,
    };
  }
  async getLoggedUserOrders() {
    return [
      {
        createdAt: new Date(),
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
      {
        createdAt: new Date(),
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
  async createOrder() {
    return {
      createdAt: new Date(),
      items: {
        image:
          "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
        name: "spagetthi",
        price: 2.99,
      },
    };
  }
  async getRestaurants() {
    return [
      {
        _id: 1,
        name: "Le clos des sens",
        city: "Annecy",
        image:
          "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/5/0/91/649/72/Exterior_View_2_S.jpg",
      },
      {
        _id: 2,
        name: "Le clos des sens 2",
        city: "Annecy",
        image:
          "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/5/0/91/649/72/Exterior_View_2_S.jpg",
      },
    ];
  }

  async getRestaurant() {
    return {
      _id: 1,
      name: "Le clos des sens",
      city: "Annecy",
      image:
        "https://d2hyz2bfif3cr8.cloudfront.net/imageRepo/5/0/91/649/72/Exterior_View_2_S.jpg",
    };
  }

  async getRestaurantsPlates() {
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
  async getPlate(restaurantId, plateId) {
    return {
      _id: 3,
      name: "spagetthi",
      description:
        "Lorem ipsum dolor sit amet consectetur. Pellentesque dui mattis faucibus viverra sit nulla ut integer aliquam. Congue tellus quisque augue at tellus. Gravida diam elementum adipiscing ultrices egestas amet. Adipiscing lectus nisl pulvinar aenean purus lectus elit faucibus adipiscing.",
      image:
        "https://assets.afcdn.com/recipe/20180326/78166_w1024h768c1cx2592cy1728.webp",
      price: 3.99,
    };
  }
}

export default new ApiService();
