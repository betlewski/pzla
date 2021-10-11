import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import {Training} from "../../../model/training";

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  private TRAINING_URL = environment.restUrl + '/training';
  private FIND_ALL_BY_ATHLETE_URL = this.TRAINING_URL + '/all/byAthlete';
  private ADD_URL = this.TRAINING_URL + '/add';
  private ADD_TO_ALL_URL = this.TRAINING_URL + '/add/all';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public findAllByAthlete(athleteEmail: string): Observable<Training[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("athlete", athleteEmail);
    return this.http.get<Training[]>(this.FIND_ALL_BY_ATHLETE_URL,
      {headers: headers, params: params});
  }

  public add(training: Training, athleteEmail: string): Observable<Training> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("athlete", athleteEmail);
    return this.http.post<Training>(this.ADD_URL, training,
      {headers: headers, params: params});
  }

  public addToAll(training: Training, athleteEmails: string[]): Observable<boolean> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("athletes", athleteEmails.toString());
    return this.http.post<boolean>(this.ADD_TO_ALL_URL, training,
      {headers: headers, params: params});
  }

}
