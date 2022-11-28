import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import contactImg from '../../../assets/images/appointment.png';

const ContactForm = () => {
    return (
        <div
            style={{
                background: `url(${contactImg})`,
                backgroundSize: 'cover'
            }}
            className="hero py-32">
            <div className=" ">
                <div className="card-body text-white">
                    <div className='text-center mb-12'>
                        <h3 className='text-xl font-bold text-primary '>Contact Us</h3>
                        <h2 className='text-5xl'>Stay connected with us</h2>
                    </div>
                    <div className="form-control">

                        <input type="text" placeholder="Your Email" className="input input-bordered" />
                    </div>
                    <div className="form-control my-4">

                        <input type="text" placeholder="Subject" className="input input-bordered" />
                    </div>
                    <textarea className="textarea textarea-bordered h-32" placeholder="Your Message"></textarea>

                </div>
                <div className='text-center capitalize'>
                    <PrimaryButton >Submit</PrimaryButton>
                </div>
            </div>

        </div>
    );
};

export default ContactForm;