function loadItems() {
  fetch('/user/items')
  .then(response => response.json())
  .then(items => {
    const itemsContainer = document.getElementById('items');
    itemsContainer.innerHTML = '';
    items.forEach(item => {
      itemsContainer.innerHTML += `<div><strong>${item.name}</strong>: ${item.description}</div>`;
    });
  });
}

loadItems();
