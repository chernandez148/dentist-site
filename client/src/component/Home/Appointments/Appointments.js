import React from 'react'
import signiture from '../../../assets/signiture.png'
import cleaning from '../../../assets/cleaning-img.png'
import './styles.css'

function Appointments() {
    return (
        <div className='Appointments'>
            <div className='appointments-wrapper'>
                <div className='testimonial'>
                    <hr />
                    <p>"My family trusts Dr Fischer completely, he’s been with us for years and as helped us on numerous occasions"</p>
                    <hr />
                    <img src={signiture} alt='signiture' width="100px" />
                </div>
                <div className='appointment-form'>
                    <h2>Book Your Appointment</h2>
                    <div className='appointment-form-wrapper'>
                        <img src={cleaning} alt='chair' />
                        <form>
                            <input type='text' placeholder='Your email address *' />
                            <select>
                                <option type="disabled">Select Your Dentist</option>
                                <option>Alan Foster</option>
                                <option>Jim Kite</option>
                            </select>
                            <input type='date' />
                            <button>Book Your Appointment</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Appointments