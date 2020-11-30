

window.addEventListener("load", function () {
    //swipers
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        centeredSlides: true,
        paginationClickable: true,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + '<p>' + '0' + (index + 1) + '</p>' + '</span>';
            }
        },

    });
    // end swipers

    //header transition
    document.addEventListener("scroll", () => {
        let element = document.getElementById("header");
        let logo1 = document.getElementById('logo1');
        let logo2 = document.getElementById('logo2');
        if (window.pageYOffset === 0) {
            element.classList.add("header1");
            element.classList.remove("header2");
            logo1.style.display = "block";
            logo2.style.display = "none";
        } else {
            element.classList.add("header2");
            element.classList.remove("header1");
            logo1.style.display = "none";
            logo2.style.display = "block";
        }
    });

    // Setores atendidos toggle

    if (document.querySelector("#setores-atendidos")) {
        let selectors = Array.from(document.querySelectorAll(".selector-item"));
        let setores = Array.from(document.querySelectorAll(".setores-texto"));

        //Desativa o setor ativo
        let limpaSetores = () => {
            selectors.forEach(s => {
                if (s.classList.contains("setor-selector-ativo")) {
                    s.classList.remove("setor-selector-ativo");
                }
            })
            setores.forEach(s => {
                if (s.classList.contains("setor-ativo")) {
                    s.classList.remove("setor-ativo")
                }
            });
        }

        selectors.forEach((selector, index) => {

            // Troca de setor ativo com o click 

            selector.addEventListener("click", function () {
                limpaSetores();
                selectors[index].classList.add("setor-selector-ativo");
                setores[index].classList.add("setor-ativo");
            });

            // Verifica se o hash é de um selector e ativa ele 
            if (window.location.hash == `#${selector.id}`) {
                setTimeout(function () {

                    document.querySelector('#setores-atendidos').scrollIntoView();
                }, 1);
                limpaSetores();
                selectors[index].classList.add("setor-selector-ativo");
                setores[index].classList.add("setor-ativo");
                console.log('kek');
            }

        });
    }

    //fecha e abre menu mobile
    let hamburguer = document.getElementById('hamburguer');
    let close = document.getElementById('close');
    let menu = document.getElementById('menu');
    let outside = document.getElementById('outside');

    close.addEventListener("click", function () {
        menu.style.display = 'none';
        outside.style.display = 'none';
    });

    outside.addEventListener("click", function () {
        menu.style.display = 'none';
        outside.style.display = 'none';
    });

    hamburguer.addEventListener("click", function () {
        menu.style.display = 'block';
        outside.style.display = 'block';
    });

});