interface SanityBody{
    _createdAt:string;
    _id: string;
    _rev: string;
    _updatedAt:string;
}
interface Image{
    _type:"image",
    asset:{
        _ref:string;
        _type:'reference';
    }
}
export interface PageInfo extends SanityBody{
    type:"pageInfo",
    address:string,
    backgroudInformation:string;
    role:string;
    email:string;
    heroImage:Image;
    name:string;
    phoneNumber:string;
    profilePic:Image;
}
export interface Technology extends SanityBody{
    _type:'skills';
    image:Image;
    progress:number;
    title:string;
}
export interface Skill extends SanityBody{
    _type:'skills';
    image:Image;
    progress:number;
    title:string;
}
export interface Experience extends SanityBody{
    _type:'experienceInfo';
    company:string;
    dateStarted:Date;
    dateEnded:Date;
    isCurrentlyWorking:boolean;
    companyImage:Image;
    jobTitle:string;
    points:[];
    technologies:Technology[];
}
