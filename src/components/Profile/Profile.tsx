import {
  profileWrapper,
  infoWrapper,
  imgWrapper,
  userPhoto,
  userName,
  userInfo,
  stats,
  statsItem,
  statsName,
  statsQuantity,
} from "./Profile.styles";
import { ProfileProps } from "./Profile.types";
import { cx } from "@emotion/css";

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = userData;

  return (
    <div className={cx(profileWrapper)}>
      <div className={cx(infoWrapper)}>
        <div className={cx(imgWrapper)}>
          <img
            className={cx(userPhoto)}
            src={avatar}
            alt="User avatar"
            height="250"
            width="250"
          />
        </div>
        <p className={cx(userName)}>{username}</p>
        <div className={cx(userInfo)}>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={cx(stats)}>
        <li className={cx(statsItem)}>
          <span className={cx(statsName)}>Followers</span>
          <span className={cx(statsQuantity)}>{followers}</span>
        </li>
        <li className={cx(statsItem)}>
          <span className={cx(statsName)}>Views</span>
          <span className={cx(statsQuantity)}>{views}</span>
        </li>
        <li className={cx(statsItem)}>
          <span className={cx(statsName)}>Likes</span>
          <span className={cx(statsQuantity)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
