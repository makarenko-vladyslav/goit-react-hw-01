import "./FriendList.css";
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div className="section">
      <ul className="friends-list">
        {friends.map((friend) => (
          <li className="friends-list-item" key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
