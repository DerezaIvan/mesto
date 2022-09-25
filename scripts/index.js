const overlayEl = document.querySelector('.overlay');
const formPopup = document.querySelector('.popup');
const openEditButton = document.querySelector('.profile__edit-button'); //открытие Попапа
const closePopupButton = overlayEl.querySelector('.popup__close-button'); //закрытие Попапа
const profileName = document.querySelector('.profile__title'); //Имя пользователя
const profileJob = document.querySelector('.profile__paragraph'); //Род деятельности

const nameInput = document.querySelector('.popup__input-name'); // Воспользуйтесь инструментом .querySelector()
const hobbieInput = document.querySelector('.popup__input-hobbie'); // Воспользуйтесь инструментом .querySelector()
const popupSaveButton = document.querySelector('.popup__save-button');

openEditButton.addEventListener('click', () => {
    overlayEl.classList.add('overlay__opened');
    nameInput.value = profileName.textContent;
    hobbieInput.value = profileJob.textContent;
})

closePopupButton.addEventListener('click', () => {
    overlayEl.classList.remove('overlay__opened');
})

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = hobbieInput.value;
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
overlayEl.addEventListener('submit', formSubmitHandler);