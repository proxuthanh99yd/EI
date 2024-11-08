gsap.registerPlugin(ScrollTrigger);
function isMobile() {
    const regex =
        /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
if (window && window.innerWidth >= 1024) {
    gsap.from(".about-top", {
        x: -200,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".about-bottom", {
        y: 200,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".homepage__about-right .item1", {
        x: -100,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".homepage__about-right .item2", {
        x: -150,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".homepage__about-right .item3", {
        x: 100,
        y: -60,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });
    gsap.from(".homepage__about-right .item4", {
        x: 10,
        y: 10,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });
    gsap.from(".homepage__about-right .item5", {
        y: 60,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".homepage__about-right .item6", {
        x: 100,
        y: -20,
        autoAlpha: 0,
        duration: 1.5,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });
    gsap.from(".homepage__about-right .item7", {
        x: 80,
        y: -10,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });

    gsap.from(".homepage__about-right .item8", {
        x: 20,
        y: -10,
        autoAlpha: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".homepage__about",
            start: "top 80%",
            once: true,
        },
    });
}

// if (window && window.innerWidth < 768) {
//swiper
new Swiper(".bottom__logo-list", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    speed: 2000,
    loop: true,
});
// }

const createOdometer = (el, value) => {
    const odometer = new Odometer({
        el: el,
        value: 0,
        format: "(.ddd)",
        // 		duration: 10000,
    });

    let hasRun = false;

    const options = {
        threshold: [0, 0.9],
    };

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (!hasRun) {
                    odometer.update(value);
                    hasRun = true;
                }
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(el);
};
const observer2 = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document
                    .querySelector(".commitment__feature--development")
                    .classList.add("active");

                setTimeout(() => {
                    document
                        .querySelectorAll(
                            ".commitment__feature--development .commitment__feature--leaf"
                        )
                        .forEach((leaf) => {
                            leaf.style.transitionDelay = "0s";
                        });
                }, 400);
            }
        });
    },
    {
        threshold: [0, 0.9],
    }
);
observer2.observe(document.querySelector(".commitment__feature--development"));
// Áp dụng Odometer cho các số liệu
const subscribersOdometer = document.querySelector(".years-odometer");
createOdometer(
    subscribersOdometer,
    Number(subscribersOdometer.getAttribute("year"))
); // Ví dụ giá trị là 2024 năm

const videosOdometer = document.querySelector(".ton-odometer");
createOdometer(videosOdometer, Number(videosOdometer.getAttribute("ton"))); // Ví dụ giá trị là 9981 tấn

let thresholdAnimateSection = {
    root: null, // Mặc định là viewport
    rootMargin: "0px 0px 0%", // Cách đáy của viewport 20%
    threshold: 1, // Bắt đầu khi phần tử chạm vào khu vực được quan sát
};

if (isMobile()) {
    thresholdAnimateSection = {
        root: null, // Mặc định là viewport
        rootMargin: "0px 0px -10%", // Điều chỉnh để kiểm soát khoảng cách với đáy viewport
        threshold: 1.0, // Kích hoạt khi toàn bộ phần tử (bao gồm đáy) đã vào trong vùng quan sát
    };
}

const animateSection = document.querySelector(".section_new_product .row_2");
const animateSectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        //     console.log(entry.isIntersecting); // Kiểm tra xem phần tử có vào trong vùng quan sát không
        if (entry.isIntersecting) {
            const itemActive = document.querySelector(
                ".card_content-animate-wrapper"
            );
            itemActive.classList.add("active");
        }
    });
}, thresholdAnimateSection);

animateSectionObserver.observe(animateSection);

function kKao4Loop({ speed = 4000, hoverSlow = 0.4, containerEl, itemEl }) {
    const itemsContainer = document.querySelector(containerEl);
    const animationDuration =
        (speed * document.querySelectorAll(itemEl).length) / 1000;
    const tween = gsap.to(itemsContainer, {
        x: `-50%`,
        duration: animationDuration,
        ease: "none",
        repeat: -1,
    });
    itemsContainer.addEventListener("mouseenter", () => {
        tween.timeScale(hoverSlow);
        itemsContainer.addEventListener("mouseleave", () => {
            tween.timeScale(1);
        });
    });
}

