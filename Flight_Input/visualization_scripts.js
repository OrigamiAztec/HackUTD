console.log("testing");

if ('geolocation' in navigator){
    console.log('geolocation available');
    navigator.geolocation.getCurrentPosition(async position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log(lat);
        console.log(lon);
    });
}else{
    console.log('geolocation not available');
}

