//Step one - find the element!
//query selector result is nodes not html elements as below - means?
//  const para = document.querySelector('p');
//  console.log(para);

// const para = document.querySelector('.error');
// console.log(para);

// const para = document.querySelector('div.error');
// console.log(para);

//  const para = document.querySelector('body > h3:nth-child(1)');
//  console.log(para);

//   const para = document.querySelector('div.error:nth-child(6)');
//    console.log(para); 

//  const paras = document.querySelectorAll('p');
//  paras.forEach(para => {                         //forEach ok with nodes
//     console.log(para);    
//  });
//    console.log(paras); 
//    console.log(paras[4]);

//   const paras = document.querySelectorAll('h4');
//   paras.forEach(para => {                         //forEach ok with nodes
//      console.log(para);    
//   });
//     console.log(paras); 
//     console.log(paras[1]);

// const errors= document.querySelectorAll('.error');
// console.log(errors);
// start 15.21

//get element by ID, class name & tag name result is html element(s) not nodes as above - means?
                                                    //forEach NOT OK with html elements
// const title= document.getElementById('page-title');
// console.log(title);  
                                     //result is html element
//get element by class name
// const errors= document.getElementsByClassName('error');
// console.log(errors);              //result is html collection

//get element by tag name
// const paras= document.getElementsByTagName('p');
// console.log(paras);
// console.log(paras[3]);

//Step two - change the element
//   const para= document.querySelector('p');
//   console.log(para.innerText)
//   para.innerText += " No, I'll (add this) change the text";        //+= to append the text

//  const paras= document.querySelectorAll('p');
//  console.log(paras);
//  paras.forEach(para => {                 //para initiates a call-back function
//      console.log(para.innerText);
//      para.innerText +=  "  Here's some extra (or different) text";
//  });

//  const content= document.querySelector('.content');
//  console.log(content.innerHTML);
 
//  content.innerHTML += '<h4>This will change the old content to (or add to) this new content</h4>';
 //This will change the old content to (or add to) this new content           (inner html)
 //<h4>This will change the old content to (or add to) this new content</h4>  (outer html)

// const content= document.querySelector('.content');          //from above
// const people= ['bob', 'june', 'kelly', 'shona', 'finn', 'freya', 'etc'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link= document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');
// console.log(link.getAttribute('href'));
// link.innerText= 'Now even cooler site!';
// const mssg= document.querySelector('p');
// console.log(mssg.getAttribute('class'));
// mssg.setAttribute('class', 'success');
// //adding and changing html elements 
// mssg.setAttribute('style', 'color: green;');
//contd on jscriptA.js 
