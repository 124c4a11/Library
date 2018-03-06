$(document).ready(() => {
  const $customselect = $('.customselect');

  function formatState(state) {
    if (!state.id) return state.text;

    const
      element = state.element,
      badge = element.getAttribute('data-badge');

    let $state = null;

    if (badge) {
      $state = $(`<span class="customselect__inner"><span class="customselect__badge">${badge}</span><span class=customselect__text>${state.text}</span></span>`);
    } else {
      $state = $(`<span class="customselect__inner"><span class=customselect__text>${state.text}</span></span>`);
    }

    return $state;
  }

  if ($customselect.length) {
    $customselect.select2({
      templateSelection: formatState
    });
  }
});