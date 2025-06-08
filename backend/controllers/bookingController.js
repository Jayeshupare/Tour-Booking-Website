import Booking from "../models/Booking.js"

//Create a Booking
export const createBooking = async (req, res) => {
    try {
        // Validate required fields
        const requiredFields = ['userId', 'userEmail', 'tourName', 'fullname', 'phone', 'guestSize', 'bookAt']
        const missingFields = requiredFields.filter(field => !req.body[field])
        
        if (missingFields.length > 0) {
            return res.status(400).json({success: false, message: `Missing required fields: ${missingFields.join(', ')}`,data: null})
        }

        // Create booking with formatted data
        const newBooking = new Booking({
            userId: req.body.userId,
            userEmail: req.body.userEmail,
            tourName: req.body.tourName,
            fullname: req.body.fullname,
            phone: String(req.body.phone),
            guestSize: parseInt(req.body.guestSize),
            bookAt: new Date(req.body.bookAt)
        })

        const savedBooking = await newBooking.save()

        res.status(201).json({success: true, message: 'Booking created successfully', data: savedBooking})

    } catch (err) {
        console.error('Booking creation error:', err)
        res.status(500).json({success: false, message: 'Failed to create booking', error: err.message}) 
    }
}

//get single booking
export const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
        
        if (!booking) {
            return res.status(404).json({success: false, message: 'Booking not found', data: null})
        }

        res.status(200).json({success: true, message: 'Booking retrieved successfully', data: booking})

    } catch (err) {
        console.error('Get booking error:', err)
        res.status(500).json({success: false, message: 'Failed to retrieve booking', error: err.message})
    }
}

//get all bookings
export const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find()
        res.status(200).json({ success: true, message: 'All bookings retrieved successfully', count: bookings.length, data: bookings})

    } catch (err) {
        console.error('Get all bookings error:', err)
        res.status(500).json({success: false, message: 'Failed to retrieve bookings', error: err.message})
    }
}