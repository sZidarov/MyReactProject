export default function getReservationsCount(reservationsData) {
    const reservations = Object.values(reservationsData);
    let count = 0;
    for (const room of reservations) {
        const roomReservations = Object.values(room)[0];
        count += Object.keys(roomReservations).length;
    }
    return count;
}
