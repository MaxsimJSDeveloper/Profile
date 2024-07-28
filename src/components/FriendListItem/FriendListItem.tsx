import { FriendInfoProps } from "./FriendListItem.types";
import {
  friendPhoto,
  friendsItemWrapper,
  isOnline as onlineStyle,
  isOffline as offlineStyle,
  friendName,
} from "./FriendListItem.style";
import { cx } from "@emotion/css";

const FriendListItem: React.FC<FriendInfoProps> = ({
  avatar,
  name,
  isOnline,
}) => {
  return (
    <div className={cx(friendsItemWrapper)}>
      <img className={cx(friendPhoto)} src={avatar} alt="avatar" width="48" />
      <p className={cx(friendName)}>{name}</p>
      <p className={cx(isOnline ? onlineStyle : offlineStyle)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
