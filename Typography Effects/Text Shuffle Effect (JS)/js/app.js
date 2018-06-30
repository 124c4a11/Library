'use strict';

$(document).ready(function() {
  const
    phrase = '124c4a11',
    phraseLetters = phrase.split(''),
    $randomLetters = $('.shuffle-text__random-letter'),
    timer = 30;

  let $data = 0;

  $randomLetters.each(function() {
    const change = Math.round(Math.random() * 100);
    $(this).attr('data-change', change);
  });

  function getRandomNumber() {
    return Math.round(Math.random() * 9);
  }

  function getRandomLetterNdx() {
    return Math.round(Math.random() * $randomLetters.length + 1);
  }

  function setLetterValue() {
    $(`.shuffle-text__random-letter:nth-child(${getRandomLetterNdx()})`)
      .html(`${getRandomNumber()}`)
      .attr('data-number', $data);

    $data++;


    $randomLetters.each(function() {
      if (parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
        const ndx = $('.shuffle-text__letter').index(this);

        $(this)
          .html(phraseLetters[ndx])
          .removeClass('shuffle-text__random-letter');
      }
    });
  }

  setInterval(setLetterValue, timer);
});