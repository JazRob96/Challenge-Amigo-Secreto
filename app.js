// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//1. Ingresar un nombre al array (al hacer clic en boton añadir)
//2.Imprimer en espacio lista amigos

let Amigos =[];

function agregarAmigo(){
    let friend;
    friend = document.getElementById('amigo').value;                   
    if(friend===""){
        alert('Por favor, inserte un nombre.');
    return false;       
    }
    Amigos.push(friend);   
    console.log(Amigos); 
}

