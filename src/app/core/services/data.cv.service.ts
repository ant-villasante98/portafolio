import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Observer, of } from 'rxjs';
import * as dataCvJson from 'src/app/data/data_cv.json';

/*  
data_cv.json'
*/
export interface Person {
  img_cv: string,
  name: string,
  job: string,
  date_birth: string,
  city_rescid: string,
  contact: {
    email: string,
    telf1: string,
    telf2?: string
  },
  pers_desc: string,
  education: {
    career: string,
    institution: string,
    start_date: string,
    in_progress: boolean,
    end_date: string
  }[],
  technical_skills: {
    imag_tech: string,
    name_skill: string,
    nivel_skill: number
  }[],
  wok_exper: string[],
  ability: string[]
  projects: string[],
  lang: string[],
  voluntary_work: string[],
  hobbies: string
}

@Injectable({
  providedIn: 'root'
})
export class DataCvService {
  dataPerson: Person = dataCvJson;

  constructor() {

  }

  get observablePersonData(): Observable<Person> {
    return of(this.dataPerson)
  }

}
