import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import {Trainer} from "../../../model/trainer.model";

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  private TRAINER_URL = environment.restUrl + '/trainer';
  private FIND_BY_EMAIL_URL = this.TRAINER_URL + '/byEmail';
  private FIND_ALL_BY_CLUB_URL = this.TRAINER_URL + '/all/byClub';
  private ADD_URL = this.TRAINER_URL + '/add';
  private EDIT_URL = this.TRAINER_URL + '/edit';
  private CHANGE_PASSWORD_URL = this.TRAINER_URL + '/edit/password';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public findByEmail(email: string): Observable<Trainer> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.get<Trainer>(this.FIND_BY_EMAIL_URL,
      {headers: headers, params: params});
  }

  public findAllByClub(clubEmail: string): Observable<Trainer[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("clubEmail", clubEmail);
    return this.http.get<Trainer[]>(this.FIND_ALL_BY_CLUB_URL,
      {headers: headers, params: params});
  }

  public add(trainer: Trainer, clubEmail: string): Observable<Trainer> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("club", clubEmail);
    return this.http.post<Trainer>(this.ADD_URL, trainer,
      {headers: headers, params: params});
  }

  public edit(email: string, newTrainer: Trainer): Observable<Trainer> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.put<Trainer>(this.EDIT_URL, newTrainer,
      {headers: headers, params: params});
  }

  public changePassword(oldPassword: string, newPassword: string): Observable<Trainer> {
    const email = this.authService.getUserEmail();
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams()
      .set("email", email)
      .set("old", oldPassword);
    return this.http.put<Trainer>(this.CHANGE_PASSWORD_URL, newPassword,
      {headers: headers, params: params});
  }

}
