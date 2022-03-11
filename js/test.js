const url =
  "https://www.rightdev.co.uk/include-functions/viewed-business.php?email=samiahmed0f0@gmail.com&ip=2a00:23c8:8789:9801:516d:33e3:afe4:2a3c";

// fetching data
axios.get(url).then((res) => console.log(res.data));
