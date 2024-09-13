const { Router } = require("express");
const router = Router();

const cvRouter = require("./cvRouter");

router.use("/api/v1", cvRouter);

module.exports = router;
