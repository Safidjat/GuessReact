import { Scrollbar } from 'react-scrollbars-custom';

function HomeSlider() {
    return (
        <div className="min-[700px]:max-[770px]:w-[86%] m-auto py-[60px] bg-white flex flex-col gap-[20px] items-center">
            <h1 className="text-[clamp(20px,5vw,32px)] font-[500] text-center">Made for Brighter Days</h1>
            <Scrollbar noScrollY={true} className='pb-[100px]'>
                <div className="w-full pl-[clamp(10px,1.5vw,25px)] flex items-center flex-nowrap gap-[15px] text-nowrap">
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Jeans</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Handbags</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Tops</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Shorts</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Shoes</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Skirts</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Dresses</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Women's Apparel</span>
                    </div>
                    <div className="w-[calc((100%-15px)/2)] min-[768px]:w-[calc((100%-60px)/5)] shrink-0 border border-[#404040] rounded-full aspect-[305/52] grid place-items-center min-[768px]:text-[clamp(22px,5vw,12px)] min-[768px]:max-[1015px]:text-[12px] text-[clamp(12px,5vw,22px)] py-[10px] font-[500] cursor-pointer">
                        <span>Men's Apparel</span>
                    </div>
                </div>
            </Scrollbar>
        </div>
    )
}

export default HomeSlider
