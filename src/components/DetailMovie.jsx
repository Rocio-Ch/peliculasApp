import { ImPlay2 } from "react-icons/im"
import { TbArrowBack } from 'react-icons/tb'
import { Link } from "react-router-dom"

export default function DetailMoviePopular() {

    return (
        <section>
            <div className="h-screen flex flex-col items-center flex-grow pt-[110px] bg-[url('https://wallpapers.com/images/hd/comic-book-character-deadpool-nvpdnhb9eovk99qs.jpg')] bg-cover bg-top bg-no-repeat blur-sm opacity-50"></div>
            <div className="w-[90%] left-[5%] top-[-4%] absolute flex flex-col items-center justify-center text-white min-[600px]:top-[0%] lg:flex-row lg:w-full lg:top-[15%] lg:left-[0%] lg:top-[15%]">
                <div className="w-full h-[100%] md:w-[70%] lg:max-w-[500px] lg:mr-2.5 lg:px-5">
                    <div className="h-[350px] mt-[102px] bg-no-repeat bg-center bg-cover bg-[url('https://wallpapers.com/images/hd/deadpool-digital-movie-cover-s5l2oyuqd8nngufh.jpg')] lg:h-[600px] lg:mt-0 shadow-[0px_0px_30px_1px_rgba(64,64,69,43%)]" />
                </div>
                <div className="w-full md:w-[70%] lg:max-w-[700px] lg:h-[600px] lg:flex lg:flex-col lg:justify-between">
                    <div className="bg-[#030317b0] p-2.5 my-2.5 rounded-lg lg:mt-0 lg:p-[20px] lg:mr-5">
                        <div className="flex items-center justify-between mt-2 mb-8 px-1">
                            <h3 className="font-bold lg:text-2xl">Deadpool <span className="font-normal">- 2023</span> </h3>
                            <Link to="" className="flex items-center hover:text-blue-500">
                                <ImPlay2 size={20} />
                                <span className="ml-2 sm:text-base">Ver Trailer</span>
                            </Link>
                        </div>
                        <p className="text-xs px-1 sm:text-base">Basado en el anti-héroe menos convencional de la Marvel, Deadpool narra el origen de un ex-operativo de la fuerzas especiales llamado Wade Wilson, reconvertido a mercenario, y que tras ser sometido a un cruel experimento adquiere poderes de curación rápida, adoptando Wade entonces el alter ego de Deadpool. Armado con sus nuevas habilidades y un oscuro y retorcido sentido del humor, Deadpool intentará dar caza al hombre que casi destruye su vida.</p>
                        <div className="flex my-4 px-1">
                            <p className="text-xs font-bold px-2.5 py-1 border rounded-full mr-2">Acción</p>
                            <p className="text-xs font-bold px-2.5 py-1 border rounded-full mr-2">Comedia</p>
                            <p className="text-xs font-bold px-2.5 py-1 border rounded-full mr-2">Aventura</p>
                        </div>
                        <div className="flex items-center">
                            <Link to="">
                                <button className="group relative h-8 w-20 overflow-hidden rounded-lg bg-white text-lg shadow">
                                    <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                                    <div className="relative text-[#030317] group-hover:text-[#030317] flex items-center justify-center text-2xl">
                                        <TbArrowBack />
                                    </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}