import Image from 'next/image'
import 'remixicon/fonts/remixicon.css'
export default function AllPages() {
    return (
        <div>
            <div id='page1' className="w-full h-screen bg-[#043873] flex  items-center pt-56 py-[120px] px-[100px] top-[92px] left-[1px]">
                <div className="w-[656px] h-[361px]flex flex-col gap-[60px]">
                    <h2 className="w-[656px] h-[154px] font-bold text-[64px]  text-white leading-[77.45px] tracking-tighter-[-2%]">Get More Done with whitepace</h2>
                    <p className="w-[656px] h-[60px] font-normal text-lg text-white leading-[30px] ">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                    <div className='w-[656px] h-[123px] flex items-end '>
                        <button className=' hover:bg-[#FFE492] hover:text-[#043873] flex gap-[10px] bg-[#4F9CF9] text-white p-5 rounded-lg '>Try Whitespace Free<i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div className='w-[824px] h-[379px] bg-[#C4DEFD]'></div>
            </div>
            <div id='page2' className='w-full h-[1188px] py-[100px] flex items-center flex-col px-[100px] top-[921px] left-[1px]'>
                <div className='w-full flex items-center h-[547px] gap-[60px]'>
                    <div className='w-[672px] flex flex-col items-center h-[411px] gap-[60px]'>
                        <div className='w-[672px] h-[288px] gap-6'>
                            <h1 className='text-[72px] font-bold leading-[87.14px] tracking-tighter-[-2%]'>Project Management</h1>
                            <p className='text-lg font-normal leading-[30px] tracking-tighter-[-2%]'>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                        </div>
                        <div className='w-[672px] h-[10px] flex items-end'>
                            <button className=' hover:bg-[#FFE492] hover:text-[#043873] flex gap-[10px] text-white p-5 rounded-md py-5 px-10 bg-[#4F9CF9]'>Get Started <i className="ri-arrow-right-line"></i></button>
                        </div>

                    </div>
                    <div className='w-[678px] h-[377px] bg-[#C4DEFD]'></div>
                </div>
                <div className='w-full flex items-center flex-row-reverse py-[100px]  h-[661px] gap-[110px]'>
                    <div className='w-[670px] flex flex-col  h-[254px] gap-[60px]'>
                        <div className='w-[500px] h-[228px] gap-6'>
                            <h1 className='text-[72px] font-bold leading-[87.14px] tracking-tighter-[-2%]'>Work together</h1>
                            <p className='text-lg font-normal leading-[30px] tracking-tighter-[-2%]'>With whitepace, share your notes with your colleagues and collaborate on them.You can also publish a note to the internet and share the URL with others.</p>
                        </div>
                        <div className='w-[500px] h-[10px]flex items-end'>
                            <button className=' hover:bg-[#FFE492] hover:text-[#043873]  flex gap-[10px] text-white p-5 rounded-md py-5 px-10 bg-[#4F9CF9]'>Try it now<i className="ri-arrow-right-line"></i></button>
                        </div>

                    </div>
                    <div className="w-[510px] h-[561px]">
                        <img src="\Work Together Image.png" alt="hero-image" />
                    </div>
                </div>


            </div>
            <div id='page3' className="w-full h-[759px] bg-[#043873] flex gap-[98px] items-center py-[100px] px-[100px] top-[2509px] left-[1px]">
                <div className="w-[620px] h-[294px] flex flex-col gap-6">
                    <h2 className="w-[610px] h-[107px] font-bold text-[72px]  text-white leading-[77.45px] tracking-tighter-[-2%]">Use as Extension</h2>
                    <p className="w-[590px] h-[60px] font-normal text-lg text-white leading-[30px] ">Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.
                    </p>
                    <div className='w-[590px] h-[123px] flex items-end '>
                        <button className=' hover:bg-[#FFE492] hover:text-[#043873] flex gap-[10px] bg-[#4F9CF9] text-white py-5 px-10 rounded-lg '>Let's Go<i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div className='w-[686px] h-[379px] bg-[#C4DEFD]'></div>
            </div>
            <div id='page4' className="w-full h-[812.09px] flex flex-row-reverse gap-[98px] items-center py-[100px] px-[120px] top-[3268px] left-[1px]">
                <div className="w-[569px] h-[311px] flex flex-col gap-[30px]">
                    <h2 className="w-[569px] h-[194px] font-bold text-[72px]   leading-[77.45px] tracking-tighter-[-2%]">Customise it
                        to your needs</h2>
                    <p className="w-[569px] h-[90px] font-normal text-lg leading-[30px] ">Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    <div className='w-[669px] h-[123px] flex items-end '>
                        <button className=' hover:bg-[#FFE492] hover:text-[#043873] flex gap-[10px] bg-[#4F9CF9] text-white py-5 px-10 rounded-lg '>Let's Go<i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
                <div className='w-[586px] h-[400px] bg-[#C4DEFD]'></div>
            </div>
            <div id='page5' className='w-full h-[454px] py-[100px] px-[100px] text-white text-center bg-[#043873] top-[4080px] left-[1px]'>
                <div className='w-full h-[254px] gap-[20px] flex flex-col  text-center'>
                    <h1 className='text-[72px] font-bold leading-[77.45px] tracking-tighter-[-2%]'>Your work, everywhere you are</h1>
                    <p className='font-normal text-lg leading-[30px]'>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    <div className='w-full h-[123px] pt-8 flex items-center justify-center'>
                        <button className=' hover:bg-[#FFE492] hover:text-[#043873] flex gap-[10px] bg-[#4F9CF9] text-white py-5 px-10 rounded-lg '>Try Taskey<i className="ri-arrow-right-line"></i></button>
                    </div>
                </div>
            </div>
            <div id='page6' className='w-full h-[338px] px-[100px] flex flex-col py-[70px] gap-[90px]'>
                <div className='h-[87px] text-center'>
                    <h1 className='text-[72px] font-bold leading-[77.45px] tracking-tighter-[-2%]'>Our sponsors</h1>
                </div>
                <div className='h-[50px] w-full flex justify-between '>
                    <img src="/Apple.png" alt="Apple logo" />
                    <img src="/microsoft 1.png" alt="Microsoft logo" />
                    <img src="/Slack_Technologies_Logo 1.png" alt="Slack logo" />
                    <img src="/Group 246.png" alt="Google logo" />
                </div>
            </div>
            <div id='footer' className='w-full text-white h-[361px] bg-[#043873] px-[140px] pt-[100px] pb-8 gap-[200px]'>
                <div className='w-full h-[190px] flex  gap-[60px]'>
                    <div className='w-1/4 h-full flex flex-col gap-[20px]'>
                        <div className='flex items-center gap-4'>
                            <img src="/logo icon.png" alt="logo" className='w-[37px] h-[29px]' />
                            <h3 className='text-[28px] font-bold'>whitepace</h3>
                        </div>
                        <p className='font-normal text-lg leading-[26px]'>whitepace was created for the new ways we live and work. We make a better workspace around the world.</p>
                    </div>
                    <div className='w-1/4 h-full flex flex-col gap-4'>
                    <p className='font-normal text-lg leading-[30px]'>Product</p>
                    <p className='font-normal text-base leading-[20px]'>Overview</p>
                    <p className='font-normal text-base leading-[20px]'>Pricing</p>
                    <p className='font-normal text-base leading-[20px]'>Customer stories</p>
                    </div>
                    <div className='w-1/4 h-full flex flex-col gap-4'>
                    <p className='font-normal text-lg leading-[30px]'>Resources</p>
                    <p className='font-normal text-base leading-[20px]'>Blog</p>
                    <p className='font-normal text-base leading-[20px]'>Guides & Tutorials</p>
                    <p className='font-normal text-base leading-[20px]'>Help center</p>
                    </div>
                    <div className='w-1/4 h-full flex flex-col gap-4'>
                    <p className='font-normal text-lg leading-[30px]'>Company</p>
                    <p className='font-normal text-base leading-[20px]'>About Us</p>
                    <p className='font-normal text-base leading-[20px]'>Careers</p>
                    <p className='font-normal text-base leading-[20px]'>Media Kit</p>
                    </div>
                </div>
            </div>
        </div>
    )
}