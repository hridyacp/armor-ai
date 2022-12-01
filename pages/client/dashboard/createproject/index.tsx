import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";
import React, {  useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import CreateProjectStyles from './createproject.module.scss';
import { useRouter } from "next/router";

export default function CreateProject() {
    const router = useRouter();
    const handleclick=(type:string)=>{
        if(type==="createproject"){
        router.push('/client/dashboard/createproject')
        }
        else if(type==="projects"){
          router.push('/client/dashboard')
        }
        }
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
						<input className={CreateProjectStyles.input100} placeholder="Company name"/> 
	</div>
  <div  className="text-center justify-center p-1">
          <input className={CreateProjectStyles.input100} placeholder="Budget"/>
			</div>
      <div  className="text-center justify-center p-1">           
          <input className={CreateProjectStyles.input100} placeholder="Contact Number"/>
		</div>
    <div  className="text-center justify-center p-1">       
          <input className={CreateProjectStyles.input100} placeholder="Email"/>
          </div>
					</div>
					<div className={CreateProjectStyles.containerlogin100formbtn+" p-4"}>
                    <button className={CreateProjectStyles.login100formbtn}>
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