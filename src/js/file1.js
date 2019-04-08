console.log('File 1')

function testSelect(){
    let form = document.getElementsByClassName('form')[0];
    let select = document.getElementsByName('select')[0].value;
    let checkBox = document.getElementById('check');
    let containerInput = document.getElementsByClassName('form__input')[0];
    let input = containerInput.getElementsByTagName('input')[0];

    let containerCheckbox = document.getElementsByClassName('form__checkbox')[0];

    let message = document.createElement('div');
    message.id = 'message';
    message.innerText = 'Hidden message...';

    let messageExistence =  document.getElementById('message');

    if( select === 'value-2' || select === 'value-3') {
        checkBox.disabled = true;
        input.disabled = false;
        containerCheckbox.style.display = 'none';
        if (messageExistence  === null) form.insertBefore(message,containerCheckbox);
    } else {
        messageExistence.remove();
        containerCheckbox.style.display = '';
        checkBox.disabled = false;
        input.value = '';
        if( checkBox.checked ) input.disabled = true;
        else input.disabled = false;
    }
}

function testCheckBox() {
    let checkBox = document.getElementById('check').checked;
    let containerInput = document.getElementsByClassName('form__input')[0];
    let input = containerInput.getElementsByTagName('input')[0];

    if( checkBox ) input.disabled = true;
    else  input.disabled = false;
}
function testButton() {

    let containerInput = document.getElementsByClassName('form__input')[0];
    let input = containerInput.getElementsByTagName('input')[0];

    if(input.disabled) alert('Успешно отправлено');
    else if (input.value === '') alert('Заполните все поля');
    else  alert('Успешно отправлено');
}
