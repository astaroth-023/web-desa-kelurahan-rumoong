import { FaCalendar } from 'react-icons/fa';
const BeritaCard = ({ Image, Title, Date}) => {
    return (
        <>
            <div className='shadow-md bg-gray-400 relative h-96 w-76'>
                <img className='w-full h-full object-fit brightness-30' src={Image} alt="" />
                <div className='absolute z-10 text-white -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 w-full px-4'>
                <p className='font-semibold text-lg line-clamp-2'>{Title}</p>
                <div className='flex flex-row items-center gap-2 mt-2'>
                    <FaCalendar/>
                    <p>{Date}</p>
                </div>
                </div>
            </div>
        </>
    )
}

export default BeritaCard