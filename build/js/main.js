'use strict';

console.log('File 1');

function testSelect() {
    var form = document.getElementsByClassName('form')[0];
    var select = document.getElementsByName('select')[0].value;
    var checkBox = document.getElementById('check');
    var containerInput = document.getElementsByClassName('form__input')[0];
    var input = containerInput.getElementsByTagName('input')[0];

    var containerCheckbox = document.getElementsByClassName('form__checkbox')[0];

    var message = document.createElement('div');
    message.id = 'message';
    message.innerText = 'Hidden message...';

    var messageExistence = document.getElementById('message');

    if (select === 'value-2' || select === 'value-3') {
        checkBox.disabled = true;
        input.disabled = false;
        containerCheckbox.style.display = 'none';
        if (messageExistence === null) form.insertBefore(message, containerCheckbox);
    } else {
        messageExistence.remove();
        containerCheckbox.style.display = '';
        checkBox.disabled = false;
        input.value = '';
        if (checkBox.checked) input.disabled = true;else input.disabled = false;
    }
}

function testCheckBox() {
    var checkBox = document.getElementById('check').checked;
    var containerInput = document.getElementsByClassName('form__input')[0];
    var input = containerInput.getElementsByTagName('input')[0];

    if (checkBox) input.disabled = true;else input.disabled = false;
}
function testButton() {

    var containerInput = document.getElementsByClassName('form__input')[0];
    var input = containerInput.getElementsByTagName('input')[0];

    if (input.disabled) alert('Успешно отправлено');else if (input.value === '') alert('Заполните все поля');else alert('Успешно отправлено');
}

console.log('File 2');