const sequelize = require('../config/connection');
const seedBlogs = require('./blog-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedBlogs();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  process.exit(0);
};

seedAll();
