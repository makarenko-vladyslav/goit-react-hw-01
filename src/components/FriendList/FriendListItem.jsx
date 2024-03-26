export default function FriendList({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <img
        className="friend-avatar"
        src={avatar}
        alt={name + "avatar"}
        width="48"
      />
      <h4 className="friend-name">{name}</h4>

      {isOnline ? (
        <p className={"friend-status online"}>Online</p>
      ) : (
        <p className={"friend-status offline"}>Offline</p>
      )}
    </>
  );
}
