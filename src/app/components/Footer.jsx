function Footer() {
    return (
        <div className="pl-[220px] pr-[220px] bg-[#0B1D26] pb-28">
            <hr className="pb-12 " />
            <div className="flex items-start justify-between">
                <div className=" ">
                    <img src="/logo.svg" alt="" />
                    <p className="hover:text-[#FBD784] cursor-pointer text-[18px] font-bold font-sans pt-[24px] pb-[122px]">Get out there & discover your next <br />
                        slope, mountain & destination!</p>
                    <p className="hover:text-[#FBD784] cursor-pointer">Copyright 2023 MNTN, Inc. Terms & Privacy</p>
                </div>
                <div className="flex flex-col gap-5">
                    <h2 className="text-[24px] font-bold text-[#FBD784]">More on The Blog    </h2>
                    <p className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">About MNTN</p>
                    <p className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Contributors & Writers</p>
                    <p className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Write For Us</p>
                    <p className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Contact Us</p>
                    <p className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Privacy Policy</p>
                </div>
                <div  className="flex flex-col gap-5">
                    <h2 className="hover:text-[#FBD784] cursor-pointer text-[24px] font-bold text-[#FBD784]">More on MNTN</h2>
                    <p  className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">The Team </p>
                    <p  className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Jobs</p>
                    <p  className="hover:text-[#FBD784] cursor-pointer text-base font-semibold font-sans">Press</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;