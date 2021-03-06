$(document).ready(function () {
    
    
    /*btn_movil*/
    
    $('.btn_menu_movil').click(function(){
        
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $('.nav').removeClass('active');
        }else{
            $(this).addClass('active');
            $('.nav').addClass('active');
        }
    });
    
    $('.menu_pri li .material-icons').click(function(){
        $(this).next('.submenu_prin').slideToggle('fast');
    });
    
    /*CARRUSEL ENTRENADORES*/
    
    var swiper = new Swiper(".cont_list_entrenadores_home .swiper-container", {
         slidesPerView:4,
        pagination: {
            el: ".cont_list_entrenadores_home .swiper-pagination",
            clickable: true,
        },
      });
    /*CARRUSEL TESTIMONIOS*/
    
     var swiper = new Swiper(".carrusel_testm .swiper-container", {
         slidesPerView:3,
        navigation: {
          nextEl: ".carrusel_testm .swiper-button-next",
          prevEl: ".carrusel_testm .swiper-button-prev",
        },
      });
    /*CARRUSEL CLIENTES*/
    
     var swiper = new Swiper(".carrusel_clientes .swiper-container", {
         slidesPerView:5,
        navigation: {
          nextEl: ".carrusel_clientes .swiper-button-next",
          prevEl: ".carrusel_clientes .swiper-button-prev",
        },
      });
    
    /*BANNER HOME*/
    
    var swiper = new Swiper('.cont_banner_home .swiper-container', {
        autoplay: {
            delay: 6000,
        },
        speed:1000,
        pagination: {
            el: ".cont_gen_banner_home .swiper-pagination",
            clickable: true,
        },
    });
    
    
    
    
    
    /*----detectar elemento entrar viewport para animacion */
       
       if ($(window).width() >= 1200) {
   
           $.fn.isInViewport = function() {
              var elementTop = $(this).offset().top;
              var elementBottom = elementTop + $(this).outerHeight();

              var viewportTop = $(window).scrollTop();
              var viewportBottom = viewportTop + $(window).height();

              return elementBottom > viewportTop && elementTop < viewportBottom;
            };
           
           
           $(window).on('resize scroll', function() { 

               $('.in_down, .in_left, .in_right').each(function() {
                   
                   if($(this).isInViewport()){

                       $(this).addClass('act_anim');
                   }else{
                       //$(this).removeClass('act_anim');
                   }
                   
               });

            });
       }else{
           $('.in_down, .in_left, .in_right').addClass('act_anim');
       }
    /*---*/
    
       
});



    /* PESTA??AS CATEGORIAS SERVICIOS*/
    
    const catg = document.querySelectorAll(".pest_sub_serv");
    const infCatg = document.querySelectorAll(".subinf_lat_ser");

    let selectCatg = null;
    
    catg.forEach((pest) => {
       
        pest.addEventListener("click", (e) => {
            catg.forEach((el) => {
                el.classList.remove("active");
            });
            e.currentTarget.classList.toggle("active");
            
            selectCatg = pest.dataset.cat;
            
            infCatg.forEach((infel) => {
               if(infel.dataset.cat === selectCatg){
                   infel.classList.add("active_info");
               }else{
                   infel.classList.remove("active_info");
               } 
            });
        });
        
    });

function init() {
    window.addEventListener('scroll', function (e) {
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 40,
            header = document.querySelector("header");
        if (distanceY > shrinkOn) {
            classie.add(header, "smaller");
            $("header").addClass('smaller');

        } else {
            if (classie.has(header, "smaller")) {
                classie.remove(header, "smaller");
                $("header").removeClass('smaller');
            }
        }
    });
}
window.onload = init();
