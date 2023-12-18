// const baseUrl = "http://localhost:3030/data/rooms";
const baseUrl = `${import.meta.env.VITE_API_URL}/data/rooms`;


import * as request from '../lib/request';

export const getAll = async () => {
    const result = await request.get(baseUrl);    // This works with the partial application done in request.js (the .bind stuff)
    return result;
}

export const getOne = async (roomId) => {
    const result = await request.get(`${baseUrl}/${roomId}`);
    return result;
}


export const create = async (roomData) => {
    const result = await request.post(baseUrl, roomData);

    return result;
};

export const edit = async (roomId, roomData) => {
    const result = await request.put(`${baseUrl}/${roomId}`, roomData);

    return result;
};

export const remove = async (roomId) => request.remove(`${baseUrl}/${roomId}`);