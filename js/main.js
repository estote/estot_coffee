// 검색창 요소(.search) 찾기
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
// 검색창 요소를 클릭하면 실행
searchEl.addEventListener("click", function () {
	searchInputEl.focus();
});
// 검색창 요소 내부 실제 input 요소에 포커스되면 실행
searchInputEl.addEventListener("focus", function () {
	searchEl.classList.add("focused");
	searchInputEl.setAttribute("placeholder", "검색어를 입력하세요.");
});
// 검색창 요소 내부 실제 input 요소에 포커스가 아웃되면 실행
searchInputEl.addEventListener("blur", function () {
	searchEl.classList.remove("focused");
	searchInputEl.setAttribute("placeholder", "");
});

// 페이지 스크롤에 따른 요소 제어
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector("#to-top");

window.addEventListener("scroll", function () {
	console.log(window.scrollY);
	if (window.scrollY > 500) {
		// Badge 요소 숨기기!
		gsap.to(badgeEl, 0.6, {
			opacity: 0,
			display: "none",
		});
		// 상단으로 이동 버튼 보이기!
		gsap.to(toTopEl, 0.6, {
			opacity: 1,
			x: 0,
		});
	} else {
		// Badge 요소 보이기!
		gsap.to(badgeEl, 0.6, {
			opacity: 1,
			display: "block",
		});
		// 상단으로 이동 버튼 숨기기!
		gsap.to(toTopEl, 0.6, {
			opacity: 0,
			x: 100,
		});
	}
});

toTopEl.addEventListener("click", function () {
	gsap.to(window, 0.6, {
		scrollTo: 0,
	});
});

// 나타날 요소(.fade-in)들 찾기
const fadeEls = document.querySelectorAll(".visual .fade-in");
// 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
	gsap.to(fadeEl, 1, {
		delay: (index + 1) * 0.7,
		opacity: 1,
	});
});

new Swiper(".notice .swiper", {
	direction: "vertical",
	autoplay: true,
	loop: true,
});

new Swiper(".promotion .swiper", {
	autoplay: true,
	loop: true,
	slidesPerView: 3,
	spaceBetween: 10,
	centeredSlides: true,
	pagination: {
		el: ".promotion .swiper-pagination",
		clickable: true,
	},
	navigation: {
		prevEl: ".promotion .swiper-button-prev",
		nextEl: ".promotion .swiper-button-next",
	},
});

new Swiper(".awards .swiper", {
	autoplay: true,
	loop: true,
	spaceBetween: 30,
	slidesPerView: 5,
	navigation: {
		prevEl: ".awards .swiper-button-prev",
		nextEl: ".awards .swiper-button-next",
	},
});

const promotionEl = document.querySelector("section.promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
// 토글 버튼을 클릭했을 때,
promotionToggleBtn.addEventListener("click", function () {
	if (promotionEl.classList.contains("hide")) {
		promotionEl.classList.remove("hide");
	} else {
		promotionEl.classList.add("hide");
	}
});

gsap.to(".floating1", 1.5, {
	delay: 1, // 애니메이션 시작 전 딜레이
	y: 15, // 애니메이션 시작 시 수직 위치로 15만큼 이동
	repeat: -1, // 반복 횟수(-1은 무한반복)
	yoyo: true, // 한번 재생된 애니메이션을 다시 재생
	ease: Power1.easeInOut, // Easing 함수 적용
});
gsap.to(".floating2", 2, {
	delay: 0.5, // 애니메이션 시작 전 딜레이
	y: 15, // 애니메이션 시작 시 수직 위치로 15만큼 이동
	repeat: -1, // 반복 횟수(-1은 무한반복)
	yoyo: true, // 한번 재생된 애니메이션을 다시 재생
	ease: Power1.easeInOut, // Easing 함수 적용
});
gsap.to(".floating3", 2.5, {
	delay: 1.5, // 애니메이션 시작 전 딜레이
	y: 20, // 애니메이션 시작 시 수직 위치로 20만큼 이동
	repeat: -1, // 반복 횟수(-1은 무한반복)
	yoyo: true, // 한번 재생된 애니메이션을 다시 재생
	ease: Power1.easeInOut, // Easing 함수 적용
});

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
	new ScrollMagic.Scene({
		// 감시할 장면(Scene)을 추가
		triggerElement: spyEl, // 보여질지 여부를 감시할 요소를 지정
		triggerHook: 0.8, // 화면의 80% 지점에서 보여짐 여부를 감시
	})
		.setClassToggle(spyEl, "show") // 요소가 화면에 보이면, show 클래스를 추가
		.addTo(new ScrollMagic.Controller()); // 컨트롤러에 장면을 추가(필수!)
});

const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
