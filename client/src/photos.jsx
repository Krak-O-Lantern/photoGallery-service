/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainImage = styled.img`
width: 484px;
height: 505px;
padding: 4px;
float: left;
border-top-left-radius: 20px;
border-bottom-left-radius: 20px;
cursor: pointer;

&:hover {
filter: brightness(90%);
transition: .2s;
}
`;

const SmallImageTop = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: left;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageTopRight = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: left;
border-top-right-radius: 20px;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageBottom = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: bottom;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

const SmallImageBottomRight = styled.img`
width: 234px;
height: 248px;
padding: 4px;
float: bottom;
border-bottom-right-radius: 20px;
cursor: pointer;

&:hover {
    filter: brightness(90%);
    transition: .2s;
    }
`;

export const MainPhotoDiv = styled.div`
height: 600px;
width: 1120px;
margin-left: auto;
margin-right: auto;
`;
MainPhotoDiv.displayName = 'MainPhotoDiv';

const StyledHeader = styled.h1`
  font: Montserrat;
  font-weight: lighter;
`;

const StyledImg = styled.img`  
width: 15px;
height: 15px;
padding-right: .4em;
`;

const StyledSpan = styled.span`
font-size: 16px;
font: Montserrat;
`;

function Photos({
  imageData, viewable, setViewable, setCurrent,
}) {
  if (viewable) {
    return null;
  }
  return (
    <MainPhotoDiv>
      <StyledHeader>Luxury lodge with incredible views of Lake Washington</StyledHeader>
      <span>
        <StyledImg src="https://ghrsea12-fec.s3-us-west-2.amazonaws.com/sample/star.png" alt="rating star image" />
      </span>
      <StyledSpan>4.87</StyledSpan>
      <br />
      <MainImage onClick={() => { setViewable(true); setCurrent(0); }} src={imageData.images[0]} alt="" />
      <SmallImageTop onClick={() => { setViewable(true); setCurrent(1); }} src={imageData.images[1]} alt="" />
      <SmallImageTopRight onClick={() => { setViewable(true); setCurrent(2); }} src={imageData.images[2]} alt="" />
      <SmallImageBottom onClick={() => { setViewable(true); setCurrent(3); }} src={imageData.images[3]} alt="" />
      <SmallImageBottomRight onClick={() => { setViewable(true); setCurrent(4); }} src={imageData.images[4]} alt="" />
    </MainPhotoDiv>
  );
}

Photos.propTypes = {
  imageData: PropTypes.isRequired,
  viewable: PropTypes.bool.isRequired,
  setViewable: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default Photos;
