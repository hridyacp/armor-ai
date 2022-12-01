import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, SelectChangeEvent, Theme, useTheme } from "@mui/material";
import React, {  useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import nft from "../../../../src/json/nft.json";
import FreelancerMarketlaceStyles from './marketplace.module.scss';
import { useRouter } from "next/router";
export default function FreelancerMarketplace() {
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
      router.push('/freelancer/dashboard')
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
        <div className={FreelancerMarketlaceStyles.mainhead+ " text-white "}>
        ARMOR
        </div>
        <div className={FreelancerMarketlaceStyles.mainheads+ " text-white "}>
        Dashboard
        </div>
        </div>
        <div className=" flex ">
        <div className=" min-w-[350px] h-full pl-2 pt-0 ">
        <div className={" bg-[#171717] pt-0 w-[50%]"}>
        <div className={" p-2 flex flex-col h-[100vh] gap-8"}>
            <div className={FreelancerMarketlaceStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("projects")}>PROJECTS</button></p>
            </div>
            <div className={FreelancerMarketlaceStyles.sidemenu+ " p-2 "}>
              <p className="text-white mt-2.5 pl-2"><button onClick={()=>handleclick("marketplace")}>MARKETPLACE</button></p>
            </div>
                </div>
                </div>
                </div>
                <div className="md:w-[95%] overflow-hidden gap-4 flex-col bg-[#2E2E2E]">
      <div className="md:w-[95%] overflow-hidden gap-4">
      <div
            id="sortDropdownDiv"
            className="flex items-center sm:justify-center md:justify-between 2xs:p-0 lg:pr-6 p-8"
          >
            <div className="flex 2xs:flex-col 2xs:gap-4 md:flex-row 2xs:justify-center 2xs:items-center  lg:gap-8 w-full lg:justify-start  ">
            <div className="z-[3] b-1 bg-[#171717] ">
            <div className="m-auto p-2 bg-[#171717]  h-[60px] flex">
                      <input
                        type="text"
                        maxLength={40}
                        className={
                          " mt-2.5 pl-2 bg-gray-100 placeholder:text-gray-900"
                        }
                        placeholder="Search"
                        // onKeyDown={onKeyDown}
                      />
                      <div className="pt-5 pl-2 cursor-pointer">
                        <SearchIcon
                          onClick={() => {
                            // handleSearch();
                          }}
                          className="text-white"
                        />
                      </div>
                    </div>
                    </div>
            <div className="z-[2] b-1 bg-[#171717]">
            <FormControl sx={{ m: 1, width: 300, height: 1 }}>
        <InputLabel  sx={{color:"white"}} id="demo-multiple-name-label">Budget</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
       <div className="z-[1] b-1 bg-[#171717]">
      <FormControl sx={{ m: 1, width: 300, height: 1 ,border:"white"}}>
        <InputLabel  sx={{color:"white"}} id="demo-multiple-name-label">Date</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      </div>
      </div>
                </div>
     </div>
     <div className={" md:w-[95%] flex flex-col flex-wrap overflow-hidden gap-4  text-white p-4 b-1"}>
     <div className={FreelancerMarketlaceStyles.sidehead+ " p-8 uppercase"}>
     NFT MARKEPLACE
    </div>
    <div className={FreelancerMarketlaceStyles.projectlist+ " flex flex-wrap overflow-hidden gap-4 bg-[#171717] text-white p-4"}>
        {nft.map((item,index)=>( 
       <div className={FreelancerMarketlaceStyles.nftlist + " flex-col border-white b-1 border-solid"}>
        <div>
        {item["company name"]}
        </div>
        <div>
        {item.budget}
        </div>
        <div>
        {item.email}
        </div>
        <div>
        <button className={FreelancerMarketlaceStyles.bidbtn}>Make Offer</button>
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