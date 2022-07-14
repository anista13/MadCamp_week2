const ctrl = require("../controllers/ctrl")
const router = require("express").Router();

const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

const PORT = 443;



router.route('/movie')
    .get(ctrl.getMovies)

router.route('/search')
    .post(ctrl.getTables)

router.route('/post')
    .post(ctrl.getPost)

module.exports = router;

