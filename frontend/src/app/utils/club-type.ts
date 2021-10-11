export enum ClubType {

  CITY,
  COUNTRY,
  ACADEMIC

}

export namespace ClubType {

  const CITY_TRANSLATION = "Miejski";
  const COUNTRY_SUBMISSION_TRANSLATION = "Ludowy";
  const ACADEMIC_TRANSLATION = "Akademicki";

  export function translate(type: ClubType | null): string {
    let translator: string;
    switch (type) {
      case ClubType.CITY:
      case ClubType[ClubType.CITY] as unknown:
        translator = CITY_TRANSLATION;
        break;
      case ClubType.COUNTRY:
      case ClubType[ClubType.COUNTRY] as unknown:
        translator = COUNTRY_SUBMISSION_TRANSLATION;
        break;
      case ClubType.ACADEMIC:
      case ClubType[ClubType.ACADEMIC] as unknown:
        translator = ACADEMIC_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): ClubType[] {
    return [ClubType.CITY, ClubType.COUNTRY, ClubType.ACADEMIC];
  }

}
