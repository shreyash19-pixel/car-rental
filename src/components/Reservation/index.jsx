import React, {useContext, useState} from 'react'
import { CarInfoHeading, CarInfoHeadingSpan, CarInfoWrap, CheckInput, CrossWrap, EmailDetailsWrap, ExistingInfo, ExistingInfoHeading, ExistingInfoWrap, GuideLinesDes, GuideLinesWrap, GuidelinesHeading, LocationIconWrap, NameInput, NameLabel, NameWrap, PersonalInfo, PersonalInfoContainer, PersonalInfoHeading, PersonalInfoWrap, PickLoc, PickLocHeadingWrap, PickLocWrap, PickTime, ReservationContainer, ReservationDetails, ReservationDetailsWrap, ReservationHeading, ReservationHeadingWrap, ReservationWrap, ReserveNowBtn, ReserveNowWrap, SelectedCarImg, SelectedCarWrap, UpdatesWrap, UsersNameInfoWrap } from '../../styles/Reservation'
import { RxCross2 } from "react-icons/rx";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import AppContext from "../../utils/AppContext";
import AudiImg from '../../assets/audi.jpg'
import VW from '../../assets/vw.jpg'
import Camry from '../../assets/camry.jpg'
import BMW from '../../assets/bmw.jpg'
import Mercedes from '../../assets/mercedes.jpg'
import VW_P from '../../assets/vw-passat.jpg'

