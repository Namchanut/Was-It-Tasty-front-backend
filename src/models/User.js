module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("USER", "ADMIN"),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      underscored: true,
    }
  );
  User.associate = (db) => {
    User.hasMany(db.Content, {
      foreignKey: "userId",
      onDelete: "Restrict",
      onUpdate: "Restrict",
    });
  };
  return User;
};
