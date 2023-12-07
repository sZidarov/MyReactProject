export default function checkForExistingReservation(newResrvationArr, existingReservations) {
    const formatedExistingDateArr = Object.keys(Object.values(existingReservations)[0])
    for (const newDate of newResrvationArr) {
        // console.log(newDate.toString());
        // console.log(formatedExistingDateArr);
        for (const existingDate of formatedExistingDateArr) {
            if (newDate.toString() === existingDate){
                console.log("matching date: ", newDate);
            }
        }
    }
}