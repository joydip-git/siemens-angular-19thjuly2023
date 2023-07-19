import { EmployeeManager } from "./manager/employee-manager";
import { Developer } from "./models/developer";
import { Hr } from "./models/hr";
import { EmployeeRepository } from "./repository/employees";

const anilDev = new Developer('anil', 1, 1000, 2000, 3000, 4000)
const sunilHr = new Hr('sunil', 2, 1500, 2500, 3500, 4500)

const manager = new EmployeeManager()
console.log(manager.add(anilDev) ? 'added' : 'could not add')
console.log(manager.add(sunilHr) ? 'added' : 'could not add')

manager
    .fetchAll()
    .forEach(
        (e) => console.log(`${e.name} has salary of ${e.calculateSalary()}`)
    )

// manager.fetchAll().sort(
//     (e1, e2) => e1.calculateSalary() - e2.calculateSalary()
// )

console.log('done...')