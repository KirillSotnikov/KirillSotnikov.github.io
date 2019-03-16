const pageId = $('main').attr('id');

switch (pageId) {
    case 'partnersPage': {
        modalPartner();
        break;
    }
    case 'productItem':{
        modalPartner();
        break;
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