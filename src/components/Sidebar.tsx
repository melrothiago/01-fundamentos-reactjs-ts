import {PencilLine} from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';


export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} 
            src="https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=552&q=60" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/melrothiago.png" />

                <strong>Thiago Melro</strong>
                <span>Dev Fullstack</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}