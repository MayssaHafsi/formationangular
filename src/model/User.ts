import { Role } from "./Role";

export class User{

    public id:number ; 
    public email:string ;
    public password:string;
    public firstName:string;
    public lastName:string;
    public address:string;
    public isAccountActivated:boolean;
    public isDeleted:boolean;
    public createdAt:Date;
    public updatedAt:Date;
    public roles: Set <Role>
}