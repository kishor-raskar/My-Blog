import articleContent from './article-content';
import PageNotFound from './PageNotFound';
import {useState, useEffect} from 'react'
import CommentsList from './CommentsList';
import UpvoteSection from './UpvoteSection';
import AddCommentForm from './AddCommentForm';


const Article=({match})=>{
    const name = match.params.name;
    const article = articleContent.find(article=> article.name ===name);

    const [articleInfo, setArticleInfo] =useState({
        upvote:0, comments:[]
    });

    useEffect(()=>{
        const fetchData= async ()=>{
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body)
        }
        fetchData();
        console.log(articleInfo.upvote);
        
    },[name])

    console.log(article);
    if(!article) return <PageNotFound/>

    else{
        return(
            <>
            <h1>{article.title}</h1>
            <UpvoteSection articleName ={name} upvotes ={articleInfo.upvote} setArticleInfo={setArticleInfo}></UpvoteSection>
            
            {article.content.map((paragraph,key)=>(
                    <p key={key}>{paragraph}</p>
                ))}
                <AddCommentForm articleName={name} setArticleInfo={setArticleInfo}></AddCommentForm>
                <CommentsList comments={articleInfo.comments}/>
                
            </>
        );
        }
        };

export default Article;