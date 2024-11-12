import Image from "next/image"
export default function Navbar(){
    return(
        <div>
            <div className=" w-full fixed h-[92px] bg-[#043873;] font-[inter] flex justify-between items-center py-4 px-[100px]">
                <div className="w-[191px] h-[34px] flex justify-between items-center">
                    <div className="w-[37px] h-[29px]">
                        <img src="/logo icon.png" alt="logo"></img>
                        </div>
                    <div className="w-[144px] h-[34px]">
                        <h1 className="font-[inter] font-bold text-[28px] text-white">Whitespace</h1>
                        </div>
                </div>
                <div className="w-[637.5px] h-[60px] flex justify-between items-center">
                        <ul className="flex text-white font-medium text-lg w-[549px] h-[32px] gap-8" >
                            <li className="hover:border-b-4 hover:border-[#FFE492] cursor-pointer">Products</li>
                            <li className="hover:border-b-4 hover:border-[#FFE492] cursor-pointer">Solutions</li>
                            <li className="hover:border-b-4 hover:border-[#FFE492] cursor-pointer">Resources</li>
                            <li className="hover:border-b-4 hover:border-[#FFE492] cursor-pointer">Pricing</li>
                        </ul>
                        <button className="w-[126px] h-[60px] rounded-lg bg-[#FFE492] py-4 px-10 text-[#043873] cursor-pointer hover:bg-[#4F9CF9] hover:text-white">Login</button>
                </div>
            </div>
        </div>
    )
}