var greeting ="Howdy ";
var name = "molly";
var message = ", please check your order";
var welcome = greeting + name + message;

var sign = "Montague House";
var tiles = sign.length;
var subTotal = tiles*5;
var shipping = 7;
var grandTotal = subTotal + shipping;
var el = document.getElementById("greeting");
el.textContent = welcome;

var elSign = document.getElementById("userSign");
elSign.textContent = sign;
var elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;
var elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = `your total is ${subTotal}`;

