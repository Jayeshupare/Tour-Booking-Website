import React, { useContext, useState } from 'react'
import './Booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { BASE_URL } from '../../utils/config'

const Booking = ({ tour, avgRating }) => {
    const { price, reviews, title } = tour
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user?._id || '',
        userEmail: user?.email || '',
        tourName: title,
        fullname: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    })

    const handleChange = e => {
        const { id, value } = e.target
        setBooking(prev => ({...prev,[id]: id === 'guestSize' ? parseInt(value) || 1 : value}))
    }

    const serviceFee = 1000
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(serviceFee)

    const handleSubmit = async e => {
        e.preventDefault()
        console.log('Submitting booking:', booking)

        try {
            if (!user) {
                return alert('Please sign in to book a tour')
            }

            // Validate required fields
            if (!booking.fullname || !booking.phone || !booking.bookAt) {
                return alert('Please fill all required fields')
            }

            const res = await fetch(`${BASE_URL}/booking`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json',},
                credentials: 'include',
                body: JSON.stringify({...booking,
                    guestSize: Number(booking.guestSize),
                    bookAt: new Date(booking.bookAt).toISOString()
                })
            })

            const result = await res.json()
            
            if (!res.ok) {
                console.error('Booking error response:', result)
                throw new Error(result.message || 'Failed to book tour')
            }

            navigate("/thank-you")
        } catch (err) {
            console.error('Booking error:', err)
            alert(err.message || 'Failed to complete booking. Please try again.')
        }
    }

    return (
        <div className='booking'>
            <div className="booking__top d-flex align-items-center justify-content-between">
                <h3 className='text-primary fw-bold'>₹{price} <span className='text-muted fs-6'>/per person</span></h3>
                <span className='tour__rating d-flex align-items-center'>
                    <i className="ri-star-fill"></i> {avgRating === 0 ? null : avgRating} ({reviews?.length})
                </span>
            </div>

            <div className="booking__form">
                <h5>Traveler Information</h5>
                <Form className='booking__info-form' onSubmit={handleSubmit}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullname' required onChange={handleChange} value={booking.fullname}/>
                    </FormGroup>

                    <FormGroup>
                        <input type="tel" placeholder='Phone Number' id='phone' required onChange={handleChange} value={booking.phone}/>
                    </FormGroup>

                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" id='bookAt' required onChange={handleChange} value={booking.bookAt} min={new Date().toISOString().split('T')[0]}/>
                        <input type="number" placeholder="Guests" id='guestSize' required min="1" onChange={handleChange} value={booking.guestSize}/>
                    </FormGroup>
                </Form>
            </div>

            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className='border-0 px-0'>
                        <h5 className='d-flex align-items-center gap-1'>
                            ₹{price} <i className="ri-close-line"></i> {booking.guestSize} person
                        </h5>
                        <span>₹{price * booking.guestSize}</span>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0'>
                        <h5>Service Charge</h5>
                        <span>₹{serviceFee}</span>
                    </ListGroupItem>

                    <ListGroupItem className='border-0 px-0'>
                        <h5>Total</h5>
                        <span>₹{totalAmount}</span>
                    </ListGroupItem>
                </ListGroup>

                <Button type="submit" className="btn primary__btn w-100 mt-4" onClick={handleSubmit}>Book Now</Button>
            </div>
        </div>
    )
}

export default Booking