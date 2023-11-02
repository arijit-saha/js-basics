async function fetchData() {
  console.log("data1");
  return "data2";
}
async function getData() {
  let data = await fetchData();
  console.log(data);
}
getData();