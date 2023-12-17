import React from 'react';

const ReviewsCard = (props) => {
    return (
        <div className='w-full md:w-1/3 bg-white border-2 border-lightGreen md:border-none p-5 rounded-lg'>
            <div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi exercitationem in fuga totam obcaecati enim vitae rem corrupti soluta perferendis.
                </p>
            </div>
            <div className='flex flex-row justify-center'>
                <img className='rounded-full w-1/4' src={props.img} alt="" />
            </div>
        </div>
    );
};

export default ReviewsCard;