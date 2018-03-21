# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
w3_open = ->
  $('#main').css({'margin-left' : '20%'})
  $('#mySidebar').css({
    'width' : '20%',
    'display' : 'none'
    })
  $('#openNav').css({'display' : 'none'})
  return

w3_close = ->
    $('#main').css({'margin-left' : '0%'})
    $('#mySidebar').css({
      'display' : 'none'
      })
    $('#openNav').css({'display' : 'none'})
  return
