var str=function(){"use strict";const e=e=>e.replace(/^\s+/,"").replace(/\s+$/,"");var t=t=>(t=e(t),String(t.charAt(0).toUpperCase())+String(t.slice(1).toLowerCase()));return{slugify:(t,r="-")=>e(t).toLowerCase().replace(/ /g,r).normalize("NFD").replace(/[\u0300-\u036f]/g,""),camelcase:r=>e(r).toLowerCase().split(" ").reduce(((e,r,i)=>e+(0===i?r:t(r))),""),capitalize:t,count:e=>String(e).length,endsWith:(e,t,r)=>{e=String(e),(!r||!isFinite(r)||Math.floor(r)!==r||r>e.length)&&(r=e.length),r-=t.length;const i=e.indexOf(t,r-1);return-1!==i&&i===r},startsWith:(e,t,r)=>String(e).indexOf(t,r||0)===(r||0),lower:e=>e.toLowerCase(),upper:e=>String(e).toUpperCase(),trim:e}}();
