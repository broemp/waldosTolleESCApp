// import { PUBLIC_POCKETBASE_URL } from '$env/static/public'

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj)
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `http://127.0.0.1:8090` + `/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`
}