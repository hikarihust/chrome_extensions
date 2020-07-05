$(document).ready(function () {
    let $btnSave                    = $('button[name="btn-save"]');
    let $inputExtensionBackground   = $('input[name="extension_background"]');
    let $inputListTaskShow          = $('select[name="list_task_show"]');

    chrome.storage.sync.get('config', function(result) {
        let config = result.config;
        $inputExtensionBackground.val(config.extension_background);
        $inputListTaskShow.val(config.list_task_show);
    });
});