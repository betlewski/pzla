export enum AthleteType {

  SPRINTER,
  MIDDLE_DISTANCE_RUNNER,
  LONG_DISTANCE_RUNNER,
  HURDLER,

  LONG_JUMPER,
  TRIPLE_JUMPER,
  HIGH_JUMPER,
  POLE_VAULT_JUMPER,

  SHOT_PUTTER,
  DISCUS_THROWER,
  JAVELIN_THROWER,
  HAMMER_THROWER

}

export namespace AthleteType {

  const SPRINTER_TRANSLATION = "Biegi krótkie";
  const MIDDLE_DISTANCE_RUNNER_TRANSLATION = "Biegi średniodystansowe";
  const LONG_DISTANCE_RUNNER_TRANSLATION = "Biegi długodystansowe";
  const HURDLER_TRANSLATION = "Biegi przez płotki";
  const LONG_JUMPER_TRANSLATION = "Skok w dal";
  const TRIPLE_JUMPER_TRANSLATION = "Trójskok";
  const HIGH_JUMPER_TRANSLATION = "Skok wzwyż";
  const POLE_VAULT_JUMPER_TRANSLATION = "Skok o tyczce";
  const SHOT_PUTTER_TRANSLATION = "Pchnięcie kulą";
  const DISCUS_THROWER_TRANSLATION = "Rzut dyskiem";
  const JAVELIN_THROWER_TRANSLATION = "Rzut oszczepem";
  const HAMMER_THROWER_TRANSLATION = "Rzut młotem";

  export function translate(type: AthleteType | null): string {
    let translator: string;
    switch (type) {
      case AthleteType.SPRINTER:
      case AthleteType[AthleteType.SPRINTER] as unknown:
        translator = SPRINTER_TRANSLATION;
        break;
      case AthleteType.MIDDLE_DISTANCE_RUNNER:
      case AthleteType[AthleteType.MIDDLE_DISTANCE_RUNNER] as unknown:
        translator = MIDDLE_DISTANCE_RUNNER_TRANSLATION;
        break;
      case AthleteType.LONG_DISTANCE_RUNNER:
      case AthleteType[AthleteType.LONG_DISTANCE_RUNNER] as unknown:
        translator = LONG_DISTANCE_RUNNER_TRANSLATION;
        break;
      case AthleteType.HURDLER:
      case AthleteType[AthleteType.HURDLER] as unknown:
        translator = HURDLER_TRANSLATION;
        break;
      case AthleteType.LONG_JUMPER:
      case AthleteType[AthleteType.LONG_JUMPER] as unknown:
        translator = LONG_JUMPER_TRANSLATION;
        break;
      case AthleteType.TRIPLE_JUMPER:
      case AthleteType[AthleteType.TRIPLE_JUMPER] as unknown:
        translator = TRIPLE_JUMPER_TRANSLATION;
        break;
      case AthleteType.HIGH_JUMPER:
      case AthleteType[AthleteType.HIGH_JUMPER] as unknown:
        translator = HIGH_JUMPER_TRANSLATION;
        break;
      case AthleteType.POLE_VAULT_JUMPER:
      case AthleteType[AthleteType.POLE_VAULT_JUMPER] as unknown:
        translator = POLE_VAULT_JUMPER_TRANSLATION;
        break;
      case AthleteType.SHOT_PUTTER:
      case AthleteType[AthleteType.SHOT_PUTTER] as unknown:
        translator = SHOT_PUTTER_TRANSLATION;
        break;
      case AthleteType.DISCUS_THROWER:
      case AthleteType[AthleteType.DISCUS_THROWER] as unknown:
        translator = DISCUS_THROWER_TRANSLATION;
        break;
      case AthleteType.JAVELIN_THROWER:
      case AthleteType[AthleteType.JAVELIN_THROWER] as unknown:
        translator = JAVELIN_THROWER_TRANSLATION;
        break;
      case AthleteType.HAMMER_THROWER:
      case AthleteType[AthleteType.HAMMER_THROWER] as unknown:
        translator = HAMMER_THROWER_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): AthleteType[] {
    return [AthleteType.SPRINTER, AthleteType.MIDDLE_DISTANCE_RUNNER, AthleteType.LONG_DISTANCE_RUNNER,
      AthleteType.HURDLER, AthleteType.LONG_JUMPER, AthleteType.TRIPLE_JUMPER,
      AthleteType.HIGH_JUMPER, AthleteType.POLE_VAULT_JUMPER, AthleteType.SHOT_PUTTER,
      AthleteType.DISCUS_THROWER, AthleteType.JAVELIN_THROWER, AthleteType.HAMMER_THROWER];
  }

}
