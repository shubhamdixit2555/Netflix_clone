

let first_dis = document.querySelector(".first_dis");
let second_dis = document.querySelector(".second_dis");
let third_dis = document.querySelector(".third_dis");
let fourth_dis = document.querySelector(".fourth_dis");
let fivth_dis = document.querySelector(".fivth_dis");
let sixth_dis = document.querySelector(".sixth_dis");

let first_dis_btn = document.querySelector(".first_dis_btn");
let second_dis_btn = document.querySelector(".second_dis_btn");
let third_dis_btn = document.querySelector(".third_dis_btn");
let fourth_dis_btn = document.querySelector(".fourth_dis_btn");
let fivth_dis_btn = document.querySelector(".fivth_dis_btn");
let sixth_dis_btn = document.querySelector(".sixth_dis_btn");

let first_dis_img = document.querySelector(".first_dis_img");
let second_dis_img = document.querySelector(".second_dis_img");
let third_dis_img = document.querySelector(".third_dis_img");
let fourth_dis_img = document.querySelector(".fourth_dis_img");
let fivth_dis_img = document.querySelector(".fivth_dis_img");
let sixth_dis_img = document.querySelector(".sixth_dis_img");

let value = 0;

first_dis_btn.addEventListener("click", function(){
    if(value == 0){
        first_dis.style.display="flex";
        first_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        first_dis.style.display="none";
        first_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})

second_dis_btn.addEventListener("click", function(){
    if(value == 0){
        second_dis.style.display="flex";
        second_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        second_dis.style.display="none";
        second_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})
third_dis_btn.addEventListener("click", function(){
    if(value == 0){
        third_dis.style.display="flex";
        third_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        third_dis.style.display="none";
        third_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})
fourth_dis_btn.addEventListener("click", function(){
    if(value == 0){
        fourth_dis.style.display="flex";
        fourth_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        fourth_dis.style.display="none";
        fourth_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})
fivth_dis_btn.addEventListener("click", function(){
    if(value == 0){
        fivth_dis.style.display="flex";
        fivth_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        fivth_dis.style.display="none";
        fivth_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})
sixth_dis_btn.addEventListener("click", function(){
    if(value == 0){
        sixth_dis.style.display="flex";
        sixth_dis_img.style.transform="rotate(45deg)";
        value = 1;
    } else{
        sixth_dis.style.display="none";
        sixth_dis_img.style.transform="rotate(0deg)";
        value = 0;
    }
})
