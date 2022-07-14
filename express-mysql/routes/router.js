const ctrl = require("../controllers/ctrl")
const router = require("express").Router();

router.route('/')
    .get(ctrl.getMovies)

module.exports = router;

