import FriendListItem from "../FriendListItem/FriendListItem";

import css from "./FriendList.module.css";
import { FriendsInfoProps } from "./FriendList.types";

const FriendList: React.FC<FriendsInfoProps> = ({ friends }) => {
  return (
    <ul className={css.friends}>
      {friends.map((friend) => (
        <li className={css.friendsItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
