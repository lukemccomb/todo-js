// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

$(document).ready(function () {

  var setupPage = function () {
    var formHtml = "";
    formHtml += "<h1>Todo.ly</h1>";
    formHtml += "<form><input id='todo' type='text'/><br/>";
    formHtml += "<button id='submit'>Create Todo</button></form>";

    var container = $('.container')

    container.append(formHtml);

    container.on('click', '#dismiss', function () {
      $('#createFlash').remove();
      $('#deleteFlash').remove();
    });

    container.on('click', '#dismiss', function () {

    });
  };

  var setupTodos = function () {
    $('.container').append("<hr><h2>Todo!</h2>" +
                           "<section id='todosection'>" +
                           "<article id='flash'></article>" +
                           "<ul id='todo-list'></ul>" +
                           "</section>");
  };

  var addTodo = function () {
    var todo = $('#todo').val();

    $('#todo-list').append("<li>" +
                           todo +
                           "<a class='check' href='#'>" + "&#10004;  " +
                           "</a>" + "<a class='remove' href='#'>" + "  &#10006;" + "</a>" +
                           "</li>");

    $('#flash').empty().append("<div id='createFlash'>Todo created<a id='dismiss' href='#'>&#10006;</a></div>");

    window.setTimeout(function () { $('#createFlash').fadeOut() }, 5000);
  };

  $("body").on("submit", "form", function (e) {
    e.preventDefault();

    if ($('#todosection').length == 0) {
      setupTodos();
    }

    addTodo();

    $('.remove').on('click', function() {
      var mom = $(this).parent('li');

      mom.fadeOut(400);

      $('#flash').empty().append("<div id='deleteFlash'>Todo deleted<a id='dismiss' href='#'>&#10006;</a></div>");

      window.setTimeout(function () { $('#deleteFlash').fadeOut() }, 5000);
    });

    var setupComplete = function () {
      $('.container').append("<hr/><section id='completed'><h1>Complete</h1><ul id='completedTodos'></ul></section>");
    };

    $('.check').on('click', function() {

      if ($('#completed').length == 0) {
        setupComplete();
      }

      var mom = $(this).parent('li');

      mom.appendTo('#completedTodos')

    });
  });

  setupPage();

});
