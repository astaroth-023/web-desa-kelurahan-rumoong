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
            <div className="flex bg-gray-400 overflow-clip shrink-0 aspect-video w-34 xl:w-96">
                <img src={Image} alt={Title} />
            </div>
            <div className="space-y-1">
                <h3 className="font-semibold text-base xl:text-3xl truncate">{Title}</h3>
                <div className='flex items-center gap-2 flex-row text-xs xl:text-base'>
                    <FaCalendar />
                    <p>{Date}</p>
                </div>
                <p className="line-clamp-2 xl:line-clamp-5 xl:text-base text-xs xl:leading-loose">{Description}</p>
            </div>
        </Link>
    )
}

export default BeritaCardList