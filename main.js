let kalorilist = [];
function addkaja1(){
    let kalori = parseInt(document.getElementById('kaloria').textContent);
    kalori += 20;
    kalorilist.push("Kenyér("+kalori+")");
    document.getElementById('kaloria').textContent = kalori;
    let jo = kalori +"px";
    document.getElementById('joe').style.width = jo;
}

function addkaja2(){
    let kalori = parseInt(document.getElementById('kaloria').textContent);
    kalori += 1;
    kalorilist.push("Víz("+kalori+")");
    document.getElementById('kaloria').textContent = kalori;
    let jo = kalori +"px";
    document.getElementById('joe').style.width = jo;
}

function addkaja3(){
    let kalori = parseInt(document.getElementById('kaloria').textContent);
    kalori += 10;
    kalorilist.push("Krumpli("+kalori+")");
    document.getElementById('kaloria').textContent = kalori;
    let jo = kalori +"px";
    document.getElementById('joe').style.width = jo;
}

function urites(){
    document.getElementById('kaloria').textContent = 0;
    let kalori = parseInt(document.getElementById('kaloria').textContent);
    kalorilist = [];
    let jo = kalori +"px";
    document.getElementById('joe').style.width = jo;
}

function init() {
    document.getElementById('kaja1').addEventListener('click',addkaja1);
    document.getElementById('kaja2').addEventListener('click', addkaja2)
    document.getElementById('kaja3').addEventListener('click',addkaja3);
    document.getElementById('urit').addEventListener('click',urites);
}

document.addEventListener('DOMContentLoaded',init);