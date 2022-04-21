import Image from "next/image";
import React, { forwardRef } from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";
const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  //console.log(result);
  return (
    <div
      ref={ref}
      className="p-2 group cursor-pointer transition duration-200 transform sm:hover:scale-105 hover:z-50"
    >
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={
          result.backdrop_path
            ? `${BASE_URL}${result.backdrop_path}`
            : `${BASE_URL}${result.poster_path}`
        }
      />
      <div className="p-2">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2
          className="mt-1 text-2xl text-white transition-all 
        duration-100 easae-in-out group-hover:font-bold"
        >
          {result.title || result.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} •`}{" "}
          {result.release_date || result.fist_air_date}
          {" • "}
          {result.media_type || result.media_type}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
