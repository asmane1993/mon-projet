import emailjs from 'emailjs-com';
import { React, useState } from 'react';
import { Row, Col } from 'react-bootstrap'
import bg from '../assets/reservation-chauffeurs-paris.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Calendar, Clock, LogIn, LogOut, Mail, Smartphone, User2 } from 'lucide-react';
import { useTranslation } from "react-i18next";

function Booking() {
    const { t } = useTranslation();
    const [selectedHour, setSelectedHour] = useState('');

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const handleChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const hours = [];
    for (let i = 0; i < 24; i++) {
        hours.push(
            <option key={i} value={i}>
                {i < 10 ? '0' + i + ":00" : i + ":00"}
            </option>
        );
    }

    const style = {
        boxShadow: "none",
        outline: "none"
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_0qek7gb', 'template_740cg2l', e.target, 'Cf_dX3bClfHw4EiRu')
            .then((result) => {
                console.log(result.text);
                toast.success(t('send_with_success'), {
                    position: toast.POSITION.TOP_RIGHT
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                toast.error(t('send_error'), {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

    const [selectedDate, setSelectedDate] = useState('');

    const handleChangeDate = (event) => {
        setSelectedDate(event.target.value);
    };

    const generateNextFiveDates = () => {
        const dates = [];
        const today = new Date();
        for (let i = 0; i <= 5; i++) {
            const nextDate = new Date();
            nextDate.setDate(today.getDate() + i);
            const formattedDate = `${nextDate.getFullYear()}-${(
                '0' +
                (nextDate.getMonth() + 1)
            ).slice(-2)}-${('0' + nextDate.getDate()).slice(-2)}`;
            dates.push(
                <option key={i} value={formattedDate}>
                    {formattedDate}
                </option>
            );
        }
        return dates;
    };

    return (

        <section className='background-main py-5'>
            <div id='booking' className='container text-black'>
                <Row>
                    <Col xl="4" className='d-none d-xl-flex align-items-center'>
                        <img width="100%" height="100%" src={bg} alt="reservation vtc paris" title="reservation vtc paris" loading='lazy' />
                    </Col>
                    <Col xl="8" className='p-sm-5'>
                        <div className='bg-white p-sm-5 p-3'>
                            <div className='fs-1 fw-bold'>{t('book_your_ride')}</div>
                            <div className='fs-6 mt-1'>{t('booking_text')}</div>
                            <form className="contact-form mt-4" onSubmit={sendEmail}>
                                <Row>
                                    <Col xs="12" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><User2 strokeWidth={1.5} /></span>
                                            <input minLength="6" placeholder={t('full_name')} className='py-4 w-100 border-0 outline-0' style={style} type="text" name="user_name" required />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><Smartphone strokeWidth={1.5} /></span>
                                            <input placeholder={t('phone')} type='tel' className='py-4 w-100 border-0 outline-0' style={style} name="user_phone" required />
                                        </div>
                                    </Col>

                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><Mail strokeWidth={1.5} /></span>
                                            <input placeholder={t('email')} className='py-4 w-100 border-0 outline-0' style={style} type="email" name="user_email" required />
                                        </div>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><LogOut strokeWidth={1.5} /></span>
                                            <input placeholder={t('place_support')} type="text" className='py-4 w-100 border-0 outline-0' style={style} name="user_depart" required />
                                        </div>
                                    </Col>

                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><LogIn strokeWidth={1.5} /></span>
                                            <input placeholder={t('destination')} type="text" className='py-4 w-100 border-0 outline-0' style={style} name="user_destination" required />
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><Clock strokeWidth={1.5} /></span>
                                            <select value={selectedHour} className='py-4 w-100 border-0 outline-0 text-center' style={style} onChange={handleChange} id="user_time" name="user_time" required>
                                                {hours}
                                            </select>
                                        </div>
                                    </Col>

                                    <Col md="6" className='mb-3'>
                                        <div className='input fs-6'>
                                            <span className='p-3'><Calendar strokeWidth={1.5} /></span>
                                            <select id='user_date' className='py-4 w-100 border-0 outline-0 text-center' style={style} value={selectedDate} onChange={handleChangeDate} name="user_date" required>
                                                {generateNextFiveDates()}
                                            </select>
                                        </div>
                                    </Col>
                                </Row>


                                {/* <textarea className='input w-100 p-3' rows="5" style={style} name="message" placeholder='Votre message' required /> */}

                                <div className='mt-3 d-flex aling-items-center'>
                                    <input id="checkinput" name='checkinput' type='checkbox' checked={isChecked} onChange={handleCheckboxChange} required />
                                    <label htmlFor='checkinput' className='ms-2'>{t('read_and_accept')}</label>
                                </div>
                                <button className='main-btn p-3 px-5 mt-3' type="submit" disabled={!isChecked}>{t('send')}</button>
                            </form>
                        </div>
                    </Col>
                    <ToastContainer />
                </Row>
            </div>
        </section>
    );
}

export default Booking;
