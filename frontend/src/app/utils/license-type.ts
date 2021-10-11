export enum LicenseType {

  FIRST,
  SECOND,
  MASTER

}

export namespace LicenseType {

  const FIRST_TRANSLATION = "Pierwsza klasa";
  const SECOND_TRANSLATION = "Druga klasa";
  const MASTER_TRANSLATION = "Klasa mistrzowska";

  export function translate(type: LicenseType | null): string {
    let translator: string;
    switch (type) {
      case LicenseType.FIRST:
      case LicenseType[LicenseType.FIRST] as unknown:
        translator = FIRST_TRANSLATION;
        break;
      case LicenseType.SECOND:
      case LicenseType[LicenseType.SECOND] as unknown:
        translator = SECOND_TRANSLATION;
        break;
      case LicenseType.MASTER:
      case LicenseType[LicenseType.MASTER] as unknown:
        translator = MASTER_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): LicenseType[] {
    return [LicenseType.FIRST, LicenseType.SECOND, LicenseType.MASTER];
  }

}
