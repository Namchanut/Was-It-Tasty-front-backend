module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
  Comment.associate = (db) => {
    Comment.belongsTo(db.User, {
      foreignKey: "userId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
    Comment.belongsTo(db.User, {
      foreignKey: "contentId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
  };
  return Comment;
};
