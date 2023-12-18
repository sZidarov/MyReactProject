import * as request from "../lib/request";

// const baseUrl = "http://localhost:3030/data/comments";
const baseUrl = `${import.meta.env.VITE_API_URL}/data/comments`

export const getAll = async (roomId) => {
    const query = new URLSearchParams ({   // This is used for building query parameters without need to encode them yourself
        where:`roomId="${roomId}"`,
        load: `owner=_ownerId:users`,
    })
    const result = await request.get(`${baseUrl}?${query}`);

    return result;
};

export const create = async (roomId, text) => {
    const newComment = await request.post(baseUrl, {
        roomId,
        text,
    });

    return newComment;
};
