$( document ).ready(function() {
    var list = $('#list');
    var newTask = $('#newTask');    

    newTask.keypress( function(event) {
        var valueInput = $(this).val();
        if(event.which === 13) {
            if (valueInput) {
                list.append('<li><button class="delete-btn"><i class="fas fa-trash-alt"></i></button><span class="task">' + valueInput + '</span></li>');
                $(this).val("");
            }
        }
    });

    $('#showInput').click( function() {
        newTask.slideToggle('slow');
    });

    list

        .on('click', '.task', function() {
            var task = $(this);
            task.toggleClass('done');
        })

        .on('click', '.delete-btn', function() {
            $(this).parents('li').remove();
        });

});