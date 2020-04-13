import cards from "../../assets/cards.js";
import {createCards} from '../../services/GenerateCards.js'

let getCards = async () => {
  try {
    const cardsData = cards[8];
    return cardsData;
  }

  catch (err) {
    console.log('Error to get cards data', err);
  }
}

let Emotions = {
  render : async () => {
    let cardsContent =  await getCards();
    return createCards(cardsContent);
  }
  , after_render: async () => {
  }
}
export default Emotions;