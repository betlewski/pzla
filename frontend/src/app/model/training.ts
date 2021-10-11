import {SessionType} from "../utils/session-type";
import {Athlete} from "./athlete.model";

export class Training {

  id: number | null;
  startTime: string | null;
  endTime: string | null;
  athlete: Athlete | null;
  sessionType: SessionType | null;
  description: string | null;
  athletePresence: boolean | null;
  completing: boolean | null;
  athleteFeelings: string | null;

  constructor(id: number | null, startTime: string | null, endTime: string | null, athlete: Athlete | null,
              sessionType: SessionType | null, description: string | null,
              athletePresence: boolean | null, completing: boolean | null, athleteFeelings: string | null) {
    this.id = id;
    this.startTime = startTime;
    this.endTime = endTime;
    this.athlete = athlete;
    this.sessionType = sessionType;
    this.description = description;
    this.athletePresence = athletePresence;
    this.completing = completing;
    this.athleteFeelings = athleteFeelings;
  }

  public static register(startTime: string | null, endTime: string | null,
                         sessionType: SessionType | null, description: string | null) {
    return new Training(null, startTime, endTime, null, sessionType, description,
      null, null, null);
  }

}
