import { env } from '$env/dynamic/public'

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    console.log(env.PUBLIC_POCKETBASE_URL)
    return env.PUBLIC_POCKETBASE_URL + `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}