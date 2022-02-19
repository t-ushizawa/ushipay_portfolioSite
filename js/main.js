
 //画面ロード後の処理
 jQuery(window).on('load', function () {
    $('.loading_page').delay(900).fadeOut(300);
    $('.loader').delay(600).fadeOut(300);
    setTimeout(function () {
        $('.site-title-sub').addClass('view');
    }, 2000);
    setTimeout(function () {
        $('.site-title').addClass('view2');
    }, 2500);
    setTimeout(function () {
        $('.headerNav').addClass('view');
        $('.icon-nav').addClass('view');
        $('.site-title span').addClass('fc-red');
        $('.arrow-icon').show();
    }, 4200);
     //スクロール時の処理
     $(window).on('scroll', function () {
        var aboutPOS = $('.about').offset().top;
        var worksPOS = $('.works').offset().top;
        var skillPOS = $('.skill').offset().top;
        var aboutColor = $('.about').data('bgcolor');
        var worksColor = $('.works').data('bgcolor');
        var skillColor = $('.skill').data('bgcolor');
        var scroll = $(this).scrollTop();
        var scrollheight = $(this).height() + scroll;
        var bgColor = $('.changeBgColor');

        //背景の色が変化する処理
        if (scrollheight <= worksPOS + 200) {
            $(bgColor).css('background-color', aboutColor);
        }
        if (scrollheight >= worksPOS + 250) {
            $(bgColor).css('background-color', worksColor);
        }
        if (scrollheight >= skillPOS + 250) {
            $(bgColor).css('background-color', skillColor);
        }
        //メニューバーを目立たせる処理
        var $nhome = $('.nhome');
        var $nabout =$('.nabout');
        var $nworks= $('.nworks');
        var $nskill = $('.nskill');
        if (scroll < aboutPOS) {
            $nhome.addClass('active');
            $nabout.removeClass('active');
            $nworks.removeClass('active');
            $nskill.removeClass('active');
        }
        if (scroll >= aboutPOS && scroll < worksPOS) {
            $nabout.addClass('active');
            $nhome.removeClass('active');
            $nworks.removeClass('active');
        }
        if (scroll >= worksPOS && scroll < skillPOS) {
            $nworks.addClass('active');
            $nabout.removeClass('active');
            $nskill.removeClass('active');
            $nhome.removeClass('active');
        }
        if (scroll >= skillPOS) {
            $nskill.addClass('active');
            $nworks.removeClass('active');
            $nhome.removeClass('active');
            $nabout.removeClass('active');
        }

        //各種要素表示処理
        if (scrollheight >= $('.profile').offset().top) {
            $('.profile-img').addClass('view');
            setTimeout(function () {
                $('.profile-msg').addClass('view');
            }, 1000);
        }
        if (scrollheight >= $('.heading-sub').offset().top) {
            $('.heading-sub').addClass('view');
        }
        $(".works-box").each(function (i) {
            if (scrollheight > $(this).offset().top) {
                var target = this;
                setTimeout(function () {
                    $(target).addClass("view");
                }, 300 * i);
            }
        });
        $(".skill-icon.fa-solid").each(function (i) {
            if (scrollheight > $(this).offset().top) {
                var target = this;
                setTimeout(function () {
                    $(target).addClass("view3");
                }, 300 * i);
            }
        });
    });

    //ナビクリック時の処理
    $('.nhome').on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 500);
    })
    $('.nabout').on('click', function () {
        var aboutPOS = $('.about').offset().top;
        $('html,body').animate({ scrollTop: aboutPOS }, 500);
    })
    $('.nworks').on('click', function () {
        var worksPOS = $('.works').offset().top;
        $('html,body').animate({ scrollTop: worksPOS }, 500);
    })
    $('.nskill').on('click', function () {
        var skillPOS = $('.skill').offset().top;
        $('html,body').animate({ scrollTop: skillPOS+0.2 }, 500);
    })

    //ワークスアイコンのクリック時の処理
    $(".works-img").on('click', function () {
        if ($(this).data('modal') == 'portfolioSite') {
            $('.grey_area').show();
            $('.portfolio.modal_area').addClass('view4');
            $('body').addClass('notMove');
        }
        if ($(this).data('modal') == 'blog') {
            $('.grey_area').show();
            $('.blog.modal_area').addClass('view4');
            $('body').addClass('notMove');
        }
    });

    //モーダル内の画像処理
    $('.portfolio .modal_child_img').on('click', function () {
        var imgSrc = $(this).attr('src');
        $('.portfolio .modal_main_img').attr('src', imgSrc);
    });
    $('.blog .modal_child_img').on('click', function () {
        var imgSrc = $(this).attr('src');
        $('.blog .modal_main_img').attr('src', imgSrc);
    });
    
    //closeボタンクリック時の処理
    $(".close").on('click', function () {
        $('body').removeClass('notMove');
        setTimeout(function () {
            $('.portfolio .modal_main_img').attr('src', 'img/screenImage1.png');
            $('.blog .modal_main_img').attr('src', 'img/screenImage2.png');
            $('.grey_area').hide();

        }, 700);
        $('.modal_area').removeClass('view4');
    })

    //スキルアイコンのホバー時の処理
    $('.skill-icon.fa-solid').hover(function () {
        $(this).next().next().addClass('view');
    }, function () {
        $(this).next().next().removeClass('view');
    });

})

$(function () {
    setTimeout(function() {
        $('.loading_page').delay(900).fadeOut(800);
        $('.loader').delay(600).fadeOut(300);
    }, 10000);
    
});
