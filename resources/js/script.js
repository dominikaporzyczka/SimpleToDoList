$( document ).ready(function() {
    var list = $('#list');
    var newTask = $('#newTask');    

    newTask.keypress( function(event) {
        if(event.which === 13) {
            list.append('<li class="task">' + this.value + '</li>');
            this.value = "";
        }
    });

    $('#showInput').click( function() {
        newTask.slideToggle('slow');
    });

    list

        .on('click', '.task', function() {
            var task = $(this);
            task.toggleClass('done');
        });

});