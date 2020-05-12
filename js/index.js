var formulario = document.getElementById('formulario'),
    cardCode = formulario.cardCode,
    cvcCode=formulario.cvcCode,
    amount=formulario.amount,
    firstName= formulario.firstName,
    lastName=formulario.lastName,
    city=formulario.city,
    state=formulario.state,
    postalCode = formulario.postalCode,
    radioBoton=formulario.radioBoton,
    errorDato =document.getElementById('error');


function validaCardCode(e){
    if(cardCode.value==""||cardCode.value==null||!formulario.cardCode.value.trim().length>0){
        formulario.cardCode.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No ingresaste el numero de la tarjeta'+'<br>';

        e.preventDefault();
    }else{
        formulario.cardCode.classList.remove('is-invalid');
        formulario.cardCode.classList.add('is-valid');
        error.style.display='none';

    }
}
function validaCVCCode(e){
    if(cvcCode.value==""||cvcCode.value==null||!formulario.cardCode.value.trim().length>0){
        formulario.cvcCode.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No ingresaste el codigo CVC'+'<br>';

        e.preventDefault();
    }else{
        formulario.cvcCode.classList.remove('is-invalid');
        formulario.cvcCode.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaAmount(e){
    if(amount.value==""||amount.value==null||!formulario.amount.value.trim().length>0){
        formulario.amount.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*Indique la cantidad'+'<br>';

        e.preventDefault();
    }else{
        formulario.amount.classList.remove('is-invalid');
        formulario.amount.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaFirstName(e){
    if(firstName.value==""||firstName.value==null||!formulario.firstName.value.trim().length>0){
        formulario.firstName.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No ingresaste tu nombre'+'<br>';

        e.preventDefault();
    }else{
        formulario.firstName.classList.remove('is-invalid');
        formulario.firstName.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaLastName(e){
    if(lastName.value==""||lastName.value==null||!formulario.lastName.value.trim().length>0){
        formulario.lastName.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No ingresaste tu apellido'+'<br>';

        e.preventDefault();
    }else{
        formulario.lastName.classList.remove('is-invalid');
        formulario.lastName.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaCity(e){
    if(city.value==""||city.value==null||!formulario.city.value.trim().length>0){
        formulario.city.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No ingresaste la ciudad'+'<br>';

        e.preventDefault();
    }else{
        formulario.city.classList.remove('is-invalid');
        formulario.city.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaState(e){
    if(state.value=="Pick a State"||state.value==null||!formulario.state.value.trim().length>0){
        formulario.state.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*No seleccionaste un estado'+'<br>';

        e.preventDefault();
    }else{
        formulario.state.classList.remove('is-invalid');
        formulario.state.classList.add('is-valid');
        error.style.display='none';
    }
}
function validaPostalCode(e){
    if(postalCode.value==""||postalCode.value==null||!formulario.postalCode.value.trim().length>0){
        formulario.postalCode.classList.add('is-invalid');
        error.style.display='block';
        error.innerHTML+= '*Ingrese su codigo postal'+'<br>';

        e.preventDefault();
    }else{
        formulario.postalCode.classList.remove('is-invalid');
        formulario.postalCode.classList.add('is-valid');
        error.style.display='none';
    }
}



function validarFormulario(e){
    validaCardCode(e);
    validaCVCCode(e);
    validaAmount(e);
    validaFirstName(e);
    validaLastName(e);
    validaCity(e);
    validaState(e);
    validaPostalCode(e);
}
formulario.addEventListener('submit', validarFormulario);

// `<div class="carta"><div class="top-carta"><h1 class="simbolo-top" id="simb"></h1>
//             </div>
//             <div class="numero">
//                 <h1 id="numero"></h1>
//             </div>
//             <div class="down-carta">
//                 <h1 class="simbolo-down" id="simb1"></h1>
//             </div>
//         </div>`