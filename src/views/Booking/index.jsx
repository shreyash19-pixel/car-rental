import React, { useState, useContext } from 'react'
import { BookingContainer, BookingHeading, BookingInfoWrap, BookingWrap, CarIconWrap, CarTypeHeadingWrap, CarTypeOption, CarTypeSelect, CarTypeWrap, CrossWrap, DateInput, SearchBtn, SearchBtnWrap, WarningMessage, WarningMessageWrap } from '../../styles/Booking'
import { FaCarSide } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegCalendarAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import Reservation from '../../components/Reservation';
import AppContext from "../../utils/AppContext";

const Booking = () => {

    const carType = [
        {title : "Audi A1S-Line"},
        {title : "VW Golf 6"},
        {title : "Toyota Camry"},
        {title : "BMW 320 ModernLine"},
        {title : "Mercedes-Benz GLK"},
        {title : "VW Passat CC"},
    ]


    const location = [
        {title : "Mumbai"},
        {title : "Pune"},
        {title : "Banglore"},
        {title : "Delhi"},
        {title : "Punjab"},
    ]

    const currentDt = () => {
        const date = new Date();

        let day = date.getDate();
        day = day > 10 ? "" : "0" + day
        let month = date.getMonth() + 1;
        month = month > 10 ? "" : "0" + month
        let year = date.getFullYear();
        let currentDate = `${year}-${month}-${day}`;
        console.log(currentDate)
        return currentDate
    }

    const [isEmpty, setIsEmpty] = useState(false)
    const {reserve,
        setReserve,
        confirm,
        cars, 
        setCar,
        pickLoc, 
        setPickLoc,
        dropLoc, 
        setDropLoc,
        pickDate, 
        setPickDate,
        dropDate, 
        setDropDate,   
        setCarNum 
        } = useContext(AppContext);
    reserve?document.body.style.overflow="hidden":document.body.style.overflow="auto";
    

    const handleCarInfo = () => {
        if(cars!= null && pickLoc!= null && dropLoc!= null && pickDate!= null && dropDate!= null)
        {
            switch(cars)
            {
                case "Audi A1S-Line":
                    setCarNum(0)
                    break;
                case "VW Golf 6":
                    setCarNum(1)
                    break;
                case "Toyota Camry":
                    setCarNum(2)
                    break;
                case "BMW 320 ModernLine":
                    setCarNum(3)
                    break;
                case "Mercedes-Benz GLK":
                    setCarNum(4)
                    break;
                case "VW Passat CC":
                    setCarNum(5)
                    break;
                default:
                    setCarNum(null)
            }

            setReserve(true)
        }
        else
        {
            setIsEmpty(true)
        }
    }

    const handleCloseWarning = () => {
        setIsEmpty(false)
    }

  return (
    <BookingContainer id = "Booking">
        <BookingWrap>
            <BookingHeading>Book a car</BookingHeading>
            {
                isEmpty ? 
                (
                    <WarningMessageWrap>
                        <WarningMessage>All fields are required!</WarningMessage>
                        <CrossWrap onClick={handleCloseWarning}>
                            <RxCross2 />
                        </CrossWrap>
                    </WarningMessageWrap>
                ) :
                (
                    <></>
                )
            }
            {
                confirm ?
                (
                    <WarningMessageWrap green = "true">
                        <WarningMessage green = "true">Check your email to confirm an order.</WarningMessage>
                        <CrossWrap green = "true" onClick={handleCloseWarning}>
                            <RxCross2 />
                        </CrossWrap>
                    </WarningMessageWrap>
                ) :
                (
                    <></>
                )
            }
            <BookingInfoWrap>
                <CarTypeWrap>
                    <CarTypeHeadingWrap>
                        <CarIconWrap>
                            <FaCarSide />
                        </CarIconWrap>
                        Select Your Car Type
                    </CarTypeHeadingWrap>
                    <CarTypeSelect id = "cars" value = {cars} onChange={(e) => setCar(e.target.value)}>
                        <CarTypeOption disabled value="" selected>
                            Select your car type
                        </CarTypeOption>
                        {carType.map((car,index) => (
                        <CarTypeOption>
                            {car.title}
                        </CarTypeOption>
                        ))}
                    </CarTypeSelect>
                </CarTypeWrap>
                <CarTypeWrap>
                    <CarTypeHeadingWrap>
                        <CarIconWrap>
                           <FaLocationDot />
                        </CarIconWrap>
                        Pick-up
                    </CarTypeHeadingWrap>
                    <CarTypeSelect id = "pickLoc" value = {pickLoc} onChange={(e) => setPickLoc(e.target.value)}>
                        <CarTypeOption disabled value="" selected>
                            Select pick up location
                        </CarTypeOption>
                        {location.map((loc) => (
                        <CarTypeOption>
                            {loc.title}
                        </CarTypeOption>
                        ))}
                    </CarTypeSelect>
                </CarTypeWrap>
                <CarTypeWrap>
                    <CarTypeHeadingWrap>
                        <CarIconWrap>
                            <FaCarSide />
                        </CarIconWrap>
                        Drop-of
                    </CarTypeHeadingWrap>
                    <CarTypeSelect id = "dropLoc" value = {dropLoc} onChange={(e) => setDropLoc(e.target.value)}>
                        <CarTypeOption disabled value="" selected>
                            Select drop off location
                        </CarTypeOption>
                        {location.map((loc) => (
                        <CarTypeOption>
                            {loc.title}
                        </CarTypeOption>
                        ))}
                    </CarTypeSelect>
                </CarTypeWrap>
                <CarTypeWrap>
                    <CarTypeHeadingWrap>
                        <CarIconWrap>
                            <FaRegCalendarAlt />
                        </CarIconWrap>
                        Pick-up date
                    </CarTypeHeadingWrap>
                    <DateInput id = "pickDate" value = {pickDate} type = "date" min = {currentDt()} onChange={(e) => setPickDate(e.target.value)} />
                </CarTypeWrap>
                <CarTypeWrap>
                    <CarTypeHeadingWrap>
                        <CarIconWrap>
                            <FaRegCalendarAlt />
                        </CarIconWrap>
                        Drop-off date
                    </CarTypeHeadingWrap>
                    <DateInput id = "dropDate" value = {dropDate} type = "date" min = {currentDt()} onChange={(e) => setDropDate(e.target.value)} />
                </CarTypeWrap>
                <SearchBtnWrap>
                    <SearchBtn onClick = {handleCarInfo}>Search</SearchBtn>
                </SearchBtnWrap>
            </BookingInfoWrap>
        </BookingWrap>
        {reserve && (<Reservation />)}
    </BookingContainer>
  )
}

export default Booking