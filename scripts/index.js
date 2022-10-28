//карточки

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//попап

const popupProfile = document.querySelector(".popup_profile");
const popupCards = document.querySelector(".popup_cards");

//форма попапа
const popupForm = document.querySelector(".popup__form");

//попап кнопка открытия

const popupProfileOpen = document.querySelector(".profile__edit-button");
const popupCardsOpen = document.querySelector(".profile__add-button");

// попап кнопка закрытия

const popupProfileClose = popupProfile.querySelector(".popup__close-button");
const popupCardsClose = popupCards.querySelector(".popup__close-button");

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
}

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

//карточки

const templateElement = document.querySelector(".element-template");
const cardsContainer = document.querySelector(".elements__cards");
const popupImage = document.querySelector(".popup_image");
const popupImageClose = popupImage.querySelector(".popup__button-close_image");

function createCard(cardData) {
  const { link, name } = cardData;
  const cardElement = templateElement.content.cloneNode(true);
  const cardText = cardElement.querySelector(".element__text");
  const cardImage = cardElement.querySelector(".element__illustration");
  const cardLike = cardElement.querySelector(".element__like");
  cardText.textContent = name;
  cardImage.src = link;
  cardImage.alt = name;
  cardImage.addEventListener('click', () => {
    togglePopup(popupImage)
  });
  cardLike.addEventListener ('click', () => {
    cardLike.classList.toggle('element__like_active');
  });
  return cardElement;
}
initialCards.forEach((data) => {
  const newCard = createCard(data);
  cardsContainer.prepend(newCard);
});

popupImageClose.addEventListener('click', () => {
  togglePopup(popupImage);
});