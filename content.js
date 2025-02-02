(function() {
    function checkAndClick() {
        let modal = document.querySelector('[data-testid="AttentionControlModal"]');
        let button = document.querySelector('[data-testid="AttentionControlModal.action.submit.Button"]');

        if (modal && button) { button.click(); }

    }
    setInterval(checkAndClick, 30000);
})();
