export enum GroupType {

  RUNNING,
  JUMPING,
  TECHNICAL

}

export namespace GroupType {

  const RUNNING_TRANSLATION = "Dyscypliny biegowe";
  const JUMPING_TRANSLATION = "Dyscypliny skoczne";
  const TECHNICAL_TRANSLATION = "Dyscypliny techniczne";

  export function translate(type: GroupType | null): string {
    let translator: string;
    switch (type) {
      case GroupType.RUNNING:
      case GroupType[GroupType.RUNNING] as unknown:
        translator = RUNNING_TRANSLATION;
        break;
      case GroupType.JUMPING:
      case GroupType[GroupType.JUMPING] as unknown:
        translator = JUMPING_TRANSLATION;
        break;
      case GroupType.TECHNICAL:
      case GroupType[GroupType.TECHNICAL] as unknown:
        translator = TECHNICAL_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): GroupType[] {
    return [GroupType.RUNNING, GroupType.JUMPING, GroupType.TECHNICAL];
  }

}
