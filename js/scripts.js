jQuery(function($){
        const navMenu = jQuery(".nav_header");
        let navMenuTop = navMenu.offset().top;
        const scrollToTop =$(".scroll_to_top")

        

        $(window).on("scroll",function(){
            let winScrollTopValue =$(this).scrollTop();
            if (winScrollTopValue > navMenuTop){
                navMenu.addClass("nav_header_fixed")
            } else {
                navMenu.removeClass("nav_header_fixed")
            }
        });
        if($(".data-fancybox").length > 0) {
            $('[data-fancybox=""gallery"]').fancybox({
            loop: true,
            autoFocus: false,
            animationEffect: "zoom-in-out",
            transitionEffect: "tube",
            transitionDuration: 1000
            });
        }

        if ($(".owl-carousel").length > 0)  {
            $('.owl-carousel').owlCarousel({
                loop:true,

                nav:false,
                autoplay:true,
                smartSpeed:1500,
                autoplayTimeout:3000,
                touchDrag:true,
                autoHeight:true,
                responsive:{
                    0:{
                        items:1
                    }
                    ,
                    600:{
                        items:1
                    },
                    1000:{
                        items:2
                    }
                }
            });
        }
    });
        const menu = document.querySelector(".nav_list");
        const menuToggler = document.querySelector(".open_menu");
        function menuToggle() {
            menu.classList.toggle("opened");
            menuToggler.classList.toggle("opened");
          }


