function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},i=t.parcelRequire7bc7;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire7bc7=i);var r=i("7Y9D8");const u=document.querySelector(".form"),l=document.querySelector("button"),d=document.querySelector('[name="delay"]'),a=document.querySelector('[name="step"]'),s=document.querySelector('[name="amount"]');let c,f,m,p=0;function v(e,t){return new Promise(((n,o)=>{const i=Math.random()>.3;setTimeout((()=>{i?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}function y(){c=Number(d.value)}function b(){f=Number(a.value)}u.addEventListener("submit",(function(e){e.preventDefault(),p=0,y(),b(),e.target.reset()})),l.addEventListener("click",(function(){for(let t=0;t<m;t++)p+=1,d.value&&a.value&&s.value&&(v(p,c).then((({position:t,delay:n})=>{console.log(`✅ Fulfilled promise ${t} in ${n}ms`),e(r).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{console.log(`❌ Rejected promise ${t} in ${n}ms`),e(r).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)})),c+=f)})),d.addEventListener("input",y),a.addEventListener("input",b),s.addEventListener("input",(function(e){m=Number(e.target.value)}));
//# sourceMappingURL=03-promises.064f21b7.js.map