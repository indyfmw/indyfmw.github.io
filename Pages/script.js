// Open Modal and Inject Content
function expandProject(card) {
    const modal = document.getElementById('project-modal');
    const modalDetails = document.getElementById('modal-details');
  
    // Extract details from the clicked card
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent;
  
    // Inject details into the modal
    modalDetails.innerHTML = `
      <img src="${imgSrc}" alt="${title}">
      <h2>${title}</h2>
      <p>${description}</p>
    `;
  
    // Show the modal
    modal.style.display = 'flex';
  }
  
  // Close Modal
  function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.style.display = 'none';
  }
  