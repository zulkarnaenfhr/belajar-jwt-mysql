import sequelize from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = sequelize;

const Users = db.define(
    "users",
    {
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.TEXT,
        },
    },
    {
        freezetablenames: true,
        createdAt: false,
        updatedAt: false,
    }
);

export default Users;