function init() {
    kKao4Loop({
        containerEl: ".overcoming_challenge_section .section_content > div",
        itemEl: ".overcoming_challenge_section .section_content > div",
        speed: 12000,
    });
}

window.addEventListener("DOMContentLoaded", init);

const expanding = document.querySelector(".homepage__expanding");
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const btnPlay = document.querySelector(".expanding__video-btn");
                const video = document.querySelector(
                    ".expanding__video-content"
                );
                btnPlay.style.visibility = "hidden";
                btnPlay.style.opacity = "0";
                video.play();
                // video.addEventListener("pause", (event) => {
                //     btnPlay.style.visibility = null;
                //     btnPlay.style.opacity = null;
                //     video.controls = !video.controls;
                // });
                // video.addEventListener("play", (event) => {
                //     btnPlay.style.visibility = "hidden";
                //     btnPlay.style.opacity = "0";
                //     video.controls = !video.controls;
                // });
                // btnPlay.addEventListener("click", () => {
                //     video.play();
                // });
            }
        });
    },
    {
        threshold: 0.5, // Trigger when 50% of the section is visible
    }
);
if (!isMobile()) {
    observer.observe(expanding);
}

const swiperMainProduct = new Swiper(".main-product__items", {
    slidesPerView: "auto",
    // spaceBetween: 20,
    navigation: {
        nextEl: ".main-product__items-nav .swiper-button-next",
        prevEl: ".main-product__items-nav .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
    },
});
new Swiper(".main-product__nav", {
    slidesPerView: "auto",
    breakpoints: {
        640: {
            slidesPerView: "auto",
        },
    },
    navigation: {
        nextEl: ".main-product__nav-next",
        prevEl: ".main-product__nav-prev",
    },
});
const lang = document.documentElement.lang === "vi" ? "vi" : "en";
const endpoint = ENV.API + "/products";
const page = 1;
const limit = 8;

const mainProductNav = document.querySelectorAll(
    ".main-product .main-product__list-tem"
);
const swiperMainProductContent = document.querySelector(
    ".main-product__items .swiper-wrapper"
);
mainProductNav.forEach((item) => {
    item.addEventListener("click", async () => {
        mainProductNav.forEach((item) => {
            item.classList.remove("active");
        });
        swiperMainProductContent.innerHTML = "";
        for (let i = 0; i < 4; i++) {
            swiperMainProduct.appendSlide(
                ` <div class="swiper-slide"> 
                    <div class="main-product__item preloader">
                      <div class="swiper-lazy-preloader">
                      </div>
                    </div>
                  </div>`
            );
        }
        swiperMainProduct.update();
        const response = await fetch(
            `${endpoint}?lang=${lang}&page=${page}&limit=${limit}&types=${item.dataset.id}`
        );
        const { data } = await response.json();
        swiperMainProductContent.innerHTML = "";
        if (data.length > 0) {
            data.forEach(({ link, title, image, code }) => {
                swiperMainProduct.appendSlide(`
                <div class="swiper-slide">
                        <a href="${link}" class="main-product__item">
                            <img src="${image}" alt="${title}" class="main-product__img" />
                            <div class="main-product__info">
                                <p class="main-product__code">${
                                    code ? code : ""
                                }</p>
                                <p class="main-product__name">${title}</p>
                            </div>
                        </a>
                    </div>
            `);
            });
        }
        swiperMainProduct.update();
        item.classList.add("active");
    });
});
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    );
}
const swiperCertifications = new Swiper(".certifications__list-swiper", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    slideToClickedSlide: true,
    simulateTouch: false,
    speed: 400,
    // autoplay: {
    //     delay: 4000,
    // },
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".certifications__pagination .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".certifications__list .certifications__list-button-next",
        prevEl: ".certifications__list .certifications__list-button-prev",
    },

    breakpoints: {
        640: {
            slidesPerView: 5,
            spaceBetween: 0,
        },
    },
});

