import css from "./FriendList.module.css";

export default function FriendList({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <img
        className={css.avatar}
        src={avatar}
        alt={name + "avatar"}
        width="48"
      />
      <h4 className={css.name}>{name}</h4>

      {isOnline ? (
        <p className={css.online}>Online</p>
      ) : (
        <p className={css.offline}>Offline</p>
      )}
    </>
  );
}
