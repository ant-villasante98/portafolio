import { Component } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { DataCvService, Person } from 'src/app/core/services/data.cv.service';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent {
  dataPerson: Observable<Person>;
  contador: number = 0;




  constructor(private sharinServices: DataCvService) {
    this.dataPerson = sharinServices.sharingObservablePerson
      .pipe(map((res) => {
        if (res.wok_exper) res.contact;
        console.log(this.contador++)
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
