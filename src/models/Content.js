module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define(
    "Content",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      subTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      image: {
        type: DataTypes.STRING,
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      directions: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cardId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      typefoodId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
  Content.associate = (db) => {
    Content.belongsTo(db.User, {
      foreignKey: "userId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
    Content.belongsTo(db.Typefood, {
      foreignKey: "typefoodId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
  };
  return Content;
};
