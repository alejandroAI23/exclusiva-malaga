const clues=[
{label:'PRIMERA PISTA',title:'No hay que hacer<br>las maletas.',caption:'Podéis descartar unas vacaciones.'},
{label:'SEGUNDA PISTA',title:'No se puede<br>envolver.',caption:'Ni esconder en una caja con un lazo.'},
{label:'ÚLTIMA PISTA',title:'Tiene un portavoz.<br>Pero no da discursos.',caption:'Lo ha dejado todo por escrito.'}
];
let step=0;
const next=document.querySelector('#next');
const mystery=document.querySelector('#mystery');
const reveal=document.querySelector('#reveal');
const photo=document.querySelector('#photo');
function renderClue(){const item=clues[step];document.querySelector('#clue-label').textContent=item.label;document.querySelector('#clue').innerHTML=item.title;document.querySelector('#clue-caption').textContent=item.caption;document.querySelector('#count').textContent=`0${step+1} / 03`;document.querySelector('.progress').setAttribute('aria-label',`Pista ${step+1} de 3`);document.querySelectorAll('.progress i').forEach((dot,i)=>dot.classList.toggle('active',i<=step));next.textContent=step===2?'Abrir el mensaje':'Ver la siguiente pista';document.querySelector('#under-button').textContent=step===2?'Última oportunidad para hacer vuestra apuesta.':'Guardad vuestra apuesta para el final.';const area=document.querySelector('#clue-area');area.classList.remove('enter');void area.offsetWidth;area.classList.add('enter');}
next.addEventListener('click',()=>{if(step<2){step++;renderClue();return;}photo.src='recuerdo.jpg';mystery.hidden=true;reveal.hidden=false;reveal.classList.add('enter');document.querySelector('#footer-note').textContent='Ahora ya lo sabéis.';document.querySelector('#announcement').focus({preventScroll:true});window.scrollTo({top:0,behavior:'instant'});});
document.querySelector('#replay').addEventListener('click',()=>{step=0;renderClue();reveal.hidden=true;mystery.hidden=false;document.querySelector('#footer-note').textContent='El secreto está al otro lado.';window.scrollTo({top:0,behavior:'instant'});next.focus({preventScroll:true});});
