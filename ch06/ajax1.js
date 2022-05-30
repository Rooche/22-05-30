// ch06/ajax1.js
// Asynchronous Javascript and XML 비동기방식으로 처리하겠다라는 뜻
// 비동기는 결과가 받아오는 시점에 순서를 정하도록하는것 예를 들자면 first -> third -> second 순서
// 동기방식은 순서대로 처리하는것 지금 예제로 들자면 first -> second -> third 순서
XMLHttpRequest(); // 비동기방식의 대표적인 명령어

// setTimeout(e => { // setTimeout의 함수는 정한 시간만큼있다가 특정한걸 출력하세요 지금은 1000ms니깐 1초뒤에 first를 나오게 함
//   console.log('first');
// }, 1000);

// setTimeout(e => {
//   console.log('second');
// }, 3000);

// setTimeout(e => {
//   console.log('third');
// }, 2000);

// setTimeout(e => {
//   console.log('first');

//   setTimeout(e => {
//     console.log('second');

//     setTimeout(e => {
//       console.log('third');
//     }, 2000);
//   }, 3000);
// }, 1000);