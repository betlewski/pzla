export enum UserRole {

  NONE = "",
  ATHLETE = "ROLE_ATHLETE",
  TRAINER = "ROLE_TRAINER",
  CLUB = "ROLE_CLUB"

}

export namespace UserRole {

  export function parse(userRole: string): UserRole {
    if (userRole == UserRole.ATHLETE) {
      return UserRole.ATHLETE;
    } else if (userRole == UserRole.TRAINER) {
      return UserRole.TRAINER;
    } else if (userRole == UserRole.CLUB) {
      return UserRole.CLUB;
    } else {
      return UserRole.NONE;
    }
  }

}
