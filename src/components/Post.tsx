import { format } from "date-fns";
import { Link } from "react-router-dom";
// import { LazyLoadImage } from "react-lazy-load-image-component";

const Post = ({ _id, title, summary, createdAt, author, cover }) => {
  return (
    <section className="post rounded-2xl bg-[#edf7f6] overflow-hidden">
      <div className="image">
        <Link to={`/post/${_id}`}>
          {/* <LazyLoadImage
            src={`${import.meta.env.VITE_UPLOAD_URL}/` + cover}
            height={200}
            width={450}
            effect="blur"
          /> */}
          <img
            src={"https://mern-blog-h7oi.onrender.com/" + cover}
            alt="nice"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="texts">
        <div className="title">
          <Link to={`/post/${_id}`}>
            <h2>{title}</h2>
          </Link>
        </div>

        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), "MMM d yyyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </section>
  );
};
export default Post;
