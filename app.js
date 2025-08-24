// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1. Ingresar un nombre al array (al hacer clic en boton añadir)
//2.Imprimer en espacio lista amigos

let amigos =[];
function limpiarCaja(){
    //el uso de # es porque en si nuestro identificador es un id del HTML al que le hemos puesto valorUsuario para diferenciarlo del resto
    //let valorCaja=document.querySelector('#valorUsuario');
    //valorCaja.value ='';
    document.querySelector('#amigo').value='';
}

//Tomemos en cuenta que el agregarAmigo(), se ejecuta cada que se presiona
// el botón (button)
function agregarAmigo(){
    //1.Agregar nombres cada que se presione el boton "Añadir"
    
    let friend = document.getElementById('amigo').value;                   
    if(friend===""){
        alert('Por favor, inserte un nombre.');
    return false;       
    }

    amigos.push(friend);   
    console.log(amigos);

    listaAmigos.innerHTML = "";

    //2. Recorre el arreglo creado y asignar 

    for(let i=0; i<amigos.length;i++){
        //Crear etiqueta li(espacio) para(for) i=0 (que es el primer ingreso)
        let li = document.createElement("li");
        //Agrego el amigos(0) a la etiqueta li creada
        li.innerHTML=`${i+1} . ${amigos[i]}`;
        //Agregar la etiqueta li creada con su contenido en el bloque (lista amigos)
        listaAmigos.appendChild(li);
    }
    
    limpiarCaja();      
    
}

function sortearAmigo(){
    if(amigos.length===0){
        alert('Por favor, insertar nombres para el sorteo');
    return false;       
    }            
    let seleccion = document.getElementById('resultado');
    seleccion.innerHTML=amigos[Math.floor(Math.random() * amigos.length)];
    console.log(seleccion.innerHTML);    
}


