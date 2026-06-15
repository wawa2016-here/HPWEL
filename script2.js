async function sendData() {
    const myData = {
      PI:3.14159
    };

    try {
        const response = await fetch('script.js', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(myData) 
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Success:', result);

    } catch (error) {
        console.error('Error sending data:', error);
    }
}


sendData();
