import React from 'react';

const style = {
  marginTop: '3%',

}

// const randomPicture = Math.floor(Math.random() * 12);
// const linkToRandomPicture = `https://raw.githubusercontent.com/zuz-zuz/inspiration-images/main/${randomPicture}.jpg`;

const PictureCard = (props) => {
  return (
    <div style={style} >
      <img alt='Happiness Picture' src={props.picture} />
    </div>
  )
}

export default PictureCard;