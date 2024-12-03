const modalToggle = () => {
    document.querySelector('.modal-container').classList.toggle('hidden');
}
document.addEventListener("DOMContentLoaded", function () {
    Inputmask({
        mask: "+7 999 999-99-99"
    }).mask(document.getElementById("phone"));
});


const formData = {
    name: '',
    email: '',
    phone: '',
    country: '',
    date: '',
    comment: '',
    
    printData() {
        console.log(`Имя: ${this.name}`);
        console.log(`E-mail: ${this.email}`);
        console.log(`Телефон: ${this.phone}`);
        console.log(`Страна: ${this.country}`);
        console.log(`Дата: ${this.date || 'Не указана'}`);
        console.log(`Комментарий: ${this.comment}`);
    }
};

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitForm(event) {
    event.preventDefault(); 

    const form = document.querySelector('.modal__form');
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const phone = form.elements['phone'].value.trim();
    const country = form.elements['country'].value.trim();
    const date = form.elements['date'].value.trim();
    const comment = form.elements['comment'].value.trim();
    const policy = form.elements['policy'].checked;

    if (!name || !email || !comment) {
        alert('Поля "Как вас зовут", "Ваш e-mail" и "Комментарий" не могут быть пустыми.');
        return;
    }

    if (!/^\+?[0-9\s-]+$/.test(phone)) {
        alert('Поле "Телефон" должно содержать только цифры или символы "+" и "-".');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Некорректный e-mail.');
        return;
    }

    if (!policy) {
        alert('Вы должны согласиться на обработку персональных данных.');
        return;
    }

    formData.name = name;
    formData.email = email;
    formData.phone = phone;
    formData.country = country || 'Не указана';
    formData.date = date || 'Не указана';
    formData.comment = comment;

    formData.printData();

    alert('Форма успешно отправлена!');
}

// Обработчик события для формы
document.querySelector('.modal__form').addEventListener('submit', submitForm);
