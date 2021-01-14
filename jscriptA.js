//udemy 50 changing CSS styles 
// const title= document.querySelector('h1');
// //title.setAttribute('style', 'margin: 50px;');
// console.log(title.style);
// console.log(title.style.color);
// title.style.margin= '50px';
// title.style.color= 'crimson';
// title.style.fontSize= '60px';
// title.style.margin= '';

//udemy 51 addng and removing classes
//  const content= document.querySelector('p');
//  console.log(content.classList);
//  content.classList.add('error');
//  content.classList.remove('error');
//  content.classList.add('success');

//challange
 const paras= document.querySelectorAll('p');
//  console.log(paras);  
//     console.log(item.innerText);                  //use textContent not innerText why?
//     item.innerText += "  have I found you?";      //innerText shows only visible text!   

 paras.forEach(item =>{
 
     console.log(item.textContent);
//     if(item.textContent.includes('error')){         //alternating use of innerText
//         item.classList.add('error');                // and  textContent             why?
//     }if(item.innerText.includes('success')){
//         item.classList.add('success');
//     }
  });
        // and now - how to toggle classes!
// const title= document.querySelector('.title');
// title.classList.toggle('test');
// title.classList.toggle('test');

//Start 52 parent-child-siblings
//const article= document.querySelector('article');
// console.log(article.children);                  //logs html collection but forEach needs node list or array !!!
// console.log(Array.from(article.children));      //create array from html collection and use forEach
// console.log(article.children);
// Array.from(article.children).forEach(child =>{
//         child.classList.add('article-element');
// })
//const title= document.querySelector('h2');
//console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.nextElementSibling);
// console.log(title.previousElementSibling);
// //chaining, whatever that is!
// console.log(title.nextElementSibling.parentElement.children);

//Now for #53 events eg click events
// const button= document.querySelector('button');         //step 1 (query DOM for event element - button )
// button.addEventListener('click', () => {      //add event listener to that element
//    console.log('you clicked me');           //add call back function that fires when button clicked
// });
//  const items= document.querySelectorAll('li');
//  console.log(items);

//  let random= Math.round(random * 50);
//items.forEach(item => {
//        item.addEventListener('click', e => {    //when click event occurs the browser creates a parameter
        //console.log('item has been clicked');     //or event object - call it 'e' ok? Now add e to call back 
        // console.log(e);                           //function and remove parenthesis
        // console.log(e.target);                      //shaun prefers this one why?
        // console.log(item);  
        //e.target.style.textDecoration= 'line-through';  
//        e.target. += random;  //????????????
//        });
//     });
        //#54 creating and deleting elements
//const ul= document.querySelector("ul");
//ul.remove();
//  const items= document.querySelectorAll('li');
//  items.forEach(item => {
//          item.addEventListener('click', e => {
//          console.log('event happened in LI');
//          e.stopPropagation();
//          e.target.remove();
//  });
//  });
        //create element but not through innerHTML method
// const ul= document.querySelector("ul");         //repeated from line 69, it was getting too far away to see!
// const button= document.querySelector('button');
// button.addEventListener('click', () => {
//         //ul.innerHTML += '<li>another new todo item</li>';
//         const li= document.createElement('li');
//         li.textContent= 'some other new todo item';
//         //ul.append(li);
//         ul.prepend(li);
// });
// ul.addEventListener('click', e => {
//         //console.log('event happened in UL');
//         //console.log(e.target);
//         //console.log(e);         //expand click to target and li, expand target li to tagName 'LI'
//         if (e.target.tagName=== "LI"){
//         e.target.remove();
//         }
// });