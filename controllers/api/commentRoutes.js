const router = require('express').Router();
const { Comments } = require('../../models');
const withAuth = require('../../utils/auth');


//create comment
router.post('/', withAuth, async (req, res) => {
 
  try {
    const newComment = await Comments.create({
       comment: req.body.commentText,
       user_id: req.session.user_id,
       project_id: req.body.projectId,
      

     
    });
    
    
    res.status(200).json(newComment);
   
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete comment
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const commentsData = await Comments.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!commentsData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(commentsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;