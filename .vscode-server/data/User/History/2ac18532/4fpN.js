const ctrl = require("../controllers/ctrl")

router.route('/')
    .get(ctrl.getMovies)

module.exports = router;

