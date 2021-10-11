export enum Gender {

  FEMALE,
  MALE,
  UNKNOWN

}

export namespace Gender {

  const FEMALE_TRANSLATION = "Kobieta";
  const MALE_TRANSLATION = "Mężczyzna";
  const UNKNOWN_TRANSLATION = "Nieznana";

  export function translate(gender: Gender | null): string {
    let translator: string;
    switch (gender) {
      case Gender.FEMALE:
        translator = FEMALE_TRANSLATION;
        break;
      case Gender.MALE:
        translator = MALE_TRANSLATION;
        break;
      case Gender.UNKNOWN:
        translator = UNKNOWN_TRANSLATION;
        break;
      default:
        translator = "";
        break;
    }
    return translator;
  }

  export function values(): Gender[] {
    return [Gender.FEMALE, Gender.MALE, Gender.UNKNOWN];
  }

}
