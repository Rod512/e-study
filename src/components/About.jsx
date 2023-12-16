import React from 'react';
import img from '../assets/about.svg'
import { Link } from 'react-scroll';
import Button from '../layout/Button';
import Heading from '../layout/Heading';

const About = () => {
    return (
        <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-10'>
            <div className='w-full md:w-2/4'>
                <img src={img} alt="" />
            </div>

            <div className='w-full md:2/4 text-justify space-y-2'>
            <Heading title1="About" title2="Us"/>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam vitae, iure quasi sapiente voluptatibus assumenda maxime fuga sunt sit provident, harum optio rerum commodi delectus inventore nam. Saepe nam quidem, fugit voluptate esse nobis quae excepturi mollitia unde ea voluptates soluta expedita? Amet pariatur deleniti quod illum asperiores totam est.
                </p>
                <Link to='contact'>
                    <Button title='Contact Us'/>
                </Link>
            </div> 
        </div>
    );
};

export default About;