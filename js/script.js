$(document).ready(function() {
    // 轮播图配置
    $('.lazy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        speed: 500,
        arrows: false,
        fade: true
    });

    // 图片宽高适应
    var _w = parseInt($(window).width()); // 获取浏览器的宽度
    var _h = parseInt($(window).height()); // 获取浏览器的高度

    function indexImg() {
        var titleH = $(".title h2").height();
        var titleP = $(".title p").height();
        
        if (_w <= 640) {
            var hTop = parseInt((_h - titleH - 20) / 2);
            var pTop = parseInt((_h - titleP + 50) / 2);
            $(".title h2").css("top", hTop);
            $(".title p").css("top", pTop);
            $("#portfolioDel div").css({
                "width": '100%',
                "height": "auto"
            });
        } else {
            var hTop = parseInt((_h - titleH - 50) / 2);
            var pTop = parseInt((_h - titleP + 50) / 2);
            $(".title h2").css("top", hTop);
            $(".title p").css("top", pTop);
            $("#portfolioDel div").css({
                "height": _h
            });
        }
    }

    // 初始化图片布局
    indexImg();

    // 窗口大小改变时重新布局
    $(window).resize(function() {
        indexImg();
    });

    // 回到顶部功能
    $('.gotop a').click(function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    // 滚动时显示/隐藏回到顶部按钮
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.gotop').fadeIn();
        } else {
            $('.gotop').fadeOut();
        }
    });

    // 预加载图片
    function preloadImages() {
        var images = [
            '../images/banner1.jpg',
            '../images/banner2.jpg', 
            '../images/banner3.jpg'
        ];
        
        images.forEach(function(src) {
            var img = new Image();
            img.src = src;
        });
    }

    // 初始化预加载
    preloadImages();

    // 平滑滚动效果
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });

    // 页面加载动画
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

    // 添加CSS动画类
    $('style').append(`
        body {
            opacity: 0;
            transition: opacity 0.5s ease-in-out;
        }
        
        body.loaded {
            opacity: 1;
        }
        
        .title h2 {
            animation: fadeInDown 1s ease-out;
        }
        
        .title p {
            animation: fadeInUp 1s ease-out 0.5s both;
        }
        
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translate3d(0, -100%, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translate3d(0, 100%, 0);
            }
            to {
                opacity: 1;
                transform: translate3d(0, 0, 0);
            }
        }
    `);
});