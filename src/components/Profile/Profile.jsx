import css from './Profile.module.css'

export default function Profile({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) {
  return (
    <div className="section">
      <div className={css.card}>
        <div className={css.cardInfo}>
          <img
            src={avatar}
            alt={username + " avatar"}
            className={css.avatar}
            width="80"
            height="80"
          />
          <h3 className={css.infoTitle}>{username}</h3>
          <p className={css.infoText}>@{tag}</p>
          <p className={css.infoText}>{location}</p>
        </div>

        <ul className={css.list}>
          <li className={css.listItem}>
            <span className={css.statsText}>Followers</span>
            <span className={css.statsCount}>{followers}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.statsText}>Views</span>
            <span className={css.statsCount}>{views}</span>
          </li>
          <li className={css.listItem}>
            <span className={css.statsText}>Likes</span>{" "}
            <span className={css.statsCount}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
