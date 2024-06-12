#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person();
const programStart = async (persons) => {
    do {
        console.log(chalk.red("Welcome Guest"));
        const ans = await inquirer.prompt({
            type: "list",
            name: "option",
            message: "What do you want to do?",
            choices: [
                "Talk To Self",
                "Talk To Student",
                "Exit"
            ]
        });
        if (ans.option == "Talk To Self") {
            console.log("I Want To Talk To MySelf");
        }
        if (ans.option == "Talk To Student") {
            const ans = await inquirer.prompt({
                type: "input",
                name: "student",
                message: "Which Student do you want to talk to?",
            });
            const student = persons.students.find((val) => val.name == ans.student);
            if (student) {
                console.log(`Hello ${student.name}`);
                console.log(persons.students);
            }
            if (!student) {
                console.log("Student Not Found");
                const name = new Student(ans.student);
                persons.addStudent(name);
                console.log(`Hello ${ans.student}`);
                console.log(persons.students);
            }
        }
        if (ans.option == "Exit") {
            console.log("Exiting Program");
            process.exit();
        }
    } while (true);
};
programStart(persons);
