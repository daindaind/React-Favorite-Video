import { useRef } from "react";
import dummyMovies from "../../../data/dummyMovies";
import PostCard from "../postCard/PostCard";
import styles from "./ThirdUI.module.css";
import useIntersectionObsever from "../../../hooks/useIntersectionObsever";

const ThirdUI = () => {
  const ref = useRef(null);
  const isInViewport = useIntersectionObsever(ref);

  return (
    <div ref={ref} className={styles.Container}>
      <h1 className={isInViewport && styles.Title}>인기 게시글</h1>
      <h3 className={isInViewport && styles.SubTitle}>
        모두의 취향이 담긴 소개를 읽어보세요
      </h3>

      <div className={isInViewport && styles.PostCardContainer}>
        {dummyMovies.slice(7, 12).map(({ image, id, summary, creator }, _) => (
          <PostCard
            image={image}
            summary={summary}
            creator={creator}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default ThirdUI;
