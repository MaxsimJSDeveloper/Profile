import css from "./Profile.module.css";
import { ProfileProps } from "./Profile.types";

const Profile: React.FC<ProfileProps> = ({ userData }) => {
  const {
    avatar,
    username,
    tag,
    location,
    stats: { followers, views, likes },
  } = userData;

  return (
    <div className={css.profileWrapper}>
      <div className={css.infoWrapper}>
        <div className={css.imgWrapper}>
          <img
            className={css.userPhoto}
            src={avatar}
            alt="User avatar"
            height="250"
            width="250"
          />
        </div>
        <p className={css.userName}>{username}</p>
        <div className={css.userInfo}>
          <p>@{tag}</p>
          <p>{location}</p>
        </div>
      </div>

      <ul className={css.stats}>
        <li className={css.statsItem}>
          <span className={css.statsName}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Views</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsName}>Likes</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
