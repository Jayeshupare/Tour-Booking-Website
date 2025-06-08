import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from "reactstrap";
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Get real-time weather updates to plan your trip with confidence and ease.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Explore destinations with expert local guides who know the hidden gems.",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Tailor your travel experience to match your interests, budget, and pace.",
    },
]

const ServiceList = () => {
  return (
    <>
    {serviceData.map((item,index)=> (
        <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
            <ServiceCard item={item} />
        </Col>
    ))}
    </>
  )
}

export default ServiceList
