// Hooks
import { Link } from "react-router-dom"

// Icons
import { FaCalendar } from "react-icons/fa"


const slugify = (text) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text

const BeritaCardList = ({Image, Title, Description, Date}) => {
    return (
        <Link className="flex flex-row gap-4" to={`/berita/${slugify(Title)}`}>
            <div className="flex bg-gray-400 overflow-clip shrink-0 w-96 h-58">
                <img src={Image} alt={Title} />
            </div>
            <div className="space-y-2">
                <h3 className="font-semibold text-3xl">{Title}</h3>
                <div className='flex items-center gap-2 flex-row'>
                    <FaCalendar />
                    <p>{Date}</p>
                </div>
                <p className="line-clamp-5 leading-loose">{Description}</p>
            </div>
        </Link>
    )
}

export default BeritaCardList