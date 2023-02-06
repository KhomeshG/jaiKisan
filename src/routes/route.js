const express = require("express");

const router = express.Router();

// Customer API
// 1. Get all customers List with status ACTIVE [GET]-->Done
// 2. Delete customer. [DELETE]-->Done
// 3. Create new customer[POST]-->Done

const customer = require("../controller/customerController");
const middleware = require("../middleware/midd");

router.get("/customer", customer.getCustomer);
router.delete("/customer", customer.deleteCustomer);
router.post("/customer", middleware.createCustmerMid, customer.createCustomer);

// Card API
// 1. Get all Card List[GET]
// 2. Create new card [POST]
const card = require("../controller/cardController");

router.get("/card", card.getCard);
router.post("/card", middleware.createCard, card.createCard);

module.exports = router;
