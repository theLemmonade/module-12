INSERT INTO department (name)
VALUES
('Operations'),
('Accounting'),
('Marketing'),
('IT');
INSERT INTO role (title, salary, department_id)
VALUES
('Retail Manager', 61000, 1),
('Retail Associate', 39000, 1),
('Accountant', 139000, 2),
('Account Manager', 57000, 3),
('Database Engineer', 115000, 4),
('Front-End Developer', 91000, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Emily', 'Novak', 2, null),
('Vincent', 'Pizzo', 1, 1),
('Pedro', 'Mescal', 4, null),
('Devonte', 'Smith', 3, 3),
('Alex', 'Sanders', 6, null),
('Michelle', 'Williams', 5, 5),
('David','Falvey', 7, null),
('Matt', 'Black', 8, 7);