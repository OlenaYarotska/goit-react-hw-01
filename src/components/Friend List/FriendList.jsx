import css from './FriendList.module.css';
import clsx from "clsx";

const FriendList = ({ friends }) => { 
    return (
        <ul className={css.container}>
            {friends.map(({ id, avatar, name, isOnline }) => {
                const status = isOnline ? "Online" : "Offline";
                return (
                    <li
                        key={id}
                        className={css.item}
                    >
                        <img src={avatar} alt="Avatar"
                            height={60}
                            width={60}
                           />
                        <p className={css.friendName}>{name}</p>
                        <p className={clsx(css.presense, isOnline ? css.online : css.offline)}>{status}</p>
                    </li>
                )
            })}
        </ul>
    )
}

export default FriendList;