swiperCertifications.on("slideChange", function (e) {
    console.log("slide changed");
    if (isMobileDevice()) {
        setTimeout(() => {
            const duration = 0.4;

            // Thêm hiệu ứng chuyển động cho slide active
            gsap.to(".certifications__item.swiper-slide-active img", {
                width: remToPixels(12.89419),
                height: remToPixels(18.48463),
                duration: duration,
            });

            // Thêm hiệu ứng chuyển động cho slide prev và next
            gsap.to(
                ".certifications__item.swiper-slide-prev img, .certifications__item.swiper-slide-next img",
                {
                    width: remToPixels(7.94),
                    height: remToPixels(11.3825),
                    duration: duration,
                }
            );
        });
        // Thời gian chuyển động
    }
});

let currentCardIndex = 0;
const cards = document.querySelectorAll(
    ".certifications__pagination .swiper-pagination-bullet"
);

const totalCards = cards.length;

function updateCarousel() {
    cards.forEach((card) => {
        card.classList.remove(
            "active",
            "prev-1",
            "next-1",
            "prev-2",
            "next-2",
            "prev-3",
            "next-3"
        );
    });
    cards[currentCardIndex].classList.add("active");

    const prevIndex_1 = (currentCardIndex - 1 + totalCards) % totalCards;
    const nextIndex_1 = (currentCardIndex + 1) % totalCards;
    const prevIndex_2 = (currentCardIndex - 2 + totalCards) % totalCards;
    const nextIndex_2 = (currentCardIndex + 2) % totalCards;
    const prevIndex_3 = (currentCardIndex - 3 + totalCards) % totalCards;
    const nextIndex_3 = (currentCardIndex + 3) % totalCards;

    cards[prevIndex_1].classList.add("prev-1");
    cards[nextIndex_1].classList.add("next-1");
    cards[prevIndex_2].classList.add("prev-2");
    cards[nextIndex_2].classList.add("next-2");
    cards[prevIndex_3].classList.add("prev-3");
    cards[nextIndex_3].classList.add("next-3");
}

updateCarousel();

swiperCertifications.on("slideChange", function ({ realIndex }) {
    currentCardIndex = (realIndex - 1 + totalCards) % totalCards;
    updateCarousel();
    //   console.log("slide changed");
});
//xử lý animation
const sectionPinFirst = document.querySelector(".homepage__dual");
//second
const sectionPinSecond = document.querySelector(".homepage__expanding");
const sectionPinSecondContent = document.querySelector(
    ".homepage__expanding-content"
);
const sectionPinSecondBg1 = document.querySelector(".homepage__expanding-bg1");
const expanding__video = document.querySelector(".expanding__video");
//third
const sectionPinThird = document.querySelector(".main-product__wrapper");
const headingSectionThird = document.querySelector(".main-product__header");
const mainProduct__nav = document.querySelector(".main-product__nav");
const mainProductNavWrap = document.querySelector(".main-product__nav-wrap");
const sliderMainProduct = document.querySelector(
    ".main-product__items-wrapper"
);
//fourth
const sectionPinFourth = document.querySelector(".certifications__wrapper");
ScrollTrigger.create({
    trigger: sectionPinFirst,
    pin: true,
    start: "top top",
    end: "+=3100",
    onUpdate: (self) => {
        const progress = self.progress;
        console.log(progress);
        if (progress >= 0.25) {
            sectionPinFirst.classList.add("sectionPinFirstHidden");
        } else {
            sectionPinFirst.classList.remove("sectionPinFirstHidden");
            sectionPinSecond.classList.remove("sectionPinSecond");
        }
        if (progress >= 0.25 && progress < 0.5) {
            sectionPinSecond.classList.add("sectionPinSecond");
            sectionPinSecondContent.classList.add("fadeUpAnimation");
            sectionPinSecondBg1.classList.add("fadeUpAnimation");
            expanding__video.classList.add("fadeUpAnimationVideo");
            sectionPinFirst.classList.add("sectionPinFirstHidden");
            sectionPinSecondContent.classList.remove("UpOutAnimation");
            sectionPinSecondBg1.classList.remove("downOutAnimation");
            expanding__video.classList.remove("VideoOutAnimation");
        } else {
            sectionPinSecond.classList.remove("sectionPinSecond");
        }

        if (progress >= 0.5 && progress < 0.75) {
            sectionPinSecondContent.classList.add("UpOutAnimation");
            sectionPinSecondBg1.classList.add("downOutAnimation");
            expanding__video.classList.add("VideoOutAnimation");
            sectionPinThird.classList.add("sectionPinThird");
            sectionPinSecond.classList.add("sectionPinSecondHidden");
            headingSectionThird.classList.add("fadeUpAnimation");
            mainProduct__nav.classList.add("fadeUpAnimation");
            mainProductNavWrap.classList.add("fadeUpAnimation");
            sliderMainProduct.classList.add("fadeUpAnimationLower");
        } else {
            sectionPinThird.classList.remove("sectionPinThird");
            sectionPinSecond.classList.remove("sectionPinSecondHidden");
        }
        if (progress < 0.75) {
            sectionPinFourth.classList.remove("sectionPinFourth");
        }
        if (progress >= 0.75 && progress < 1) {
            sectionPinFourth.classList.add("sectionPinFourth");
            sectionPinFourth.classList.remove("sectionPinFourthRelative");
        } else {
            sectionPinFourth.classList.remove("sectionPinFourth");
        }
        if (progress == 1) {
            console.log("test");
            sectionPinFourth.classList.add("sectionPinFourthRelative");
        }
    },
});
let video_full = document.querySelector(
    ".homepage__parallax-wrapper .homepage__parallax-container .expanding__video-content"
);

