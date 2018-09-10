const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.json({"error" : false,"message" : "Hello World"});
};