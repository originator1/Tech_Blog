// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     // const name = document.querySelector('#project-name').value.trim();
//     // //const needed_funding = document.querySelector('#project-funding').value.trim();
//     // const description = document.querySelector('#project-desc').value.trim();
//     const commentBtn = document.querySelector('.commentBtn')
  
//     if (comments) {
//       const response = await fetch(`/api/projects`, {
//         method: 'POST',
//         body: JSON.stringify({ comments }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };

  

// const commentButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  // document
  //   .querySelector('.new-project-form')
  //   .addEventListener('submit', newFormHandler);
  



    const addComment = async (event) => {
      event.preventDefault();
    
      const commentInput = document.querySelector('#new-comment').value.trim();
      //const needed_funding = document.querySelector('#project-funding').value.trim();
      // const description = document.querySelector('#project-desc').value.trim();
    
      if (commentInput) {
        
        const response = await fetch(`/api/comments`, {
          method: 'POST',
          body: JSON.stringify({ commentInput }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          document.location.replace('/profile');
        } else {
          alert('Failed to create project');
        }
      }
    };

  

  document
  .querySelector('#commentBtn')
  .addEventListener('click', addComment);