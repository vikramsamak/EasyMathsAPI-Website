async function req() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  //console.log(num1, num2);

  url = "https://easymathsapi-website.herokuapp.com/calc/?num1=" + num1 + "&num2=" + num2;

  const options = {
    method: "GET",
    headers: { "Access-Control-Allow-Origin": "*" },
  };

  const response = await fetch(url, options).then((response) => {
    return response.json();
  });
 
  document.getElementById("add").value = response.ADDITION;
  console.log(typeof(response.ADDITION));
  document.getElementById("sub").value = response.SUB;
  document.getElementById("mul").value = response.MULTIPLICATION;
  document.getElementById("div").value = response.DIV;
}

