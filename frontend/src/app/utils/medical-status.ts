import {GroupType} from "./group-type";

export enum MedicalStatus {

  HEALTHY,
  INJURED

}

export namespace MedicalStatus {

  const HEALTHY_TRANSLATION = "Zdrowy";
  const INJURED_TRANSLATION = "Kontuzjowany";

  export function translate(status: MedicalStatus | null): string {
    let translator: string;
    switch (status) {
      case MedicalStatus.HEALTHY:
      case MedicalStatus[MedicalStatus.HEALTHY] as unknown:
        translator = HEALTHY_TRANSLATION;
        break;
      case MedicalStatus.INJURED:
      case MedicalStatus[MedicalStatus.INJURED] as unknown:
        translator = INJURED_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): MedicalStatus[] {
    return [MedicalStatus.HEALTHY, MedicalStatus.INJURED];
  }

}
