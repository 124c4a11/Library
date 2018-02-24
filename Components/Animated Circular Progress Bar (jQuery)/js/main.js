'use strict';


$(document).ready(function() {
  $('.progress-circle').circularProgress({
    line_width: 12,
    color: "#0ff",
    starting_position: 0, // 12.00 o' clock position, 25 stands for 3.00 o'clock (clock-wise)
    percent: 0, // percent starts from
    percentage: true
    // text: "More power behind every pixel"
  }).circularProgress('animate', 80, 2000);
});