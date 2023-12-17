import React from 'react';
import Heading from '../layout/Heading';
import Button from '../layout/Button';
import img from '../assets/contact.svg'

const Contact = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10'>
            <Heading title1="Contact" title2="Us"/>
            <div className='flex flex-col md:flex-row jusstify-between items-center w-full'>
                <form className='w-full md:w-2/5 space-y-5 pt-20'>
                    <div className='flex flex-col'>
                        <label htmlFor='userName'>Your Name</label>
                        <input type="text"
                        className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)] transition-all'
                        name='userName' id='userName'
                        placeholder='enter your name' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='userEmail'>Your Email</label>
                        <input type="email"
                        className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)] transition-all'
                        name='email' id='email'
                        placeholder='enter your email' />
                    </div>

                    <div className='flex flex-col'>
                        <label htmlFor='phoneNumber'>Your Number</label>
                        <input type="email"
                        className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)] transition-all'
                        name='number' id='number'
                        placeholder='enter your number' />
                    </div>

                    <div className='flex flex-row justify-center'>
                        <Button title="Send Message"/>
                    </div>
                </form>

                <div className='w-full md:w-2/4'>
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Contact;