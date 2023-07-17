module.exports = (sequelize, DataTypes) => {
  const Typefood = sequelize.define(
    "Typefood",
    {
      name: {
        type: DataTypes.STRING,
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
  Typefood.associate = (db) => {
    Typefood.hasMany(db.Content, {
      foreignKey: "typefoodId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
  };
  return Typefood;
};
