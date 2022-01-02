import React from 'react'
import { useGetImageByImdbQuery } from '../services/movieApi'

const MoviePoster = ({ id }: any) => {
    const { data, isFetching } = useGetImageByImdbQuery(id)

    isFetching ? <div>Loading...</div> : console.log(data)
    return (
        <div>

        </div>
    )
}

export default MoviePoster
