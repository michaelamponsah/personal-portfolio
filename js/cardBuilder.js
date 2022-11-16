export default cardBuilder = (cardData) => {
  const { id, image, title, description } = cardData
  const { src, alt } = image
  
  const card = `
 <div class="card" tabindex="0">
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
       <li>html</li>
       <li>css</li>
       <li>javascript</li>
     </ul>
     <button class="btn btn-outline">See Project</button>
   </div>
 </div>
</div>
 `
  return card;
}