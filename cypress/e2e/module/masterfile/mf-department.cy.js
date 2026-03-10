import { DashboardPage } from "../../../support/pages/DashboardPage";
import { DepartmentPage } from "../../../support/pages/DepartmentPage";
import { LoginPage } from "../../../support/pages/LoginPage";

describe('template spec', () => {
  it('passes', () => {

    LoginPage.openlink();
    LoginPage.login();
    LoginPage.validateLogin();
    
    DashboardPage.openNavigation();
    DashboardPage.openMenu();  
   
    DepartmentPage.addData();
    DepartmentPage.editData();
    DepartmentPage.deleteData();

    
 })
})