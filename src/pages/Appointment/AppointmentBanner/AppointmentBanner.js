
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectDate, setSelectDate }) => {

    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content gap-6 flex-col lg:flex-row-reverse ">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>

                        <DayPicker
                            mode="single"
                            selected={selectDate}
                            onSelect={setSelectDate}
                        />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;