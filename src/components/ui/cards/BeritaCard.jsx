// Icons
import { FaCalendar } from 'react-icons/fa';

// Hooks
import { Link } from 'react-router-dom';

const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

const BeritaCard = ({ Image, Title, Date}) => {
    return (
        <>
            <Link to={`/berita/${slugify(Title)}`} className='shadow-md bg-gray-400 relative h-96 w-76 group overflow-clip'>
                <img className='w-full h-full object-fit brightness-30 transition-all duration-300 group-hover:' src={Image} alt="" />
                <div className='absolute z-10 text-white -translate-x-1/2 -translate-y-1/2 bottom-0 left-1/2 w-full px-4'>
                <p className='font-semibold text-lg line-clamp-2'>{Title}</p>
                <div className='flex flex-row items-center gap-2 mt-2'>
                    <FaCalendar/>
                    <p>{Date}</p>
                </div>
                </div>
            </Link>
        </>
    )
}

export default BeritaCard