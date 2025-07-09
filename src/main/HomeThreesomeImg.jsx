import Scrollbar from "react-scrollbars-custom";

export default function HomeThreesomeImg() {
    return (
        <Scrollbar noScrollY={true} className='min-[700px]:max-[770px]:w-[86%] m-auto max-[770px]:pb-[88%] min-[770px]:pb-[30%]'>
            <div className="flex items-center">
                <div className="aspect-[1280/1536] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0"><img src="/assets/img/ikiFistikArxa.avif" className="h-full w-full object-cover"/></div>
                <div className="aspect-[1280/1536] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0"><img src="/assets/img/cantalar.avif" className="h-full w-full object-cover"/></div>
                <div className="aspect-[1280/1536] max-[770px]:w-[calc(100%/1.5)] min-[770px]:w-[calc(100%/3)] shrink-0"><img src="/assets/img/ikiFistikQabaq.avif" className="h-full w-full object-cover"/></div>
            </div>
        </Scrollbar>
    )
}
