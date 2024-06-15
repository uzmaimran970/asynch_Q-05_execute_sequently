// Question # 5
// Write a function executeSequentially that executes two functions fetchData and
// processData sequentially using Promises, and logs the results in the order they are
// called.

function executeSequentially(){

    let fetchData=()=>{
        return new Promise((res:any,rej:any)=>{
            res("data fetched successfully")

        })  
    };   
    let processData=()=>{
        return new Promise((res:any,rej:any)=>{
            rej("data process failed")

        })
        
    };
    fetchData().then((results)=>{
        console.log(results);
        processData().catch((err)=>{
            console.log(err)
        })
    })
}
executeSequentially();


