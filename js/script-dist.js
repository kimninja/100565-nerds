var link=document.querySelector(".btn-contact"),popup=document.querySelector(".modal-content"),close=popup.querySelector(".modal-content-close"),names=popup.querySelector("[name=names]"),form=popup.querySelector("form"),email=popup.querySelector("[name=email]"),text=popup.querySelector("[name=letter]");link.addEventListener("click",function(event){event.preventDefault(),popup.classList.add("modal-content-show")}),close.addEventListener("click",function(event){event.preventDefault(),popup.classList.remove("modal-content-show")}),form.addEventListener("submit",function(event){names.value&&email.value&&text.value?localStorage.setItem("names",names.value):(event.preventDefault(),names.value||names.classList.add("input-shake"),email.value||email.classList.add("input-shake"),text.value||text.classList.add("input-shake"),console.log("Нужно ввести имя и email"))}),window.addEventListener("keydown",function(event){27===event.keyCode&&popup.classList.contains("modal-content-show")&&popup.classList.remove("modal-content-show")});
