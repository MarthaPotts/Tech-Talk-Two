const postId = document.querySelector('input[name="post-id"]'); 

const updatePostFormHandler = async function(event) {
    event.preventDefault(); 

    const title = document.querySelector('input[name="post-title"]').value; 
    const postBody = document.querySelector('textarea[name="post-body"]').value; 

    await fetch(`/api/post/${postId}`, {
        method: 'PUT', 
        body: JSON.stringify({
            title, 
            body
        }), 
        headers: { 'Content-Type': 'application/json'}
    }); 
    // document.location.replace('/dashboard'); 
}
 const onDeleteHandler = async function(){
     await fetch(`/api/post/${post.id}`, {
         method: 'DELETE'
     }); 
    //  document.location.replace('/dashboard'); 
 }

 document.querySelector('#update-post-form').addEventListener('submit', updatePostFormHandler); 
 document.querySelector('#delete-btn').addEventListener('click', onDeleteHandler); 