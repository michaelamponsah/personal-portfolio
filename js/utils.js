import worksCardData from './worksCardData.js';

export const getCardData = (cardData) => {
  const cardId = cardData.getAttribute('id');
  let cardDetails;

  worksCardData.forEach(card => {
    if(card.id == cardId) {
      cardDetails = card;
    }
  })
  return cardDetails;
}

export const setModalDisplayData = (displayData, modal) => {
  const {image, title, description} = displayData;
  document.querySelector('.modal--title').innerText = title;
  document.querySelector('.modal--image').src = image.src;
  document.querySelector('.modal--image').alt = image.alt;
  document.querySelector('.modal--description').innerText = description;
  
}