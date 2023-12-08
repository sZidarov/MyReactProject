const baseUrl = "http://localhost:3030/jsonstore/reservations";
import * as request from '../lib/request';

export const getAll = async () => {
    const result = await request.get(baseUrl)
    return result;
}

export const getOne = async (roomId) => {
    const result = await request.get(`${baseUrl}/${roomId}`);
    return result;
}

export const create = async (roomName) => {
    const result = await request.post(baseUrl, {[roomName]:{}});

    return result;
};

export const addNewReservation = async(roomId,roomName ,newData) => {
    const result = await request.put(`${baseUrl}/${roomId}`,{[roomName]:{...newData}, '_id':roomId})
    return result
}

