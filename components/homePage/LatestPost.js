import Image from "next/future/image";
import Link from "next/link";
import Date from "../helpers/date";

export default function LatestPost({ post }) {
  return (
    <div className="home__latest main-grid">
      <h2>Latest Post:</h2>
      <Link href={`/posts/${post.slug}`}>
        <a aria-label={post.title} className="home__latest--link">
          <div className="home__latest__card">
            <div className="home__latest__card--cover">
              <Image
                src={post.feature_image}
                className="home__latest__card--image"
                width={340}
                height={510}
              />
            </div>
            <div className="home__latest__card--post">
              <h4 className="home__latest__card--tag">
                {post.primary_tag.name}
              </h4>
              <h3 className="home__latest__card--title">{post.title}</h3>
              <p className="home__latest__card--excerpt">{post.excerpt}</p>
              <div className="home__latest__card--meta">
                <p className="home__latest__card--date">
                  <Date dateString={post.published_at} />
                </p>
                &bull;
                <p className="home__latest__card--read">
                  {`${post.reading_time} Min Read`}
                </p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}