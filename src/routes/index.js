const router = require("express").Router();
const connectRouter = require("./connect.routes");

//Routes
router.use("/connect", connectRouter);

module.exports = router;