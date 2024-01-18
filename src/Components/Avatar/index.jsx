import './styles.css'
export function Avatar({ url, hasBorder = true }) {
    return(
            <img className={hasBorder ? "avatar-with-border" : "avatar"} src={url} />
    )
}