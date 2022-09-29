module.exports = getDate;

function getDate(){

    let today = new Date();

        let options = { 
            weekday: 'long',
            //year: 'numeric',
            month: 'long',
            day: 'numeric' 
        };

    let day = today.toLocaleString("en-US",options);

return day ;
}