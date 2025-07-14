import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiXMark } from "react-icons/hi2";

function Category() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="w-full min-[700px]:max-[770px]:w-[86%] m-auto">
            <div className="relative w-full">
                <img
                    src="https://img.guess.com/image/upload/f_auto,q_auto,dpr_auto,w_3840,c_limit/v1/NA/Asset/North%20America/E-Commerce/Guess/Bug%20Number/10834/G_Site_Global_HeaderBottom_EndofSeason_10834"
                    className="w-full min-h-[21px] max-[768px]:aspect-[640/100]"
                    alt="Save up to 50% off sale styles."
                />
                <h2 className="absolute w-full left-0 top-[50%] -translate-y-[50%] text-center text-[#546979] text-[clamp(12px,5.00vw,32px)] font-[400]">End of Season Sale</h2>
                <button onClick={() => setModalShow(true)} className="absolute right-[.3%] bottom-[5%] cursor-pointer">
                    <BsPlusLg color='#546979' />
                </button>
            </div>
            <div className="px-[10px]">

            </div>

             <ModalWarning setModalShow={setModalShow} modalShow={modalShow}/>
        </div>
    )
}

function ModalWarning({ setModalShow ,modalShow}) {

    return (
        <Transition show={modalShow} as={Fragment}>
            <div className="fixed z-[9999999] inset-0 grid place-items-center">
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                >
                <div onClick={() => setModalShow(false)} className="fixed inset-0 z-[9999999] bg-[#0000005d] px-[10px] grid place-items-center"></div>
                </Transition.Child>
            
                <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 -translate-y-10" 
                enterTo="opacity-100 translate-y-0" 
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-10"
                        >
                    <div onClick={(event)=>event.stopPropagation()} className="w-full min-[540px]:w-[500px] min-[1015px]:w-[800px] z-[99999999] bg-white p-[24px] flex flex-col border border-[#696969] rounded-2xl">
                        <HiXMark onClick={()=>setModalShow(false)} width={15} height={20} color="black" className="self-end cursor-pointer" />
                        <p className="p-[16px] text-[#212529] font-[500] text-[12px]">
                            <span className="font-bold">END OF SEASON:</span> For a limited time only. Prices in store and online may vary. Prices show discounts. No additional discounts will be applied at checkout. Offer valid online and in participating stores. Offer not valid on new or special collections and collaborations, prior purchases or e-gift card and gift card purchases. Other exclusions may apply. Offer not valid at Marciano, GUESS Factory stores, or at any of their affiliated websites. Cannot be combined with other offers or discounts. GUESS?, Inc. reserves the right to extend, modify or discontinue this offer at any time.
                        </p>
                    </div>
                </Transition.Child>
            </div>
        </Transition>
    )
}

export default Category

