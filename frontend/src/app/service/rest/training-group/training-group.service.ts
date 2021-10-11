import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {AuthService} from "../../auth/auth.service";
import {Observable} from "rxjs";
import {TrainingGroup} from "../../../model/training-group.model";

@Injectable({
  providedIn: 'root'
})
export class TrainingGroupService {

  private TRAINING_GROUP_URL = environment.restUrl + '/training-group';
  private FIND_BY_NAME_URL = this.TRAINING_GROUP_URL + '/byName';
  private FIND_ALL_BY_CLUB_URL = this.TRAINING_GROUP_URL + '/all/byClub';
  private FIND_ALL_BY_TRAINER_URL = this.TRAINING_GROUP_URL + '/all/byTrainer';
  private ADD_URL = this.TRAINING_GROUP_URL + '/add';
  private EDIT_ATHLETES_URL = this.TRAINING_GROUP_URL + '/edit/athletes';

  constructor(private http: HttpClient,
              private authService: AuthService) {
  }

  public findByName(name: string): Observable<TrainingGroup> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("name", name);
    return this.http.get<TrainingGroup>(this.FIND_BY_NAME_URL,
      {headers: headers, params: params});
  }

  public findAllByClub(clubEmail: string): Observable<TrainingGroup[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("clubEmail", clubEmail);
    return this.http.get<TrainingGroup[]>(this.FIND_ALL_BY_CLUB_URL,
      {headers: headers, params: params});
  }

  public findAllByTrainer(trainerEmail: string): Observable<TrainingGroup[]> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams().set("trainer", trainerEmail);
    return this.http.get<TrainingGroup[]>(this.FIND_ALL_BY_TRAINER_URL,
      {headers: headers, params: params});
  }

  public add(trainingGroup: TrainingGroup, clubEmail: string,
             headTrainerEmail: string, assistantTrainerEmail: string): Observable<TrainingGroup> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams()
      .set("club", clubEmail)
      .set("head", headTrainerEmail)
      .set("assistant", assistantTrainerEmail);
    return this.http.post<TrainingGroup>(this.ADD_URL, trainingGroup,
      {headers: headers, params: params});
  }

  public edit(groupName: string, present: boolean, athleteEmail: string | null): Observable<TrainingGroup> {
    const headers = this.authService.getAuthHeaders();
    const params = new HttpParams()
      .set("groupName", groupName)
      .set("present", String(present));
    return this.http.put<TrainingGroup>(this.EDIT_ATHLETES_URL, athleteEmail,
      {headers: headers, params: params});
  }

}
