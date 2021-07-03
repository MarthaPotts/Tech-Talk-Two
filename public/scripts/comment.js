const commentFormHandler = async function(e) {
    e.preventDefault(); 

const postId = document.querySelector('input[name"post-id"]').value; 
const commentBody = document.querySelector('textarea[name="comment-body"]').value; 

if (commentBody) {
    fetch('/api/comment', {
        method: 'POST', 
        body: JSON.stringify({
            postId, 
            commentBody
        }), 
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.reload(); 
}
}; 

document.querySelector('#add-comment-form').addEventListener('submit', commentFormHandler); 