const cardSchema = require("../module/cartSchema");
const { findOneAndUpdate } = require("../module/custermerSchema");

module.exports.getCard = async (req, res) => {
  try {
    const result = await cardSchema.find().select({ __v: 0 });

    res.status(200).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
module.exports.createCard = async (req, res) => {
  try {
    const data = { cardNumber: "C003" };
    if (req.body.status) {
      data.status = req.body.status;
    }
    if (req.body.customerName) {
      data.customerName = req.body.customerName;
    }
    if (req.body.vision) {
      data.vision = req.body.vision;
    }
    if (req.body.customerID) {
      data.customerID = req.body.customerID;
    }

    const result = await cardSchema.create(data);

    res.status(201).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
