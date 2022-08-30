let search = "";

$("#giphyParty").submit(function (event) {
  event.preventDefault();
  search = $("#inputData").val();
  getGif();
});

$("#delete").on("click", function (event) {
  $("img").remove();
});

async function getGif() {
  const response = await axios.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      `${search}` +
      "&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  );
  let numMax = response.data.data.length;
  let randomNumber = Math.floor(Math.random() * numMax);
  console.log(response);
  let img = $("<img>", {
    src: response.data.data[randomNumber].images.original.url,
    height: 300,
    width: 300,
  });
  img.appendTo($("#gifArea"));
}
