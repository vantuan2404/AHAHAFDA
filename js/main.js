$(document).ready(function(){
    //menu mobile
    let Btn_menu = () =>{
        let btn_menu = $('.menu-top .d');
        btn_menu.on('click',function(){
            $('.menu').toggleClass('active');
            btn_menu.toggleClass('activebtn');
        })
    }
    Btn_menu();

    //backtotop
    let BackToTop = ()=>{
        $(document).on('scroll',function(){
            let scrollTop = document.documentElement.scrollTop;
            if(scrollTop >= 1800){
                $('.footer .backtotop').css('display','inline-block');
            }else{
                $('.footer .backtotop').css('display','none');
            }
        })
        $('.footer .backtotop').on('click',function(){
            window.scrollBy({
                top: -document.body.offsetHeight,
                behavior: "smooth",
                })
        })
    }
    BackToTop();

    // tab_about
    let tab_about = $('.aboutpage .tab_title li p');
    $('.aboutpage .tab_content .tab_content-d').hide();
    $('.aboutpage .tab_content .tab_content-d:first-child').show();
    let tab_tilte_click = () =>{
        tab_about.on('click',function(){
            $('.aboutpage .tab_title .active-spc-d').removeClass('active-spc-d');
            $(this).parent().find('div').addClass('active-spc-d');
            let current_tab = $(this).attr('data-list');
            $('.aboutpage .tab_content .tab_content-d').hide();
            $('.' + current_tab).show();
        })
    }
    tab_tilte_click();

    //caption main
    let tab_caption = ()=>{
        let tab_title2 = $('.homepage .banner .tab_title');
        tab_title2.on('click',function(){
            $('.homepage .banner .tab_title').removeClass('bg');
            $(this).addClass('bg');
            let current_tab = $(this).attr('data-list');
            $('.homepage .banner .show').removeClass('show');
            $('.'+current_tab).addClass('show');
            
        })
    }
    tab_caption();

    // count number homepage
    
    //slide sxx-team
    let slide_full = ()=>{
        let $carousel2= $('.aboutpage .special');
            $carousel2.flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            })
            
        let $carousel3= $('.aboutpage .list-row');
            $carousel3.flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: true,
            prevNextButtons: false,
            })
        
            //slide product details
        let $carousel4= $('.shopdetailpage .row_relate .product .product_list');
            $carousel4.flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            })

            // slide laster
        let $carousel= $('.homepage .row-laster');
            $carousel.flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            })

        let $carousel5= $('.shopdetailpage .row_big');
            $carousel5.flickity({
            // options
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            })
        let $carousel6= $('.shopdetailpage .row_small');
            $carousel6.flickity({
            // options
            asNavFor: '.row_big',
            cellAlign: 'left',
            wrapAround: true,
            contain: true,
            pageDots: false,
            prevNextButtons: false,
            })
    }
    slide_full();


    let prev_slide = ()=>{
        $('.homepage .team .btn_slide .prev').on( 'click', function() {
            $('.row-laster').flickity('previous');
        });
        $('.aboutpage .col-top .arrow_btn-d .prev').on( 'click', function() {
            $('.special').flickity('previous');
        });
        $('.shopdetailpage .row_relate .arrow_prev-d').on( 'click', function() {
            $('.product_list').flickity('previous');
        });
    }
    prev_slide();
    
   let next_slide = ()=>{
        $('.homepage .team .btn_slide .next').on( 'click', function() {
            $('.row-laster').flickity('next');
        });
        $('.aboutpage .col-top .arrow_btn-d .next').on( 'click', function() {
            $('.special').flickity('next');
        });
        $('.shopdetailpage .row_relate .arrow_next-d').on( 'click', function() {
            $('.product_list').flickity('next');
        });
   }
   next_slide();
   
   // submit contact
   let btn_submit = ()=>{
    $('.contactpage .row_main-form .btn').on('click',function(){
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
          }
          var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

        let name = $.trim($(".contactpage .row-1 .name").val());
        let email = $.trim($(".contactpage .row-1 .email").val());
        let phone = $.trim($(".contactpage .row-1 .phone").val());

        var checkname = true;
        var checkemail = true;
        var checkphone = true;
        if(name == ""){
            $(".contactpage .row-1 .name").css('border-bottom','2px solid #ff0000');
            checkname = false;
        }else{
            $(".contactpage .row-1 .name").css('border-bottom','2px solid #fff');
            checkname = true;
        }
        if(!isEmail(email)){
            $(".contactpage .row-1 .email").css('border-bottom','2px solid #ff0000');
            checkemail = false;
        }
        else if(email == ""){
            $(".contactpage .row-1 .email").css('border-bottom','2px solid #ff0000');
            checkemail = false;
        }
        else{
            $(".contactpage .row-1 .email").css('border-bottom','2px solid #fff');
            checkemail = true;
        }
        if(phone.length != 10){
            $(".contactpage .row-1 .phone").css('border-bottom','2px solid #ff0000');
            checkphone = false;
        }
        else if (phone == ""){
            $(".contactpage .row-1 .phone").css('border-bottom','2px solid #ff0000');
            checkphone = false;
        }
        else if(vnf_regex.test(phone) == false){
            $(".contactpage .row-1 .phone").css('border-bottom','2px solid #ff0000');
            checkphone = false;
        }
        else{
            $(".contactpage .row-1 .phone").css('border-bottom','2px solid #fff');
            checkphone = true;
        }

        var myJSON = '{"cForm":[' +
            '{"check":"Congratulations on your successful studio registration."},' +
            '{"check":"Information is not in the correct format or inaccurate."},' +
            '{"check":"Please enter your information."}]}';
        obj = JSON.parse(myJSON)

        if(checkname == true && checkemail == true && checkphone == true){
            $('.send_modal').addClass('show-modal');
            $('.send_modal .body-modal p').html(obj.cForm[0].check);
        }else if(checkname == true || checkemail == true || checkphone == true){
            $('.send_modal').addClass('show-modal');
            $('.send_modal .body-modal p').html(obj.cForm[1].check);
        }else{
            $('.send_modal').addClass('show-modal');
            $('.send_modal .body-modal p').html(obj.cForm[2].check);
        }
    })
    $('.send_modal .footer-modal .btn').on('click',function(){
        $('.send_modal').removeClass('show-modal');
    })
}
btn_submit();

   // hover item menu
   let hv_menu = ()=>{
       let li_menu = $('.menu-nav li');
       li_menu.hover(function(){
            $(this).siblings().addClass('grey');
       }, ()=>{
            li_menu.removeClass('grey')
        }
       )
   }
   hv_menu();

   // scroll proggess
   let scrollProggess = ()=>{
       $(document).on('scroll',function(){
           let start = 0;
           let end = $('.aboutpage .col-caption .item:nth-of-type(1) .progres').html();
           speed = 0;
        let scrollTop = document.documentElement.scrollTop;
            if(scrollTop > 500){
                $('.aboutpage .col-caption .item:nth-of-type(1) .progres').addClass('zz');
                $('.aboutpage .col-caption .item:nth-of-type(2) .progres').addClass('xx');
                $('.aboutpage .col-caption .item:nth-of-type(3) .progres').addClass('cc');
            }else{
                $('.aboutpage .col-caption .item:nth-of-type(1) .progres').removeClass('zz');
                $('.aboutpage .col-caption .item:nth-of-type(2) .progres').removeClass('xx');
                $('.aboutpage .col-caption .item:nth-of-type(3) .progres').removeClass('cc');
            }
       })
   }
   scrollProggess();

   // product list or grid
   let product = ()=>{
       let btn_list = $('.inventpage .col-right .btn-colum');
       let btn_grid = $('.inventpage .col-right .btn-grid');
       let row_product = $('.inventpage .sell .row_product')
       btn_list.on('click',function(){
            row_product.addClass('product-list');
       })
       btn_grid.on('click',function(){
        row_product.removeClass('product-list');
       })
   }
   product();

   //slide Down product
   let slide_product = ()=>{
        let li_vehicle = $('.inventpage .card .slide');
        li_vehicle.on('click',function(){
            $(this).next().stop().slideToggle();
            $(this).toggleClass('quay')
        })
   }
   slide_product();
   //slide down subjet
   let slide_subject = ()=>{
    let subject = $('.contactpage .row-1 .col-right-d');
    subject.hover(function(){
            $('.contactpage .col-right-d .ul_list').toggleClass('show');
            $('.contactpage .col-right-d img').toggleClass('quay');
        })
    }
    let li_subject = $('.contactpage .col-right-d .ul_list p');
    li_subject.on('click',function(){
        $('.contactpage .col-right-d .curent').html($(this).html());
    })
    slide_subject();

})


$(window).on('load',()=>{
    let count = ()=>{
        let start_number = 0;
        let start_number2 = 0;
        let start_number3 = 0;
        let start_number4 = 0;
        
        let end_number1 = $('.homepage .intro .des .num1').html();
        let end_number2 = $('.homepage .intro .des .num2').html();
        let end_number3 = $('.homepage .intro .des .num3').html();
        let end_number4 = $('.homepage .intro .des .num4').html();
        let speed = 0;

        setInterval(()=>{
            if(start_number4 < end_number4){
                start_number4++;
            }
            $('.homepage .intro .des .num4').html(start_number4);
        },speed);
        setInterval(()=>{
            if(start_number3 < end_number3){
                start_number3++;
            }
            $('.homepage .intro .des .num3').html(start_number3);
        },speed);
        setInterval(()=>{
            if(start_number2 < end_number2){
                start_number2++;
            }
            $('.homepage .intro .des .num2').html(start_number2);
        },speed);
        setInterval(()=>{
            if(start_number < end_number1){
                start_number++;
            }
            $('.homepage .intro .des .num1').html(start_number);
        },speed);
       
    }
    count();

})
