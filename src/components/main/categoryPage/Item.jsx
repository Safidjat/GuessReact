import { motion } from 'framer-motion';
import { TbHeart } from "react-icons/tb";

function Item({obj:{img,title,colors,newArrival,sustainable,totalPrice,price}}) {
    return (
        <motion.div layout className='bg-white'>
            <div className='aspect-[264/356] w-full'><img className='object-cover size-full' src={img[0] ? img[0]:null}/></div>
            <div className='w-full text-black text-[12px] py-[10px]'>
                <div className='flex items-start justify-between'>
                    <h2 className='min-h-[54px] font-[500]'>{title}</h2>
                    <TbHeart color='#808284' size={24} className='cursor-pointer'/>
                </div>
                <h3 className='text-[#71767f] font-[500] min-h-[15px] mb-[5px]'>{colors>1? `${colors} Colors` :''} </h3>
                <div className='flex items-center max-[378px]:flex-col max-[378px]:items-start gap-2 font-[500] mb-[10px]'>
                    <h3>${totalPrice.toFixed(2)}</h3>
                    <h3 className='text-[#6e737c] line-through'>${price.toFixed(2)}</h3>
                    <h3 className='text-[#32577b]'>({Math.round((price-totalPrice)/price*100)}% Off)</h3>
                </div>
                <div className='flex items-center max-[378px]:flex-col max-[378px]:gap-1 max-[378px]:items-start min-h-[16px] gap-[20px] text-nowrap'>
                    {newArrival && <h1 className='bg-[#f9f8f8] px-[8px] py-[2px] text-[10px] font-[400] text-[#303030] rounded-full'>New arrival</h1>}
                    {sustainable && <h1 className='bg-[#f9f8f8] px-[8px] py-[2px] text-[10px] font-[400] text-[#00803c] rounded-full'>Sustainable</h1>}
                </div>
            </div>
        </motion.div>
    )
}

export default Item
