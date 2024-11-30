import { FaArrowRight } from "react-icons/fa";

function Section3() {

    return (
        <div className="bg-[#0B1D26] pl-[229px] pr-[229px]">
            <img className="noluch" src="/noluch.svg" alt="" />
            <div className="relative flex pb-44 items-center justify-between ">
                <div className="pl-[140px]" >
                    <div className="flex items-center gap-7">
                        <img src="/chzq.svg" alt="" />
                        <img src="/wher.png" alt="" />
                    </div>
                    <h2 className="text-[64px] ">Understand Your <br /> Map & Timing</h2>
                    <p className="hover:text-[#FBD784] cursor-pointer text-[18px] font-semibold"> The nice thing about beginning hiking is that you don’t really need any <br /> special gear, you can probably get away with things you already have. <br />
                        Let’s start with clothing. A typical mistake hiking beginners make is wearing <br /> jeans and regular clothes, which will get  heavy and chafe wif they get <br /> sweaty or wet.</p>
                    <p className="flex items-center gap-6 text-[#FBD784] text-[18px] pt-[27px] font-semibold cursor-pointer ">read more  <FaArrowRight /></p>
                </div>
                <img className="shadow-2xl shadow-[#222]" src="/odam.png" alt="" />

            </div>
        </div>
    )

}

export default Section3;