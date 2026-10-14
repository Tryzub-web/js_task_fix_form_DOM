'use strict';
const inputs = document.querySelectorAll('form input');
for (const input of inputs){
    const elementLabel = document.createElement('label');
    elementLabel.className = 'field-label';
    elementLabel.htmlFor = input.id;
    elementLabel.textContent = input.name;
    input.before(elementLabel);
    input.placeholder = input.name[0].toUpperCase() + input.name.slice(1);
}

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
