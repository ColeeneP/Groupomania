export interface createMessage {
    content: string,
    attachment: string,
}

export interface getAllMessages {
    idUSERS: string,
    content: string,
    attachment: string,
    likes: number,
}

export interface getOneMessage {
    idMESSAGES: string,
    idUSERS: string,
    content: string,
    attachment: string,
    likes: number,
}