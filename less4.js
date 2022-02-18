"use strict";

//Задача 1.1
// es5
function Product(name, price) {
  this.name = name;
  this.price = price;
}
Product.prototype.make25PercentDiscount = function () {
  let price_percent = (this.price / 100) * 25;
  alert(this.price - price_percent);
};
let obj1 = new Product("Anton", 1000);
obj1.make25PercentDiscount();

//Задача 1.1
// es6
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    let price_percent = (this.price / 100) * 25;
    alert(this.price - price_percent);
  }
}

let obj1 = new Product("Anton", 1000);
obj1.make25PercentDiscount();

//Задача 1.2
// es5
function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
Post.prototype.edit = function (text) {
  this.text = text;
};

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

let obj1 = new AttachedPost("Anton", "Hello World", "16 feb");
obj1.edit("Какой-то текст, вместо Hello World");
obj1.makeTextHighlighted();

//Задача 1.2
// es6
class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(text) {
    this.text = text;
  }
}

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let obj1 = new AttachedPost("Anton", "Hello World", "16 feb");
obj1.edit("Какой-то текст, вместо Hello World");
obj1.makeTextHighlighted();
