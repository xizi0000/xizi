// window.onload = function() {
//     showrRow();
// }
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
        const height = showrow.offsetHeight;
        showrow.style.left = this.getAttribute('data-index') * 100 - 10 + 'px';
        showrow.style.transform = "translateY(205px)";
        item.classList.remove('active');
        this.classList.add('active');
        acc.style.left = this.getAttribute('data-index') * 100 + 'px';
        // 显示对应二维码，使用getAttribute方法获取HTML自定义索引属性
    });
}
// 遍历每个li为其添加鼠标悬浮、鼠标移除事件
// list.forEach((item) => {
//     item.addEventListener('mouseover', changeClass
//     );
//     item.addEventListener('mouseout', function() {
//         list.forEach((item) => {
//             item.classList.remove('active');
//         });
//         showrow.style.display = "none";
//         twomashow.src = '';
//     })
// })

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
var falg = true;

function showrRow() {
    if (falg) {
        roter.classList.remove('rotate1');
        roter.classList.add('rotate');
        tobig.classList.add('trYdown')
        tobig.classList.remove('trYup')
        falg = false;
    } else {
        roter.classList.add('rotate1');
        roter.classList.remove('rotate');
        tobig.classList.add('trYup')
        tobig.classList.remove('trYdown')
            // let element = document.styleSheets[0].cssRules[0].style;
            // element.removeProperty('left')
        showrow.removeAttribute('style', 'left')
        acc.removeAttribute('style', 'left')
        falg = true;
    }
}
tab.addEventListener('click', showrRow)
window.addEventListener('keyup', function(e) {
        if (e.keyCode === 13) {
            showrRow();
        }
    })
    // document.onkeydown = function() {
    //     var e = window.event || arguments[0];
    //     if (e.keyCode == 123) {
    //         alert('请尊重劳动成果!');
    //         return false;
    //     } else if ((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)) {
    //         alert('请尊重劳动成果!');
    //         return false;
    //     } else if ((e.ctrlKey) && (e.keyCode == 85)) {
    //         alert('请尊重劳动成果!');
    //         return false;
    //     } else if ((e.ctrlKey) && (e.keyCode == 83)) {
    //         alert('请尊重劳动成果!');
    //         return false;
    //     }
    // }
    // document.oncontextmenu = function() {
    //     alert('请尊重劳动成果!');
    //     return false;
    // }