const pageId = $('main').attr('id');

switch (pageId) {
    case 'partnersPage': {
        modalPartner();
        menuFunc();
        footerFunc();
        break;
    }
    case 'productsPage':{
        menuFunc();
        footerFunc();
        break;
    }
    case 'categoryPage':{
        footerFunc();
        menuFunc();
        break;
    }
    case 'singleProduct':{
        footerFunc();
        menuFunc();
        productSlider();
        dropdownAdvantage();
        break;
    }
    case 'productItem':{
        initSlider();
        modalPartner();
        break;
    }
    case 'basketPage': {
        menuFunc();
        footerFunc();
        break;
    }
    case 'contactsPage': {
        menuFunc();
        footerFunc();
        break;
    }
    case 'distributorPage': {
        menuFunc();
        footerFunc();
        animateDistributor();
        break;
    }
}

function dropdownAdvantage(){
    $('.advantages_container_item').on('click', function(){
        $(this).find('.advantages_container_item_dropdown').slideToggle('300');
        $(this).find('.plus_box').toggleClass('active');
    });
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

$('.footer_cookie_text a').click(function(){
    closeModal();
});


if(localStorage.getItem('cookieKey')){
    $('.footer_cookie').hide();
}


function closeModal(){
    $('.footer_cookie').hide();
    localStorage.setItem('cookieKey', 'cookieItem');
};

function animateDistributor(){
    $('.dist_container_item_image').on('mouseover', function(){
        $(this).find('.dist_container_item_image_box_title span').css({'left':0, 'transition':'all .4s ease-out'});
    });
    $('.dist_container_item_image').on('mouseout', function(){
        let that = $(this);
        $(this).find('.dist_container_item_image_box_title span').css('left', '100%');
        setTimeout(function(){
            that.find('.dist_container_item_image_box_title span').css({'left':'-100%', 'transition':'none'});
        },400);
    });
}