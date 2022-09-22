import { ThumbsUp, Trash} from "phosphor-react";
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment(){
      onDeleteComment(content);
  }

  function handleLikeComment(){
    setLikeCount(likeCount + 1);
  };


  return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/nandoamori.png" />
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
              <header>
                <div className={styles.authorAndTime}>
                    <strong>Fe Amorim</strong>
                    <time title='20 de setembro às 8:13h' dateTime='2022-09-20 08:01:00'>Cerca de 1h atrás</time>
                </div>
                <button onClick={handleDeleteComment} title='Deletar comentário'>
                    <Trash size={24}/>
                </button>
              </header>  
              <p>{content}</p>
            </div>
            <footer>
                <button onClick={handleLikeComment}>
                  <ThumbsUp />
                  Aplaudir <span>{likeCount}</span>
                </button>
            </footer>
        </div>
    </div>
  )
}

<div>


<section>
  <h1>Notícias</h1>

  <section>
    <p>Tecnologia</p>
    <article>Heroku será pago</article>
  </section>
  
  <section>
    <p>Política</p>
    <article>Eleição se aproxima</article>
  </section>
</section>

<section>
    <h2>Estado no React</h2>
    <p>Conteúdo...</p>
</section>
</div>