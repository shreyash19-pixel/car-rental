import React, { useState } from 'react'
import { CarAllInfoWrap, CarInfo1, CarInfo2, CarInfoContainer, ModelImg, ModelImgAndDetailsWrap, ModelImgWrap, ModelsContainer, ModelsDetails, ModelsDetailsHeading, ModelsDetailsHeadingSpan, ModelsDetailsWrap, ModelsHeadingDescWrap, ModelsName, ModelsNameWrap, ModelsWrap, ReserveNow, ViewCarsWrap } from '../../styles/Models'
import { StepsHeading1, StepsHeading2, StepsHeadingWrap, StepsInfoDesc } from '../../styles/Steps'
import AudiImg from '../../assets/audi.jpg'
import VW from '../../assets/vw.jpg'
import Camry from '../../assets/camry.jpg'
import BMW from '../../assets/bmw.jpg'
import Mercedes from '../../assets/mercedes.jpg'
import VW_P from '../../assets/vw-passat.jpg'

const Models = () => {

  const models = [
    {title : "Audi A1S-Line"},
    {title : "VW Golf 6"},
    {title : "Toyota Camry"},
    {title : "BMW 320 ModernLine"},
    {title : "Mercedes-Benz GLK"},
    {title : "VW Passat CC"},
  ]

  const carModels = {
    0: {
      image: { img: AudiImg,price: '$45' },
      details: [
        { title: "Model", name: "Audi" },
        { title: "Mark", name: "A1" },
        { title: "Year", name: "2012" },
        { title: "Doors", name: "4/5" },
        { title: "AC", name: "Yes" },
        { title: "Transmission", name: "Manual" },
        { title: "Fuel", name: "Gasoline" },
      ]
    },
    1:{ 
    image : {img : VW,price: '$37'},
     details : [
      { title: "Model", name: "Golf 6" },
      { title: "Mark", name: "Volkswagen" },
      { title: "Year", name: "2008" },
      { title: "Doors", name: "4/5" },
      { title: "AC", name: "Yes" },
      { title: "Transmission", name: "Manual" },
      { title: "Fuel", name: "Disel" },
    ]
    },
    2:{ 
    image : {img : Camry,price: '$30'},
    details : [
      { title: "Model", name: "Camry" },
      { title: "Mark", name: "Toyota" },
      { title: "Year", name: "2006" },
      { title: "Doors", name: "4/5" },
      { title: "AC", name: "Yes" },
      { title: "Transmission", name: "Automatic" },
      { title: "Fuel", name: "Hybrid" },
    ]
    },
    3:{
    image : {img : BMW,price: '$35'}, 
    details : [
      { title: "Model", name: "320" },
      { title: "Mark", name: "BMW" },
      { title: "Year", name: "2012" },
      { title: "Doors", name: "4/5" },
      { title: "AC", name: "Yes" },
      { title: "Transmission", name: "Manual" },
      { title: "Fuel", name: "Disel" },
    ]
  },
    4:{ 
      image : {img : Mercedes,price: '$50'},
    details :[
      { title: "Model", name: "Benz GLK" },
      { title: "Mark", name: "Mercedes" },
      { title: "Year", name: "2006" },
      { title: "Doors", name: "4/5" },
      { title: "AC", name: "Yes" },
      { title: "Transmission", name: "Manual" },
      { title: "Fuel", name: "Disel" },
    ]
  },
    5:{ 
    image : {img : VW_P,price: '$25'},
    details : [
      { title: "Model", name: "Passat CC" },
      { title: "Mark", name: "Volkswagen" },
      { title: "Year", name: "2008" },
      { title: "Doors", name: "4/5" },
      { title: "AC", name: "Yes" },
      { title: "Transmission", name: "Automatic" },
      { title: "Fuel", name: "Gasoline" },
    ]
  }
  };

  const [activeIndex, setActiveIndex] = useState(0)


  const handleNameClick = (index) => {
      setActiveIndex(index)
  }

  return (
    <ModelsContainer id = "Models">
        <ModelsWrap>
            <StepsHeadingWrap>
                <StepsHeading1>Vehicle Models</StepsHeading1>
                <StepsHeading2>Our rental fleet</StepsHeading2>
                <ModelsHeadingDescWrap>
                  <StepsInfoDesc>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</StepsInfoDesc>
                </ModelsHeadingDescWrap>
            </StepsHeadingWrap>
            <ViewCarsWrap>
              <ModelsNameWrap>
              {models.map((model,index) => (
                <ModelsName key = {index} isActive = {activeIndex === index} onClick={() => handleNameClick(index)}>
                  {model.title}
                  </ModelsName>
                ))}
              </ModelsNameWrap>
              <ModelImgAndDetailsWrap>
                <ModelImgWrap>
                  <ModelImg src = {carModels[activeIndex].image.img} />
                </ModelImgWrap>
                <ModelsDetailsWrap>
                  <ModelsDetails>
                    <ModelsDetailsHeading>
                      <ModelsDetailsHeadingSpan>{carModels[activeIndex].image.price} </ModelsDetailsHeadingSpan> / rent per day
                    </ModelsDetailsHeading>
                    <CarAllInfoWrap>
                      {carModels[activeIndex].details.map((aud) => (
                      <CarInfoContainer>
                        <CarInfo1>{aud.title}</CarInfo1>
                        <CarInfo2>{aud.name}</CarInfo2>         
                      </CarInfoContainer>
                      ))}
                    </CarAllInfoWrap>
                  </ModelsDetails>
                  <ReserveNow href = "#Booking">RESERVE NOW</ReserveNow>
                </ModelsDetailsWrap>
              </ModelImgAndDetailsWrap>
            </ViewCarsWrap>
        </ModelsWrap>
    </ModelsContainer>
  )
}

export default Models