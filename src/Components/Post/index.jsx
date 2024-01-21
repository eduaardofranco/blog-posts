
import { format, formatDistanceStrict, set } from 'date-fns'
import { Comment } from '../Comment'
import { Avatar } from '../Avatar'
import './styles.css'
import { useState } from 'react'
export function Post({ content, name, role, url, publishedAt }) {
    const [comments, setComments] = useState([
        'Post muito bacana'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "do LLL 'at' h:mmaaa")

    const publishedDateRelativeToNow = formatDistanceStrict(publishedAt, new Date,{
    })

    function handleCreateNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }
    function handleCNewCommentChange() {
        setNewCommentText(event.target.value)
    }
    function deleteComment(commentToDelete) {
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }
    const isNewcommentEmpty = newCommentText.length === 0;
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
            {content.map((line, index) => {
                if (line.type === 'paragraph') {
                    return <p key={String(index)}>{line.content}</p>
                } else if (line.type === 'link') {
                    return <p key={String(index)}><a href="">{line.content}</a></p>
                }
             })}
            <p> 
                <a href="#">#novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat</a>{' '}
            </p>

            </div>
            <form onSubmit={handleCreateNewComment} className='comment-form'>
                <strong>Leave your feedback</strong>

                <textarea
                    placeholder='Wow mate, I loved it!'
                    value={newCommentText}
                    onChange={handleCNewCommentChange}
                />
                <footer>
                    <button
                        type="submit"
                        disabled={isNewcommentEmpty}
                    >
                        Publish
                    </button>
                </footer>
            </form>
            <div className="comment-list">
                {
                    comments && comments.map((comment, index) => (
                        <Comment
                            key={String(index)}    
                            content={comment}
                            deleteComment={deleteComment}
                        />
                    ))
                }
            </div>
        </article>
    )
}