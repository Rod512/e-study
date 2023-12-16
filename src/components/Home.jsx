import React from 'react';
import { Link } from 'react-scroll';
import Button from '../layout/Button';
import img from '../assets/hero.svg'

const Home = () => {
    return (
        <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
            <div className='md:w-2/4 text-justify'>
                <h2 className='text-5xl font-semibold leading-tight'>Knowledge with <span className='text-brightGreen'>eStudy</span></h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, dolores. Veritatis ullam nostrum eos inventore asperiores. Delectus deleniti quo vel aperiam molestias vero blanditiis repudiandae ea. Dolorum saepe iusto fuga expedita facere ullam aliquam quidem, amet accusamus quis adipisci velit et? Quibusdam earum perspiciatis dolores voluptatibus minima quis quidem aliquam!
                </p>
                <Link to='about' spy={true} smooth={true} duration={500}>
                   <Button title = 'About Us'/>
                </Link>
            </div>
            <div className='w-full md:w-2/4'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;