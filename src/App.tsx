import { Header } from "./components/Header";
import {Post} from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css';

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: { 
      avatarUrl: 'https://github.com/melrothiago.png',
      name: 'Thiago Melro',
      role: 'Dev Fullstack'
    },
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor amet.'},
      {type: 'link', content: '#paraMaisLoremIpsum'},
      {type: 'link', content: '#meSigaNasRedesSociais'},
  ],
  publishedAt: new Date('2023-03-07 19:00:00'),
  },
  {
    id: 2,
    author: { 
      avatarUrl: 'https://github.com/MarcoARMoraes.png',
      name: 'Marco Rocha',
      role: 'Backend Dev'
  },
  content: [
    {type: 'paragraph', content: 'Lorem ipsum dolor amet.'},
    {type: 'link', content: '#paraMaisLoremIpsum'},
    {type: 'link', content: '#meSigaNasRedesSociais'},
  ],
publishedAt: new Date('2023-03-07 19:31:00'),
  },

];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar /> 
        <main>
          {posts.map(post => {
          return (
           <Post 
           key={post.id}
           author={post.author}
           content={post.content}
           publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
      
    </div>
    
  )
}

export default App
