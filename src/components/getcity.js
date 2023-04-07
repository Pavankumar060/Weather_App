import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GetCityname } from "./apis";

const GetCity =({onSearch})=>{

        const [search ,setSearch] = useState();

        const handleOnchange =(data)=>{
            setSearch(data);
            onSearch(data);
        }

        const loadOptions = async(input)=>{
            
            try {
                const response = await  GetCityname(input);
                
                return{
                    options : response.data.data.map((city)=>{
                        return{
                            value: `${city.latitude} ${city.longitude}`,
                            label:`${city.name} , ${city.countryCode}`
                        }   
                     })
                }
            } catch (error) {
                console.log(error);
            }
           
        }
    return(
        <>
        <div className="search">
            <AsyncPaginate 
                id="input"
                placeholder="Search your City"
                debounceTimeout={400}
                value={search}
                onChange={handleOnchange}
                loadOptions={loadOptions}
            />
    
        </div>
        
        </>
    )
}

export default GetCity;