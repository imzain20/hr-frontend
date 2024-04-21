import { useEffect, } from "react";
import { useUserState } from "../../redux/userSlice";
import { useGetFormByIdQuery } from "../../redux/apic";
import RenderForm from "./RenderForm";
 
const PersonalInformation = () => {
  const userState = useUserState();
  const { data, refetch } = useGetFormByIdQuery({
    token: userState.token,
    id:'660fd2cc47981af65f8a7a08'
 
  });
  useEffect(() => {
    refetch();
  }, []);
 
 
  console.log(data);
  return <div style={{backgroundColor:"white"}}>
  <RenderForm formfields={data?.data?.formFields}/>
  </div>;
};
 
export default PersonalInformation;