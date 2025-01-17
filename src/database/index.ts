import { isDatabaseUptodate } from "../utils/appUtils";
import { initDatabase } from "./db";
import { runMigrations } from "./migrationsManager";
import { seedUsers } from "./seed";

export const initializeDatabase = async () => {
    await initDatabase();
    if(!await isDatabaseUptodate()) {
        await runMigrations();
        await seedUsers();
    }
};