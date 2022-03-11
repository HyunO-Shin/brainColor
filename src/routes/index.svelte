<script>
  import { goto } from "$app/navigation"; // 화면 이동을 위한 goto 함수 사용 선언
  //import { scoreList } from "$lib/store.js";  // 몽고db cloud 사용으로 스토어는 사용 안 함.
  import { onMount } from "svelte";

  async function getPosts() {
    // 데이터 조회 함수
    const res = await fetch("/api/score", { method: "GET" });
    const json = await res.json();
    return json.list;
  }

  let promisePosts = []; // 서버의 데이터 수신 감지 promise 변수

  onMount(() => {
    // 화면 한번 실행될 때 점수 가져오려고.
    promisePosts = getPosts(); // Type 'Promise<any>' 경고는 뜨는데 실행은 이상 없음.
    console.log("index Mounted");
  });
</script>

<svelte:head>
  <title>Brain Color</title>
</svelte:head>

<h1 style="text-align:center;">두뇌 개발 게임</h1>
<h3 style="text-align:center;">이번 주의 점수</h3>
<table style="width:100%;">
  <thead>
    <tr>
      <th>No</th>
      <th>점수</th>
      <th>이름</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="text-align:center;">============</td>
      <td style="text-align:center;">============</td>
      <td style="text-align:center;">============</td>
    </tr>

    <!-- {#each $scoreList as item, index}
      <tr>
        <td style="text-align:center;">{index + 1}</td>
        <td style="text-align:center;">{item.score}</td>
        <td style="text-align:center;">{item.name}</td>
      </tr>
    {/each} -->
    {#await promisePosts}
      <tr>
        <td colspan="3" style="text-aling:center;">
          <h4>최신 점수를 가져오는 중.. 잠시만 기다리세요</h4>
        </td>
      </tr>
    {:then list}
      {#each list as item, index}
        <tr>
          <td style="text-align:center;">{index + 1}</td>
          <td style="text-align:center;">{item.score}</td>
          <td style="text-align:center;">{item.name}</td>
        </tr>
      {/each}
    {/await}
  </tbody>
</table>

<!-- 게임하기 화면으로 이동 버튼 -->
<p style="text-align:center;">
  <button
    style="width:100%;height:60px;font-weight:bold;font-size:30px"
    on:click={() => {
      goto("/quiz");
    }}>게임하기</button
  >
</p>
