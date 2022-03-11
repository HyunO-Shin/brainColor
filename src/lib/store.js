import { writable } from "svelte/store";

// 현재 점수
export const score = writable(0);

// 점수 리스트
export const scoreList = writable([
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
]);

/* 몽고디비 insertMany 문장 만들기 
db.score.insertMany([
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
    {score: 0, name: "--"},
]);
*/

// 퀴즈 리스트
export const quizList = writable([
    { // no.1
        question: { color: "red", text: "green"},
        choice: [
            { color: "green", text: "yellow" },
            { color: "pink", text: "red" },
            { color: "blue", text: "purple" },
            { color: "yellow", text: "gray" },
        ]
    },
    { // no.2
        question: { color: "orange", text: "blue"},
        choice: [
            { color: "blue", text: "pink" },
            { color: "yellow", text: "red" },
            { color: "brown", text: "orange" },
            { color: "black", text: "yellow" },
        ]
    },
    { // no.3
        question: { color: "yellow", text: "purple"},
        choice: [
            { color: "purple", text: "pink" },
            { color: "orange", text: "yellow" },
            { color: "green", text: "brown" },
            { color: "gray", text: "black" },
        ]
    },
    { // no.4
        question: { color: "green", text: "black"},
        choice: [
            { color: "brown", text: "purple" },
            { color: "pink", text: "blue" },
            { color: "red", text: "green" },
            { color: "black", text: "red" },
        ]
    },
    { // no.5
        question: { color: "purple", text: "pink"},
        choice: [
            { color: "blue", text: "yellow" },
            { color: "black", text: "purple" },
            { color: "pink", text: "brown" },
            { color: "green", text: "orange" },
        ]
    },
    { // no.6
        question: { color: "blue", text: "red"},
        choice: [
            { color: "purple", text: "yellow" },
            { color: "red", text: "gray" },
            { color: "pink", text: "black" },
            { color: "brown", text: "blue" },
        ]
    },
    { // no.7
        question: { color: "black", text: "yellow"},
        choice: [
            { color: "green", text: "red" },
            { color: "yellow", text: "gray" },
            { color: "pink", text: "black" },
            { color: "orange", text: "purple" },
        ]
    },
    { // no.8
        question: { color: "brown", text: "green"},
        choice: [
            { color: "green", text: "black" },
            { color: "purple", text: "blue" },
            { color: "red", text: "brown" },
            { color: "pink", text: "gray" },
        ]
    },
    { // no.9
        question: { color: "gray", text: "blue"},
        choice: [
            { color: "blue", text: "yellow" },
            { color: "brown", text: "black" },
            { color: "red", text: "purple" },
            { color: "green", text: "gray" },
        ]
    },
    { // no.10
        question: { color: "pink", text: "purple"},
        choice: [
            { color: "purple", text: "yellow" },
            { color: "gray", text: "pink" },
            { color: "blue", text: "green" },
            { color: "yellow", text: "red" },
        ]
    },
]);