// src/database/migrations/001_create_users_table.ts
export const alterUsersTableSQL = `
  ALTER TABLE users ADD COLUMN age INTEGER;
`;
