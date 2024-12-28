export const getUser = async () =>{
    const response = await fetch("https://randomuser.me/api/", {
        method: "Get",
    })
    return await response.json();
}

