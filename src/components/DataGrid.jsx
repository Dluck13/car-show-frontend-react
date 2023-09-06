import  { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button, Snackbar } from '@mui/material';
import { SERVER_URL } from './Constants';
import AddCar from './AddCar';
import UpdateCar from './UpdateCar';



  
const DataGridComponent = () => {
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false)
    useEffect(()=>{
        
        
        fetchData()

    },[])
        //delete functionality
        const deleteCar = async (url)=>{
            if(window.confirm("Are you sure you want to remove this car❓")){
            try {
                const response = await fetch(url,{method: 'DELETE'})
                if(!response.ok){
                    throw new Error("Network Response is not ok")
                }
               await  fetchData()
                setOpen(true)             
            } catch (error) {
                console.error(error)
                
            }
        }}


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
          { field: 'make', headerName: 'Make', width: 200 },
          { field: 'model', headerName: 'Model', width: 200 },
          { field: 'color', headerName: 'Color', width: 200 },
          { field: 'registration', headerName: 'Registration', width: 200 },
          { field: 'year', headerName: 'Year', width: 200},
          { field: 'price', headerName: 'Price', width: 200 },
          {
            field: "update",
            headerName: "Update",
            sortable: false,
            filterable: false,
            renderCell: ( params ) =>(
           <UpdateCar  data={params.row} updateCar={updateCar} />
            )
          },
          {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            renderCell: (params) =>
              <Button onClick={()=>deleteCar(SERVER_URL+"cars/"+params.row.id)} style={{ fontWeight: 'bold', color: 'red' }}>Delete</Button>
          }
        ];

        const addCar = async(car)=>{
            try {

                const response = await fetch(SERVER_URL+'cars', {method: 'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(car)})
                if(!response.ok){
                    throw new Error("new car was not added")
                }
                await fetchData()

                
            } catch (error) {

                console.error(error)
                
            }
        }

        const updateCar = async(car, url)=>{
            try {

                const response = await fetch(url, {method: 'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(car)})
                if(!response.ok){
                    throw new Error("car was not updated")
                }
                await fetchData()

                
            } catch (error) {

                console.error(error)
                
            }
        }
        
        
  
    return (
      <div className='data-grid' style={{ height: 400, width: '100%' }}>
        <AddCar  addCar={addCar}/>
        
        <DataGrid
          rows={cars}
          columns={columns}
          getRowId={row=>row.id}
          style={{ fontWeight: 'bold' }}
          disableRowSelectionOnClick={true}
        />

        <Snackbar open={open} autoHideDuration={2000} onClose={()=>
        setOpen(false) 
        }   message="Car Removed" sx={{
            width: 400,
            color: "secondary",
            //backgroundColor: "green", This doesn't work
            "& .MuiSnackbarContent-root": { backgroundColor: "red" }
          }}/>

        
      </div>
    );
  };
  

  export default DataGridComponent;