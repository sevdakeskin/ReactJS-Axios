import React from "react"
import axios from "axios"

//     const response = await axios.get('https://api.npms.io/v2/search?q=react');


function Users() {

    // useState
    const [data, setData] = React.useState([]);
    const [products,setProducts] = React.useState([]);

    // let users =[];

    async function getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');

        setData(response.data);
        console.log(response.data);
    }

    getUsers();
    console.log("data",data);

    //data ? True :False
    return (

        <div>
            <ul>
                {
                  data?.map((item) => (
                    <>
                      <li>{item.name}</li>
                      <li>{item.email}</li>
                    </>
                ))

              }
            </ul>
        </div>
    )
}
export default Users;
