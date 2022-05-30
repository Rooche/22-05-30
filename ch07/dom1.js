// cho7/dom1.js

//ELEMENT_NODE
//ATTRIBUTE_NODE
//TEXT_NODE

document.addEventListener('DOMContentLoaded', function() { //하나는 이벤트

// createElement는 매개값으로 들어온 Element(요소)를 만들어줌, html에선 태그라고 함
let li = document.createElement('li'); //매개값을 태그, <li>Cherry</li>
let txt = document.createTextNode('Cherry');
li.appendChild(txt); //부모 - 자식간의 관계를 appendChild다
//이렇게 해야 li태그안에 Cherry가 들어간다
console.log(li);

// <ul> 자식 li
let ul = document.querySelector('ul'); //
ul.appendChild(li);
console.log(ul);

});