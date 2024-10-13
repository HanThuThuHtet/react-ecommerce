import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import "./index.css";
import App from './app';

const categories = ["electronics","jewelery","men's clothing","women's clothing"];

const root = document.querySelector('#root');

// //create view
// const app = createElement(
//     "div",
//     {id:"category-section",className:"p-5"},
//     createElement("p",null,"Product Categories"),
//     createElement("div",null,...categories.map((category) => createElement("button",null,category)))
// );
// console.log(app);

//render view
createRoot(root).render(App());


// const root = document.querySelector('#root');

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add('text-2xl','text-gray-500','mb-3');


// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add('border','border-black','px-4','py-2','me-2')
//     return btn;
// } ;

// root.append(title);

// categories.forEach((category) => root.append(categoryButton(category)));


