$(document).ready(function () {
    let $btnSave                    = $('button[name="btn-save"]');
    let $btnRestore                 = $('button[name="btn-restore-default"]');
    let $inputExtensionBackground   = $('input[name="extension_background"]');
    let $inputListTaskShow          = $('select[name="list_task_show"]');

    chrome.storage.sync.get('config', function(result) {
        let config = result.config;
        $inputExtensionBackground.val(config.extension_background);
        $inputListTaskShow.val(config.list_task_show);
    });

    // Lưu cấu hình cho extension
    $btnSave.click(() => {
        let updateConfig = {
            'extension_background': $inputExtensionBackground.val(),
            'list_task_show'      : $inputListTaskShow.val()
        }
        chrome.storage.sync.set({
            config: updateConfig
        }, function() {
            close();
        });
    });

    // Restore cấu hình cho extension
    $btnRestore.click(() => {
        let initConfig = {
            'extension_background': '#F71DF0',
            'list_task_show'      : 'all'
        }
        chrome.storage.sync.set({
            config: initConfig
        }, function() {
            close();
        });
    });
});