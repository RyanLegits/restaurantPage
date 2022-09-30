(()=>{"use strict";var e={d:(t,n)=>{for(var a in n)e.o(n,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:n[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};e.d({},{Z:()=>c});const t=(e,t,...n)=>{const a=document.createElement(e);for(const e in t)a.setAttribute(e,t[e]);return n.forEach((e=>{"string"==typeof e?a.appendChild(document.createTextNode(e)):a.appendChild(e)})),a},n=JSON.parse('{"v":[{"Salad":[{"Luang Prabang Salad":"Laos salad with hard-boiled egg, watercress, peanuts and cilantro served on a bed of mixed greens and accompanied by a traditional Lao dressing"},{"Christmas Salad":"An Icelandic favorite with redd cabbage, red currant jelly, apricot preserves and fresh lemon juice"}]},{"Appetizer":[{"Solterito":"Peruvian chopped salad with corn, edamame, red onions, cherry tomatoes, feta, jalapeño, olives, salt, pepper, and cilantro"},{"Tarteletter":"From Denmark, puff pastry tartlets filled with chicken and asparagus sauce"}]},{"Entrée":[{"Liboke":"Congolese boiled fish with tomato and chile, wrapped in banana leaves and grilled with a house blend of spices"},{"Oil Down":"The national dish of Granada consisting of vegetables, starchy tubers, green bananas, chicken and pigtails"}]},{"Dessert":[{"Breskvice":"Croatian peach shaped Christmas cookies with chocolate filling"},{"Kue Mangkok":"Traditional steamed cupcakes from Brunei flavored with tapai (fermented cassava)"}]}]}');const a=document.querySelectorAll("[data-tab]"),o=document.getElementsByClassName("active");function c(){if(!this.classList.contains("active")){Array.from(o).forEach((e=>{e.classList.remove("active")})),this.classList.add("active");const e=this.getAttribute("data-tab");document.getElementById(e).classList.add("active")}}Array.from(a).forEach((e=>{e.addEventListener("click",c)})),function(){const e=document.querySelector("#content"),n=t("div",{class:"header"});e.appendChild(n);const a=t("div",{class:"header-logo-cont"},t("h3",{class:"header-logo"},"WR"));n.appendChild(a);const o=t("div",{class:"header-nav-cont"});n.appendChild(o);const i=t("ul",{class:"nav-menu"});o.appendChild(i);const s=["Home","Menu","Contact"];for(let e=0;e<s.length;e+=1){const n=s[e],a=document.createElement("li");a.setAttribute("data-tab",n.toLowerCase()),a.addEventListener("click",c),i.appendChild(a);const o=t("a",{href:"#"},`${n}`);a.appendChild(o)}}(),function(){const e=document.querySelector("#content"),n=document.createElement("div");n.setAttribute("id","home"),n.classList.add("flex-item","active"),e.appendChild(n),function(){const e=t("div",{class:"background-cont"});n.appendChild(e)}(),function(){const e=document.querySelector(".background-cont"),n=t("div",{class:"hero"},t("div",{class:"hero-text-cont"},t("h1",{},"World Restaurant"),t("h6",{},"'Cause when you're here, you're a friend!")));e.appendChild(n)}(),function(){const e=t("div",{class:"info"});n.appendChild(e);const a=t("div",{class:"info-text-cont"},"At World Restaurant we strive to bring together the most delectable cuisine from every corner of the world! Our head chef Gordon Alléno has studied cuisine on every continent, working with renowned chefs in France, Peru, South Africa, the United States, and Thailand. Alléno brings all his knowledge together to create both traditional recipes and fusion creations. Here at World Restaurant, we truly believe that every culture is beautiful (and tasty)!\n\nEnjoy the ambiance with cultural architecture from around the world, as well as contemporary art contrasting ancient relics that will make your meal an experience. Our waiters are knowledgeable in the history of every cultural piece or symbol in our restaurant. Experience a tour of the World while enjoying the cuisine that it has created.\n\nWelcome to World Restaurant!");e.appendChild(a);const o=t("div",{class:"info-image-cont"},t("img",{class:"info-image",src:"../infoImage.jpg"}));e.appendChild(o)}()}(),function(){const e=document.querySelector("#content"),a=t("div",{id:"menu",class:"flex-item"});e.appendChild(a);const o=t("div",{class:"title-cont"},t("h1",{},"Menu"));a.appendChild(o);const c=t("h6",{class:"menu-info"},"Our menu changes weekly and features fresh, locally-sourced ingredients.\n\nHere are our current selections:");a.appendChild(c);const i=t("div",{class:"menu-sec-cont"});a.appendChild(i),function(){function e(e){const n=document.querySelector(".menu-sec-cont"),a=t("div",{id:e,class:"menu-sec"});n.appendChild(a)}for(const a in n.v){e(`menu-sec-${a}`);const o=Object.keys(n.v[a]),c=o.toString(),i=document.getElementById(`menu-sec-${a}`),s=t("h3",{id:`sec-header-${a}`,class:"sec-header"},`${o}`);i.appendChild(s);for(const e in n.v[a][c]){const o=Object.keys(n.v[a][c][e]).toString(),s=Object.values(n.v[a][c][e]).toString(),r=t("div",{id:`menu-sec-item-${e}`,class:"sec-item"},`${o}`);i.appendChild(r);const d=t("div",{id:`item-desc-${e}`,class:"item-desc"},`${s}`);i.appendChild(d)}}}()}(),function(){const e=document.querySelector("#content"),n=t("div",{id:"contact",class:"flex-item"});e.appendChild(n);const a=t("div",{class:"title-cont"},t("h1",{},"Contact"));n.appendChild(a)}(),function(){const e=document.querySelector("#content"),n=t("div",{class:"footer"},"© Copyright 2022 World Restaurant");e.appendChild(n)}()})();