(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){var d=document.documentElement,rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
[].forEach.call(document.querySelectorAll('.stg'),function(g){[].forEach.call(g.children,function(c,i){c.style.transitionDelay=(i*110)+'ms';});});
function cnt(el){var to=parseFloat(el.getAttribute('data-count')),dec=(el.getAttribute('data-count').split('.')[1]||'').length,t0=null,dur=1600;if(rm){el.textContent=to.toFixed(dec);return;}function f(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,3);el.textContent=(to*e).toFixed(dec);if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
var els=[].slice.call(document.querySelectorAll('.rv,[data-count]'));
if(rm||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in');if(e.hasAttribute('data-count'))e.textContent=e.getAttribute('data-count');});}
else{var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var ts=(e.target.__rv||[]).concat(els.indexOf(e.target)>-1?[e.target]:[]);ts.forEach(function(t){t.classList.add('in');if(t.hasAttribute('data-count'))cnt(t);});io.unobserve(e.target);}});},{rootMargin:'0px 0px -6% 0px',threshold:.01});
 els.forEach(function(e){var o=e;if(e.classList.contains('rv-c')||e.classList.contains('rv-w')){o=e.parentElement;}if(o!==e){(o.__rv=o.__rv||[]).push(e);}io.observe(o);});
 setTimeout(function(){els.forEach(function(e){var r=e.getBoundingClientRect();if(r.top<innerHeight&&r.bottom>0)e.classList.add('in');});},1200);}
var px=[].slice.call(document.querySelectorAll('[data-px]')),pr=document.getElementById('prog'),tk=false;
function upd(){var h=innerHeight;if(!rm)px.forEach(function(el){var r=el.parentElement.getBoundingClientRect();if(r.bottom<0||r.top>h)return;var s=+el.getAttribute('data-px');el.style.transform='translate3d(0,'+((r.top+r.height/2-h/2)*s).toFixed(1)+'px,0) scale(1.14)';});
 if(pr){var m=d.scrollHeight-h;pr.style.width=(m>0?scrollY/m*100:0)+'%';}d.classList.toggle('scd',scrollY>60);tk=false;}
addEventListener('scroll',function(){if(!tk){requestAnimationFrame(upd);tk=true;}},{passive:true});addEventListener('resize',upd);upd();
[].forEach.call(document.querySelectorAll('.hs'),function(s){var down=false,x0=0,s0=0,mv=0;s.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;mv=0;x0=e.clientX;s0=s.scrollLeft;s.classList.add('drag');});addEventListener('pointerup',function(){down=false;s.classList.remove('drag');});s.addEventListener('pointermove',function(e){if(!down)return;mv=Math.abs(e.clientX-x0);s.scrollLeft=s0-(e.clientX-x0);});s.addEventListener('click',function(e){if(mv>6){e.preventDefault();e.stopPropagation();}},true);});
})();
(function(){function $(i){return document.getElementById(i);}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.3});[].forEach.call(document.querySelectorAll('.wz-ma .wz-stroke'),function(x){io.observe(x);});}else{[].forEach.call(document.querySelectorAll('.wz-stroke'),function(x){x.classList.add('in');});}
var cg=$('cp-g');if(cg){var v=[5,3,2,2],mx=[12,10,6,6],mn=[1,1,0,1];
 function cp(){v.forEach(function(x,k){$('cp-'+k).textContent=x;});var n=v[0]*v[1]*(v[2]+1)*v[3],p=v[0]+v[1]+v[2]+v[3];$('cp-n').textContent=n;$('cp-p').textContent=p;var s=Math.min(n,360),h='';for(var i=0;i<s;i++)h+='<i style="animation-delay:'+Math.min(i*6,900)+'ms"></i>';cg.innerHTML=h;
  $('cp-t').textContent=(n>360?'Showing the first 360. ':'')+'Every top works with every bottom, with or without a layer, and with each pair of shoes. '+(p<=20?'A small, nimble capsule.':p<=35?'A classic seasonal capsule.':'Generous: consider editing a little further.');}
 [].forEach.call(document.querySelectorAll('.wz-st button'),function(b){b.addEventListener('click',function(){var k=+b.getAttribute('data-k');v[k]=Math.max(mn[k],Math.min(mx[k],v[k]+ +b.getAttribute('data-d')));cp();});});cp();}
var fo=$('fb-o');if(fo){var F=[['Linen',[[10,7,9],[3,5,6],[7,7,6],[6,7,7]],'Cool and crisp, softens with age.'],['Cotton',[[8,8,6],[6,6,6],[9,9,8],[8,8,8]],'Everyday, easy and breathable.'],['Wool',[[4,7,10],[9,9,9],[5,5,5],[6,7,8]],'Warm, odour-resistant, needs little washing.'],['Silk',[[8,7,6],[7,7,7],[3,3,3],[10,10,10]],'Light, smooth and warm for its weight.'],['Hemp',[[9,7,6],[4,5,5],[8,8,7],[5,6,6]],'Hard-wearing, like a sturdier linen.'],['Lyocell',[[8,8,5],[8,8,7],[7,7,6],[9,9,8]],'Fluid drape, often blended.']],s=0,p=0;
 function fb(){var r=F.map(function(f){return [f[0],f[1][p][s]+(s===0&&f[0]==='Wool'?-2:0),f[2]];}).sort(function(a,b){return b[1]-a[1];});fo.innerHTML=r.map(function(x){return '<li><b>'+x[0]+'</b><i style="--v:'+(x[1]*10)+'%"></i><em>'+x[1]+'/10</em><small>'+x[2]+'</small></li>';}).join('');}
 function tabs(id,cb){var bs=[].slice.call($(id).querySelectorAll('button'));bs.forEach(function(b){b.addEventListener('click',function(){bs.forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(+b.getAttribute('data-v'));});});}
 tabs('fb-s',function(x){s=x;fb();});tabs('fb-p',function(x){p=x;fb();});fb();}
})();
