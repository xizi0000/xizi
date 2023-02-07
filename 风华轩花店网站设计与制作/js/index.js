// 导航栏动画队列
window.addEventListener('scroll', function () {
    let top = window.scrollY
    if(top>150){
        $('.xfsearch').css('top','50px')
        $('.header').css('background','rgba(255,255,255,0.3)')
        $('.miannav a').css('color','black')
        this.setTimeout(()=>{
            $('.searchbox').addClass('active')
        },300)
    }
    if(top<150){
        $('.xfsearch').css('top','-50px')
        $('.header').css('background','#619AC3')
        $('.miannav a').css('color','white')
        $('.searchbox').removeClass('active')
    }
})
$('.search').click(function(){
    $('.searchbox').addClass('active') 
})
$('.close').click(function(){
    $('.searchbox').removeClass('active')
})
$(function(){
    $('.fenlai div:nth-child(1)').click(function() {
        let v = $(window).width()
        if(v<900){
            $('body,html').animate({
                scrollTop: 1150
            }, 500);
            return false;
        }else if(v>=900){
            $('body,html').animate({
                scrollTop: 1000
            }, 500);
            return false;
        }  
    })
    $('.fenlai div:nth-child(2)').click(function() {
        let v = $(window).width()
        if(v<900){
            $('body,html').animate({
                scrollTop: 2850
            }, 500);
            return false;
        }else if(v>=900){
            $('body,html').animate({
                scrollTop: 1700
            }, 500);
            return false;
        }  
    })
    $('.fenlai div:nth-child(3)').click(function() {
        let v = $(window).width()
        if(v<900){
            $('body,html').animate({
                scrollTop: 4550
            }, 500);
            return false;
        }else if(v>=900){
            $('body,html').animate({
                scrollTop: 2400
            }, 500);
            return false;
        }  
    })
    $('.fenlai div:nth-child(4)').click(function() {
        let v = $(window).width()
        if(v<900){
            $('body,html').animate({
                scrollTop: 6300
            }, 500);
            return false;
        }else if(v>=900){
            $('body,html').animate({
                scrollTop: 3100
            }, 500);
            return false;
        }  
    })
})
 