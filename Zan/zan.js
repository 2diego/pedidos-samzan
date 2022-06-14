let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
document.getElementById("date").innerHTML = day + " / " + month + " / " + year;

window.addEventListener('load', () => {
  const collapser = document.getElementById('hiperpackCollapser');
  const collapsable = document.getElementById('hiperpackCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }

      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => {
  const collapser = document.getElementById('megapackCollapser');
  const collapsable = document.getElementById('megapackCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }

      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => {
  const collapser = document.getElementById('pMegapackCollapser');
  const collapsable = document.getElementById('pMegapackCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }

      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

window.addEventListener('load', () => {
  const collapser = document.getElementById('pHiperpackCollapser');
  const collapsable = document.getElementById('pHiperpackCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }

      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});

p24.addEventListener('change' , () => {
  function megapackP24(q, precio) {
    q = Number(p24.value);
    precio = 2584.47;
    document.getElementById("precioMP24").innerHTML = precio;
    let sub = q * precio;
    document.getElementById("subtotalMP24").innerHTML = sub;
    };

    megapackP24();
  });

  m24.addEventListener('change' , () => {
    function megapackM24(q, precio) {
      q = Number(m24.value);
      precio = 2584.47;
      document.getElementById("precioMM24").innerHTML = precio;
      let sub = q * precio;
      document.getElementById("subtotalMM24").innerHTML = sub;
      };
  
      megapackM24();
    });
  

