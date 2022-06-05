export enum GenderEnum {
    MALE,
    FEMALE,
    OTHER,
    PREFER_NOT_TO_SAY,
    CUSTOM
}

export class AppUser {

    id           : number;
    username     : string;
    email        : string;
    firstName    : string;
    lastName     : string;
    age          : string;
    gender       : GenderEnum;
    customGender : string | null;
    account      : AppAccount;


    constructor(id: number, username: string, email: string, firstName: string, lastName: string, age: string, gender: GenderEnum, customGender: string | null, account: AppAccount) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.customGender = customGender;
        this.account = account;
    }
}

export class CourseExercise {
    constructor(id: number, programmingLanguage: ProgrammingLanguageEnum, description: string, exceptedResult: string, tips: string) {
        this.id = id;
        this.programmingLanguage = programmingLanguage;
        this.description = description;
        this.exceptedResult = exceptedResult;
        this.tips = tips;
    }
    id                  : number;
    programmingLanguage : ProgrammingLanguageEnum;
    description         : string;
    exceptedResult      : string;
    tips                : string;
}

export class CourseChapter {
    constructor(id: number, course: Course, video: string, courseExercises: CourseExercise[]) {
        this.id = id;
        this.course = course;
        this.video = video;
        this.courseExercises = courseExercises;
    }
    id              : number;
    course          : Course;
    video           : string;
    courseExercises : CourseExercise[];
}

export class Course {
    constructor(id: number, author: AppUser, courseChapters: CourseChapter[], playlist: Playlist[], programmingLanguages: ProgrammingLanguageEnum[]) {
        this.id = id;
        this.author = author;
        this.courseChapters = courseChapters;
        this.playlist = playlist;
        this.programmingLanguages = programmingLanguages;
    }
    id                   : number;
    author               : AppUser;
    courseChapters       : CourseChapter[];
    playlist             : Playlist[];
    programmingLanguages : ProgrammingLanguageEnum[];
}

export enum ProgrammingLanguageEnum {
    JAVA,
    CS,
    CPP,
    PYTHON,
    JS,
    HTML,
    CSS,
    C
}

export class Playlist {
    constructor(id: number, name: string, courses: Course[], description: string, programmingLanguage: ProgrammingLanguageEnum) {
        this.id = id;
        this.name = name;
        this.courses = courses;
        this.description = description;
        this.programmingLanguage = programmingLanguage;
    }
    id                  : number;
    name                : string;
    courses             : Course[];
    description         : string;
    programmingLanguage : ProgrammingLanguageEnum

}

export enum AccountType {
    FREE,
    PREMIUM
}

export class AppAccount {

    id             : number;
    owner          : AppUser;
    courses        : Course[];
    playlists      : Playlist[];
    accountType    : AccountType;
    linkedAccounts : null; // TODO

    constructor(id: number, owner: AppUser, courses: Course[], playlists: Playlist[], accountType: AccountType, linkedAccounts: null) {
        this.id = id;
        this.owner = owner;
        this.courses = courses;
        this.playlists = playlists;
        this.accountType = accountType;
        this.linkedAccounts = linkedAccounts;
    }
}