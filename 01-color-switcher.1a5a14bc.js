const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]");let d=null;t.disabled=!0,e.addEventListener("click",(e=>{e.target.disabled=!0,t.disabled=!1,d=setInterval((()=>{const e=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=e}),1e3)})),t.addEventListener("click",(t=>{clearInterval(d),t.target.disabled=!0,e.disabled=!1}));
//# sourceMappingURL=01-color-switcher.1a5a14bc.js.map
