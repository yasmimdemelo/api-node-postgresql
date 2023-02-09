/* Create table */
CREATE TABLE IF NOT EXISTS tasks (
id serial PRIMARY KEY,
task_name text NOT NULL
);

/* Selecione tudo da table */
SELECT * FROM tasks;