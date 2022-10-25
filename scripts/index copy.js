//попап

const popupProfile = document.querySelector(".popup_profile");
const popupCards = document.querySelector(".popup_cards");
const popupPhoto = document.querySelector(".popup_photo");

//форма попапа
const popupForm = document.querySelector(".popup__form");

//попап кнопка открытия

const popupProfileOpen = document.querySelector(".profile__edit-button");
const popupCardsOpen = document.querySelector(".profile__add-button");
const popupPhotoOpen = document.querySelector(".element_template");

// попап кнопка закрытия

const popupProfileClose = popupProfile.querySelector(".popup__close-button");
const popupCardsClose = popupCards.querySelector(".popup__close-button");
const popupPhotoClose = popupPhoto.querySelector(".popup__close-button");

// попап кнопка сохранения

const popupSaveProfile = document.querySelector(".popup__save-button");
const popupSaveCards = document.querySelector(".popup__save-button");

//попап профиль инпут

const inputName = document.querySelector(".popup__input_type_name");
const inputHobbie = document.querySelector(".popup__input_type_hobbie");

const profileName = document.querySelector(".profile__title");
const profileHobbie = document.querySelector(".profile__paragraph");

//открытие/закрытие попапа на одну функцию

const togglePopup = function (popup) {
  popup.classList.toggle("popup_opened");
};

//изменение информации в профиле
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileHobbie.textContent = inputHobbie.value;
  togglePopup(popupProfile);
};

popupForm.addEventListener("submit", formSubmitHandler);


popupProfileOpen.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputHobbie.value = profileHobbie.textContent;
  togglePopup(popupProfile);
});

popupCardsOpen.addEventListener("click", function () {
  togglePopup(popupCards);
});

popupProfileClose.addEventListener("click", function () {
  togglePopup(popupProfile);
});

popupCardsClose.addEventListener("click", function () {
  togglePopup(popupCards);
});
