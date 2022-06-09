window.addEventListener('load', () => {
  const collapser = document.getElementById('hojaSimpleCollapser');
  const collapsable = document.getElementById('hojaSimpleCollapsable');

  function collapse(event) {
      if (event) {
          event.stopPropagation();
      }
      
      collapsable.hidden = !collapsable.hidden;
  }
  collapse();
  collapser.addEventListener('click', collapse);
});