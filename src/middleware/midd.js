const customerSchema = require("../module/custermerSchema");
const cardSchema = require("../module/cartSchema");
const { findOne } = require("../module/custermerSchema");

function isValidStatus(status) {
  return ["ACTIVE", "INACTIVE"].indexOf(status) !== -1;
}
function isValidType(status) {
  return ["REGULAR", "SPECIAL"].indexOf(status) !== -1;
}

module.exports.createCustmerMid = async (req, res, next) => {
  let data = req.body;
  let {
    firstName,
    lastName,
    mobileNumber,
    DOB,
    emailID,
    address,
    customerID,
    status,
  } = data;

  if (!isValidStatus(status)) {
    return res
      .status(400)
      .send({ status: false, msg: "status Should Be ACTIVE/INACTIVE" });
  }

  if (typeof firstName != "string") {
    return res
      .status(400)
      .send({ status: false, msg: "First-Name  Type Should Be String" });
  }
  if (typeof lastName != "string") {
    return res
      .status(400)
      .send({ status: false, msg: "last-Name Type Should Be String" });
  }
  if (mobileNumber) {
    const result = await customerSchema.findOne({ mobileNumber: mobileNumber });
    if (typeof mobileNumber != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "Mobile-Number Type Should Be String" });
    }
    if (!/^[6-9]\d{9}$/.test(data.mobileNumber)) {
      return res
        .status(400)
        .send({ status: false, message: "Mobile-Number Should Be 10 Digits" });
    }
    if (result) {
      return res
        .status(400)
        .send({ status: false, message: "Mobile-Number Already Exist" });
    }
  }
  if (DOB) {
    if (typeof DOB != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "DOB Should be Date type" });
    }

    if (
      !/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(
        data.DOB
      )
    ) {
      return res
        .status(400)
        .send({ status: false, msg: "DOB Should be in dd/mm/yyyy" });
    }
  }

  if (emailID) {
    const result = await customerSchema.findOne({ emailID: emailID });
    if (typeof emailID != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "email-ID Type Should Be String" });
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.emailID)) {
      return res
        .status(400)
        .send({ status: false, message: "Invalid Email Id" });
    }

    if (result) {
      return res
        .status(400)
        .send({ status: false, message: "Email-Id Already Exist" });
    }
  }

  if (typeof address != "string") {
    return res
      .status(400)
      .send({ status: false, msg: "Address  Type Should Be String" });
  }

  if (customerID) {
    if (typeof customerID != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "customerID  Type Should Be String" });
    }
    if (
      !/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/.test(
        data.customerID
      )
    ) {
      return res
        .status(400)
        .send({ status: false, msg: "Customer-ID Should Be Valid" });
    }
  }

  if (status) {
    if (typeof status != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "status  Type Should Be String" });
    }
    if (
      status.toUpperCase() != "ACTIVE" &&
      status.toUpperCase() != "INACTIVE"
    ) {
      return res
        .status(400)
        .send({ status: false, msg: "status Should Be ACTIVE/INACTIVE" });
    }
  }

  next();
};

module.exports.createCard = (req, res, next) => {
  let data = req.body;
  let { cardType, customerName, status, vision } = data;
  if (vision) {
    if (typeof vision != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "vision  Type Should Be String" });
    }
  }
  if (cardType) {
    if (typeof cardType != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "cardType  Type Should Be String" });
    }
    if (!isValidType(cardType)) {
      return res.status(400).send({
        status: false,
        msg: "cardType  Type Should Be [REGULAR/SPECIAL]",
      });
    }
  }
  if (customerName) {
    if (typeof customerName != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "customerName  Type Should Be String" });
    }
  }
  if (status) {
    if (!isValidStatus(status)) {
      return res
        .status(400)
        .send({ status: false, msg: "status Should Be ACTIVE/INACTIVE" });
    }
    if (typeof status != "string") {
      return res
        .status(400)
        .send({ status: false, msg: "status  Type Should Be String" });
    }
  }
  next();
};

// cardNumber string Auto_increment e.g: C001

// cardType String [REGULAR/SPECIAL]

// customerName string

// status string [ACTIVE/INACTIVE] Default: ACTIVE

// vision string

// customerID string Reference
