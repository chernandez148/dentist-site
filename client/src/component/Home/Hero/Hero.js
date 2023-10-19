import React from 'react'
import { PiToothThin } from 'react-icons/pi';
import { CiMedicalClipboard } from 'react-icons/ci';
import './styles.css'

function Hero() {
    return (
        <div className='Hero'>
            <div className='overlay'></div>
            <div className='hero-wrapper'>
                <h2>Care For Your Smile</h2>
                <h1>Let Us Brighten <br /> Your Smile</h1>
                <div className='icon-wrapper'>
                    <div className='whitening'>
                        <PiToothThin color='#0e53ae' size={50} />
                        <div className='whitening-wrapper'>
                            <h4>Whitening</h4>
                            <p>Transform your smile with professional teeth whitening, a safe and effective way to achieve a brighter, more confident you.</p>
                        </div>
                    </div>
                    <div className='complete-service'>
                        <CiMedicalClipboard color='#0e53ae' size={50} />
                        <div className='complete-service-wrapper'>
                            <h4>Full Service</h4>
                            <p>Experience comprehensive dental care with our full-service offerings, ensuring your oral health is in expert hands.</p>
                        </div>
                    </div>
                </div>
                <button>See Our Services</button>
            </div>

        </div>
    )
}

export default Hero