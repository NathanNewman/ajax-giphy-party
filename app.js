let search = "";

$("#giphyParty").submit(function (event) {
  event.preventDefault();
  search = $("#inputData").val();
  getGif();
});

async function getGif() {
  const response = await axios.get(
    "http://api.giphy.com/v1/gifs/search?q=" +
      `${search}` +
      "&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
  );
  console.log(response.data.data[1].images.original.url);
  let img = $("<img>", {
    src: response.data.data[1].images.original.url,
    height: 300,
    width: 300,
  });
  img.appendTo($("#gifArea"));
  console.log(img);
  // addGif(response.data);
}
