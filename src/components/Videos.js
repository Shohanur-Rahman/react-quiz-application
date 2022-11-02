import { useState } from "react";
import { Link } from "react-router-dom";
import useVideoList from "../hooks/useVideosList";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Videos() {
  const [page, setPage] = useState(1);
  const { loading, error, videos, hasMore } = useVideoList(page);
  
  return (
    <>
      {videos.length > 0 && (
        <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() => setPage(page+8)}>
          {videos.map((video, index) => (
            <Link
              to="/quiz"
              key={`video_${index}`}
              id={`video_${video.youtubeID}`}
            >
              <Video title={video.title} id={video.youtubeID} noq={video.noq} />
            </Link>
          ))}
        </InfiniteScroll>
      )}
      <div className={classes.videos}>
        {!loading && videos.length === 0 && (
          <div className="no-data">No data found!</div>
        )}
        {error && <div className="error bg-danger">There was an error!</div>}
      </div>
    </>
  );
}
