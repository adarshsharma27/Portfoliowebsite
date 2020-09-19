document.querySelector('.darkmode-btn').addEventListener('click',function(){
  document.documentElement.classList.toggle('darkmode');
  document.querySelectorAll('.inverted').forEach((result)=>{
       result.classList.toggle('invert');
  });

});


const inc=()=>{
    let add = document.getElementById("sum").innerHTML;
     add++;
     
     document.getElementById("sum").innerHTML=add;
          
} 
 
 
 
 const dec=()=>{
     let decs= document.getElementById("sum").innerHTML;
     if(decs>0)
      decs--;
      document.getElementById("sum").innerHTML=decs;
          
 }

 $(document).ready(function(){
    $(window).scroll(function(){
        setTimeout(function() {  
            $(".cv-section").fadeIn(400).scroll();
         }, 500);
    if($(this).scrollTop() > 200)
    {
        $(".scroll-button").fadeIn(400);
        
    }
    else
    $(".scroll-button").fadeOut(400);
    
    
    });
    $(".scroll-button").click(function(){
    $('html,body').animate({
        scrollTop:0
    },1200)
    });

    });

 AOS.init();

 
 