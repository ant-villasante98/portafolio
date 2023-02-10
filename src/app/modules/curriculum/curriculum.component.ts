import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataCvService, Person } from 'src/app/core/services/data.cv.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  dataPerson: Observable<Person>;
  cont: number = 0;




  constructor(private dataService: DataCvService) {
    this.dataPerson = dataService.observablePersonData
      .pipe(map((res) => {
        if (res.wok_exper) res.contact;
        console.log(this.cont++)
        return res
      })
      )
    /* .subscribe((res: Person) => {
      let mockDate = new Date(res.date_birth), day, month, year
      console.log(mockDate.getMonth())
      res.date_birth
      this.dataPerson = res

    }); */
    //prueba de formato de fecha
  }

}
