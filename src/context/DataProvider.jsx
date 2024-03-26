import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null);


const DataProvider = ({children})=>{
    const [account,setAccount] = useState('');
    const [qty, setQty] = useState(1);
    const [user,setUser] = useState(null)

    const URL = process.env.REACT_APP_APP_URL;
  
    const getUserData = async () => {
        try {
          const authToken = localStorage.getItem("token");
          if (authToken !== null) {
            let response = await fetch(`${URL}/getuser`, {
              method: "GET",
              headers: {
                "auth-token": authToken,
              },
            });


            const userDetails = await response.json();
            
            setUser(userDetails.firstname);
          } else {
            setUser(null);
          }
        } catch (error) {
          console.error("Error retrieving user data:", error);
        }
      };

      useEffect(()=>{
        getUserData()
     },[])
 


    return(
        <DataContext.Provider  value={{account,setAccount,qty,setQty,user,setUser,getUserData}}>
           {children}
        </DataContext.Provider>
    )


}

export default DataProvider;