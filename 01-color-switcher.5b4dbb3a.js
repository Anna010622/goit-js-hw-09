!function(){var e,t=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),o=document.querySelector("body");function n(){return"#".concat(Math.floor(16777215*Math.random()).toString(16))}r.disabled="true",t.addEventListener("click",(function(){o.style.backgroundColor=n(),e=setInterval((function(){o.style.backgroundColor=n()}),1e3),t.disabled="true",r.removeAttribute("disabled")})),r.addEventListener("click",(function(){t.removeAttribute("disabled"),r.disabled="true",clearInterval(e)}))}();
//# sourceMappingURL=01-color-switcher.5b4dbb3a.js.map
