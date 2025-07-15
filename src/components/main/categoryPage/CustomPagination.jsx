import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

function CustomPagination({ count, page, setCurrentPage }) {

  const backButtonClick = () => {((page-1)>=1 || (page-1)<=count) && setCurrentPage(page-1)};

  const nextButtonClick = () => {((page+1)>=1 || (page+1)<=count) && setCurrentPage(page+1)};

  const selectChange = (event) => {setCurrentPage(event.target.value)}

  const pageNumbers =new Array(count).fill('').map((_,i)=>i+1)

  return (
    <div className='flex items-center text-[14px] font-[400]'>
      <button
        onClick={backButtonClick}
        disabled={page === 1}
        className='cursor-pointer'
      >
        <KeyboardArrowLeft />
      </button>

      <select
        value={page}
        onChange={selectChange}
        className='cursor-pointer '
      >
        {
            pageNumbers.map((num,i) => (
            <option key={i} value={num}>
                {num}
            </option>
            ))
        }
      </select>

      <h5 className='px-[3px]'>
        of {count}
      </h5>

      <button
        onClick={nextButtonClick}
        disabled={page >= count}
        className='cursor-pointer'
      >
        <KeyboardArrowRight />
      </button>
    </div>
  );
}

export default CustomPagination;