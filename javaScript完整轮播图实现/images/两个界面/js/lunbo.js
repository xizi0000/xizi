$(function() {
        $('.king li').mouseenter(function() {
            //				将其兄弟li都变成小图并伴随淡入效果
            $(this).siblings('li').stop().animate({
                width: 180
            }).find('.small').stop().fadeIn().siblings('.big').stop().fadeOut();
            //				当前小li宽度变为224px,同时里面的小图片淡出,大图片淡入
            $(this).stop().animate({
                width: 400
            }).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn();

        })
    })
    //获取元素
var wrap = document.getElementsByClassName("wrap")[0];
var Btn = document.getElementsByClassName("btn")[0];
var aBanner = wrap.getElementsByClassName("banner");
var Span = Btn.getElementsByTagName("span");
var n = 0;
//初始化
aBanner[0].style.opacity = "1";
Span[0].className = "on";
//点击按钮	

for (var i = 0; i < Span.length; i++) {
    Span[i].index = i;
    Span[i].onclick = function() {
        n = this.index;
        for (var j = 0; j < Span.length; j++) {
            aBanner[j].style.opacity = 0;
            aSpan[j].className = "";
        }
        aBanner[n].style.opacity = "1";
        this.className = "on";
    }
}
setInterval(function() {
    n++;
    n %= aBanner.length;
    for (var j = 0; j < Span.length; j++) {
        aBanner[j].style.opacity = 0;
        Span[j].className = "";
    }
    aBanner[n].style.opacity = "1";
    Span[n].className = "on";
}, 3000)