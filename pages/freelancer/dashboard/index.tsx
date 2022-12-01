import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";
import React, {  useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import nft from "../../../src/json/nft.json";
import FreelancerDashboardStyles from './dashboard.module.scss';
import { useRouter } from "next/router";

export default function FreelancerDashboard() {
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
      ];
      const router = useRouter();
      function getStyles(name: string, personName: string[], theme: Theme) {
        return {
          fontWeight:
            personName.indexOf(name) === -1
              ? theme.typography.fontWeightRegular
              : theme.typography.fontWeightMedium,
        };
      }
      const theme = useTheme();
      const [personName, setPersonName] = useState<string[]>([]);
      const handleclick=(type:string)=>{
      if(type==="marketplace"){
      router.push('/freelancer/dashboard/marketplace')
      }
      else if(type==="projects"){
        router.push('/freelancer/dashboard')
      }
      }
      const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    return (
        <>
 <div className="justify-center flex h-full w-full">
      <div className=" bg-[#171717] w-[90%] justify-center flex-col pt-10">
      <div className="flex gap-44 pl-8 pb-10 pr-10"> 
        <div className={FreelancerDashboardStyles.mainhead+ " text-white "}>
        ARMOR
        </div>
        <div className={FreelancerDashboardStyles.mainheads+ " text-white "}>
        Dashboard
        </div>
        </div>
        <div className=" flex ">
        <div className=" min-w-[350px] h-full pl-2 pt-0 ">
        <div className={" bg-[#171717] pt-0 w-[50%]"}>
        <div className={" p-2 flex flex-col h-[100vh] gap-8"}>
            <div className={FreelancerDashboardStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("projects")}>PROJECTS</button></p>
            </div>
            <div className={FreelancerDashboardStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("marketplace")}>MARKETPLACE</button></p>
            </div>
                </div>
                </div>
                </div>
                <div className="md:w-[95%] overflow-hidden gap-4 flex-col bg-[#2E2E2E] p-10">
    <div className={FreelancerDashboardStyles.sidehead+ " p-8 uppercase"}>
Available Projects
    </div>
    <div className={FreelancerDashboardStyles.projectlist}>
     <div className={" md:w-[95%] flex flex-col overflow-hidden gap-4 text-white p-4 b-1"}>
     <div className={FreelancerDashboardStyles.nftlist + " flex gap-4 justify-between"}>
      <span>COMPANY NAME</span>
      <span>PROJECT BUDGET</span>
      <span>PROJECT STATUS</span>
      </div>
        {nft.map((item,index)=>( 
       <div className={FreelancerDashboardStyles.nftlist + " flex gap-4 justify-between"}>
        <div>
        {item["company name"]}
        </div>
        <div>
        {item.budget}
        </div>
        <div>
        {item.email}
        </div>
        </div>
        ))}
        </div>
        </div>
        </div>
        </div>
        </div>
    </div>
        </>
    )
}