$('.checkall').change(function() {

    //		$('.checkall,.j-checkbox').prop('checked',$(this).prop("checked"))
    var fag = $('.checkall').prop(checked);
    $('.checkall,.j-checkbox').prop('checked', fag);

    if ($(this).prop('checked')) {
        $('.j-checkbox').parents('.cart-item').addClass('car-item-bg')
    } else {
        $('.j-checkbox').parents('.cart-item').removeClass('car-item-bg')
    }
    getSum();
});
$('.j-checkbox').change(function() {
    if ($('.j-checkbox:checked').length === $('.j-checkbox').length) {
        $('.checkall').prop('checked', true);
    } else {
        $('.checkall').prop('checked', false);
    }

    if ($(this).prop('checked')) {
        $(this).parents('.cart-item').addClass('car-item-bg')
    } else {
        $(this).parents('.cart-item').removeClass('car-item-bg')
    }
    getSum();
});

$('.increment').click(function() {
    $(this).parents('.p-num').siblings('.p-checkbox').children('input').prop('checked', true);
    $(this).parents('.cart-item').addClass('car-item-bg');
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
    // if (d == 1) {
    //     return false;
    // }
    d--;
    if (d < 1) {
        $(this).parents('.cart-item').remove();
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

$('.p-action a').click(function() {
    $(this).parents('.cart-item').remove();
    getSum();
});

$('.remove-batch').click(function() {
    $('.j-checkbox:checked').parents('.cart-item').remove();
    getSum();
});
$('.clear-all').click(function() {
    $('.cart-item').remove();
    getSun();
})