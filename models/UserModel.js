import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const User = db.define('users', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    paket: DataTypes.STRING,
    berat: DataTypes.STRING,
    total: DataTypes.STRING,
    dibayar: DataTypes.STRING
}, {
    freezeTableName: true
});

export default User;

(async () => {
    await db.sync();
})();