"use strict";

// Задача 1

let values = 10;

for (let i = 0; i <= values; i++) {
  if (i == 0) {
    console.log(i + "– ноль это ноль");
  } else if (i % 2 == 0) {
    console.log(i + "– четное число");
  } else {
    console.log(i + "– нечетное число");
  }
}

// Задача 2

const post = {
  author: "John",
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2,
      },
    },
    {
      userId: 5,
      userName: "Jane",
      text: "loren ipsum 2",
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};
console.log(post.author);
console.log(post.comments[0].rating["dislikes"]);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Задача 3

const products = [
  {
    id: 3,
    price: 200,
  },
  {
    id: 4,
    price: 900,
  },
  {
    id: 1,
    price: 1000,
  },
];

let percent = 15;
let numb_percent = (products[0].price / 100) * percent;
products.forEach((element) => console.log(element.price - numb_percent));

//Задача 4

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];

//Сортировка по наличию фото
const productsSearch = products.filter(function (products) {
  return products.photos && products.photos.length > 0;
});
console.log(productsSearch);

//Сортировка по цене
const productsSortPrice = products.sort(function priceSort(price1, price2) {
  return price1.price - price2.price;
});
console.log(productsSortPrice);

// Задача 5
for (let i = 0; i < 9; console.log(i++)) {}

//Задача 6
for (let x = "x"; x.length <= 20; x += "x") {
  console.log(x);
}
