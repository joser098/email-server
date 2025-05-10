const connectEmailsHandler = require("../handlers/connect.handler");

const connectRouter = require("express").Router();

connectRouter.post("/", connectEmailsHandler);

module.exports = connectRouter;
