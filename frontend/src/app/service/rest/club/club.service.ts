import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import {Club} from "../../../model/club.model";

@Injectable({
  providedIn: 'root'
})
export class ClubService {

  private CLUB_URL = environment.restUrl + '/club';
  private REQUEST_CLUB_REGISTRATION_URL = this.CLUB_URL + '/request';
  private FIND_BY_EMAIL_URL = this.CLUB_URL + '/byEmail';
  private FIND_BY_MEMBER_EMAIL_URL = this.CLUB_URL + '/byMember';
  private EDIT_URL = this.CLUB_URL + '/edit';
  private CHANGE_PASSWORD_URL = this.CLUB_URL + '/edit/password';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public requestClubRegistration(club: Club): Observable<void> {
    const headers = this.authService.getAuthHeaders();
    return this.http.post<void>(this.REQUEST_CLUB_REGISTRATION_URL, club, {headers: headers});
  }

  public findByEmail(email: string): Observable<Club> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.get<Club>(this.FIND_BY_EMAIL_URL,
      {headers: headers, params: params});
  }

  public findByMemberEmail(memberEmail: string): Observable<Club> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("member", memberEmail);
    return this.http.get<Club>(this.FIND_BY_MEMBER_EMAIL_URL,
      {headers: headers, params: params});
  }

  public edit(email: string, newClub: Club): Observable<Club> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("email", email);
    return this.http.put<Club>(this.EDIT_URL, newClub,
      {headers: headers, params: params});
  }

  public changePassword(oldPassword: string, newPassword: string): Observable<Club> {
    const email = this.authService.getUserEmail();
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams()
      .set("email", email)
      .set("old", oldPassword);
    return this.http.put<Club>(this.CHANGE_PASSWORD_URL, newPassword,
      {headers: headers, params: params});
  }

}
