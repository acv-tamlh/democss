// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require jquery_ujs

var w3_close, w3_open;

function w3_open() {
  $('#main').css({
    // 'margin-left': '25%'
  });
  $('#mySidebar').css({
    'width': '25%',
    'display': 'block'
  });
  $('#openNav').css({
    'display': 'block'
  });
};

function w3_close() {
  $('#main').css({
    'margin-left': '0%'
  });
  $('#mySidebar').css({
    'display': 'none'
  });
  return $('#openNav').css({
    'display': 'none'
  });
};
