async function sendData() {
    try {
        const { data, error } = await supabase
            .from('server2016')
            .insert([
                { custom_column: '1' } 
            ]);

        if (error) throw error;
        
        console.log('Successfully saved data to Supabase cloud!');

    } catch (err) {
        console.error('Error sending data:', err.message);
    }
}


sendData();
