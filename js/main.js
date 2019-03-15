const pageId = $('main').attr('id');

switch (pageId) {
    case 'partnersPage': {
        modalPartner();
        break;
    }
}

function modalPartner(){
    $('.partners_image').on('click', function(){
        let imgSrc = $(this).attr('src');

        $('.modal_partner_container_img').attr('src', imgSrc);
        
        $('.modal_partner').addClass('active');
    });

    $('.close_btn').on('click', function(){
        $('.modal_partner').removeClass('active');
        $('.modal_partner_container_img').attr('src', '');
    });
}