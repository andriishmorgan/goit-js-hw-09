import"./assets/modulepreload-polyfill-ec808ebb.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".feedback-form");t.addEventListener("submit",a=>{a.preventDefault();const{email:e,message:s}=t.elements,o={email:e.value,message:s.value};localStorage.removeItem("feedback-form-state"),e.value="",s.value="",console.log(o)});const m=localStorage.getItem("feedback-form-state");if(m){const{email:a,message:e}=JSON.parse(m);t.elements.email.value=a,t.elements.message.value=e}t.addEventListener("input",a=>{const{email:e,message:s}=a.currentTarget.elements,o={email:e.value,message:s.value};localStorage.setItem("feedback-form-state",JSON.stringify(o))})});
//# sourceMappingURL=commonHelpers2.js.map