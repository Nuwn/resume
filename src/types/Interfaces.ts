export interface ILink {
    text: string;
    href: string;
    value: string;
    icon?: string
}

export interface IExperience{
    date: string;
    school?: string;
    company?: string;
    title: string;
    summary?: string;
    description?: string;
    tags?: string;
}

export interface IJobs {
    locale: string;
    title: string;
    jobTitle: string;
    jobs: IExperience[];
    internshipTitle: string;
    internships: IExperience[];
}

export interface IEducation {
    locale: string;
    title: string;
    courses: IExperience[];
}


export interface ISkillsData {
    title: string;
    data: ISkill[];
}

export interface ISkill {
    [x: string]: any;
    title: string;
    description?: string;
    level?: number;
}

export interface ISkills {
    locale: string;
    TechnicalSkills: ISkill[];
    SoftSkills: ISkillsData[];
    Certifications: ISkillsData[];
    Languages: ISkillsData[];
}

export interface ITranslation {
    locale: string;
    title: string;
    Skills: ISkills;
}




export interface ICircleData{ 
    [category: string]: number;
}