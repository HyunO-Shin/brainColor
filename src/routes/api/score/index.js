import { MongoClient } from "mongodb";  // mongodb 임포트
import { nanoid } from "nanoid";  // 랜덤 문자열 발생시켜주는 nanoid 추가. put()에서 사용

import { connectionString } from "$lib/dbURL.js";
const uri = connectionString;                       // 문자열 꺼내기

export async function get(request){
    const client = new MongoClient(uri);    // client 객체 생성
    let scoreList = [];                     // 결과 저장 배열
    try {
        await client.connect();             // db 연결
        const db = client.db("brainColor"); // brainColor 데이터베이스로 이동

        /* 데이터 가져오기 처리 코드 작성하기 */
        scoreList = await db.collection("score")    // 조회 대상 컬렉션
                            .find()                 // 조회 함수
                            .sort( {score: -1} )    // sort 옵션
                            .limit(10)              // 10건만 가져오기
                            .toArray();             // 배열로 변환

        return {
            status:200,
            body: {
                list: scoreList
            }
        }
    } catch (e) {
        return {
            status: 500,
            body: {
                list: [],
                msg: e.message
            }
        }
    } finally {
        await client.close();
        console.log("데이터베이스 Close - get()");
    }
 }

 export async function put({request}) {
     const client = new MongoClient(uri);       // client 객체 생성
     let rtn = {};                              // 결과 저장 객체
     //let score = JSON.parse(request.body);      // request body를 객체로 변환. 실행 에러남. To access the request body...
     let score = await request.json();      // 실행 에러 나서 구글링 후 이걸로 변경. put()내 파라미터도 {request}로 변경.

     console.log('SHO1 ', score);  // SHO added.

     /* 입력 형식 체크 */
     if (!score.name || !score.score) {
         console.log(score);
         throw "잘못된 형식입니다.";
     }
     score["_id"] = nanoid();  // _id 키를 추가하고, value로 연속 문자열을 추가함.

     console.log('SHO2 ', score);  // SHO added.
     try {
        await client.connect();                 // 데이터베이스 연결
        const db = client.db("brainColor");     // brainColor 데이터베이스로 이동

        /* 데이터 저장하기 코드 작성하기 */
        rtn = await db.collection("score").insertOne(score);  // db 삽입

        return {
            status: 200,
            body: {
                result: rtn
            }
        }
     } catch (e) {
        return {
            status: 500,
            body: {
                msg: e.message
            }
        }
     } finally {
        await client.close();
        console.log("데이터베이스 Close - put()");
     }
 }