const cardSchema = require("../module/cartSchema");

module.exports.getCard = async (req, res) => {
  try {
    const result = await cardSchema.find().select({ cardNumber: 1 });

    res.status(200).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
module.exports.createCard = async (req, res) => {
  try {
    let num = 1;
    let data = { cardNumber: "C" + (0 + 0 + 1 + num++) };

    const result = await cardSchema.create(data);

    res.status(201).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
