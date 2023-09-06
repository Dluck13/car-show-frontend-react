import  { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { SERVER_URL } from './Constants';



  
const DataGridComponent = () => {
    const [cars, setCars] = useState([]);
    useEffect(()=>{
        
        
        fetchData()

    },[])
        //delete functionality
        const deleteCar = async (url)=>{
            try {
                const response = await fetch(url,{method: 'DELETE'})
                if(!response.ok){
                    throw new Error("Network Response is not ok")
                }
                fetchData()
                
            } catch (error) {
                console.error(error)
                
            }
        }


    async function fetchData(){
        try {
            const response = await fetch(SERVER_URL+"cars")
            if(!response.ok){
                throw new Error("Network Error")
            }
            const result = await response.json()
            console.log(result);
            setCars(result)
            
        } catch (error) {
            console.error("Error fetching cars data", error);
            
        }
    }

    
  
    // useEffect(() => {
    //   // Fetch your data here and populate 'rows' state
    //   // Example: fetch data from an API
    //   fetch('http://localhost:8080/cars')
    //     .then((response) => response.json())
    //     .then((data) => setCars(data))
    //     .catch((error) => console.error(error));
    // }, []);

    const columns = [
        //   { field: 'id', headerName: 'ID', width: 190 },
          { field: 'make', headerName: 'Make', width: 190 },
          { field: 'model', headerName: 'Model', width: 190 },
          { field: 'color', headerName: 'Color', width: 190 },
          { field: 'registration', headerName: 'Registration', width: 190 },
          { field: 'year', headerName: 'Year', width: 190},
          { field: 'price', headerName: 'Price', width: 190 },
          {
            field: "update",
            headerName: "Update",
            sortable: false,
            renderCell: ({ row }) =>
              <Button onClick={() => updateCar(row)} color="primary" style={{ fontWeight: 'bold' }}>
                Update
              </Button>,
          },
          {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) =>
              <Button onClick={()=>deleteCar(SERVER_URL+"cars/"+params.row.id)} color="warning" style={{ fontWeight: 'bold' }}>
                Delete
              </Button>
          }
        ];
        
  
    return (
      <div className='data-grid' style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={cars}
          columns={columns}
          getRowId={row=>row.id}
          style={{ fontWeight: 'bold' }}
        />
      </div>
    );
  };
  

  export default DataGridComponent;