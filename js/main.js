const pageId = $('main').attr('id');

switch (pageId) {
    case 'partnersPage': {
        modalPartner();
        break;
    }
    case 'productsPage':{
        menuFunc();
        break;
    }
    case 'productItem':{
        initSlider();
        modalPartner();
        break;
    }
}

function menuFunc(){
    $('.menu_btn').on('click', function(){
        $('.menu_container').addClass('active');
    });
    $('.menu_container_closer').on('click', function(){
        $('.menu_container').removeClass('active');
    });
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