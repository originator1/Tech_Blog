const User = require('./User');
const Project = require('./Project');
const Comments = require('./Commentss');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comments, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'project_id'
});

module.exports = { User, Project };
