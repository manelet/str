var str=function(){"use strict";return{slugify:(e,r="-")=>(e=>e.replace(/^\s+/,"").replace(/\s+$/,""))(e).toLowerCase().replace(/ /g,r).normalize("NFD").replace(/[\u0300-\u036f]/g,"")}}();
