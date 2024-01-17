
import './styles.css'
export function Post({ title, content, name, role}) {
    return(
        <article className='post'>
            <header>
                <div className='author'>
                    <img src="https://avatars.githubusercontent.com/u/30300674?v=4" className="avatar" />
                    <div className="author-info">
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>
                <time title="11th may at 08:13" dateTime="2024-05-11 08:10:30">published 1h ago</time>
            </header>
            <div className="content">
            <p>{content}</p>
            <a href="#"> 👉 jane.design/doctorcare</a>
            <a href="#">#novoprojeto #nlw #rocketseat</a>

            </div>
        </article>
    )
}