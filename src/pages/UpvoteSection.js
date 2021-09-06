import React from 'react';

const UpvoteSection =({articleName, upvotes, setArticleInfo}) =>{
    const upvoteArticle= async()=>{
       
       const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method:'post',

        });
        const body = await result.json();
        setArticleInfo(body)

    }
    return (
    <div id="upvoteSection">
         <button onClick={()=>upvoteArticle()}>Add Upvote</button>
    <p>This article has been upvoted by {upvotes} times!</p>
    </div>
    )
    

    };

export default UpvoteSection