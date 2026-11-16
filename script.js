const intro=document.getElementById('intro');
window.addEventListener('load',()=>setTimeout(()=>intro.classList.add('hide'),1700));
const car=document.getElementById('carArt');
let down=false,startX=0,rotation=0;
const stage=document.getElementById('carStage');
stage.addEventListener('pointerdown',e=>{down=true;startX=e.clientX;stage.setPointerCapture(e.pointerId)});
stage.addEventListener('pointermove',e=>{if(!down)return;rotation+=(e.clientX-startX)*.45;startX=e.clientX;car.style.transform=`rotateY(${rotation}deg) scale(${1+Math.sin(rotation/60)*.015})`});
stage.addEventListener('pointerup',()=>down=false);stage.addEventListener('pointercancel',()=>down=false);
document.querySelectorAll('[data-view]').forEach(btn=>btn.addEventListener('click',()=>{
 document.querySelectorAll('[data-view]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');
 const view=btn.dataset.view;
 if(view==='360'){car.style.transform=`rotateY(${rotation}deg)`;car.style.filter='drop-shadow(0 25px 22px #000)';}
 else if(view==='exterior'){car.style.transform='rotateY(-18deg) scale(1.04)';car.style.filter='drop-shadow(0 25px 22px #000) saturate(1.2)';}
 else if(view==='interior'){car.style.transform='rotateY(180deg) scale(.92)';car.style.filter='drop-shadow(0 25px 22px #000) brightness(.75)';}
 else {car.style.transform='rotateY(35deg) scale(.88)';car.style.filter='drop-shadow(0 25px 22px #000) contrast(1.25)';}
}));
const showroom=document.getElementById('showroom');
document.getElementById('enterGarage').addEventListener('click',()=>{showroom.classList.add('open');showroom.setAttribute('aria-hidden','false')});
document.getElementById('closeShowroom').addEventListener('click',()=>{showroom.classList.remove('open');showroom.setAttribute('aria-hidden','true')});
document.addEventListener('keydown',e=>{if(e.key==='Escape')showroom.classList.remove('open')});
