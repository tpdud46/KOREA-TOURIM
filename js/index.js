$(function () {
    $('#container>section, .infoWrap>div').on("mousewheel", function (e) {
        e.preventDefault();
        let moveY = e.originalEvent.wheelDelta;
        let target;

        if ($(this).children().hasClass("on")) {
            console.log("sub")
            target = $(".infoWrap>div");
        }
        else {
            console.log("main");
            target = $("section");
        }

        if (moveY > 0) {
            try {
                let prev = target.prev().offset().top;
                $("html, body").stop().animate({ scrollTop: prev }, 1000);
                console.log(1)
            } catch (e) {
                console.log(2)
                return false;
            }
        } else {
            try {
                let next = target.next().offset().top;
                $('html,body').stop().animate({ scrollTop: next }, 1000);
                if (next == 0) {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    });
    $(".scrollBtn").on("click", function (e) {
        e.preventDefault();
        let next = $(this).parents("section").next().offset().top;
        $('html,body').stop().animate({ scrollTop: next }, 1000);
    })

    $(".more").on("click", function (e) {
        e.preventDefault();

        $(".infoWrap").toggleClass('off');
        $(this).parents(".infoWrap").toggleClass('on').removeClass('off');
        $("header").toggleClass('on');

        if ($(this).parents().hasClass('on')) {
            $(this).text('돌아가기');
        } else {
            $(this).text('더보기');
        }
        let parentsSi = $(this).parents(".infoWrap").siblings();
        if (parentsSi.hasClass("off")) {
            console.log("of")
            parentsSi.find(".textBox").css('display', 'none');
        } else {
            setTimeout(() => {
                parentsSi.find(".textBox").css('display', 'block');
            }, 200);
        }
    })

    $(".infoWrap").eq(2).find(".more").on("click", function () {
        if ($(this).parents().hasClass('on')) {
            $(this).parents(".info").children("img").attr("src", "images/자연경관3.jpg")
        } else {
            $(this).parents(".info").children("img").attr("src", "images/자연경관1.jpg")
        }
    })
});