import React from 'react';
import Tiago from '../Photos/Tiago.jpg';

const style = {
  pictureCard : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: '0 5%',
    marginBottom: '40px'
  },

  transcript: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: ' center',
    fontSize: '35px', 
    fontStyle: 'italic',
    padding: '0 5%'


  }

}


const PictureCard = () => {
  return (
    <div style={style.pictureCard} >
      <img alt='Tiago' src={Tiago} style={{width: '40%', padding: '0 5%'}} />
      <div style={style.transcript}>
        <p>"How beautiful is it o stay stilent when someone expects you to be enraged."</p>
      </div>
    </div>
  )
}

export default PictureCard;