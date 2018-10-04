// <div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
const redoImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4NS4yMTIgNDg1LjIxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg1LjIxMiA0ODUuMjEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI0Mi42MDcsNDI0LjU1OWMtNzUuMjUyLDAtMTM2LjQ2OC02MS4yMDktMTM2LjQ2OC0xMzYuNDY1YzAtNzUuMjUyLDYxLjIxNi0xMzYuNDY2LDEzNi40NjgtMTM2LjQ2NnY5MC45NzggICBsMTUxLjYyOS0xMjEuMzAyTDI0Mi42MDcsMHY5MC45NzhjLTEwOC42ODcsMC0xOTcuMTE3LDg4LjQzMi0xOTcuMTE3LDE5Ny4xMTdjMCwxMDguNjkxLDg4LjQzLDE5Ny4xMTgsMTk3LjExNywxOTcuMTE4ICAgYzEwOC42ODcsMCwxOTcuMTE0LTg4LjQyNywxOTcuMTE0LTE5Ny4xMThoLTYwLjY0NUMzNzkuMDc3LDM2My4zNSwzMTcuODU5LDQyNC41NTksMjQyLjYwNyw0MjQuNTU5eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;
const saveImage = `<img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCIgdmlld0JveD0iMCAwIDQ4NS4yMTMgNDg1LjIxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDg1LjIxMyA0ODUuMjEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPHBhdGggZD0iTTI0Mi42MDcsMzAzLjI1N0wxMjEuMzA1LDE4MS45NTVoNjAuNjUxVjBoMTIxLjN2MTgxLjk1NWg2MC42NTNMMjQyLjYwNywzMDMuMjU3eiBNNDA5LjM5OSwxNTEuNjI4aC0zMy45MTEgICBsNzUuODE2LDE1MS42MjloLTg3LjM5NmwtNjAuNjUzLDkwLjk3OWgtMTIxLjNsLTYwLjY1MS05MC45NzlIMzMuOTFsNzUuODE2LTE1MS42MjlINzUuODE3TDAuMDAxLDMwMy4yNTd2MTgxLjk1NWg0ODUuMjExVjMwMy4yNTcgICBMNDA5LjM5OSwxNTEuNjI4eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" />`;

const skillId = location.href.split('/')[7];
const locale = location.href.split('/')[9];

$(".askt-dialog").bind("DOMNodeInserted",function(el){
    if($(el.target).hasClass('askt-dialog__message') &&
        $(el.target).hasClass('askt-dialog__message--request')) {
        $(el.target).prepend(`<span class="asksos-action-icon repost">${redoImage}</span>`);

        // show, if it is not saved already
        if (!localeButtons || !localeButtons.includes($(el.target).parent().text())) {
            $(el.target).prepend(`<span class="asksos-action-icon save">${saveImage}</span>`);
        }
    }
    if($(el.target).hasClass('askt-dialog__bubble') &&
        $(el.target).hasClass('askt-dialog__bubble--active-response')) {

        $(el.target).css('position', 'relative').css('margin-bottom', '3.5rem');


    }
});

$('.askt-dialog').on('click', '.repost', function() {
    const text = $(this).parent().text();
    postText(text);
});

$('.askt-dialog').on('click', '.save', function() {
    const text = $(this).parent().text();
    saveButton(text);
});
// chrome.storage.sync.clear(function(result) {
// });
function postText(text) {
    $('.askt-utterance__input').val(text).change();
    $('.askt-utterance__input')[0].dispatchEvent(new Event("input", { 'bubbles': true,'cancelable': true }))
    $('.askt-utterance__input').focus();
    const keydown = new KeyboardEvent("keydown", {
        bubbles: true, cancelable: true, keyCode: 13, key: 'Enter'
    });
    const keypress = new KeyboardEvent("keypress", {
        bubbles: true, cancelable: true, keyCode: 13, key: 'Enter'
    });
    const keyup = new KeyboardEvent("keyup", {
        bubbles: true, cancelable: true, keyCode: 13, key: 'Enter'
    });
    $('.askt-utterance__input')[0].dispatchEvent(keydown);
    $('.askt-utterance__input')[0].dispatchEvent(keypress);

    $('.askt-utterance__input')[0].dispatchEvent(keyup);
}
function saveButton(text) {
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {
            const localeButtons = result[skillId].buttons[locale];

            if (localeButtons) {
                if (!localeButtons.includes(text)) {
                    localeButtons.push(text);
                    chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
                        addButton(text);
                    });
                }
            } else {
                result[skillId].buttons[locale] = [text];
                chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
                    addButton(text);
                });
            }
        } else {
            const obj = {
                buttons: {
                    [lang]: [text]
                },
            };
            chrome.storage.sync.set({[skillId]: obj}, function() {
                addButton(text);
            });
        }
    });

}
let localeButtons;
$(document).ready(function () {
    $('<div class="request-buttons"></div>').insertAfter('.askt-simulator__input');
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {
            localeButtons = result[skillId].buttons[locale];

            localeButtons.forEach((button) => {
                addButton(button);
            });
        }
    });

    $('.request-buttons').on('click','button.post', function() {
        postText($(this).val());
    });
    $('.request-buttons').on('click','button.delete', function() {
        deleteButton($(this).val());
    });
});

function addButton(button) {
    $('.request-buttons').append(`<span><button class="asksos-button post" value="${button}" title="Post ${button}">${button}</button><button class="asksos-button delete" value="${button}"  title="Delete button">x</button></span>`);

}
function deleteButton(button) {
    chrome.storage.sync.get([skillId], function(result) {
        if (result && result[skillId] && result[skillId].buttons) {
            let localeButtons = result[skillId].buttons[locale];
            result[skillId].buttons[locale] = localeButtons.filter((text) => text !== button);
            chrome.storage.sync.set({[skillId]: result[skillId]}, function() {
                $('.request-buttons button[value="'+button+'"]').parent().remove();
            });
        }
    });
}

