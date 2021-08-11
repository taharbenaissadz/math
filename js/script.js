var tod=new Date();
var weekday=new Array("الأحد","الإثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت");
var monthname=new Array("جانفي","فبفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر");
var y = tod.getFullYear();
var m = tod.getMonth();
var d = tod.getDate();
var dow = tod.getDay();
if(document.querySelector(".date-time")){
  document.querySelector(".date-time").innerHTML = weekday[dow]  + " " + d + " " + monthname[m] + " " + y ;     
}
 

/* Check the location of each element */
/*$(window).ready(function(){
    var aa = $(".timeline").offset();
    $(this).scroll(function(event){
       console.log(event.scrollY); 
    });
});*/
window.onscroll = (e) => {
    
    var  qs= document.querySelector(".timeline");
    if(qs){
        let scropllPositin = this.scrollY + 500;
        let timelinePostiton = qs.offsetTop;
        let timelineHeight = qs.offsetHeight;
        var ss = document.querySelector(".timeline-progress");
        console.log(scropllPositin + " " + timelinePostiton);
        if(scropllPositin > timelinePostiton){
            var calc = Math.round((scropllPositin - timelinePostiton) /  timelineHeight * 100) ;
            if(calc < 100){
                ss.style.height = calc+ "%";
            }

        }
        if(this.scrollY > 100 ){
            $(".bottom-header").addClass("fixed");
        }else{
             $(".bottom-header").removeClass("fixed");
        }    
    }
    
    console.log(this.scrollY );
    if(this.scrollY > 100){
        $(".arrow-up").css("transform","scale(1)");
    }else{
        $(".arrow-up").css("transform","scale(0)");
    }
    $(".arrow-up").click(function(){
       window.scrollTo(0,0);
    });
}