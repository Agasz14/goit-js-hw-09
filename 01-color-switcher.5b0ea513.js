function t(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}let e=null;document.querySelector("body");const d=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");d.addEventListener("click",(()=>{d.disabled=!0,o.disabled=!1,e=setInterval(t,1e3)})),o.addEventListener("click",(function(){o.disabled=!0,d.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.5b0ea513.js.map