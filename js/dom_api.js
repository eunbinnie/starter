// // HTML 요소(Element) 1개 검색/찾기
// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// /*
// // HTML 요소에 적용할 수 있는 메소드
// boxEl.addEventListener();

// // 인수(Arguments)를 추가 가능
// boxEl.addEventListener(1, 2);

// // 1 - 이벤트(Event, 상황)
// boxEl.addEventListener('click', 2);
// */

// // 2 - 핸들러(Handler, 실행할 함수)
// // Box!!를 클릭하면
// boxEl.addEventListener('click', function () {
//   // 출력
//   console.log('Click!!');
//   // box에 active 클래스 추가
//   boxEl.classList.add('active');
//   // active 유무 확인
//   console.log(
//     boxEl.classList.contains('active')    // true(active 있음)
//   );
//   // active 클래스 제거
//   boxEl.classList.remove('active');
//   // 제거 확인
//   console.log(
//     boxEl.classList.contains('active')    // false(active 없음)
//   );
// });



// // HTML 요소(Element) 모두 검색/찾기
// const boxEls = document.querySelectorAll('.box');

// // 찾은 요소들 반복해서 함수 실행!
// // 익명 함수를 인수로 추가!
// //boxEls.forEach(function () { });

// // 첫 번째 매개변수(boxEl): 반복 중인 요소
// // 두 번째 매개변수(index): 반복 중인 번호
// //boxEls.forEach(function (boxEl, index) { });

// // 출력
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index + 1}`);
//   console.log(index, boxEl);
// })



const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = 'EUNBIN!';
console.log(boxEl.textContent);