const videoPopupMB = document.querySelector(".expanding__video--mb");
const headerEl = document.querySelector("#header");
const videoContent = document.querySelector(".expanding__video-content--mb");
const closeVideoPopupMB = document.querySelector(
    ".expanding__video-close-btn--mb"
);

const listBtnHelpQuick = document.querySelector(".listBtnHelpQuick");

function openFullscreen() {
    if (video_full.requestFullscreen) {
        video_full.requestFullscreen();
    } else if (video_full.webkitRequestFullscreen) {
        /* Safari */
        video_full.webkitRequestFullscreen();
    } else if (video_full.msRequestFullscreen) {
        /* IE11 */
        video_full.msRequestFullscreen();
    }
}

if (!isMobile()) {
    video_full.addEventListener("click", openFullscreen);
} else {
    video_full.addEventListener("click", () => {
        videoPopupMB.classList.add("active");
        document.body.style.overflow = "hidden";
        headerEl.style.display = "none";
        listBtnHelpQuick.style.pointerEvents = "none";
        videoContent.play();
        videoContent.controls = true;
    });

    // Prevent clicks within video content from closing the popup
    videoContent.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    videoPopupMB.addEventListener("click", () => {
        videoPopupMB.classList.remove("active");
        document.body.style.overflow = null;
        headerEl.style.display = null;
        listBtnHelpQuick.style.pointerEvents = null;
        videoContent.pause();
    });

    closeVideoPopupMB.addEventListener("click", (e) => {
        e.stopPropagation();
        videoPopupMB.classList.remove("active");
        document.body.style.overflow = null;
        headerEl.style.display = null;
        listBtnHelpQuick.style.pointerEvents = null;
        videoContent.pause();
    });
}
new Swiper(".section_banner_homepage .mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    pagination: {
        el: ".section_banner_homepage .swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 600,
    on: {
        slideChange: function () {
            // Lấy tất cả các phần tử trong slide hiện tại
            const currentSlide =
                this.slides[this.activeIndex].querySelectorAll(
                    ".animated-element"
                );
            currentSlide.forEach((element) => {
                element.classList.remove("action_animate"); // Hiện các phần tử
            });
            setTimeout(() => {
                currentSlide.forEach((element) => {
                    element.classList.add("action_animate"); // Hiện các phần tử
                });
            }, 300); // Đợi một chút trước khi hiển thị
            if (this.realIndex == 0) {
                header.classList.add("slide_white_active");
                header.classList.remove("slide_color_active");
            } else {
                header.classList.remove("slide_white_active");
                header.classList.add("slide_color_active");
            }
        },
    },
});
