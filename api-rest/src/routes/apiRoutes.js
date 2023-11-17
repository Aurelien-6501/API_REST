const express = require("express");
const router = express.Router();

const UserController = require("../controllers/UserController");
const RestaurantController = require("../controllers/RestaurantController");
const PlateController = require("../controllers/PlateController");
const OrderController = require("../controllers/OrderController");
const AuthenticationController = require("../controllers/AuthenticationController");
const requireAuth = require("../middlewares/require-auth");
const requireRole = require("../middlewares/require-role");

router.get("/users", [requireAuth, requireRole(["ADMIN"])], UserController.getUsers);
router.get("/user/@me", [requireAuth], UserController.getCurrentUser);
router.get("/users/:id", UserController.getUserById);
router.post("/users", UserController.createUser);


router.get("/restaurants", [requireAuth, requireRole(["ADMIN"])], RestaurantController.getRestaurants);
router.get("/restaurants/@me", [requireAuth, requireRole(["RESTAURANT"])], RestaurantController.getRestaurantById);
router.patch("/restaurants/@me", [requireAuth, requireRole(["RESTAURANT"])], RestaurantController.updateRestaurant);
router.post("/restaurants", [requireAuth, requireRole(["ADMIN"])], RestaurantController.createRestaurant);
router.delete("/restaurants/:id", [requireAuth, requireRole(["ADMIN"])], RestaurantController.deleteRestaurant);


router.get("/orders", [requireAuth, requireRole(["RESTAURANT"])], OrderController.getOrders);
router.patch("/orders/:id", [requireAuth, requireRole(["RESTAURANT"])], OrderController.cancelOrder);

router.get("/plates", [requireAuth, requireRole(["RESTAURANT"])], PlateController.getPlates);
router.get("/plates/:id", [requireAuth, requireRole(["RESTAURANT"])], PlateController.getPlateById);
router.post("/plates", [requireAuth, requireRole(["RESTAURANT"])], PlateController.createPlate);
router.patch("/plates/:id", [requireAuth, requireRole(["RESTAURANT"])], PlateController.updatePlate);

router.post("/login", AuthenticationController.login);
router.post("/register", AuthenticationController.register);

module.exports = router;
