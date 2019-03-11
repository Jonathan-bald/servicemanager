const router = require("express").Router();
const carRoutes = require("./cars");

// car routes
router.use("/cars", carRoutes);

module.exports = router;