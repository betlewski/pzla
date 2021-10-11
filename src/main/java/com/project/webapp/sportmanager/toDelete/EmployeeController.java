/*
package com.project.webapp.sportmanager.toDelete;

import com.project.webapp.drivingschool.data.model.Employee;
import com.project.webapp.drivingschool.data.service.EmployeeService;
import com.project.webapp.drivingschool.data.utils.EmployeeRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

*/
/**
 * Kontroler dla pracowników szkoły nauki jazdy
 *//*

@CrossOrigin
@RestController
@RequestMapping("/rest/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @GetMapping("/all/actual")
    @ResponseBody
    public List<Employee> getAllActualEmployees() {
        return employeeService.getAllActualEmployees();
    }

    @GetMapping("/all")
    @ResponseBody
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @GetMapping("/all/notAdmins")
    @ResponseBody
    public List<Employee> getAllEmployeesNotAdmins() {
        return employeeService.getAllEmployeesNotAdmins();
    }

    @GetMapping("/all/byRole")
    @ResponseBody
    public List<Employee> getAllEmployeesByEmployeeRole(@RequestParam("role") EmployeeRole role) {
        return employeeService.getAllEmployeesByEmployeeRole(role);
    }

    @GetMapping("/byEmail")
    @ResponseBody
    public Employee getEmployeeByEmail(@RequestParam("email") String email) {
        return employeeService.getEmployeeByEmail(email);
    }

    @GetMapping("/roles/all")
    @ResponseBody
    public List<EmployeeRole> getAllEmployeeRoles() {
        return employeeService.getAllEmployeeRoles();
    }

    @GetMapping("/exist/byEmployee/byRole")
    @ResponseBody
    public Boolean checkExistingByEmployeeEmailAndEmployeeRole(@RequestParam("email") String email,
                                                               @RequestParam("role") EmployeeRole role) {
        return employeeService.checkExistingByEmployeeEmailAndEmployeeRole(email, role);
    }

    @GetMapping("/email/exist")
    @ResponseBody
    public Boolean emailExisting(@RequestParam("email") String email) {
        return employeeService.emailExisting(email);
    }

    @PostMapping("/add")
    public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
        return employeeService.addEmployee(employee);
    }

    @PutMapping("/edit")
    public ResponseEntity<Employee> editEmployee(@RequestParam("email") String email,
                                                 @RequestBody Employee newEmployee) {
        return employeeService.editEmployee(email, newEmployee);
    }

    @PutMapping("/edit/full")
    public ResponseEntity<Employee> editEmployeeFull(@RequestParam("email") String email,
                                                     @RequestBody Employee newEmployee) {
        return employeeService.editEmployeeFull(email, newEmployee);
    }

    @PutMapping("/edit/password")
    public ResponseEntity<Employee> changePassword(@RequestParam("email") String email,
                                                   @RequestParam("old") String oldPassword,
                                                   @RequestBody String newPassword) {
        return employeeService.changePassword(email, oldPassword, newPassword);
    }

    @PutMapping("/edit/role")
    public ResponseEntity<Employee> changeEmployeeRole(@RequestParam("email") String email,
                                                       @RequestBody EmployeeRole newRole) {
        return employeeService.changeEmployeeRole(email, newRole);
    }

}
*/
