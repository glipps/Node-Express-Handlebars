var express = require("express");
var pizza_router = express.Router();
var pizza_call = require("../models/pizza.js");
var bodyParser = require("body-parser");

pizza_router.use(bodyParser.json());
pizza_router.use(bodyParser.urlencoded({extended: false}));
pizza_router.use(bodyParser.text());
pizza-router.use(bodyParser.json({type:"application/vnd.api + json"}));

pizza_router.get("/", function(request, reposonse) {
    Response.redirect("/pizzar");
});

pizza_router.get("/pizza", function(request, response) {
    pizza_call.read(function(data) {
        var hbs_object = {pizza: data};
        response.render("index", hbs_object);
    });
    });

pizza_router.post("/pizza/add", function(response, response) {
    pizza_call.insert(response.body.user_pizza, function (data) {
        response.redirect("/pizza");
    });
});

pizza_router.put("/pizza/updte/:?", function(request, repsonse) {
    var user_id = parseInt(request.params.id);
    pizza_call.update(uder_id, function(data) {
        response.redirect("/pizza");
    });
});

module.exports = pizza_router;

