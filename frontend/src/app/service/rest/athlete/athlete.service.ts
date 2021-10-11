import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import {Athlete} from "../../../model/athlete.model";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {

  private ATHLETE_URL = environment.restUrl + '/athlete';
  private FIND_BY_EMAIL_URL = this.ATHLETE_URL + '/byEmail';
  private FIND_ALL_BY_CLUB_URL = this.ATHLETE_URL + '/all/byClub';
  private FIND_FREE_BY_CLUB_URL = this.ATHLETE_URL + '/free/byClub';
  private ADD_URL = this.ATHLETE_URL + '/add';
  private EDIT_URL = this.ATHLETE_URL + '/edit';
  private CHANGE_PASSWORD_URL = this.ATHLETE_URL + '/edit/password';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public findByEmail(email: string): Observable<Athlete> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.get<Athlete>(this.FIND_BY_EMAIL_URL,
      {headers: headers, params: params});
  }

  public findAllByClub(clubEmail: string): Observable<Athlete[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("clubEmail", clubEmail);
    return this.http.get<Athlete[]>(this.FIND_ALL_BY_CLUB_URL,
      {headers: headers, params: params});
  }

  public findFreeByClub(clubEmail: string): Observable<Athlete[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("clubEmail", clubEmail);
    return this.http.get<Athlete[]>(this.FIND_FREE_BY_CLUB_URL,
      {headers: headers, params: params});
  }

  public add(athlete: Athlete, clubEmail: string): Observable<Athlete> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("club", clubEmail);
    return this.http.post<Athlete>(this.ADD_URL, athlete,
      {headers: headers, params: params});
  }

  public edit(email: string, newAthlete: Athlete): Observable<Athlete> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.put<Athlete>(this.EDIT_URL, newAthlete,
      {headers: headers, params: params});
  }

  public changePassword(oldPassword: string, newPassword: string): Observable<Athlete> {
    const email = this.authService.getUserEmail();
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams()
      .set("email", email)
      .set("old", oldPassword);
    return this.http.put<Athlete>(this.CHANGE_PASSWORD_URL, newPassword,
      {headers: headers, params: params});
  }

}
