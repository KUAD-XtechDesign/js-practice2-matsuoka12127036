$(function(){

    let hako=0;

    $("#button01").on("click",function(){
        for(let i = 0; i < 10; i++){
        hako=hako+2;
    }

    $("#content").text(hako)
    })
    

    $("#button02").on("click",function(){
        for(let i = 0; i < 10; i++){
            hako=hako+i;
    }
    
    $("#content").text(hako)
})
    
let timer;


    $("#button03").on("click",function(){
        hako--;
        checkbox();

        $("#content").text(hako)
    },10)s

        $("#button04").on("click",function(){
            hako = 0;

            $("#content").text(hako)

            clearInterval(timer)

    })
})