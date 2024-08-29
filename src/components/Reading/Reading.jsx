import cover from "../../assets/images/img2.png"
import styles from "./Reading.module.css"

function Reading({}) {
    return(<section className={styles.reading}>
        <div className="cover">
            <img src={cover} alt="manga cover" />
        </div>
        <article>
            <h2>Tonikawa. Vol. 1</h2>
            <h3>chapter 34</h3>
            <h5>fly me over the moon</h5>
            <div className="status">
                <p><span>75%</span> . 20 min left</p>
                <div className={styles.progress}>
                    <div className="value" style={{width: "34%"}}></div>
                </div>
            </div>
            <button> continue reading</button>
        </article>
    </section>)
}

export default Reading