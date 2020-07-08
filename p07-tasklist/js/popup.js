$( document ).ready(function() {
    
    let $elmListTask         = $('div#area-list-task');
    let $inputTaskName       = $('input[name="input-task-name"]');
    let $btnAddTask          = $('button[name="btn-add-task"]');

    getAllTasks($elmListTask, 'all');

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
            let index           = currentListTask.length;

            currentListTask.push({
                name  : $inputTaskName.val(),
                status: "progress" 
            });

            let xhtmlResult = `<div class="task-item mb-2">
                                <div class="w-50 title-${ index }"><span class="task-index">${ index + 1}</span>${ $inputTaskName.val() }</div>
                                <div class="task-item__button">
                                    <button class="status btn-finish mr-1" data-index="${ index }">Hoàn thành</button>
                                    <button class="delete btn-delete" data-index="${ index }">Xóa</button>
                                </div>
                            </div>`;

            if(currentListTask.length === 1) {
                $elmListTask.html('').append(xhtmlResult);
                
            } else {
                $elmListTask.append(xhtmlResult);
            }

            chrome.storage.sync.set({'tasks': currentListTask}, function() {
                console.log(currentListTask);
            });

            $inputTaskName.val('');
            $btnAddTask.attr('disabled', true);
        });
    })
});

function getAllTasks($elmListTask, status = null) {
    chrome.storage.sync.get('tasks', (data) => {
        let currentListTask = (data.hasOwnProperty('tasks')) ? data.tasks : [];
        let total           = currentListTask.length;
        let xhtmlResult     = "";

        if(total > 0) {
            for(let i = 0; i < total; i++) {
                let currentItem     = currentListTask[i];
                let textLineThrough = '';
                let buttonCompleted = `<button class="status btn-finish mr-1" data-index="${ i }">Hoàn thành</button>`;
    
                if(currentItem.status === 'completed'){
                    textLineThrough = 'text-line-through';
                    buttonCompleted = '';
                }
    
                xhtmlResult += `<div class="task-item mb-2">
                    <div class="w-50 title-${ i } ${textLineThrough}"><span class="task-index">${ i + 1}</span>${currentItem.name}</div>
                    <div class="task-item__button">
                        ${buttonCompleted}
                        <button class="delete btn-delete" data-index="${ i }">Xóa</button>
                    </div>
                </div>`;
            }
        } else {
            xhtmlResult = "Chưa có công việc nào";
        }

        $elmListTask.html(xhtmlResult);
    });
}
