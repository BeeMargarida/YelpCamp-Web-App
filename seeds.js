var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
        {
            name: "Cloud's Rest", 
            image:"https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg",
            description: "Ut eu metus eu nunc scelerisque tristique in ac dui. Sed vestibulum accumsan elit, vitae hendrerit massa ornare sed. Fusce vulputate, sem id tristique porta, diam risus pulvinar quam, et accumsan lectus ipsum ut risus. Curabitur turpis turpis, bibendum id arcu vel, posuere aliquam ex. Fusce non lectus justo. Etiam ligula metus, accumsan fermentum volutpat pharetra, sodales vel sapien. Suspendisse finibus eleifend lectus quis efficitur. Donec nunc tellus, semper et eleifend eget, pretium at turpis. Quisque tincidunt eleifend diam in mattis. Sed eget lorem eget est maximus placerat a sit amet metus. Praesent tempus felis velit, vitae tempus ligula sagittis gravida."
        },
        {
            name: "Daisy's Stop",
            image: "https://farm4.staticflickr.com/3922/15186756959_2b94ea5fe6.jpg",
            description: "Ut eu metus eu nunc scelerisque tristique in ac dui. Sed vestibulum accumsan elit, vitae hendrerit massa ornare sed. Fusce vulputate, sem id tristique porta, diam risus pulvinar quam, et accumsan lectus ipsum ut risus. Curabitur turpis turpis, bibendum id arcu vel, posuere aliquam ex. Fusce non lectus justo. Etiam ligula metus, accumsan fermentum volutpat pharetra, sodales vel sapien. Suspendisse finibus eleifend lectus quis efficitur. Donec nunc tellus, semper et eleifend eget, pretium at turpis. Quisque tincidunt eleifend diam in mattis. Sed eget lorem eget est maximus placerat a sit amet metus. Praesent tempus felis velit, vitae tempus ligula sagittis gravida."
        },
        {
            name: "River Wood",
            image: "https://farm9.staticflickr.com/8314/7968774876_11eafbfbb7.jpg",
            description: "Ut eu metus eu nunc scelerisque tristique in ac dui. Sed vestibulum accumsan elit, vitae hendrerit massa ornare sed. Fusce vulputate, sem id tristique porta, diam risus pulvinar quam, et accumsan lectus ipsum ut risus. Curabitur turpis turpis, bibendum id arcu vel, posuere aliquam ex. Fusce non lectus justo. Etiam ligula metus, accumsan fermentum volutpat pharetra, sodales vel sapien. Suspendisse finibus eleifend lectus quis efficitur. Donec nunc tellus, semper et eleifend eget, pretium at turpis. Quisque tincidunt eleifend diam in mattis. Sed eget lorem eget est maximus placerat a sit amet metus. Praesent tempus felis velit, vitae tempus ligula sagittis gravida."
        }
    ];

function seedDB(){
    //Remove all Campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("Removed Campgrounds!"); 
            //Add few Campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground) {
                    if(err){
                        console.log(err);
                    } else {
                        console.log("Added Campground");
                        //Create Comment
                        Comment.create(
                            {
                                text: "This place is great, but there is no internet",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created New Comment");
                                }
                            });
                    }
                });
            });
        }
    });
    //Add few Comments
}

module.exports = seedDB;