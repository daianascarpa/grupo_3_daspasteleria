window.addEventListener('load', function(){
    const campoEmail = document.querySelector("[name=email]");
    const campoPassword = document.querySelector("[name=user_password]");
      

   const validateFieldPassword = (e) => { 
      const field = e.target;
       const fieldValue = e.target.value;
       if (fieldValue.trim().length == 0) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;
       } else if (fieldValue.trim().length < 8) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} debe tener al menos 8 caracteres`;
         } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }

   const validateFieldEmail = (e) =>{
        const field = e.target;
        const fieldValue = e.target.value;
        const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/); 
        if (fieldValue.trim().length == 0) {
         field.classList.add("invalid");
         field.nextElementSibling.classList.add ("text-danger");
         field.nextElementSibling.innerText= `El campo ${field.placeholder} no debe estar vacio`;}
         else if (fieldValue.trim().length > 0 && !regex.test(fieldValue)) {
       field.classList.add("invalid");
       field.nextElementSibling.classList.add ("text-danger");
       field.nextElementSibling.innerText= "Debe ingresar un email válido";
       } else {
        field.classList.remove("invalid");
        field.nextElementSibling.classList.remove ("text-danger");
        field.nextElementSibling.innerText= "";
       }
   }
  

campoEmail.addEventListener("blur", validateFieldEmail);
campoPassword.addEventListener("blur", validateFieldPassword);


})
