fetch('script2.js')
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json(); 
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Request failed:', error);
    });
document.getElementById("wait").innerHTML = " " + data + " "; 