!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),a=null;e.disabled=!0,t.addEventListener("click",(function(t){t.target.disabled=!0,e.disabled=!1,a=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(e){clearInterval(a),e.target.disabled=!0,t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.46cac89d.js.map