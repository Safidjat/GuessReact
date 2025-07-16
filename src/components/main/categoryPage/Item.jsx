// Item.jsx
import React from "react";
import { TbHeart } from "react-icons/tb";

function Item({ obj: { img, title, colors, newArrival, sustainable, totalPrice, price } }) {
  return (
    // <div className='bg-white '>
    //     <div className='aspect-[264/356] w-full'><img className='object-cover size-full' src={img[0] ? img[0]:null}/></div>
    //     <div className='w-full text-black text-[12px] py-[10px]'>
    //         <div className='flex items-start justify-between'>
    //             <h2 className='min-h-[54px] font-[500]'>{title}</h2>
    //             <TbHeart color='#808284' size={24} className='cursor-pointer'/>
    //         </div>
    //         <h3 className='text-[#71767f] font-[500] min-h-[15px] mb-[5px]'>{colors>1? `${colors} Colors` :''} </h3>
    //         <div className='flex items-center max-[378px]:flex-col max-[378px]:items-start gap-2 font-[500] mb-[10px]'>
    //             <h3>${totalPrice.toFixed(2)}</h3>
    //             <h3 className='text-[#6e737c] line-through'>${price.toFixed(2)}</h3>
    //             <h3 className='text-[#32577b]'>({Math.round((price-totalPrice)/price*100)}% Off)</h3>
    //         </div>
    //         <div className='flex items-center max-[378px]:flex-col max-[378px]:gap-1 max-[378px]:items-start min-h-[16px] gap-[20px] text-nowrap'>
    //             {newArrival && <h1 className='bg-[#f9f8f8] px-[8px] py-[2px] text-[10px] font-[400] text-[#303030] rounded-full'>New arrival</h1>}
    //             {sustainable && <h1 className='bg-[#f9f8f8] px-[8px] py-[2px] text-[10px] font-[400] text-[#00803c] rounded-full'>Sustainable</h1>}
    //         </div>
    //     </div>
    // </div>

    <div className="bg-white max-w-[300px] mx-auto rounded shadow">
      <img
        src={img[0] || ""}
        alt={title}
        className="w-full h-auto mb-2"
        style={{ aspectRatio: "264 / 356", objectFit: "cover" }}
      />
      <div className="p-2 text-[12px]">
        <div className="flex justify-between items-start mb-2">
          <h2 className="font-medium">{title}</h2>
          <TbHeart color="#808284" size={24} />
        </div>
        <p className="text-[#71767f] mb-2 min-h-[18px]">{colors > 1 ? `${colors} Colors` : ""}</p>
        <div className="flex items-center max-[378px]:flex-col max-[378px]:items-start mb-2 text-[14px]">
          <span className="mr-[5px]">${totalPrice.toFixed(2)}</span>
          <span className="line-through text-[#6e737c] mr-[5px]">${price.toFixed(2)}</span>
          <span className="text-[#32577b]">
            ({Math.round(((price - totalPrice) / price) * 100)}%)
          </span>
        </div>
        <div className="flex items-cnter max-[378px]:flex-col max-[378px]:gap-1 max-[378px]:items-start gap-2 text-[10px] min-h-[16px]">
          {newArrival && <span className="bg-gray-100 rounded-full px-2">New arrival</span>}
          {sustainable && <span className="bg-gray-100 rounded-full px-2 text-green-600">Sustainable</span>}
        </div>
      </div>
    </div>
  );
}

export default Item;
