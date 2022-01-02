import React from 'react'
import { useGetDetailsByImdbQuery } from '../../services/movieApi'

const MoviePoster = ({id}: {id:string}) => {
    const { data, isFetching } = useGetDetailsByImdbQuery({type:'get-movies-images-by-imdb' , id})
    return (
        isFetching ? <div>Loading...</div> :
            <div className='w-full'>
                {data.poster ? <img src={data.poster} alt={data.title} className='w-full' /> : <div className="bg-gray-100 w-[300px] h-[400px] flex flex-wrap">
                    <div className="w-full h-full">
                        <div className="flex flex-col h-full card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                            <div className="relative group text-primary-500 pt-[70%]">
                                <div className="absolute top-0 left-0 h-full w-full"><span className="skeleton-box group-hover:scale-110 transition-transform transform-center block h-full"></span></div></div>
                        </div>
                    </div>
                </div>
                }
            </div>
    )
}

export default MoviePoster
