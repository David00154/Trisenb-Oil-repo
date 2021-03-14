import styles from '../styles/Home.module.css'

export default function Header(props)
{
    return (
            <div className={[styles.container]}>
                <header className={[styles.main]} >
                    {props.children}
                </header>
            </div>
        )
}