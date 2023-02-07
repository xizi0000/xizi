$(function(){
    var falg = true
    function message(){ 
        if(falg){
            $('.navigation').css('right','8%')
            falg = false
        }else{
            $('.navigation').css('right','-550px') 
            falg = true
        }
    }
    $('.seaver .sitem:nth-child(2)').click(function(){
        message()
    })
    $('.seaver .sitem:nth-child(1)').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    })
    $('.sousuo').keyup(function (e) { 
        const value =  $('.sousuo').val().toString()
        if(value=='花'){
            window.location.href = 'index.html'
            $('body,html').animate({
                scrollTop: 900
            }, 500);
            // return false;
        }else if(value=='盆栽'){
            window.location.href = '盆栽.html'
            $('body,html').animate({
                scrollTop: 800
            }, 500);
            return false;
        }
    });
})

let lis = document.querySelectorAll('.miannav li')

function limove(){
    lis.forEach(item =>{
        item.classList.remove('active')
        this.classList.add('active')
    })
}
for (var i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseover', limove);
    lis[i].addEventListener('mouseout', function() {
        lis.forEach((item) => {
            item.classList.remove('active');
        });
    })
}
//进入网页判断登录状态
window.onload = function(){
    let userstate = document.querySelector('#user img')
    let exit = document.querySelector('.exit')
    let admin = JSON.parse(localStorage.getItem('loginstate'))
    touxiang()
    function touxiang(){
        if(admin){
            userstate.src = 'images/0000.jpg'
        }else{
           userstate.src = 'images/未登录.png' 
        }
    }
    exit.onclick =function(){
        admin = false
        touxiang()
    }
}
//动画序列
window.addEventListener('scroll', function () {
    let top = window.scrollY
    if(top>150){
        $('.xfsearch').css('top','50px')
        $('.header').css('background','rgba(255,255,255,0.3)')
        $('.miannav a').css('color','black')
        $('.login').css('color','black')
        this.setTimeout(()=>{
            $('.searchbox').addClass('active')
        },300)
    }
    if(top<150){
        $('.xfsearch').css('top','-50px')
        $('.header').css('background','#8ABCD1')
        $('.miannav a').css('color','white')
        $('.searchbox').removeClass('active')
        $('.login').css('color','white')
    }
    if(top>1300){
        $('.seaver .sitem:nth-child(1)').css('visibility','visible')
    }else{$('.seaver .sitem:nth-child(1)').css('visibility','hidden')}
})
//点击事件
$('.search').click(function(){
    $('.searchbox').addClass('active')
})
$('.close').click(function(){
    $('.searchbox').removeClass('active')
}) 

$('.seaver .sitem:nth-child(3)').click(function(){
    window.location.href = 'carport.html'
})


//联系我们
let list = document.querySelectorAll('.list');
let acc = document.querySelector('.acc');
let twomashow = document.querySelector('.showthis');
let showrow = document.querySelector('.towma');
let tab = document.querySelector('.link');
let roter = document.querySelector('.link img')
let tobig = document.querySelector('.main')
var twomas = ['images/app.png', 'images/qq.jpg', 'images/weChat.png', 'images/tiktok.png', 'images/ewm.jpg'];

// 添加移除鼠标悬浮时的遮罩和动画样式类
function changeClass() {
    list.forEach((item) => {
        showrow.style.display = "block";
        twomashow.src = twomas[this.getAttribute('data-index')];
        // const height = showrow.offsetHeight;
        showrow.style.left = this.getAttribute('data-index') * 70 - 25 + 'px';
        // showrow.style.transform = "translateY(205px)";
        item.classList.remove('active');
        this.classList.add('active');
        acc.style.left = this.getAttribute('data-index') * 70 + 'px';
        // 显示对应二维码，使用getAttribute方法获取HTML自定义索引属性
    });
}


for (var i = 0; i < list.length; i++) {
    list[i].addEventListener('mouseover', changeClass);
    list[i].addEventListener('mouseout', function() {
        list.forEach((item) => {
            item.classList.remove('active');
        });
        showrow.style.display = "none";
        twomashow.src = '';
    })
}