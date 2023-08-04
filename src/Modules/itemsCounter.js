const countItems = () => {
  const allCards = document.querySelectorAll('.card');
  const itemsCount = document.querySelector('.items-counter');
  itemsCount.innerHTML = allCards.length;
};

export default countItems;
