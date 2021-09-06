import react, {useState} from 'react';

const AddCommentForm =({articleName, setArticleInfo})=>{
    const [userName, setUserName] = useState('');
    const [commentText, setCommentText] = useState('');

    const addComment = async ()=>{
        const result = await fetch(`/api/articles/${articleName}/add-comments/`,{
            method:'post',
            body:JSON.stringify({userName, text:commentText}),
            headers: {
                'Content-Type': 'application/json',

            }
        });

        const body = await result.json();
        setArticleInfo(body);
        alert('Comment added successfully!!');
        setUserName('');
        setCommentText('');
    }

    return (
    <div id="add-comment-form">
        <h3>Add a Comment</h3>
        <label>
            Name: <input type="text" value={userName} onChange={(event)=> setUserName(event.target.value)}></input>
        </label>
        <br></br>
        <label>
            Comment: <br></br>
            <textarea rows="4" cols="50" value={commentText} onChange={(event)=> setCommentText(event.target.value)}></textarea>
        </label><br></br>
        <button onClick={()=> addComment()} >Submit Comment</button>
    </div>
    );
}


export default AddCommentForm;