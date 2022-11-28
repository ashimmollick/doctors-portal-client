import React from 'react';

const AppointmentOption = ({ appointmentOption, setTreatement }) => {
    const { name, slots, price } = appointmentOption;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-center text-3xl font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Anather day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                <p><small>Price: ${price}</small></p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        className="btn btn-primary text-white"
                        onClick={() => setTreatement(appointmentOption)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;