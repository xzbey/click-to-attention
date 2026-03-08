(function() {
    function clickAtCoordinates(x, y) {
        const element = document.elementFromPoint(x, y);
        if (element) {
            const clickEvent = new MouseEvent('click', {
                view: window,
                bubbles: true,
                cancelable: true,
                clientX: x,
                clientY: y
            });
            element.dispatchEvent(clickEvent);
        }
    }

    function checkAndClick() {
        let modal = document.querySelector('[data-testid="AttentionControlModal"]');
        let button = document.querySelector('[data-testid="AttentionControlModal.action.submit.Button"]');

        if (modal && button) { 
            button.click(); 
            
            setTimeout(() => {
                clickAtCoordinates(0, window.innerHeight / 2);
            }, 10000);
        }

    }
    setInterval(checkAndClick, 30000);
})();