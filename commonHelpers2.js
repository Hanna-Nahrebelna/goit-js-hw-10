import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const m=document.querySelector(".form");m.addEventListener("submit",n=>{n.preventDefault();const s=parseInt(document.querySelector("input[name='delay']").value),o=document.querySelector("input[name='state']:checked"),t=parseInt(s);new Promise((e,l)=>{o&&o.value==="fulfilled"?setTimeout(()=>{e(t)},t):setTimeout(()=>{l(t)},t)}).then(e=>{console.log(`✅ Fulfilled promise in ${e} ms`)}).catch(e=>{console.log(`❌ Rejected promise in ${e} ms`)})});
//# sourceMappingURL=commonHelpers2.js.map