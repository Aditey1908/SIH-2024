// controllers/monetizationController.js
const { Monetization } = require('../models'); // Correct import from models index if exported correctly

exports.createBooking = async (req, res) => {
  try {
    const bookings = await Monetization.findAll();

    // Validate input
    if (!bookings.length) {
        return res.status(404).json({ message: 'No bookings found.' });
      }

    // Calculate the cost
    bookings.forEach(booking => {
        const { start_location, end_location, space_required } = booking // Ensure these fields are present
        
        // Calculate cost
        const cost = space_required * 50; 
        
        console.log(`Start: ${start_location}, End: ${end_location}, Space: ${space_required}, Cost: ${cost}`);
      });
  
      // Return the bookings with calculated costs
      res.status(200).json({
        message: 'Bookings retrieved successfully!',
        booking,
        cost,
      });
    } catch (error) {
      console.error('Error fetching bookings:', error);
      res.status(500).json({ message: 'Server error. Please try again later.' });
    }
  };
