const input=document.querySelector('.inputt');

const btn_encriptar=document.querySelector('.en');
const btn_desencriptar=document.querySelector('.de');
const btn_copiar=document.querySelector('.co');

const img_input=document.querySelector('.back');

const message_contet=document.querySelector('.card-text-encripted');

const g=document.querySelector('.g');
/**/
const expre_regular_letras_y_numeros="[a-z]{2,254}";
/***/
let aux;
/**/

// /\d/ o /[0-9]/ Busca cualquier dígito (número arábigo). Equivalente a [0-9]



// const checkType=(words)=>{
//     words=words.trim(); //elimina los espacios en blanco en ambos extremos del string
//     const regxs ={
//         "lower":/^[a-z0-9 ]+$/,
//         "upper":/^[A-Z0-9 ]+$/,
//         "upperLower":/^[A-Za-z0-9 ]+$/,
//         "acento":3,
//         "acentoMayus":4
//     }
//     if(regxs.lower.test(words))return'0';
//     if(regxs.upper.test(words))return'1';
//     if(regxs.upperLower.test(words))return'2';
//      if(regxs.acento.test(words))return'3';
//     if(regxs.acentoMayus.test(words))return'4';
// }
// if(checkType(input.value)=='0') console.log('minusculas')
/**/
const encriptar=(au)=>{
    /*for(let i=0;i<texto.length;i++){
        fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!
    }*/
    return aux=au.replaceAll('e','enter').replaceAll('i','imes').replaceAll('a','ai').replaceAll('o','ober').replaceAll('u','ufat');
}
const desencriptar=(au)=>{
    return aux=au.replaceAll('enter','e').replaceAll('imes','i').replaceAll('ai','a').replaceAll('ober','o').replaceAll('ufat','u');
}
/**/
// const box_heigth=(box)=>{
//     return console.log(box.getBoundingClientRect().height);
// }
// const copy_element=()=>{
//     btn_copiar.select();
//     document.execCommand('copy');
// }
// /* */
// document.addEventListener('load',()=>{
//     btn_copiar.classList.toggle('show');
// })

let p_input=document.createElement("p");
p_input.classList.add('clase');

let button=document.createElement("button");
button.classList.add('co');
button.textContent='Copiar'

const element=(e)=>{
    message_contet.appendChild(p_input);
    message_contet.innerHTML='';
    message_contet.appendChild(p_input);
    p_input.textContent=e(input.value);
    message_contet.appendChild(button);
    // btn_copiar.classList.toggle('show');
}


btn_encriptar.addEventListener("click", () => {
    // console.log(encriptar(input.value));
    // if(checkType(input.value)=='0') console.log('minusculas')
    // if(checkType(input.value)=='1') console.log('mayusculas')
    // if(checkType(input.value)=='2') console.log('minusculas - mayusculas')
    
    element(encriptar);
    
    // message_contet.innerHTML='';
    // message_contet.appendChild(p_input);
    // p_input.textContent=encriptar(input.value);
    // message_contet.appendChild(btn_copiar);
    
    
    // message_contet.innerHTML=`<p>${encriptar(input.value)}</p>`
                            // <button class="co">Copiar</button>`;
    // btn_copiar.classList.toggle('show');
});

btn_desencriptar.addEventListener("click", () => {
    // console.log(desencriptar(input.value));
    // message_contet.innerHTML=`<p>${desencriptar(input.value)}</p>
    //                         <button class="co" type="button">Copiar</button>`;
    
    element(desencriptar);
    // message_contet.innerHTML='';
    // message_contet.appendChild(p_input);
    // p_input.textContent=desencriptar(input.value);
    // message_contet.appendChild(btn_copiar);
    // btn_copiar.classList.toggle('show');

});

button.addEventListener("click", () => {
    // message_contet.innerHTML=`<p>${desencriptar(input.value)}</p>`;
    // p_input.select();
    // p_input.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(p_input.textContent);
//   g.classList.toggle('show')
});