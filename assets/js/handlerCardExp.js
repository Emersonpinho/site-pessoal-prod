const cards = [
    
];

const orderedCards = cards.sort((a, b) => {
    const dateA = new Date(a.terminoAno || new Date().getFullYear(), a.terminoMes === "Atualmente" ? 11 : new Date(Date.parse(a.inicioMes + " 1, " + a.inicioAno)).getMonth());
    const dateB = new Date(b.terminoAno || new Date().getFullYear(), b.terminoMes === "Atualmente" ? 11 : new Date(Date.parse(b.inicioMes + " 1, " + b.inicioAno)).getMonth());
    return dateB - dateA;
});

function criarCard(card) {
    const termino = card.terminoAno ? `${card.terminoMes} de ${card.terminoAno}` : 'Atualmente';

    return `
    <div class="card experience-card">
      <div class="experience-header d-flex align-items-center">
          <img src="${card.imagemLink}" alt="${card.instituicao}" class="experience-img">
          <div class="experience-info">
              <h5 class="experience-title">${card.instituicao} - ${card.cargo}</h5>
              <p class="experience-location">${card.localizacao}</p>
          </div>
      </div>
      <div class="experience-body">
          <p class="experience-description">${card.atuacao}</p>
          <div class="experience-dates">
              <span class="badge badge-start">${card.inicioMes} de ${card.inicioAno}</span>
              <span class="badge badge-end">${termino}</span>
          </div>
          ${card.link ? `<a href="${card.link}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-link">Conheça</a>` : ''}
      </div>
    </div>
  `;
}

const cardContainer = document.getElementById('experienciaContainer');
orderedCards.forEach(card => {
    const cardHTML = criarCard(card);
    cardContainer.insertAdjacentHTML('beforeend', cardHTML);
});