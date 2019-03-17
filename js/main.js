const pageId = $('main').attr('id');

switch (pageId) {
    case 'partnersPage': {
        modalPartner();
        menuFunc();
        break;
    }
    case 'productsPage':{
        menuFunc();
        break;
    }
    case 'categoryPage':{
        footerFunc();
        menuFunc();
    }
    case 'singleProduct':{
        footerFunc();
        menuFunc();
        productSlider();
    }
    case 'productItem':{
        initSlider();
        modalPartner();
        break;
    }
}

function productSlider(){
    $('.product_container_slider_big.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product_container_slider_small',
    });
    $('.product_container_slider_small.slider').slick({
        slidesToShow: 3,
        focusOnSelect: true,
        asNavFor: '.product_container_slider_big',
        slidesToScroll: 1,
    });
}

function menuFunc(){
    $('.menu_btn').on('click', function(){
        $('.menu_container').addClass('active');
    });
    $('.menu_container_closer').on('click', function(){
        $('.menu_container').removeClass('active');
    });
}

function footerFunc(){
    let winHeight = $('.footer').height();
    let docHeight = $(window).height();

    docHeight = docHeight - 120;
    $('body').css('padding-bottom', winHeight);
    console.log(winHeight);
    console.log (docHeight);
    if(docHeight < winHeight){
        console.log(winHeight)
        $('footer.footer').css('position', 'static');
        $('body').css('padding-bottom', 0);
    }
}

function modalPartner(){
    $('.partners_image').on('click', function(){
        let imgSrc = $(this).attr('src');

        $('.modal_partner_container_img').attr('src', imgSrc);
        
        $('.modal_partner').addClass('active');

        $('html').css('overflow', 'hidden');
    });

    $('.close_btn').on('click', function(){
        $('.modal_partner').removeClass('active');
        $('.modal_partner_container_img').attr('src', '');
        $('html').css('overflow', 'auto');
    });
}


function initSlider(){
    $('.carousel').carousel();
    $('.partners_image').on('click', function(){
        
        $('.modal_partner').addClass('active');

        $('html').css('overflow', 'hidden');
    });

    $('.close_btn').on('click', function(){
        $('.modal_partner').removeClass('active');
        $('html').css('overflow', 'auto');
    });
}