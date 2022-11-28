
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([])
    const [treatement, setTreatement] = useState(null);

    const date = format(selectDate, 'PP');
    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    // useEffect(() => {
    //     fetch('http://localhost:5000/appointmentOptions')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))
    // }, [])
    return (
        <section className='my-10'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption={option}
                        setTreatement={setTreatement}
                        refetch={refetch}
                    ></AppointmentOption>)
                }
                {treatement &&
                    <BookingModal
                        selectDate={selectDate}
                        treatement={treatement}
                        setTreatement={setTreatement}
                        refetch={refetch}
                    ></BookingModal>}
            </div>
        </section>

    );
};

export default AvailableAppointments;