 import css from './Profile.module.css';
import clsx from 'clsx';

export const Profile = ({
    name,
    tag,
    location,
    image,
    stats:{ followers, views, likes },
}) => {
    return(
        <div className={css.container}>
            <div className={css.profileInfo}>
                <img className={css.avatar}
                 src={image}
                 alt="User avatar" />
                 <p className={css.profileName}>{name}</p>
                 <p className={css.profileText}>@{tag}</p>
                 <p className={css.profileText}>{location}</p>
                 </div>
                 
                 <ul className={css.list}>
                    <li className={css.listItem}>
                    <span className={css.stats}>Followers </span>
                    <span className={clsx(css.stats, css.statsValue)}> {followers} </span>
                    </li>
                    <li className={css.listItem}>
                    <span className={css.stats}>Views </span>
                    <span className={clsx(css.stats, css.statsValue)}>{views}</span>
                    </li>
                    <li className={css.listItem}>
                     <span className={css.stats}>Likes </span>
                     <span className={clsx(css.stats, css.statsValue)}>{likes}</span>
                     </li>
                     </ul>
                     </div>
    );
};