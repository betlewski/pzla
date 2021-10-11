import {Trainer} from "./trainer.model";
import {Athlete} from "./athlete.model";
import {GroupType} from "../utils/group-type";
import {Training} from "./training";

export class TrainingGroup {

  id: number | null;
  name: string | null;
  groupType: GroupType | null;
  creationDate: string | null;
  headTrainer: Trainer | null;
  assistantTrainer: Trainer | null;
  athletes: Athlete[] | null;
  trainings: Training[] | null;

  constructor(id: number | null, name: string | null, groupType: GroupType | null,
              creationDate: string | null, headTrainer: Trainer | null, assistantTrainer: Trainer | null,
              athletes: Athlete[] | null, trainings: Training[] | null) {
    this.id = id;
    this.name = name;
    this.groupType = groupType;
    this.creationDate = creationDate;
    this.headTrainer = headTrainer;
    this.assistantTrainer = assistantTrainer;
    this.athletes = athletes;
    this.trainings = trainings;
  }

  public static register(name: string | null, groupType: GroupType | null,
                         headTrainer: Trainer | null, assistantTrainer: Trainer | null) {
    return new TrainingGroup(null, name, groupType, null,
      headTrainer, assistantTrainer, null, null);
  }

}
