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

    var check = "";

    $('#todo-list').append("<li>" +
                           todo +
                           "<a class='check' href='#'>" +
                           "<img class='checkmark' src='http://img1.wikia.nocookie.net/__cb20130520141819/okami/images/f/f0/Check_mark.png'>" +
                           "</a>" + "<div class='removeDiv'>" +
                           "<a class='remove' href='#'>X</a>" +
                           "</div>" + "</li>");

    $('#flash').empty().append("<div id='createFlash'>Todo created<a id='dismiss' href='#'>X</a></div>");

    window.setTimeout(function () { $('#createFlash').fadeOut() }, 5000);
  };

  // create completeTodo function that listens for click on .check and creates a new completed section that the li is then moved to

  $("body").on("submit", "form", function (e) {
    e.preventDefault();

    if ($('#todosection').length == 0) {
      setupTodos();
    }

    addTodo();

    $('.remove').on('click', function() {
      var mom = $(this).parent('li');

      mom.fadeOut(400);

      $('#flash').empty().append("<div id='deleteFlash'>Todo deleted<a id='dismiss' href='#'>X</a></div>");

      window.setTimeout(function () { $('#deleteFlash').fadeOut() }, 5000);

    });
  });

  setupPage();

});
