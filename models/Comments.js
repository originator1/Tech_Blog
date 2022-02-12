const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    comment: {
      type: DataTypes.STRING,
      // references: {
      //   model: 'project',
      //   key: 'id'
      // }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   references: {
    //     model: 'user',
    //     key: 'name',
    //   },
    // },
    // },
    // comment_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'project',
    //         key: 'id',
    //     }

    // },

    project_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'project',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

module.exports = Comments;