// import React from 'react';
// import deepnetsoft from '../assets/deepnetsoft.png';
// import socialmedia from '../assets/socialmedia.png';
// import call from '../assets/call.png';
// import mail from '../assets/mail.png';
// import location from '../assets/location.png';

// const Footer = () => {
//     return (
//         <>
//             <div className="bg-black h-[300px] text-white flex items-center justify-between px-10">
//                 {/* Left Section */}
//                 <div className="flex flex-col items-center w-[373px] rounded-md border border-white p-4">
//                     <p className="text-blue-400 font-semibold text-lg">CONNECT WITH US</p>
//                     <div className="flex items-center mt-2">
//                         <span className="text-yellow-500">
//                             <img src={call} alt="" />
//                         </span>
//                         <span className="ml-2 text-[#857878]">+91 9567843340</span>
//                     </div>
//                     <div className="flex items-center mt-2">
//                         <span className="text-yellow-500">
//                             <img src={mail} alt="" />
//                         </span>
//                         <span className="ml-2 text-[#857878]">info@deepnetsoft.com</span>
//                     </div>
//                 </div>

//                 {/* Center Section */}
//                 <div className="flex flex-col relative items-center w-[371px] h-[134px] border rounded-md border-white p-4">
//                     <div className="bg-blue-500 absolute top-[-45px] w-[86px] h-[76px] flex items-center justify-center rounded-md">
//                         <img src={deepnetsoft} alt="Logo" />
//                     </div>
//                     <div>
//                         <p className="mt-2 text-[35px] font-normal leading-[51.87px] tracking-[0.03em] text-left decoration-skip-ink-none">
//                             <span style={{ fontFamily: 'Oswald' }} className="text-[35px] text-[#0796EF]">
//                                 DEEP
//                             </span>
//                             <span style={{ fontFamily: 'Oswald' }} className="text-[35px] m-2 text-[#FFFFFF]">
//                                 NET
//                             </span>
//                             <span style={{ fontFamily: 'Oswald' }} className="text-[35px] text-[#857878]">
//                                 SOFT
//                             </span>
//                         </p>
//                         <div className="space-x-4 mt-2 text-blue-400">
//                             <img src={socialmedia} alt="Social Media" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div style={{ fontFamily: 'oswald' }} className="flex flex-col items-center w-[373px] rounded-md border border-white p-4">
//                     <p className="text-blue-400 font-semibold text-lg mb-5">FIND US</p>
//                     <p className="text-center mt-2 flex gap-4 text-[#857878]">
//                         <div><img src={location} alt="" /></div>
//                         First Floor, Geo Infopark, <br /> Infopark EXPY, Kakkanad
//                     </p>
//                 </div>
//             </div>

//             {/* Footer Section */}
//             <div className='flex justify-between h-[45px] bg-[#D9D9D9] opacity-100'>
//                 <div style={{
//                     fontFamily:'Lato'
//                 }} className='text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-left'>
//                     © 2024 Deepnetsoft Solutions. All rights reserved.
//                 </div>
//                 <div className='flex space-x-6'>
//                     <div style={{
//                     fontFamily:'Lato'
//                 }}
//                     className='text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-left opacity-100'>
//                         Terms & Conditions
//                     </div>
//                     <div
//                     style={{
//                         fontFamily:'Lato'
//                     }}
//                     className='text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-left opacity-100'>
//                         Privacy Policy
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Footer;

import deepnetsoft from '../assets/deepnetsoft.png';
import socialmedia from '../assets/socialmedia.png';
import call from '../assets/call.png';
import mail from '../assets/mail.png';
import location from '../assets/location.png';

const Footer = () => {
    return (
        <>
            <div className="bg-black min-h-[300px] text-white flex flex-col md:flex-row items-center justify-between p-4 md:px-10 gap-6 md:gap-0">
                {/* Left Section */}
                <div className="flex flex-col items-center w-full md:w-[373px] rounded-md border border-white p-4">
                    <p className="text-blue-400 font-semibold text-lg">CONNECT WITH US</p>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">
                            <img src={call} alt="" className="w-6 md:w-auto" />
                        </span>
                        <span className="ml-2 text-[#857878] text-sm md:text-base">+91 9567843340</span>
                    </div>
                    <div className="flex items-center mt-2">
                        <span className="text-yellow-500">
                            <img src={mail} alt="" className="w-6 md:w-auto" />
                        </span>
                        <span className="ml-2 text-[#857878] text-sm md:text-base">info@deepnetsoft.com</span>
                    </div>
                </div>

                {/* Center Section */}
                <div className="flex flex-col relative items-center w-full md:w-[371px] h-[134px] border rounded-md border-white p-4 mt-8 md:mt-0">
                    <div className="bg-blue-500 absolute top-[-45px] w-[86px] h-[76px] flex items-center justify-center rounded-md">
                        <img src={deepnetsoft} alt="Logo" className="w-16 md:w-auto" />
                    </div>
                    <div>
                        <p className="mt-2 text-2xl md:text-[35px] font-normal leading-tight md:leading-[51.87px] tracking-[0.03em] text-center md:text-left">
                            <span style={{ fontFamily: 'Oswald' }} className="text-[#0796EF]">
                                DEEP
                            </span>
                            <span style={{ fontFamily: 'Oswald' }} className="m-2 text-[#FFFFFF]">
                                NET
                            </span>
                            <span style={{ fontFamily: 'Oswald' }} className="text-[#857878]">
                                SOFT
                            </span>
                        </p>
                        <div className="flex justify-center space-x-4 mt-2 text-blue-400">
                            <img src={socialmedia} alt="Social Media" className="w-32 md:w-auto" />
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div style={{ fontFamily: 'oswald' }} className="flex flex-col items-center w-full md:w-[373px] rounded-md border border-white p-4">
                    <p className="text-blue-400 font-semibold text-lg mb-5">FIND US</p>
                    <p className="text-center mt-2 flex gap-4 text-[#857878] text-sm md:text-base">
                        <div><img src={location} alt="" className="w-6 md:w-auto" /></div>
                        First Floor, Geo Infopark, <br /> Infopark EXPY, Kakkanad
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className='flex flex-col md:flex-row justify-between p-4 md:h-[45px] bg-[#D9D9D9] opacity-100'>
                <div style={{
                    fontFamily:'Lato'
                }} className='text-[12px] md:text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-center md:text-left mb-2 md:mb-0'>
                    © 2024 Deepnetsoft Solutions. All rights reserved.
                </div>
                <div className='flex justify-center md:justify-end space-x-4 md:space-x-6'>
                    <div style={{
                        fontFamily:'Lato'
                    }}
                    className='text-[12px] md:text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-center md:text-left opacity-100'>
                        Terms & Conditions
                    </div>
                    <div
                    style={{
                        fontFamily:'Lato'
                    }}
                    className='text-[12px] md:text-[14px] font-semibold leading-[16.8px] tracking-[0.03em] text-center md:text-left opacity-100'>
                        Privacy Policy
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;