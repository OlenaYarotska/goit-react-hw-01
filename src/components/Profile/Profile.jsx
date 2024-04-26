import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
    <div className={css.container}>
        <div className={css.infoWrapper}>
                <img
                src={image}
                    alt="User avatar"
                    className={css.image}
                />
                <p className={css.textHeading}>{name}</p>
                <p className={css.text}>@{tag}</p>
               <p className={css.text}>{location}</p>
        </div>

        <ul className={css.list}>
            <li className={css.item}>
                <span className={css.statsLabel}>Followers:</span>
                <span className={css.statsQuantity}>{stats.followers}</span>
            </li>
            <li className={css.item}>
                <span className={css.statsLabel}>Views:</span>
                <span className={css.statsQuantity}>{stats.views}</span>
            </li>
            <li className={css.item}>
                <span className={css.statsLabel}>Likes:</span>
                <span className={css.statsQuantity}>{stats.likes}</span>        
            </li>
        </ul>
</div>
)
}
export default Profile;