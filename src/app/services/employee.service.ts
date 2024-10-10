import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployees() {
    return [
      { id: 1, name: 'Hana swees', position: 'Developer' },
      { id: 2, name: 'Elia eliana', position: 'Designer' },
      { id: 3, name: 'Sara moghrabi', position: 'Manager' }
    ];
  }
}
