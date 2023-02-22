const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');
const inquirer = require('inquirer');
const { listenerCount } = require('mysql2/typings/mysql/lib/Connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'db.password',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

const promptQ = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What do you want to do?',
            choices: ['View all departments', 
            'View all roles', 
            'View all employees', 
            'Add a department', 
            'Add a role', 
            'Add an employee', 
            'Update an employee role',
            'No Action']
        }

    ])
    .then((answers)=>{
        const {choices} = answers;

        if (choices === '_!_') {
            showDepts();
        }
        if (choices === '_!_') {

        }
        if (choices === '_!_') {

        }
        if (choices === '_!_') {

        }
        if (choices === '_!_') {

        }
        if (choices === 'Add an employee') {
            addEmployee = () => {
                // creating choices for the managers for that added employee
                db.query("SELECT * FROM EMPLOYEE", (err, eRes) => {
                  if (err) throw err;
                  const managerChoice = [
                    {
                      name: 'None',
                      value: 0
                    }
                  ];
                    eRes.forEach(({ first_name, last_name, id }) => {
                      managerChoice.push({
                        name: first_name + " " + last_name,
                        value: id
                    });
                  });
                // creating the role choices for that added employee
                  db.query("SELECT * FROM ROLE", (err, roleRes) => {
                    if (err) throw err;
                    const roles = [];
                      roleRes.forEach(({ title, id }) => {
                        roles.push({
                          name: title,
                          value: id
                          });
                      });
                      let questions = [
                        {
                          type: "input",
                          name: "first_name",
                          message: "what is the employee's first name?"
                        },
                        {
                          type: "input",
                          name: "last_name",
                          message: "what is the employee's last name?"
                        },
                        {
                          type: "list",
                          name: "role_id",
                          choices: roles,
                          message: "what is the employee's role?"
                        },
                        {
                          type: "list",
                          name: "manager_id",
                          choices: managerChoice,
                          message: "who is the employee's manager? (could be null)"
                        }
                      ]
                      inquirer.prompt(questions)
                      .then(response => {
                        const query = `INSERT INTO EMPLOYEE (first_name, last_name, role_id, manager_id)
                                      VALUES (?)`;
                        let manager_id = response.manager_id !== 0? response.manager_id: null;
                        db.query(query, [[response.first_name, response.last_name, response.role_id, manager_id]], (err, res) => {
                          if (err) throw err;
                              console.log(chalk.blue(`Successfully added ${response.first_name} ${response.last_name} as an Employee!`));
                            promptUserquestions();
                         });
                      })
                      .catch(err => {
                        console.error(err);
                      });
                  })
                });
              };

        }
        if (choices === '_!_') {

        }
        if (choices === '_!_') {

        }
    })
}