import artcileContent from './article-content';
import {Link} from 'react-router-dom';
import react from 'react';

const ArticleList =() =>(
    <>
        <h1>Articles</h1>
     
        {artcileContent.map((article, key)=>(
            
            <Link className ='article-list-item' key={key} to ={`/article/${article.name}`}>
               <h3>{article.title}</h3> 
               <p>{article.content[0].substring(0,150)}...</p>
               </Link>
        ))}
        
    </>
    
);

export default ArticleList;