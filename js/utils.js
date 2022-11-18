import worksCardData from './worksCardData.js';

export const getCardData = (cardData) => {
  const cardId = cardData.getAttribute('id');
  let cardDetails;

  worksCardData.forEach((card) => {
    if (card.id === cardId) {
      cardDetails = card;
    }
  });
  return cardDetails;
};

export const setModalDisplayData = (displayData) => {
  const {
    image, title, description, sources,
  } = displayData;
  document.querySelector('.modal--title').innerText = title;
  document.querySelector('.modal--image').src = image.src;
  document.querySelector('.modal--image').alt = image.alt;
  document.querySelector('.modal--description').innerText = description;
  document.querySelector('.modal--see-live').href = sources.seeLive;
  document.querySelector('.modal--see-source').href = sources.seeSource;
};

export const disableScrolling = () => {
  document.body.style.display = '100vh';
  document.body.style.overflow = 'hidden';
};

export const storeDataInBrowser = (dataKey, data) => {
  data = JSON.stringify(data);
  return localStorage.setItem(dataKey, data);
};

export const getBrowserStoredData = (dataKey) => JSON.parse(window.localStorage.getItem(dataKey));