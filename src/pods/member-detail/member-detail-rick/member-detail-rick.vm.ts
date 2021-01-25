export interface MemberDetailRickEntity {
    id: string;
    name:string;
    status:string;
    image:string;
    species:string
    gender:string
  }
  
  export const createDefaultMemberDetailRick = () => ({
    id: "",
    name:"",
    status:"",
    image:"",
    species:"",
    gender:""
  });
  