import notification from "../../assets/icons/clarity--notification-line.svg";
import profile from "../../assets/icons/simple-line-icons--user.svg";
import styles from "./Nav.module.css"

function Nav({notice}) {
    return (<nav className={styles.nav}>
        <h1>It&rsquo;s fun time!</h1>
        <section>
            <div className="notification">
                <div className={styles.alert}>
                    {notice.len}
                </div>
                <img src={notification} alt="notify-icon" />
            </div>
            <div className="profile">
                <img src={profile} alt="profile-icon" />
            </div>
        </section>
    </nav>)
}

export default Nav