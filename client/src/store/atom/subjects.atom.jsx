import { atom } from "recoil";

export const sub = atom({
    key: 'sub',
    default: [{
        id: 1,
        name: "Math",
        credits: 3,
        teachers: "John Doe",
        teacherId: 1,
        applicationStatus: "Approved",
        slot: "A1, A2, A3",
    },
    {
        id: 2,
        name: "Chemistry",
        credits: 3,
        teachers: "John Doe",
        teacherId: 1,
        applicationStatus: "Pending",
        slot: "B1, B2, B3",
    },
    {
        id: 3,
        name: "Physics",
        credits: 3,
        teachers: "John Doe",
        teacherId: 1,
        applicationStatus: "No",
        slot: "C1, C2, C3",
    },
    {
        id: 4,
        name: "Bio",
        credits: 3,
        teachers: "John Doe",
        teacherId: 1,
        applicationStatus: "Approved",
        slot: "D1, D2, D3",
    }],
});