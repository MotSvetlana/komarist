//PAGE REGISTRATION
//Modal window - login

const openLoginModal = document.querySelector('.register__reg-btn');
const openWindow2 = document.querySelector('.register__login-help')
const modal = document.querySelector('.login__modal');
const overlay = document.querySelector('.login__modal-overlay');
const closes = document.querySelector('.login__close');
const closes2 = document.getElementById('login__close2');
const modalWindow = document.querySelector('.login__modal-window');
const modalWindow2 = document.querySelector('.login__modal-window2');


openLoginModal.addEventListener('click', () => {
    modal.classList.add('active');
})
const closeModal = () => {
    modal.classList.remove('active');
}
closes.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

closes2.addEventListener('click', closeModal);


openWindow2.addEventListener('click', closeWindow);


function closeWindow() {
    modalWindow2.classList.add('active');
    modalWindow.style.display = 'none';
}

//Modal window - registration

const openRegModal = document.querySelector('.register__regist-btn');
const modal1 = document.querySelector('.reg__modal');
const overlay1 = document.querySelector('.reg__modal-overlay');
const closes1 = document.querySelector('.register__close');
const modalWindowReg = document.querySelector('.reg__modal-window');

openRegModal.addEventListener('click', () => {
    modal1.classList.add('active');
    console.log('!!!');
})

const closeModal1 = () => {
    modal1.classList.remove('active');
}

overlay1.addEventListener('click', closeModal1);
closes1.addEventListener('click', closeModal1);


function closeWindow1() {
    modalWindowReg.style.display = 'none';
}



/*Validation ans send form - надо доделать*/ 

$(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod('regex', function (value, element, regexp) {
        let regExsp = new RegExp(regexp);
        return this.optional(element) || regExsp.test(value)
    }, 'please check your input'
    );


    /*Validation and output messages*/

    function valEl(el) {
        el.validate({
            rules: {
                name: {
                    required: true,
                    regex: "[A-Za-zА-Яа-я]{1,32}"
                },
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true,
                    digits: true,
                    regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
                },
                password: {
                    required: true,
                    regex: '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,20})'
                }
            },
            messages: {
                name: {
                    required: 'Поле треба заповнити',
                    name: 'Введено некорректно'
                },
                email: {
                    required: 'Поле треба заповнити',
                    email: 'Введите email корректно'
                },
                tel: {
                    required: 'Поле треба заповнити',
                    regex: 'В телефоні мають бути такі +-() символи'
                },
                password: {
                    required: 'Пароль має бути від 6 символів, мати цифри та латинські літери'
                }

            },

            /*ID Form validation */
            submitHandler: function (form) {
                let $form = $(form);
                let $formId = $(form).attr('id');

                switch ($formId) {
                    case 'register__login':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    window.location.href = 'index.html'
                                }, 1100);
                            });
                        break;

                    case 'register__help':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    window.location.href = 'index.html'
                                }, 1100);
                            });
                        break;
                    case 'register__reg':
                        $.ajax({
                            type: 'POST',
                            url: $form.attr('action'),
                            data: $form.serialize(),
                        })
                            .done(function () {
                                console.log('Success');
                            })
                            .fail(function () {
                                console.log('Fail');
                            })
                            .always(function () {
                                console.log('Always');
                                setTimeout(function () {
                                    window.location.href = 'index.html';
                                    $form.trigger('reset');
                                }, 1100);
                            });
                        break;
                }
                return false;
            }
        })

    }

    $('.js-form').each(function () {
        valEl($(this));
    });


})
