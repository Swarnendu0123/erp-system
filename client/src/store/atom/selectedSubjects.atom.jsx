import { atom } from "recoil";

export const selectedSubjects = atom({
    key: 'selectedSubjects',
    default: [],
});