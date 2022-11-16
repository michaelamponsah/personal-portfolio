const cardBuilder = (cardData) => {
  const { id, image, title, description, technologies } = cardData
  const { src, alt } = image

  const card = `
 <div class="card" id=${id} tabindex="0">
 <div class="card-header">
   <img src="${src}"
     alt="${alt}">
 </div>
 <div class="card-details">
   <div class="card-body">
     <h3>${title}</h3>
     <ul>
       <li>Canopy</li>
       <li><span class="dot"></span> Back End Dev</li>
       <li><span class="dot"></span>2015</li>
     </ul>
     <p>${description}</p>
   </div>
   <div class="card-footer">
     <ul>
      ${technologies.map(tech => {
        return `<li>${tech}</li>`
      })}
     </ul>
     <button class="btn btn-outline" data-modal-target = "#modal">See Project</button>
   </div>
 </div>
</div>
 `
  return card;
}

export default cardBuilder;