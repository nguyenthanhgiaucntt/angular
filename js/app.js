//var txtName = document.getElementById('txtName');
//    txtName.addEventListener('keypress',function(event){
//        console.log("key pressed!!")
//    });

//---------------bai 8 MVStar---
//trong angular chi khai bao duy nhat 1 bien  toan cuc

//var myApp = angular.module('myApp',[]);
//
////dinh nghia controller
//myApp.controller('mainController',function(){
//    //day la ham khaibao toan bo nghiep vu cua controller nay.
//
//});

//-----------Bai 9 - Dependence injection
//-- có nghĩa là bơm vào 1 đối tượng cho nó, giống như quăng tao cái bon ta cùng ném ra ngoài
// tức là quăng tao 1 đối tượng từ bên ngoài(API) ta sẽ xuất giá trị nó ra mà không phụ thuộc vào
//-- nhiều vài API đó

//--tạo 1 đối tượng
var Person = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

//--khai báo 1 hàm in đối tượng đó ra
var logPerson = function(){

    var hoa = new Person("Hoa","Le");
    //console.log(hoa);
}
logPerson();
//----------- với cách ở trên thì không ứng dụng được Dependence injection
//-- để ứng dụng Dependence injection ta truyền vào function 1 tham số
// để khi ta gọi hàm thì ta truyền tham số vào chính là 1 đối tượng

var logPerson = function(person){
    console.log(person);
}
var hoa = new Person("Alice","Lang");
logPerson(hoa);

