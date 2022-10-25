//---------ФОРМА РЕДАКТИРОВАНИЯ ПРОФИЛЯ -----------//

const popUp = document.querySelector(".popup");
const popUpForm = document.querySelector(".popup__form");
const openPopUpButton = document.querySelector(".profile__edit-button");
const closePopUpButon = popUp.querySelector(".popup__close-button");
const savePopUpButton = document.querySelector(".popup__save-button");

const inputName = document.querySelector(".popup__input_type_name");
const inputHobbie = document.querySelector(".popup__input_type_hobbie");

const profileName = document.querySelector(".profile__title");
const profileHobbie = document.querySelector(".profile__paragraph");

//навесили слушатель на клик
function openPopUp(popup) {
  popUp.classList.add('popup_opened');
}

function closePopUp(popup) {
  popUp.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileHobbie.textContent = inputHobbie.value;
  closePopUp(popUp);
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
popUpForm.addEventListener("submit", formSubmitHandler);

openPopUpButton.addEventListener("click", () => {
  inputName.value = profileName.textContent;
  inputHobbie.value = profileHobbie.textContent;
  openPopUp(popUp);
});

closePopUpButon.addEventListener("click", () => {
  closePopUp(popUp);
});


//---------- ФОРМА ДОБАВЛЕНИЯ КАРТОЧКИ ---------//

const popUpAdd = document.querySelector(".popup__cards");
const openPopUpAdd = document.querySelector(".profile__add-button");
const closePopUpAdd = popUpAdd.querySelector(".popup__close-button");
const savePopUpAdd = document.querySelector(".popup__save-button");


function openPopup() {
  popUpAdd.classList.add("popup_opened");
};

function closePopup() {
  popUpAdd.classList.remove("popup_opened");
};

openPopUpAdd.addEventListener('click', () => {
  // console.log('Клик по кнопке +');
  openPopup();
});

closePopUpAdd.addEventListener('click', () => {
  // console.log('Попап закрыт!');
  closePopup();
});

// //----------ДОБАВЛЕНИЕ КАРТОЧКИ-------------//

// //----------ЛАЙК КАРТОЧКИ-------------------//

//  function cardLikeButton(buttonLike) {
//  const likeButton = button.target.closest('.')
// }