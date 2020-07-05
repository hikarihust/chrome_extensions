$( document ).ready(function() {
    
    let $elmListTask         = $('div#area-list-task');
    let $inputTaskName       = $('input[name="input-task-name"]');
    let $btnAddTask          = $('button[name="btn-add-task"]');

    $inputTaskName.keyup(function(e) {
        if ($inputTaskName.val().length >= 3) {
            $btnAddTask.attr('disabled', false);
            if (e.keyCode === 13) $btnAddTask.trigger('click');
        } else {
            $btnAddTask.attr('disabled', true);
        }
    });
    
    $btnAddTask.click(()=> {
        chrome.storage.sync.get('tasks', function(result) {
            let currentListTask = (result.hasOwnProperty('tasks')) ? result.tasks : [];

            currentListTask.push({
                name  : $inputTaskName.val(),
                status: "progress" 
            });

            chrome.storage.sync.set({'tasks': currentListTask}, function() {
                console.log(currentListTask);
            });

            $inputTaskName.val('');
            $btnAddTask.attr('disabled', true);
        });
    })
});
