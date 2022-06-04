enum GenderEnum {
     MALE,
    FEMALE,
    OTHER,
    PREFER_NOT_TO_SAY,
    CUSTOM
}

class AppUser {

    id: number;
    username : string;
    email    : string;
    firstName: string;
    lastName : string;
    age      : string;
    gender   : GenderEnum;
    customGender : string | null;


    constructor(id: number, username: string, email: string, firstName: string, lastName: string, age: string, gender: GenderEnum, customGender: string | null) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.customGender = customGender;
    }
}

class Course {
}

enum ProgrammingLanguageEnum {
    JAVA,
    CS,
    CPP,
    PYTHON,
    JS,
    HTML,
    CSS,
    C
}

class Playlist {
    id: number;
    name: string;
    courses: Course[];
    description: string;
    programmingLanguage: ProgrammingLanguageEnum

}

enum AccountType {
    FREE,
    PREMIUM
}

class AppAccount {

    id: number;
    owner: AppUser;
    courses: Course[];
    playlists: Playlist[];
    accountType: AccountType;
    linkedAccounts: null;


    constructor(id: number, owner: AppUser, courses: Course[], playlists: Playlist[], accountType: AccountType, linkedAccounts: null) {
        this.id = id;
        this.owner = owner;
        this.courses = courses;
        this.playlists = playlists;
        this.accountType = accountType;
        this.linkedAccounts = linkedAccounts;
    }
}