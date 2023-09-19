import { RiCloseLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

export default function Trailer() {
    return (
        <div className='video-responsive bg-[#030317] pt-2.5 flex flex-col justify-center mt-[100px] xl:pt-[30px]'>
            <Link to='' >
                <button className='flex justify-end pr-5 absolute right-0 text-xl lg:text-[30px] text-white'>
                    <RiCloseLine />
                </button>
            </Link>
            <iframe frameBorder="0" allowFullScreen="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" title="Deadpool" src="https://www.youtube.com/embed/Xithigfg7dA?si=8ds9Jw8SDywsNv9y" id="widget2" ></iframe>
        </div>
    )
}
