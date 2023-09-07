"use strict";
let Book = function(title, Author , genre, price){
    this.title=title;
    this.Author=Author;
    this.genre=genre;
    this.price=price;

    this.getBookInfo=function(){
        return `Title: ${this.title}, Author: ${this.Author.authorName}, Genre: ${this.genre}, Price: ${this.price}`
    }
}
let Author = function(authorName, birthYear, nationality){
    this.authorName=authorName;
    this.birthYear=birthYear;
    this.nationality=nationality;
}
let author1 = new Author("JK Rowling", 1965, "British");
let author2 = new Author("Stan Lee", 1922, "USA");

let book1 = new Book("Harry Potter - and the Philosopher's Stone", author1, "Magic", 2039);
let book2 = new Book("Spider-Man", author2, "Super Hero", 3002);
let book3 = new Book("Fantastic Beasts - And Where To Find Them", author1, "Magic, Adventure", 1003);
let book4 = new Book("Harry Potter - and the Cursed Child", author1, "Magic", 1894);
let book5 = new Book("Iron Man", author2, "Super Hero, Sci-Fi", 4002);
let book6 = new Book("The Avengers", author2, "Super Hero Universe", 5044);


console.log(book1.getBookInfo())
console.log(book2.getBookInfo())
console.log(book3.getBookInfo())
console.log(book4.getBookInfo())
console.log(book5.getBookInfo())
console.log(book6.getBookInfo())
