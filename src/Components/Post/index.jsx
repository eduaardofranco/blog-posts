
import { format, formatDistanceStrict } from 'date-fns'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import './styles.css'
export function Post({ content, name, role, url, publishedAt }) {
    const publishedDateFormatted = format(publishedAt, "do LLL 'at' h:mmaaa")

    const publishedDateRelativeToNow = formatDistanceStrict(publishedAt, new Date,{
    })
    return (
        <article className='post'>
            <header>
                <div className='author'>
                    <Avatar url={url} />
                    <div className="author-info">
                        <strong>{name}</strong>
                        <span>{role}</span>
                    </div>
                </div>
                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow} ago</time>
            </header>
            <div className="content">
            {content.map(line => {
                if (line.type === 'paragraph') {
                    return <p>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p><a href="">{line.content}</a></p>
                }
             })}
            <p> 
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>{' '}
            </p>

            </div>
            <form className='comment-form'>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Wow mate, I loved it!'
                />
                <footer>
                    <button type="submit">Publish</button>
                </footer>
            </form>
            <div className="comment-list">
                <Comment />
            </div>
        </article>
    )
}