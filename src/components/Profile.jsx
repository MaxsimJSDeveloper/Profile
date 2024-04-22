import clsx from "clsx";
import css from "./Profile.module.css";

export const Profile = ({ image, name, tag, location, stats }) => (
  <div className={clsx(css.profileWrapper)}>
    <div className={clsx(css.infoWrapper)}>
      <div className={clsx(css.imgWrapper)}>
        <img
          className={clsx(css.userPhoto)}
          src={image}
          alt="User avatar"
          height="250"
          width="250"
        />
      </div>
      <p className={clsx(css.userName)}>{name}</p>
      <div className={clsx(css.userInfo)}>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
    </div>

    <ul className={clsx(css.stats)}>
      <li className={clsx(css.statsItem)}>
        <span className={clsx(css.statsName)}>Followers</span>
        <span className={clsx(css.statsQuantity)}>{stats.followers}</span>
      </li>
      <li className={clsx(css.statsItem)}>
        <span className={clsx(css.statsName)}>Views</span>
        <span className={clsx(css.statsQuantity)}>{stats.views}</span>
      </li>
      <li className={clsx(css.statsItem)}>
        <span className={clsx(css.statsName)}>Likes</span>
        <span className={clsx(css.statsQuantity)}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
