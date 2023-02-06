const customerSchema = require("../module/custermerSchema");

module.exports.getCustomer = async (req, res) => {
  try {
    const result = await customerSchema
      .find({ status: "ACTIVE" })
      .select({ __v: 0 });

    res.status(200).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};

module.exports.deleteCustomer = async (req, res) => {
  try {
    const result = await customerSchema.findOneAndUpdate(
      {
        customerID: req.body.customerID,
      },
      { status: "INACTIVE" },
      { new: true }
    );

    res.status(200).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
module.exports.createCustomer = async (req, res) => {
  try {
    const result = await customerSchema.create(req.body);

    res.status(201).send({ status: true, msg: "Sucess", data: result });
  } catch (err) {
    res
      .status(500)
      .send({ status: false, msg: "Server Error", Err: err.message });
  }
};
