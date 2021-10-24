$(function(){
let hako=0;

function checkbox(){
   if (hako>5){
       $("#content").text(hako+"個入っています。。箱はいっぱいです。箱を空にします。")
       hako=0;
   }
   else if (hako <=0){
       hako=0;
       $("#content").text(hako+"個入っていません");
   }
   else{
    $("#content").text(hako+"個入っています。まだ入ります。");
   }
}

$("#button01").on("click",function(){
    sayHellow();
})

$("#button02").on("click",function(){
    saysomething(txt1);
})

$("#button03").on("click",function(){
    samTwo(txt1,txt2);
})

$("#button04").on("click",function(){
    samTwo(num1,num2);
})

$("#button05").on("click",function(){
    samTwo(txt1,txt2);

})
})