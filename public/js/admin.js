document.getElementById('addItemForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('itemName').value;
  const description = document.getElementById('itemDescription').value;
  
  fetch('/admin/item', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, description })
  })
  .then(response => response.json())
  .then(data => {
    console.log('Item added:', data);
    alert('Item added successfully!');
    document.getElementById('itemName').value = '';
    document.getElementById('itemDescription').value = '';
  })
  .catch(error => console.error('Error:', error));
});

function loadItems() {
  fetch('/admin/items')
  .then(response => response.json())
  .then(items => {
    const itemsContainer = document.getElementById('adminItems');
    itemsContainer.innerHTML = '';
    items.forEach(item => {
      itemsContainer.innerHTML += `<div><strong>${item.name}</strong>: ${item.description}</div>`;
    });
  });
}

loadItems();
