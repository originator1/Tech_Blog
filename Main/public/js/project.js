
projectName = document.querySelector('#project-name');
projectId = projectName.getAttribute('data-id');

//grab id of project on project handlebars

const addComment = async (event) => {
    event.preventDefault();
  
    const commentText = document.querySelector('#new-comment').value.trim();
    //const needed_funding = document.querySelector('#project-funding').value.trim();
    // const description = document.querySelector('#project-desc').value.trim();
  
    if (commentText) {
      
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ commentText, projectId }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
          
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    };
};


// if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');


  document
  .querySelector('#commentBtn')
  .addEventListener('click', addComment);