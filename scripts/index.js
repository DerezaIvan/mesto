//получили элементы 
const popUp = document.querySelector('.popup');
const popUpForm = document.querySelector('.popup__form')
const openPopUpButton = document.querySelector('.profile__edit-button');
const closePopUpButon = popUp.querySelector('.popup__close-button');
const savePopUpButton = document.querySelector('.popup__save-button');

const inputName = document.querySelector('.popup__input_type_name');
const inputHobbie = document.querySelector('.popup__input_type_hobbie');

const profileName = document.querySelector('.profile__title');
const profileHobbie = document.querySelector('.profile__paragraph');


//навесили слушатель на клик
function openPopUp() {
    popUp.classList.add('popup__opened')
}

function closePopUp() {
    popUp.classList.remove('popup__opened')
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileHobbie.textContent = inputHobbie.value;
    closePopUp()

}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popUpForm.addEventListener('submit', formSubmitHandler);

openPopUpButton.addEventListener('click', () => {
    inputName.value = profileName.textContent;
    inputHobbie.value = profileHobbie.textContent;
    openPopUp()
})

closePopUpButon.addEventListener('click', () => {
    closePopUp()
})