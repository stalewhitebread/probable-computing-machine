$(function () {
  console.log("here");

  $.each(golfGames, (index, data) => {
    $("#gameRow").append(`
    <div class="col-sm-4 mx-auto mt-5">
        <div class="card">
          <h2 class="card-title"> ${golfGames[index].appName} </h2>
          <div class="card-body">Author: ${golfGames[index].author}</div>
          <div class="card-footer">
            <button class="btn btn-primary" > 
            <a href=${golfGames[index].url} style="color:whitesmoke" target="_blank">Game Link!</a>
            </button>
            <button class="btn btn-info" > 
            <a href=${golfGames[index].source} style="color:black;" target="_blank">Repo</a>
            </button>
          </div>
        </div>
      </div>
      `);
  });
});
