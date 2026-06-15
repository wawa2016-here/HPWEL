const SUPABASE_URL = "https://supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_31VgpuLiZG2dbm0mWofi-g_RyZZ76WG";
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function loadData() {
    try {
        const { data, error } = await supabase
            .from('YOUR_CUSTOM_NAME_HERE') 
            .select('*');                 

        if (error) throw error;
        
        document.getElementById("wait").innerHTML = " " + JSON.stringify(data) + " "; 

    } catch (err) {
        console.error('Error getting data:', err.message);
        document.getElementById("wait").innerHTML = " Error loading data. ";
    }
}


loadData();
