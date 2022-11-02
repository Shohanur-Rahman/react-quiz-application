import { useEffect, useState } from "react";
import { get, getDatabase, limitToLast, orderByKey, query, ref, startAt } from "firebase/database";

export default function useVideoList(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function fetchVideos() {
      // Database related work
      const db = getDatabase();
      const videosRef = ref(db, "videos");
      const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToLast(8));

      try {
        setError(false);
        setLoading(true);
        const resultSnapshot = await get(videoQuery);
        setLoading(false);

        if (resultSnapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...Object.values(resultSnapshot.val())];
          });
        } else {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchVideos();
  }, [page]);

  return {
    loading,
    error,
    videos,
    hasMore,
  };
}
