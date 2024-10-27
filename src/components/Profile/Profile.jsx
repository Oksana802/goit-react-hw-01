import s from "../Profile/Profile.module.css";
const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;

  return (
    <div className={s.wrapper}>
      <div className={s.box}>
        <img className={s.img} src={avatar} alt={"User avatar"} />
        <p className={s.p_name}>{username}</p>
        <p className={s.p}>@{tag}</p>
        <p className={s.p}>{location}</p>
      </div>

      <ul className={s.list}>
        <li className={s.item}>
          <span>Followers</span>
          <span className={s.span_style}>{stats.followers}</span>
        </li>
        <li className={s.item}>
          <span>Views</span>
          <span className={s.span_style}>{stats.views}</span>
        </li>
        <li className={s.item}>
          <span>Likes</span>
          <span className={s.span_style}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
