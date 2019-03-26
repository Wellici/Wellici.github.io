// Capturei o botao que abre o formulario
let btn_contato = document.querySelector('#entrar-contato');

// Mandei o botao que abre meu formulario ficar ouvindo um evento de click
btn_contato.addEventListener('click', function(event){
    //event.preventDefault();
    // capturei a lista de inputs do meu fomulario
    let inputs = document.querySelectorAll('input.form-control'),
        enviar = document.querySelector('#btn-enviar-form'),
        textarea = document.getElementById('textarea');
    setInterval(() => {
        if(verificaCampos(inputs)){
            enviar.removeAttribute('disabled');
            enviar.addEventListener('click', () => {

                //limpaForms(inputs);
                //textarea.value = '';
            });
        }   
    }, 1000);
});

// Se todos os campos estiverem preechidos essa função vai retornar true
function verificaCampos(listInput) {
    let todosPreechidos = false,
        cont = 0;
    listInput.forEach(element => {
        if(element.value != ''){
           cont ++;
        }
    });
    if(cont == 3){
        todosPreechidos = true;
    }
    return todosPreechidos;
} 

function limpaForms(listInput){
    listInput.forEach(element => {
        element.value = '';
    });
}
