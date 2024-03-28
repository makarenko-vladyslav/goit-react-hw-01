import css from './FriendList.module.css'
import FriendListItem from "./FriendListItem";

export default function FriendList({ friends }) {
  return (
    <div className={"section"}>
      <ul className={css.list}>
        {friends.map((friend) => (
          <li className={css.listItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  );
}
