const hospital_pages = {};

hospital_pages.base_url = "http://localhost/hospital-backend/";

hospital_pages.getAPI = async (api_url) => {
    try{
        return await axios(api_url);
    }catch(error){
        console.log("Error from GET API");
    }
}

hospital_pages.postAPI = async (api_url, api_data, api_token = null) => {
    try{
        return await axios.post(
            api_url,
            api_data,
            {
                headers:{
                    'Authorization' : "token " + api_token
                }
            }
        );
    }catch(error){
        console.log("Error from POST API");
    }
}

hospital_pages.loadFor = (page) => {
    eval("hospital_pages.load_" + page + "();");
}

hospital_pages.load_landing = async () => {
    const get_users_url = hospital_pages.base_url + "get_users.php";
    const response = await hospital_pages.getAPI(get_users_url);
    console.log(response.data);
}

hospital_pages.load_profile = () => {
    alert(x);
}


