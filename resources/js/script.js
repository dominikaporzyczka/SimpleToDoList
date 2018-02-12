$( document ).ready(function() {
    var list = $('#list');
    var newTask = $('#newTask');    

    newTask.keypress( function(event) {
        var valueInput = $(this).val();
        if(event.which === 13) {
            if (valueInput) {
                list.append('<li><span class="delete-btn"><i class="fas fa-trash-alt"></i></span><span class="task"> ' + valueInput + '</span></li>');
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
            task.toggleClass('completed');
        })

        .on('click', '.delete-btn', function() {
            var deleteBtn = $(this);
            deleteBtn.parents('li').fadeOut(500, function () {
                var liElement = $(this);
                liElement.remove();
            });
        });

});