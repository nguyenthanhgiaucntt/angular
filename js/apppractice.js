/**
 * Created by giaun on 23/05/2017.
 */
var myApp = angular.module('Store',[]);
myApp.controller('mainController',function(){
    this.product = products;
});

myApp.controller('panelController', function () {
    //set default tab
    this.tab = 'description';

    //khai bao function setTab de set lai gia tri chi tab
    this.setTab = function(tab){
        this.tab = tab;
    };

    //khai bao function kiem tra tab duoc truyen vao la tab
    // dang duoc chon
    this.isSelected = function(tab){
        return this.tab === tab;
    };

});

var products = [
    {
        name: 'iPad Air 2 64G',
        price: 499,
        description: 'The newst Apple iPad.',
        images: [
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            },
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            }
        ],
        inStock: true
    },
    {
        name: 'iPad Mini 4 164G',
        price: 499,
        description: 'The newst Apple iPad.',
        images: [
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            },
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            }
        ],
        inStock: false
    },
    {
        name: 'iPad Air 2 260G',
        price: 499,
        description: 'The newst Apple iPad.',
        images: [
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            },
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            }
        ],
        inStock: true
    },
    {
        name: 'iPad Pro 32G',
        price: 499,
        description: 'The newst Apple iPad.',
        images: [
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            },
            {
                full:"images/ipad.jpg",
                thumb:'images/tab.jpg'
            }
        ],
        inStock: false
    }
];