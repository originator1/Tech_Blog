const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentsData = require('./commentsData.json');
const Comments = require('../models/Comments');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  for (const comments of commentsData) {
    await Comments.create({
      ...comments,
      id = 1
    });
  }

  process.exit(0);
};

seedDatabase();
