const ctrl = require("../controllers/ctrl")
const router = require("express").Router();

const PORT = 443;



router.route('/movie')
    .get(ctrl.getMovies)

router.route('/search')
    .post(ctrl.getTables)

router.route('/post')
    .post(ctrl.getPost)

router.route('/shop')
    .get(ctrl.getShop)

module.exports = router;

