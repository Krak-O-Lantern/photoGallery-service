import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const SlideIn = keyframes`
from {
    margin-top: 100%;
  }

  to {
    margin-top: 0%;
  }
`;

const ModalDiv = styled.div`
width: 1200px;
height; 1200px;
margin-left: auto;
margin-right: auto;
animation-name: ${SlideIn};
animation-duration: 400ms;
animation-iteration-count: 1;
`;

const CarouselImage = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 65%;
padding-top: 100px;
`;

const LeftButton = styled.button`
& {
display: inline-block;
width: 4em;
height: 4em;
border: 0.2em solid #ccc;
border-radius: 50%;
margin-right: 1.5em;
position: absolute;
margin-top: 500px;
background-color: white;
outline: none;
cursor: pointer;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: 0.6em;
width: .7em;
height: .7em;
border-top: 0.2em solid;
border-right: 0.2em solid;
transform: rotate(-135deg);
}

&:active { 
    transform: scale(0.95); 
} 

&:hover {
    background: #F4F4F4;
}
`;

const RightButton = styled.button`
& {
display: inline-block;
width: 4em;
height: 4em;
border: 0.2em solid #ccc;
border-radius: 50%;
margin-left: 85em;
position: absolute;
margin-top: 500px;
background-color: white;
outline: none;
cursor: pointer;
}

&:after {
content: '';
display: inline-block;
margin-top: 0.2em;
margin-left: -0.6em;
width: .7em;
height: .7em;
border-top: 0.2em solid;
border-right: 0.2em solid;
transform: rotate(45deg);
}

&:active { 
    transform: scale(0.95); 
} 

&:hover {
    background: #F4F4F4;
}
`;

const CloseButton = styled.button`
cursor: pointer;
border: none;
border-radius: 10%;
background: none;
background-color: #F4F4F4;
padding: 10px 20px 10px 20px;
font-size: 14px;
left: 38px;
top: 30px;
outline: none;
margin-left: -6em;

&:hover {
filter: brightness(90%);
transition: .2s;
}

&:active { 
    transform: scale(0.95); 
} 

`;

const CounterButton = styled.button`
font-size: 16px;
font: Montserrat;
font-weight: lighter;
color: gray;
border: none;
margin-left: 35em;
margin-top: 2em;
background: white;
`;

const DescriptionDiv = styled.div`
font-size: 16px;
font: Montserrat;
font-color: #ccc;
text-align: center;
padding-top: 25px;
`;
function Modal({
  viewable, setViewable, imageData, current, setCurrent,
}) {
  if (!viewable) {
    return null;
  }
  return (
    <ModalDiv>
      <CloseButton onClick={() => setViewable(!viewable)}>X Close </CloseButton>
      <LeftButton onClick={() => setCurrent(current === 0 ? 19 : current - 1)} />
      <RightButton onClick={() => setCurrent(current === 19 ? 0 : current + 1)} />
      <CounterButton>
        {`${current + 1}`}
        {' / '}
        {imageData.images.length}
      </CounterButton>
      <CarouselImage src={imageData.images[current]} alt="" />
      <DescriptionDiv>
        {imageData.descriptions[current]}
      </DescriptionDiv>
    </ModalDiv>
  );
}

Modal.propTypes = {
  imageData: PropTypes.isRequired,
  viewable: PropTypes.bool.isRequired,
  setViewable: PropTypes.func.isRequired,
  current: PropTypes.number.isRequired,
  setCurrent: PropTypes.isRequired,
};
export default Modal;
