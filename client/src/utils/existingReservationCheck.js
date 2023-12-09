export default function checkForExistingReservation(
    newResrvationArr,
    existingReservations
) {
    let isExisting = false;
    let matchingDates = [];
    const formatedExistingDateArr = Object.keys(
        Object.values(existingReservations)[0]
    );
    for (const newDate of newResrvationArr) {
        for (const existingDate of formatedExistingDateArr) {
            if (newDate.toString() === existingDate) {
                isExisting = true;
                matchingDates.push(newDate);
            }
        }
    }
    return { isExisting, matchingDates };
}
