$(function(){

    let txt1 = "おはようございます";
    let txt2 = "お元気ですか？";
    let num1 = 20;
    let num2 = 32;

    function sayHellow(){
        $("#content").text("こんにちは！");
    }

    function saysomething(txt){
        $("#content").text(txt1);
    }

    function samTwo(arg1,arg2){
        $("#content").text(arg1+arg2);
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
    