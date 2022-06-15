let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.getElementById("date").innerHTML = day + " / " + month + " / " + year;

window.addEventListener('load', () => { //hiperpack collapse()//
  const collapser = document.getElementById('hiperpackCollapser');
  const collapsable = document.getElementById('hiperpackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //megapack collapse()//
  const collapser = document.getElementById('megapackCollapser');
  const collapsable = document.getElementById('megapackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //premium megapack collapse()//
  const collapser = document.getElementById('pMegapackCollapser');
  const collapsable = document.getElementById('pMegapackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => { //premium hiperpack collapse()//
  const collapser = document.getElementById('pHiperpackCollapser');
  const collapsable = document.getElementById('pHiperpackCollapsable');

  function collapse(event) {
    if (event) {
      event.stopPropagation();
    };

    collapsable.hidden = !collapsable.hidden;
  };

  collapse();
  collapser.addEventListener('click', collapse);
});

p24.addEventListener('change' , () => { // subtotal precio//
  function megapackP24(q, precio) {
    q = Number(p24.value);
    precio = 2584.47;
    document.getElementById("precioP24").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalP24").innerHTML = sub.toFixed(2);
  };

  megapackP24();
});

m24.addEventListener('change' , () => { // subtotal precio//
  function megapackM24(q, precio) {
    q = Number(m24.value);
    precio = 2584.47;
    document.getElementById("precioM24").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalM24").innerHTML = sub.toFixed(2);
 };
  
  megapackM24();
});
  
g20.addEventListener('change' , () => { // subtotal precio//
  function megapackG20(q, precio) {
    q = Number(g20.value);
    precio = 2584.47;
    document.getElementById("precioG20").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalG20").innerHTML = sub.toFixed(2);
  };
  
  megapackG20();
});

xg18.addEventListener('change' , () => { // subtotal precio//
  function megapackXg18(q, precio) {
    q = Number(xg18.value);
    precio = 2584.47;
    document.getElementById("precioXg18").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalXg18").innerHTML = sub.toFixed(2);
    };

    megapackXg18();
});

xxg17.addEventListener('change' , () => { // subtotal precio//
  function megapackXxg17(q, precio) {
    q = Number(xxg17.value);
    precio = 2584.47;
    document.getElementById("precioXxg17").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalXxg17").innerHTML = sub.toFixed(2);
  };

    megapackXxg17();
});

window.addEventListener('change', () => { // Megapack subtotal cantidad //
  function qSubtotalMegapack(cantidades) {
    let qSubMegapack = Number(p24.value) + Number(m24.value) + Number(g20.value) + Number(xg18.value) + Number(xxg17.value);

    document.getElementById("qSubtotalMegapack").innerHTML = qSubMegapack;
  };

  qSubtotalMegapack();
});

window.addEventListener('change', ()=> { //Megapack subtotal precio//
  function pSubtotalMegapack(precios) {
    let pSubMegapack = Number(document.getElementById("subtotalP24").innerHTML) + Number(document.getElementById("subtotalM24").innerHTML) + Number(document.getElementById("subtotalG20").innerHTML) + Number(document.getElementById("subtotalXg18").innerHTML) + Number(document.getElementById("subtotalXxg17").innerHTML);
    
    document.getElementById("pSubtotalMegapack").innerHTML = "$" + pSubMegapack.toFixed(2);
  };

  pSubtotalMegapack();
}); 

p44.addEventListener('change' , () => { // subtotal precio//
  function hiperpackP44(q, precio) {
    q = Number(p44.value);
    precio = 1885.95;
    document.getElementById("precioP44").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalP44").innerHTML = sub.toFixed(2);
  };

  hiperpackP44();
});

m44.addEventListener('change' , () => { // subtotal precio//
  function hiperpackM44(q, precio) {
    q = Number(m44.value);
    precio = 1885.95;
    document.getElementById("precioM44").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalM44").innerHTML = sub.toFixed(2);
 };
  
  hiperpackM44();
});
  
g38.addEventListener('change' , () => { // subtotal precio//
  function hiperpackG38(q, precio) {
    q = Number(g38.value);
    precio = 1885.95;
    document.getElementById("precioG38").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalG38").innerHTML = sub.toFixed(2);
  };
  
  hiperpackG38();
});

xg32.addEventListener('change' , () => { // subtotal precio//
  function hiperpackXg32(q, precio) {
    q = Number(xg32.value);
    precio = 1885.95;
    document.getElementById("precioXg32").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalXg32").innerHTML = sub.toFixed(2);
    };

    hiperpackXg32();
});

xxg30.addEventListener('change' , () => { // subtotal precio//
  function hiperpackXxg30(q, precio) {
    q = Number(xxg30.value);
    precio = 1885.95;
    document.getElementById("precioXxg30").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalXxg30").innerHTML = sub.toFixed(2);
  };

    hiperpackXxg30();
});

window.addEventListener('change', () => { // Hiperpack subtotal cantidad //
  function qSubtotalHiperpack(cantidades) {
    let qSubHiperpack = Number(p44.value) + Number(m44.value) + Number(g38.value) + Number(xg32.value) + Number(xxg30.value);

    document.getElementById("qSubtotalHiperpack").innerHTML = qSubHiperpack;
  };

  qSubtotalHiperpack();
});

window.addEventListener('change', ()=> { // Hiperpack subtotal precio//
  function pSubtotalHiperpack(precios) {
    let pSubHiperpack = Number(document.getElementById("subtotalP44").innerHTML) + Number(document.getElementById("subtotalM44").innerHTML) + Number(document.getElementById("subtotalG38").innerHTML) + Number(document.getElementById("subtotalXg32").innerHTML) + Number(document.getElementById("subtotalXxg30").innerHTML);
    
    document.getElementById("pSubtotalHiperpack").innerHTML = "$" + pSubHiperpack.toFixed(2);
  };

  pSubtotalHiperpack();
}); 

pP30.addEventListener('change' , () => { // subtotal precio//
  function pMegapackP30(q, precio) {
    q = Number(pP30.value);
    precio = 3453.78;
    document.getElementById("precioPP30").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalPP30").innerHTML = sub.toFixed(2);
  };

  pMegapackP30();
});

window.addEventListener('change', () => { // pMegapack subtotal cantidad //
  function qSubtotalPMegapack(cantidades) {
    let qSubPMegapack = Number(pP30.value);

    document.getElementById("qSubtotalPMegapack").innerHTML = qSubPMegapack;
  };

  qSubtotalPMegapack();
});

window.addEventListener('change', ()=> { // pMegapack subtotal precio//
  function pSubtotalPMegapack(precios) {
    let pSubPMegapack = Number(document.getElementById("subtotalPP30").innerHTML);
    
    document.getElementById("pSubtotalPMegapack").innerHTML = "$" + pSubPMegapack.toFixed(2);
  };

  pSubtotalPMegapack();
}); 

pM52.addEventListener('change' , () => { // subtotal precio//
  function hiperpackPM52(q, precio) {
    q = Number(pM52.value);
    precio = 2407.29;
    document.getElementById("precioPM52").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalPM52").innerHTML = sub.toFixed(2);
 };
  
  hiperpackPM52();
});
  
pG44.addEventListener('change' , () => { // subtotal precio//
  function hiperpackPG44(q, precio) {
    q = Number(pG44.value);
    precio = 2407.29;
    document.getElementById("precioPG44").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalPG44").innerHTML = sub.toFixed(2);
 };
  
  hiperpackPG44();
});

pXg36.addEventListener('change' , () => { // subtotal precio//
  function hiperpackPXg36(q, precio) {
    q = Number(pXg36.value);
    precio = 2407.29;
    document.getElementById("precioPXg36").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalPXg36").innerHTML = sub.toFixed(2);
 };
  
  hiperpackPXg36();
});

pXxg34.addEventListener('change' , () => { // subtotal precio//
  function hiperpackPXxg34(q, precio) {
    q = Number(pXxg34.value);
    precio = 2407.29;
    document.getElementById("precioPXxg34").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalPXxg34").innerHTML = sub.toFixed(2);
 };
  
  hiperpackPXxg34();
});

window.addEventListener('change', () => { // pHiperpack subtotal cantidad //
  function qSubtotalPHiperpack(cantidades) {
    let qSubPHiperpack = Number(pM52.value) + Number(pG44.value) + Number(pXg36.value) + Number(pXxg34.value);

    document.getElementById("qSubtotalPHiperpack").innerHTML = qSubPHiperpack;
  };

  qSubtotalPHiperpack();
});

window.addEventListener('change', ()=> { // pHiperpack subtotal precio//
  function pSubtotalPHiperpack(precios) {
    let pSubPHiperpack = Number(document.getElementById("subtotalPM52").innerHTML) + Number(document.getElementById("subtotalPG44").innerHTML) + Number(document.getElementById("subtotalPXg36").innerHTML) + Number(document.getElementById("subtotalPXxg34").innerHTML);
    
    document.getElementById("pSubtotalPHiperpack").innerHTML = "$" + pSubPHiperpack.toFixed(2);
  };

  pSubtotalPHiperpack();
});

window.addEventListener('change', () => { // Total cantidades //
  let qHiperpack = Number(document.getElementById("qSubtotalHiperpack").innerHTML); 
  let qMegapack = Number(document.getElementById("qSubtotalMegapack").innerHTML);
  let qPHiperpack = Number(document.getElementById("qSubtotalPHiperpack").innerHTML);
  let qPMegapack = Number(document.getElementById("qSubtotalPMegapack").innerHTML);
  
  document.getElementById("qTotal").innerHTML = qHiperpack + qMegapack + qPHiperpack + qPMegapack;
});

window.addEventListener('change', () => { // Total precio //
  let pHiperpack = Number(document.getElementById("pSubtotalHiperpack").innerHTML.slice(1));
  let pMegapack = Number(document.getElementById("pSubtotalMegapack").innerHTML.slice(1));
  let pPHiperpack = Number(document.getElementById("pSubtotalPHiperpack").innerHTML.slice(1));
  let pPMegapack = Number(document.getElementById("pSubtotalPMegapack").innerHTML.slice(1));

  document.getElementById("pTotal").innerHTML = "$" + (pHiperpack + pMegapack + pPHiperpack + pPMegapack);
});