    // SLAIDER SWIPER
    const swiper = new Swiper('#swiper-container1', {
        loop: true,
        slidesPerview: 3,
        stopOnLastSlide: false,
        autoplay: {
            delay: 3000
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    const swiperAbout = new Swiper('#swiper-container2', {
        loop: true,
        slidesPerview: 3,
        stopOnLastSlide: false,
        autoplay: {
            delay: 3000
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pag',
            clickable: true,
        },
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scroll',
        },
    });


window.onscroll = function showHeader() {
    let header = document.querySelector('.header');

    if(window.pageYOffset>130) {
        header.classList.add('header-fixed');
        console.log(window.pageYOffset);
    } else {
        header.classList.remove('header-fixed');
    }
}



document.addEventListener('click', eventAction);

function eventAction(e) {
    const targetElement = e.target;
    if (targetElement.closest('.basic__wrap-arrow')) {
        openSelect();
        e.preventDefault();
    }
}

//  Page About
function openSelect() {
    const basicWrapBlock = document.querySelector('.basic__wrap-block');
    basicWrapBlock.classList.toggle('active');
}


   
    






//     //PAGE CATEGORY CHECKBOX

// $(document).ready(function(){

//     $.each($('.category__selection'), function (index, val) {
//         if ($(this).find('input').prop('checked')==true) {
//             $(this).addClass('active');
//         }
//     });
//     $(document).on('click', '.category__selection', function (event) {
//         if ($(this).hasClass('active')) {
//             $(this).find('input').prop('checked', false);
//         } else {
//             $(this).find('input').prop('checked', true);
//         }
//         $(this).toggleClass('active');

//         return false;
//     });
// });

