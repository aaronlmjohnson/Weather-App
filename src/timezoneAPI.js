const timeZoneAPI = (()=>{
    const _setUrl = (lat, long)=>{
        return `https://api.timezonedb.com/v2.1/get-time-zone?key=VCKXXXM1Y2IH&format=json&by=position&lat=${lat}&lng=${long}`
    };

    const getTimeZoneData = async (lat, long) =>{
        const url = _setUrl(lat, long);

        const response = await fetch(url, {mode: 'cors'});
        const timezoneData = await response.json();
        return timezoneData;
    }

    return {
        getTimeZoneData
    }
})();

export default timeZoneAPI;