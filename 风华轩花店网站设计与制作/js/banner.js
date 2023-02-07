// 获取需要操作的DOM元素
let box = document.querySelector('.container')
let imgs = document.getElementById('imgs')
let previmg = document.querySelector('.prev')
let nextimg = document.querySelector('.next')
let dotul = document.getElementById('dot')
let dots = document.getElementById('dot').getElementsByTagName('li')
let left = 0;
var timer;
toRun();
// 播放图片
function toRun() {
    if (left <= -6300) {
        left = 0
    }
    // 计算当前是第几张
    let m = Math.floor(-left / 700);
    imgs.style.marginLeft = left + 'px';
    var n = (left % 700 == 0) ? n = 2300 : n = 10;
    left -= 20;
    timer = setTimeout(toRun, n);
    dotMove(m);
    numberliMove(m);
}

// 定位图片
function changePrevAndNext(picn) {
    let cut = -(picn * 700);
    imgs.style.marginLeft = cut + 'px';
    left = cut;
}
// 上一张图
previmg.onclick = function() {
        let prev = Math.floor(-left / 700) - 1;
        if (prev < 0) {
            prev = 10
        }
        changePrevAndNext(prev)
    }
    // 下一张图
nextimg.onclick = function() {
        let next = Math.floor(-left / 700) + 1;
        if (next > 11) {
            next = 0
        }
        changePrevAndNext(next)
    }
    // 小圆点切换
dotul.onclick = function() {
        let tar = event.target;
        let clickimg = tar.innerHTML - 1;
        changePrevAndNext(clickimg)
        dotMove(clickimg)

    }
    // 小圆点样式变化
function dotMove(m) {
    for (let index = 0; index < dots.length; index++) {
        dots[index].style.backgroundColor = 'rgba(255, 255, 255, 0.3)'
    }
    dots[m].style.backgroundColor = 'brown'
}
// 小圆点向左置顶
function numberliMove(m) {
    if (m < 6) {
        dotul.style.marginLeft = -m * 35 + 'px'
    } else if (m >= 6) {
        dotul.style.marginLeft = -175 + 'px'
    }
}
// 鼠标悬浮按键动画，轮播暂停
box.onmouseover = function() {
    previmg.style.left = 70 + 'px';
    nextimg.style.right = 70 + 'px'
    clearTimeout(timer)
    let n = Math.floor(-left / 700);
    changePrevAndNext(n);
}
// 鼠标离开按键动画，轮播开始
box.onmouseout = function() {
    previmg.style.left = -100 + 'px';
    nextimg.style.right = -100 + 'px'
    toRun()
}