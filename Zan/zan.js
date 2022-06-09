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