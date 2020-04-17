/* eslint-disable consistent-return */
import { itemList } from "../../assets/cards";
import { gameMode } from "../../services/GameLogic"

export const getTitleList = async () => {
  try {
    const titleList = itemList.title;
    return titleList;

  } catch (err) {
    throw new Error('Error to get list of titles', err);
  }
}

const getImageList = async () => {
  try {
    const imagesList = itemList.image;
    return imagesList;

  } catch (err) {
    throw new Error('Error to get list of images', err);
  }
}

export const getLinkList = async () => {
  try {
    const linkList = itemList.link;
    return linkList;

  } catch (err) {
    throw new Error('Error to get list of links', err);
  }
}

const Main = {
  render: async () => {
    const mainCardTitle = await getTitleList();
    const mainCardImage = await getImageList();
    const mainCardLink = await getLinkList();

    let view = '';

    for (let i = 0; i < mainCardTitle.length; i += 1) {
      view += /* html */`
      <a href=${`/#${mainCardLink[i]}`} class="main-card green">
      <img src=${`./assets${mainCardImage[i]}`} alt="" srcset="">
      ${mainCardTitle[i]}
    </a>
      `
    }
    return view
  },
  after_render: async () => { 

  }

}

export default Main;