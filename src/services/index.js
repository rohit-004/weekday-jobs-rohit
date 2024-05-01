
const fetchData = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      limit: 10,
      offset: 0
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw
    };
  
    return fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then((response) => response.json()) 
      .then((data) => data) // Return the data
      .catch((error) => console.error(error));
  };
  
  export { fetchData };