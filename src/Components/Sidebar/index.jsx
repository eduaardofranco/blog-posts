import { PencilLine } from 'phosphor-react'
import './styles.css'

export function Sidebar() {
    return(
        <aside className='sidebar'>
            <img className='cover' src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <div className='profile'>
                <img src="https://avatars.githubusercontent.com/u/30300674?v=4" alt="Eduardo's Avatar" className="avatar" />
                <strong>Eduardo Franco</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Edit your profile
                </a>
            </footer>
        </aside>
    )
}