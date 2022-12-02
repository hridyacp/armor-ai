import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";
import React, {  useState,useRef,useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CreateProjectStyles from './createproject.module.scss';
import { useRouter } from "next/router";

export default function CreateProject() {
    const router = useRouter();
    const emailRef = useRef(null);
    const emailSpanRef = useRef(null);
    const budgetRef = useRef(null);
    const companyRef = useRef(null);
    const phoneRef = useRef(null);
    const [emailErr, setEmailErr] = useState<boolean>(false);
    const [companyErr, setcompanyErr] = useState<boolean>(false);
    const [contactErr, setcontactErr] = useState<boolean>(false);
    const [budgetErr, setbudgetErr] = useState<boolean>(false);
    const [fields, setFields] = useState({
      company: "",
      budget: "",
      contact: "",
      email: "",
    });
    const assignClasses = (emailval: string) => {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailval)
      ) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
      }
    };
    const assignClassesContact = (contactRef: string) => {
      if (
        /^[0-9]{10}$/.test(
          (contactRef)
        )
      ) {
        setcontactErr(false);
      } else {
        setcontactErr(true);
      }
    };
    const assignClassesbudget = (budgetRef: string) => {
      if (
        /^[0-9]+$/.test(
          budgetRef
        )
      ) {
        setbudgetErr(false);
      } else {
        setbudgetErr(true);
      }
    };
  
    const handleclick=(type:string)=>{
        if(type==="createproject"){
        router.push('/client/dashboard/createproject')
        }
        else if(type==="projects"){
          router.push('/client/dashboard')
        }
        }
        const handleInputChange = (
          event: React.ChangeEvent<HTMLInputElement>,
          inputType: string
        ) => {
          let updatedFields: any = {};
          updatedFields["company"] =
          inputType === "company" ? event.target.value : fields.company;
        updatedFields["budget"] =
          inputType === "budget" ? event.target.value : fields.budget;
          updatedFields["contact"] =
          inputType === "contact" ? event.target.value : fields.contact;
        updatedFields["email"] =
          inputType === "email" ? event.target.value : fields.email;
          setFields(updatedFields);
        };
        const mint=()=>{
          console.log(fields)
           if(fields.company ==='')
           setcompanyErr(true);
           if(fields.budget ==='')
          setbudgetErr(true);
           if(fields.contact ==='')
           setcontactErr(true);
            if (fields.email ==='') 
           setEmailErr(true);
            if(fields.contact!==''){
            assignClassesContact(fields.contact);
           }
            if(fields.email!==''){
            assignClasses(fields.email);
          }
          if(fields.company!==''){
            setcompanyErr(false);
          }
          if(fields.budget !==''){
            assignClassesbudget(fields.budget);
          }
           else{

           }
        }
        useEffect(() => {
        }, [fields]);
    return(<>
    <div className="justify-center flex h-full w-full">
      <div className=" bg-[#171717] w-[90%] justify-center flex-col pt-10">
        <div className="flex gap-44 pl-8 pb-10 pr-10"> 
        <div className={CreateProjectStyles.mainhead+ " text-white "}>
        ARMOR
        </div>
        <div className={CreateProjectStyles.mainheads+ " text-white "}>
        Dashboard
        </div>
        </div>
        <div className=" flex ">
        <div className=" min-w-[350px] h-full pl-2 pt-0 ">
        <div className={" bg-[#171717] pt-0 w-[50%]"}>
            <div className={" p-2 flex flex-col h-[100vh] gap-8"}>
            <div className={CreateProjectStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("projects")}>PROJECTS</button></p>
            </div>
            <div className={CreateProjectStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("createproject")}>CREATE PROJECT</button></p>
            </div>
                </div>
                </div>
                </div>
                <div className="md:w-[95%] overflow-hidden gap-4 flex-col bg-[#2E2E2E]">
                <div className={CreateProjectStyles.limiter+" h-full p-4"}>
		
			<div className={CreateProjectStyles.wraplogin100+"  w-full"}>
				<span className={CreateProjectStyles.login100formtitle+" p-b-41"}>
					Create Project
				</span>
				<div className={CreateProjectStyles.login100form + " p-b-33 p-t-5"}>
        <div className={ " flex flex-col gap-2 p-6 justify-center"}>
          <div  className="text-center justify-center p-1">
						<input defaultValue={fields.company} className={CreateProjectStyles.input100} placeholder="Company name" onChange={(e) => handleInputChange(e, "company")} required/> 
	{companyErr &&
  <span className="text-red-600 text-md">Please add company name</span>}
  </div>
  <div  className="text-center justify-center p-1">
          <input defaultValue={fields.budget} className={CreateProjectStyles.input100} placeholder="Budget" onChange={(e) => handleInputChange(e, "budget")} requi-600/>
          {budgetErr &&
  <span className="text-red-600 text-md">Please add budget</span>}
      </div>
      <div  className="text-center justify-center p-1">           
          <input defaultValue={fields.contact} className={CreateProjectStyles.input100} placeholder="Contact Number" onChange={(e) => handleInputChange(e, "contact")} required/>
          {contactErr &&
  <span className="text-red-600 text-md">Please add valid contact number</span>}
    </div>
    <div  className="text-center justify-center p-1">       
          <input defaultValue={fields.email} className={CreateProjectStyles.input100} placeholder="Email" onChange={(e) => handleInputChange(e, "email")} required/>
          {emailErr &&
  <span className="text-red-600 text-md">Please add valid Email Id</span>}
          </div>
					</div>
					<div className={CreateProjectStyles.containerlogin100formbtn+" p-4"}>
                    <button className={CreateProjectStyles.login100formbtn} onClick={()=>mint()}>
              Mint
            </button>
					</div>

				</div>
		
		</div>
	</div>
                </div>
                </div>
                </div>
                </div>
                </>)
}