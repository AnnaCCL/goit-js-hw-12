import{a as d,S as u,i as f}from"./assets/vendor-b0d10f48.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();const p="44067691-76497e8def9c6eb00e23cd4a0",m="https://pixabay.com/api/";async function y(r,t=1,a=15){const o=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:a});try{return(await d.get(`${m}?${o}`)).data}catch(e){console.error(e)}}let c;function h(r,t){L(t);const a=r.map(o=>g(o)).join("");t.insertAdjacentHTML("beforeend",a),c?c.refresh():c=new u(".gallery a")}function g({webformatURL:r,largeImageURL:t,tags:a,likes:o,views:e,comments:n,downloads:s}){return`
<a class="gallery-item" href="${t}">
    <img src="${r}" alt="${a}" loading="lazy" />
    <div class="info">
    <p><span>Likes:</span> ${o}</p>
    <p><span>Views:</span> ${e}</p>
    <p><span>Comments:</span> ${n}</p>
    <p><span>Downloads:</span> ${s}</p>
    </div>
</a>
`}function L(r){r.innerHTML=""}function i(r){f.error({title:"Error",message:r})}function b(){const r=document.createElement("div");r.className="loader",document.body.appendChild(r)}function l(){const r=document.querySelector(".loader");r&&document.body.removeChild(r)}const S=document.querySelector("form"),v=document.querySelector(".gallery");S.addEventListener("submit",P);function P(r){r.preventDefault();const t=r.currentTarget,a=t.elements.query.value.trim();if(a===""){i("Please enter a search query.");return}b(),y(a).then(o=>{if(l(),o.length===0){i("Sorry, there are no images matching your search query. Please try again!");return}h(o,v)}).catch(o=>{l(),console.log(o),i("Failed to fetch images. Please try again later.")}),t.reset()}
//# sourceMappingURL=commonHelpers.js.map