const Reservation = () => {

  const [picTime, setPicTime] = useState();
  const [dropTime, setDropTime] = useState();
  const [name, setName] = useState();
  const [last, setLast] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [age, setAge] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState()
  const [city, setCity] = useState()
  const [zipCode, setZipCode] = useState();

  const {setReserve,
    setConfirm,
    cars, 
    pickLoc, 
    dropLoc, 
    pickDate, 
    dropDate, 
    carNum
    } = useContext(AppContext);

    const carType = [AudiImg,VW,Camry,BMW,Mercedes,VW_P]

  const handlePhoneNumberChange = (event) => {
    let numericValue = event.target.value.replace(/\D/g, ''); 
    numericValue = numericValue.slice(0, 10); 
    setPhoneNumber(numericValue);
  };

  const handleZipCodeChange = (event) => {
    let numericValue = event.target.value.replace(/\D/g, ''); 
    numericValue = numericValue.slice(0, 6); 
    setZipCode(numericValue);
  };

  const handleClose = () => {
      setReserve(false)
  }

  const handleCarInfo = () => {
      if(picTime!= null && dropTime!= null && name!= null && last!= null && phoneNumber!= null && age != null && email != null && address!= null && city != null && zipCode!= null)
      {
        setReserve(false)
        setConfirm(true)
      }
      else
      {
          alert("All fields are required")
      }
  }

  return (
    <ReservationContainer>
      <ReservationWrap>
        <ReservationHeadingWrap>
          <ReservationHeading>
            COMPLETE RESERVATION
          </ReservationHeading>
          <CrossWrap onClick={handleClose}>
            <RxCross2 />
          </CrossWrap>
        </ReservationHeadingWrap>
        <GuideLinesWrap>
          <GuidelinesHeading> <BsInfoCircleFill/> Upon completing this reservation enquiry, you will receive:</GuidelinesHeading>
          <GuideLinesDes>Your rental voucher to produce on arrival at the rental desk and a toll-free customer support number.</GuideLinesDes>
        </GuideLinesWrap>
        <ExistingInfoWrap>
          <ExistingInfo>
            <ExistingInfoHeading>Location & Date</ExistingInfoHeading>
            <ReservationDetailsWrap>
              <ReservationDetails>
                <LocationIconWrap>
                    <FaLocationDot />
                </LocationIconWrap>
                <PickLocWrap>
                  <PickLocHeadingWrap>Pick-up Date & Time</PickLocHeadingWrap>
                  <PickLoc>
                    {pickDate} /
                  <PickTime onChange={(e) => setPicTime(e.target.value)} type = "time" />
                  </PickLoc>
                </PickLocWrap>
              </ReservationDetails>
            </ReservationDetailsWrap>
            <ReservationDetailsWrap>
              <ReservationDetails>
                <LocationIconWrap>
                    <FaLocationDot />
                </LocationIconWrap>
                <PickLocWrap>
                  <PickLocHeadingWrap>Drop-of Date & Time</PickLocHeadingWrap>
                  <PickLoc>
                    {dropDate} / 
                    <PickTime onChange={(e) => setDropTime(e.target.value)} type = "time" />
                  </PickLoc>
                </PickLocWrap>
              </ReservationDetails>
            </ReservationDetailsWrap>
            <ReservationDetailsWrap>
              <ReservationDetails>
                <LocationIconWrap>
                    <FaLocationDot />
                </LocationIconWrap>
                <PickLocWrap>
                  <PickLocHeadingWrap>Pick-up Location</PickLocHeadingWrap>
                  <PickLoc>{pickLoc}</PickLoc>
                </PickLocWrap>
              </ReservationDetails>
            </ReservationDetailsWrap>
            <ReservationDetailsWrap>
              <ReservationDetails>
                <LocationIconWrap>
                    <FaLocationDot />
                </LocationIconWrap>
                <PickLocWrap>
                  <PickLocHeadingWrap>Drop-of Location</PickLocHeadingWrap>
                  <PickLoc>{dropLoc}</PickLoc>
                </PickLocWrap>
              </ReservationDetails>
            </ReservationDetailsWrap>
          </ExistingInfo>
          <CarInfoWrap>
          <CarInfoHeading>
            Car - <CarInfoHeadingSpan>{cars}</CarInfoHeadingSpan>
          </CarInfoHeading>
          <SelectedCarWrap>
            <SelectedCarImg src = {carType[carNum]} />
          </SelectedCarWrap>
        </CarInfoWrap>
        </ExistingInfoWrap>
        <PersonalInfoContainer>
          <PersonalInfoWrap>
            <PersonalInfoHeading>PERSONAL INFORMATION</PersonalInfoHeading>
            <PersonalInfo>
              <UsersNameInfoWrap>
                <NameWrap>
                  <NameLabel>First Name</NameLabel>
                  <NameInput onChange={(e) => setName(e.target.value)} placeholder='Enter your first name' type = "text" />
                </NameWrap>
                <NameWrap>
                  <NameLabel>Last Name</NameLabel>
                  <NameInput onChange={(e) => setLast(e.target.value)} placeholder='Enter your last name' type = "text" />
                </NameWrap>
                <NameWrap>
                  <NameLabel>Phone Number</NameLabel>
                  <NameInput placeholder='Enter your phone number' type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />
                </NameWrap>
                <NameWrap>
                  <NameLabel>Age</NameLabel>
                  <NameInput onChange={(e) => setAge(e.target.value)} placeholder='18' type = "number" step = "1" min = "18"/>
                </NameWrap>
              </UsersNameInfoWrap>
            </PersonalInfo>
            <EmailDetailsWrap>
              <NameWrap>
                  <NameLabel>Email</NameLabel>
                  <NameInput onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' type="email" />
              </NameWrap>
              <NameWrap>
                  <NameLabel>Address</NameLabel>
                  <NameInput onChange={(e) => setAddress(e.target.value)} placeholder='Enter your street address' type="text" />
              </NameWrap>
            </EmailDetailsWrap>
            <UsersNameInfoWrap>
                <NameWrap>
                  <NameLabel>City</NameLabel>
                  <NameInput onChange={(e) => setCity(e.target.value)} placeholder='Enter your city' type = "text" />
                </NameWrap>
                <NameWrap>
                  <NameLabel>Zipcode</NameLabel>
                  <NameInput placeholder='Enter your zip code' type = "text" value={zipCode} onChange={handleZipCodeChange}/>
                </NameWrap>
            </UsersNameInfoWrap>
            <UpdatesWrap>
              <CheckInput type = "checkbox" />
              Please send me latest news and updates
            </UpdatesWrap>
          </PersonalInfoWrap>
        </PersonalInfoContainer>
        <ReserveNowWrap>
          <ReserveNowBtn onClick={handleCarInfo}>Reserve Now</ReserveNowBtn>    
        </ReserveNowWrap>
      </ReservationWrap>
    </ReservationContainer>
  )
}

export default Reservation