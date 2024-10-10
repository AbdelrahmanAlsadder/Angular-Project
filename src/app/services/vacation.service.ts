import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacationService {
  getVacationRequests() {
    return [
      { name: 'Ahmad Attar', submittedOn: '2024-03-01', duration: '2 Weeks (1/4/2023 - 14/4/2023)', salary: '1000 AED' },
      { name: 'Ali Hassan', submittedOn: '2024-03-02', duration: '1 Week (5/4/2023 - 12/4/2023)', salary: '1500 AED' }
    ];
  }
}
