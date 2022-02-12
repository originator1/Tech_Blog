// const req = require("express/lib/request");

let projectName = document.querySelector('#project-name');
let projectId = projectName.getAttribute('data-id');
let project = parseInt(projectId);
//grab id of project on project handlebars

const addComment = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#new-comment').value.trim();
  //const needed_funding = document.querySelector('#project-funding').value.trim();
  // const description = document.querySelector('#project-desc').value.trim();
  console.log(projectId, "my commentText");
  if (comment) {
    console.log("inside commentText if statement");
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ 
        comment: comment, 
        project_id: project,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });



    if (response.ok) {

      document.location.reload();
    } else {
      alert('Failed to create comment');
    }
  };
};


// if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');


  document
  .querySelector('#commentBtn')
  .addEventListener('click', addComment);