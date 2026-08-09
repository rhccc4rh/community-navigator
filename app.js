
function initMenu(){const b=document.querySelector('.mobile-toggle'),n=document.querySelector('.nav');if(b&&n)b.addEventListener('click',()=>n.classList.toggle('open'))}
function buildServiceCards(container,list){container.innerHTML=list.map(s=>`<article class="card"><div class="icon">${s.icon}</div><h3>${s.title}</h3><p class="muted">${s.description}</p><div class="route-note"><strong>${s.agency}</strong><br><span class="muted">${s.division}</span></div><p class="muted"><strong>Prepare:</strong> ${s.prepare}</p><a class="btn btn-deep" href="report.html?type=${encodeURIComponent(s.id)}">Start guided report</a></article>`).join('')}
document.addEventListener('DOMContentLoaded',initMenu);
