$('.checkall').change(function() {
    $('.checkall,.j-checkbox').prop('checked', $(this).prop("checked"));

    if ($(this).prop('checked')) {
        $('.j-checkbox').parents('.cart-item').addClass('car-item-bg');
    } else {
        $('.j-checkbox').parents('.cart-item').removeClass('car-item-bg');
    }
    shutPay();
    getSum();
});
$('.j-checkbox').change(function() {
    if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
        $('.checkall').prop('checked', true);
    } else {
        $('.checkall').prop('checked', false);
    }

    if ($(this).prop('checked')) {
        $(this).parents('.cart-item').addClass('car-item-bg');
        $('.btn-area').css('background', '#e54346');
    } else {
        $(this).parents('.cart-item').removeClass('car-item-bg');
    }
    shutPay();
    getSum();
});

$('.increment').click(function() {
    $(this).parents('.p-num').siblings('.p-checkbox').children('input').prop('checked', true);
    $(this).parents('.cart-item').addClass('car-item-bg');
    if ($(this).parents('.p-num').siblings('.p-checkbox').children('input').prop('checked')) {
        $('.btn-area').css('background', '#e54346');
    } else {
        $('.btn-area').css('background', '#DBDBDB');
    }
    var k = $(this).siblings('.itxt').val();
    k++;
    $(this).siblings('.itxt').val(k);

    var par = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
    var price = (par * k).toFixed(2);
    $(this).parents('.p-num').siblings('.p-sum').text('￥' + price);
    getSum();
});

$('.decrement').click(function() {
    var d = $(this).siblings('.itxt').val();
    d--;
    if (d < 1) {
        $(this).parents('.cart-item').remove();
        shutPay();
    }
    $(this).siblings('.itxt').val(d);

    var par = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
    var price = (par * d).toFixed(2);
    $(this).parents('.p-num').siblings('.p-sum').text('￥' + price);
    getSum();
});

$('.itxt').change(function() {
    var n = $(this).val();
    var p = $(this).parents('.p-num').siblings('.p-price').html().substr(1);
    //		var p = p;
    var price = (p * n).toFixed(2);
    $(this).parents('.p-num').siblings('.p-sum').html("￥" + price);
    getSum();
})

$('.p-action a').click(function() {
    $(this).parents('.cart-item').remove();
    let p = JSON.parse(localStorage.getItem('paynum'))
    if(p>0){
        localStorage.setItem('paynum',JSON.stringify(p-1))
    }
    shutPay();
    getSum();
});

$('.remove-batch').click(function() {
    $('.j-checkbox:checked').parents('.cart-item').remove();
    if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
        $('.checkall').prop('checked', false);
    }
    shutPay();
    getSum();
});
$('.cleanall').click(function() {
    localStorage.removeItem('paynum')
    $('.cart-item').remove();
    $('.checkall').prop('checked', false);
    shutPay();
    getSun();
})
$('.car-logo a').click(function(){
    window.history.back(-1)
})
$('.btn-area').click(function() {
        if ($('.j-checkbox:checked').length === 0) return false;
        $('body,html').animate({
            scrollTop: 0
        }, 300);
        $('.pay').show()
        document.body.style.overflow = 'hidden'; //禁止页面滑动
    })
$('.payed').click(function(){
    localStorage.removeItem('paynum')
    window.location.href = "paynext.html";
})
$('.clo').click(function(){
    $('.pay').hide()
        document.body.style.overflow = 'auto'; //禁止页面滑动
})
    // 如果不选中商品将无法支付
function shutPay() {
    if ($('.j-checkbox').prop('checked') | $('.checkall').prop('checked')) {
        $('.btn-area').css('background', '#e54346');
    } else if ($('.j-checkbox:checked').length === 0) {
        $('.btn-area').css('background', '#DBDBDB');
    }
}
// 单个商品以及总商品求和
function getSum() {
    var count = 0;
    var item = $('.j-checkbox:checked').parents('.cart-item');
    item.find('.itxt').each(function(i, ele) {
        count += parseInt($(ele).val());
    });
    $('.amount-sum em').text(count);
    var money = 0;
    item.find('.p-sum').each(function(i, ele) {
        money += parseFloat($(ele).text().substr(1));
    })
    $('.price-sum em').text("￥" + money.toFixed(2));
}
// 购物车结算卡片悬浮
$('document').ready(function() {
        $('.pay').hide()
        $(function() {
            $(window).scroll(function() {
                if ($(window).scrollTop() > 290) {
                    $('.cart-floatbar').stop().removeClass('car-xf2').animate({ width: 1200 }, 200);
                } else {
                    $('.cart-floatbar').addClass('car-xf2').stop().animate({ width: "100%" }, 200);
                }
            });

        })
    })
    // 删除图标样式控制
$('.p-action img').hover(function() {
    $(this).attr("src", "images/image/deh.png")
}, function() {
    $(this).attr("src", "images/image/de.png")
})