/**
 * Created by giaun on 24/05/2017.
 */
var myApp = angular.module('Store',[]);
myApp.controller('storeController',function(){
    //tao ra mot cai bien chua products de gui qua view
    this.product = products;
});

//----controller menu---
myApp.controller('panelController',function(){

    //set-up tab default
    this.tab = 'des';
    //
    this.setTab = function(tab){
        this.tab = tab;
    };
    //xac dinh tab dang duoc chon
    this.isSelected = function(tab){
        return this.tab === tab;
    };
});

//-----controller review--
myApp.controller('ReviewController',function(){
    this.review = {};

    //xuly khi submit
    this.addReview = function(product){
        product.reviews.push(this.review);
        this.review = {};
    };
});
var products = [
    {
        name : "Iphone 6 128G",
        price: 'Gia: 430 $',
        description: "This is content description for product",
        images : [
            {
                full : "images/ipad.jpg",
                thumb : "images/ipad.jpg"
            }

        ],
        inStock: true,
        reviews : [
            {
                stars: 5,
                body: "I love this product.",
                author: "giaunt@outlook.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "giaunt@outlook.com"
            }
        ]
    },
    {
        name: "Samsung S8 128G",
        price: 'Gia: 930 $',
        description: "This is content description for product",
        images: [
            {
                full: "images/ipad.jpg",
                thumb: "images/ipad.jpg"
            }

        ],
        inStock: true,
        reviews: [
            {
                stars: 5,
                body: "I love this product.",
                author: "giaunt@outlook.com"
            },
            {
                stars: 1,
                body: "This product sucks",
                author: "giaunt@outlook.com"
            }
        ]
    }
];

//------------- custom directive
myApp.directive('productTitle',function(){
    return {
        restrict: 'E',
        templateUrl: 'product-title.html'
    };
});

myApp.directive('productPanel',function(){
    return {
        restrict:'E',
        templateUrl: 'product-panel.html',
        controller: function(){
            this.tab='des';
            this.setTab = function(tab){
                this.tab = tab;
            };
            this.isSelected = function(tab){
                return this.tab === tab;
            }
        },
        controllerAs:'panel'
    }
});