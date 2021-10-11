export enum SessionType {

  FITNESS,
  ENDURANCE_STRENGTH,
  JUMPING,
  REGENERATION,
  RESILIENCE,
  SPEED,
  SPEED_ENDURANCE,
  STRENGTH

}

export namespace SessionType {

  const FITNESS_TRANSLATION = "Sprawność";
  const ENDURANCE_STRENGTH_TRANSLATION = "Siła wytrzymałościowa";
  const JUMPING_TRANSLATION = "Skoczność";
  const REGENERATION_TRANSLATION = "Regeneracja";
  const RESILIENCE_TRANSLATION = "Wytrzymałość";
  const SPEED_TRANSLATION = "Szybkość";
  const SPEED_ENDURANCE_TRANSLATION = "Wytrzymałość szybkościowa";
  const STRENGTH_TRANSLATION = "Siła";

  export function translate(type: SessionType | null): string {
    let translator: string;
    switch (type) {
      case SessionType.FITNESS:
      case SessionType[SessionType.FITNESS] as unknown:
        translator = FITNESS_TRANSLATION;
        break;
      case SessionType.ENDURANCE_STRENGTH:
      case SessionType[SessionType.ENDURANCE_STRENGTH] as unknown:
        translator = ENDURANCE_STRENGTH_TRANSLATION;
        break;
      case SessionType.JUMPING:
      case SessionType[SessionType.JUMPING] as unknown:
        translator = JUMPING_TRANSLATION;
        break;
      case SessionType.REGENERATION:
      case SessionType[SessionType.REGENERATION] as unknown:
        translator = REGENERATION_TRANSLATION;
        break;
      case SessionType.RESILIENCE:
      case SessionType[SessionType.RESILIENCE] as unknown:
        translator = RESILIENCE_TRANSLATION;
        break;
      case SessionType.SPEED:
      case SessionType[SessionType.SPEED] as unknown:
        translator = SPEED_TRANSLATION;
        break;
      case SessionType.SPEED_ENDURANCE:
      case SessionType[SessionType.SPEED_ENDURANCE] as unknown:
        translator = SPEED_ENDURANCE_TRANSLATION;
        break;
      case SessionType.STRENGTH:
      case SessionType[SessionType.STRENGTH] as unknown:
        translator = STRENGTH_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): SessionType[] {
    return [SessionType.FITNESS, SessionType.ENDURANCE_STRENGTH, SessionType.JUMPING, SessionType.REGENERATION,
      SessionType.RESILIENCE, SessionType.SPEED, SessionType.SPEED_ENDURANCE, SessionType.STRENGTH];
  }

}
