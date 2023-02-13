const h1 = document.getElementById('h1VascoDaGama');
const hinos = document.getElementById('hinos');
const idolos = document.getElementById('idolos');
const historia = document.getElementById('historia');
const uniformes = document.getElementById('uniformes');
const secaoInicial = document.getElementById('secaoInicial');
const secaoHinos = document.getElementById('secaoHinos');
const secaoIdolos = document.getElementById('secaoIdolos');
const secaoHistoria = document.getElementById('secaoHistoria');
const secaoUniformes = document.getElementById('secaoUniformes');



function h1VascoDaGama(){
    self.location.reload();  
}

function Hinos(){
    if(!hinos.classList.contains('secaoAtiva')){
        hinos.classList.remove('secaoAtiva');
        historia.classList.remove('secaoAtiva');
        uniformes.classList.remove('secaoAtiva');
        idolos.classList.remove('secaoAtiva');
        hinos.classList.add('secaoAtiva');
        if(hinos.classList.contains('secaoAtiva')){
            secaoInicial.style.display='none';
            secaoHistoria.style.display='none';
            secaoIdolos.style.display='none';
            secaoUniformes.style.display='none';
            secaoHinos.style.display='block';
        }
    }
}
function Idolos(){
    if(!idolos.classList.contains('secaoAtiva')){
        idolos.classList.remove('secaoAtiva');
        historia.classList.remove('secaoAtiva');
        uniformes.classList.remove('secaoAtiva');
        hinos.classList.remove('secaoAtiva');
        idolos.classList.add('secaoAtiva');
        if(idolos.classList.contains('secaoAtiva')){
            secaoInicial.style.display='none';
            secaoHistoria.style.display='none';
            secaoUniformes.style.display='none';
            secaoHinos.style.display='none';
            secaoIdolos.style.display='block';
        }
    }
}
function Historia(){
    if(!historia.classList.contains('secaoAtiva')){
        historia.classList.remove('secaoAtiva');
        hinos.classList.remove('secaoAtiva');
        idolos.classList.remove('secaoAtiva');
        uniformes.classList.remove('secaoAtiva');
        historia.classList.add('secaoAtiva');
        if(historia.classList.contains('secaoAtiva')){
            secaoInicial.style.display='none';
            secaoHinos.style.display='none';
            secaoIdolos.style.display='none';
            secaoUniformes.style.display='none';
            secaoHistoria.style.display='block';
        }
    }
}
function Uniformes(){
    if(!uniformes.classList.contains('secaoAtiva')){
        uniformes.classList.remove('secaoAtiva');
        historia.classList.remove('secaoAtiva');
        idolos.classList.remove('secaoAtiva');
        hinos.classList.remove('secaoAtiva');
        uniformes.classList.add('secaoAtiva');
        if(uniformes.classList.contains('secaoAtiva')){
            secaoInicial.style.display='none';
            secaoHistoria.style.display='none';
            secaoIdolos.style.display='none';
            secaoHinos.style.display='none';
            secaoUniformes.style.display='block';
        }
    }
}