const User = require('./User');
const Project = require('./Project');
const Comments = require('./Comments');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Comments, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comments.belongsTo(Project, {
  foreignKey: 'id'
});


//added, remove if breaks(first)
// Comments.belongsTo(Project,{
//   foreignKey: 'id'
// });


// Comments.belongsTo(Project, {
//   foreignKey: 'id'
// });

//newly added
// Project.hasMany(Comments, {
//   foreignKey: 'comments_id',
//   onDelete: 'CASCADE'
// });

// JUST COMMENTED OUT
// Project.belongsTo(User, {
//   foreignKey: 'project_id'
// });

// Comments.belongsTo(Project, {
//   foreignKey: 'id'  
// });



module.exports = { User, Project, Comments };
