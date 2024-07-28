import FriendListItem from "../FriendListItem/FriendListItem";
import { friendsList, friendsItem } from "./FriendList.styles";
import { FriendsInfoProps } from "./FriendList.types";
import { css, cx } from "@emotion/css";

const FriendList: React.FC<FriendsInfoProps> = ({ friends }) => {
  return (
    <ul className={cx(friendsList)}>
      {friends.map((friend) => (
        <li className={cx(friendsItem)} key={friend.id}>
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
