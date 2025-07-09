import { useEffect, useRef, useState } from "react";
import Scrollbar from "react-scrollbars-custom"
import { FaPause } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";

function HomeDefine() {
    const [play,setPlay]=useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const videoAttr = videoRef.current;
        if (play) {
            videoAttr.play();
        } else {
            videoAttr.pause();
        }
        return ()=>{
            videoAttr.pause();
        }
    }, [play]);

    return (
        <div className="min-[700px]:max-[770px]:w-[86%] m-auto py-[70px]">
            <h1 className="text-[clamp(12px,5vw,37px)] font-[500] text-center pb-[40px]">Define Your Summer Look</h1>
            <div className="pb-[60px] flex flex-wrap items-center overflow-x-hidden">
                <section className="w-[calc(100%/2)] min-[770px]:w-[calc(100%/4)] shrink-0 flex flex-col items-center gap-[5px]">
                    <div className="aspect-[962/1190]"><img src="/assets/img/1.avif" className="w-full h-full object-cover"/></div>
                    <h1 className="text-[clamp(12px,2vw,18px)] text-center pb-[20px] text-black hover:underline cursor-pointer">Matching Sets</h1>
                </section>
                <section className="w-[calc(100%/2)] min-[770px]:w-[calc(100%/4)] shrink-0 flex flex-col items-center gap-[5px]">
                    <div className="aspect-[962/1190]"><img src="/assets/img/2.avif" className="w-full h-full object-cover"/></div>
                    <h1 className="text-[clamp(12px,2vw,18px)] text-center pb-[20px] text-black hover:underline cursor-pointer">What We Love</h1>
                </section>
                <section className="w-[calc(100%/2)] min-[770px]:w-[calc(100%/4)] shrink-0 flex flex-col items-center gap-[5px]">
                    <div className="aspect-[962/1190]"><img src="/assets/img/3.avif" className="w-full h-full object-cover"/></div>
                    <h1 className="text-[clamp(12px,2vw,18px)] text-center pb-[20px] text-black hover:underline cursor-pointer">Essentials</h1>
                </section>
                <section className="w-[calc(100%/2)] min-[770px]:w-[calc(100%/4)] shrink-0 flex flex-col items-center gap-[5px]">
                    <div className="aspect-[962/1190]"><img src="/assets/img/4.avif" className="w-full h-full object-cover"/></div>
                    <h1 className="text-[clamp(12px,2vw,18px)] text-center pb-[20px] text-black hover:underline cursor-pointer">Marciano</h1>
                </section>
            </div>
            <Scrollbar noScrollY={true} className='max-[770px]:pb-[88%] min-[770px]:pb-[50%]'>
                <div className="flex items-center">
                    <section className="relative flex flex-col items-center gap-[5px] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0">
                        <div className="aspect-[1280/1536]">
                            <video
                                ref={videoRef}
                                className="breadcrumbs--secondary img-fluid lazyloaded size-full"
                                data-role="video"
                                width={640}
                                height={768}
                                data-autoplay=""
                                preload="auto"
                                autoPlay  loop  muted  playsInline
                                data-poster="https://img.guess.com/image/upload/q_auto:low,f_auto,dpr_auto,w_640,h_768,c_fill/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10774/G_Site_Home_ContentCenter_July_10774_09B"
                                poster="https://img.guess.com/image/upload/q_auto:low,f_auto,dpr_auto,w_640,h_768,c_fill/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10774/G_Site_Home_ContentCenter_July_10774_09B"
                                data-expand={-10}
                                >
                                <source
                                    src="https://img.guess.com/video/upload/q_auto,w_640,h_768,c_fill/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10774/G_Site_Home_ContentCenter_July_10774_09A.mp4"
                                    type="video/mp4"
                                />
                                </video>
                        </div>
                        <h1 className="text-[clamp(12px,2vw,18px)] text-center text-black hover:underline cursor-pointer">Guess Jeans</h1>
                        <button className="bg-transparent border-0 absolute bottom-[12%] right-[12%]">
                            {
                                play ? <FaPause onClick={()=>{setPlay(false)}} color="#e9e6e1" cursor={'pointer'}/> 
                                        : <FaPlay onClick={()=>setPlay(true)} color="#e9e6e1" cursor={'pointer'}/>
                            }
                        </button>
                    </section>
                    <section className="flex flex-col items-center gap-[5px] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0">
                        <div className="aspect-[1280/1536]"><img src="/assets/img/5.avif" className="h-full w-full object-cover"/></div>
                        <h1 className="text-[clamp(12px,2vw,18px)] text-center text-black hover:underline cursor-pointer">Guess Jeans</h1>
                    </section>
                    <section className="flex flex-col items-center gap-[5px] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0">
                        <div className="aspect-[1280/1536]"><img src="/assets/img/6.avif" className="h-full w-full object-cover"/></div>
                        <h1 className="text-[clamp(12px,2vw,18px)] text-center text-black hover:underline cursor-pointer">Guess Jeans</h1>
                    </section>
                </div>
            </Scrollbar>
        </div>
    )
}

export default HomeDefine
