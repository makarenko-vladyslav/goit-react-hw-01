import "./Profile.css";

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
      <div className="user-card">
        <div className="user-card-info">
          <img
            src={avatar}
            alt={username + " avatar"}
            className="user-avatar"
            width="80"
            height="80"
          />
          <h3 className="user-info-title">{username}</h3>
          <p className="user-info-text">@{tag}</p>
          <p className="user-info-text">{location}</p>
        </div>

        <ul className="user-stats-list">
          <li className="user-stats-item">
            <span className="user-stats-text">Followers</span>
            <span className="user-stats-count">{followers}</span>
          </li>
          <li className="user-stats-item">
            <span className="user-stats-text">Views</span>
            <span className="user-stats-count">{views}</span>
          </li>
          <li className="user-stats-item">
            <span className="user-stats-text">Likes</span>{" "}
            <span className="user-stats-count">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
