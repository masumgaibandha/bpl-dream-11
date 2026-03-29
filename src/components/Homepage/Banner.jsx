import React from 'react';
import bgBannerImg from "../../assets/bg-shadow.png"
import bannerImg from "../../assets/banner-main.png"


const Banner = () => {
    return (
        <div className='w-11/12 mx-auto pt-6 '>
            <div className=' min-h-[60vh] py-10 bg-no-repeat bg-cover  bg-center rounded-2xl bg-[#131313]' style={{ backgroundImage: `url(${bgBannerImg})` }}>
            <div className=''>
                <img src={bannerImg} alt="" className='mx-auto pt-10' />
            <div className='text-center text-white space-y-3'>
                <h2 className='pt-10 text-3xl'>Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p>Beyond Boundaries Beyond Limits</p>
                <button className='btn bg-[#E7FE29]'>Claim Free Credit</button>
            </div>
            </div>

            </div>
        </div>
    );
};

export default Banner;