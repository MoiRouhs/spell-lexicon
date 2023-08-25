"use strict";
window.onload = () => {
  words_grid();
  random_word("#rbutton");
};
const words_grid = ()=>{
  let container = document.querySelector("#rcontainer");
  lexicon.forEach((item)=>{
    container.innerHTML +=`
    <a class="link" href="https://elsaspeak.com/en/learn-english/how-to-pronounce?word=${item.word.toLowerCase()}" target="_blank">
      <div class="card" data-focus="false" id="${item.word.toLowerCase().replace(' ','-')}">
        <div id="${item.word.toLowerCase().replace(' ','-')}"class="card-content">
          <p class="word">${item.word}</p>
          <p class="ipa">/ ${item.ipa} /</p>
          <p class="largo">w: ${item.word.length} I:${item.ipa.length}</p>
        </div>
      </div>
    </a>
    ` 
  });
}
const random_word = (arg)=>{
  let button = document.querySelector(arg);
  button.addEventListener('click',()=>{
    let cards = document.querySelectorAll(".card");
    let unfocus_card =  document.querySelectorAll(".card[data-focus='true']");
    let focus_card = cards[Math.floor(Math.random() * cards.length )];
    if(unfocus_card.length > 0){
      unfocus_card.forEach((item)=>{
        item.setAttribute("data-focus", false);
      });
    }
    focus_card.setAttribute("data-focus", true);
    focus_card.scrollIntoView(true);
  });
}
