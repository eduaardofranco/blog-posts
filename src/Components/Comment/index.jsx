import { ThumbsUp, Trash } from 'phosphor-react'
import './styles.css'
export function Comment() {
    return(
        <div className="comment">
            <img src="https://avatars.githubusercontent.com/u/30300674?v=4" className="avatar" />
            <div className="comment-box">
                <div className="comment-content">
                    <header>
                        <div className="author-and-time">
                            <strong>Eduardo Franco</strong>
                            <time title="11th may at 08:13" dateTime="2024-05-11 08:10:30">about 1h ago</time>
                        </div>
                        <button title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>muito bom parabens</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}