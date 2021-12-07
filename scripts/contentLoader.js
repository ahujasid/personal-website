window.onload = function()
{
    fade1 = document.getElementsByClassName('fade1');

    for (var idx= 0; idx < fade1.length; ++idx){
      fade1[idx].style.animation="fadeIn 0.4s ease-out forwards";
    }

    fade2 = document.getElementsByClassName('fade2');

    setTimeout(function(){
        for (var idx= 0; idx < fade2.length; ++idx){
            fade2[idx].style.animation="fadeIn 0.4s ease-out forwards";
          }
    },300);

    fade3 = document.getElementsByClassName('fade3');

    setTimeout(function(){
        for (var idx= 0; idx < fade3.length; ++idx){
            fade3[idx].style.animation="fadeIn 0.4s ease-out forwards";
          }
    },600);

    fade4 = document.getElementsByClassName('fade4');

    setTimeout(function(){
        for (var idx= 0; idx < fade4.length; ++idx){
            fade4[idx].style.animation="fadeIn 0.4s ease-out forwards";
          }
    },700);

    fade5 = document.getElementsByClassName('fade5');

    setTimeout(function(){
        for (var idx= 0; idx < fade5.length; ++idx){
            fade5[idx].style.animation="fadeIn 0.4s ease-out forwards";
          }
    },800);

 


    opacityAnim = document.getElementsByClassName('opacityAnim');

    if(window.screen.width < 1024){
        setTimeout(function(){
            for (var idx= 0; idx < opacityAnim.length; ++idx){
                
                opacityAnim[idx].style.animation="opacityIn 0.4s linear forwards";
              }
        },400);

        setTimeout(function(){
          document.getElementById('gradient-1').style.animation = "gradientIn 0.2s linear forwards";
          document.getElementById('gradient-2').style.animation = "gradientIn 0.2s linear forwards";
        },300);
    }

    else{
    setTimeout(function(){
        for (var idx= 0; idx < opacityAnim.length; ++idx){
            
            opacityAnim[idx].style.animation="opacityIn 0.4s linear forwards";
          }
    },1000);

    setTimeout(function(){
      document.getElementById('gradient-1').style.animation = "gradientIn 0.2s linear forwards";
      document.getElementById('gradient-2').style.animation = "gradientIn 0.2s linear forwards";
    },900);
    }

    
    

   
}