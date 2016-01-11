function drawGrid() {
  var htmlString = "<table class='grid'>";
  for (var i = 0; i < 8; i++) {
    htmlString += "<tr>";
    for (var j = 0; j < 8; j++) {
      htmlString += ("<td class='cell' id='" + i + j + "'</td>");
    }
    htmlString += "</tr>";
  }
  htmlString += "</table>";
  $(".playing-grid").html(htmlString);
}

player = "rgb(0, 0, 0)";

function opposite(player) {
  if (player === "rgb(0, 0, 0)") {
    var opposingPlayer = "rgb(255, 255, 255)";
  } else if (player === "rgb(255, 255, 255)") {
    var opposingPlayer = "rgb(0, 0, 0)";
  }
  return opposingPlayer;
}

function placeClickHandler() {
  $('.grid').click(function(event) {
    console.log(typeof event.target);
    console.log(event);
    console.log(event.target.id);
    var player = $('.everything').css("background-color");
    console.log("Player on click", player);
    play(player, event.target.id);
    return (event.target.id);
  });
}

function checkValidMove(player, cellId) {
  var opposingPlayer = opposite($(".everything").css("background-color"));

  console.log(opposingPlayer);

  if (
    // $('#' + (cellId + 10)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 10)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 10)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 1)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 1)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 11)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 11)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 9)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 9)).css('background-color') === opposingPlayer
  ) {
    console.log("valid move");
    return true;
  } else {
    console.log("invalid move");
    return false;
  }
}

function checkNextPiece(player, cellId) {
  var opposingPlayer = opposite($(".everything").css("background-color"));

  console.log(opposingPlayer);

  if
    (
      // $('#' + (cellId + 10)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 20)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 20)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 2)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 2)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 22)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 22)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) + 18)).css('background-color') === opposingPlayer ||
    $('#' + (parseInt(cellId) - 18)).css('background-color') === opposingPlayer
  ) {
    console.log("valid move");
    return true;
  } else {
    console.log("invalid move");
    return false;
  }
}


function turnBlack(cellId) {
  $("#" + cellId).css({
    "background-color": "rgb(0, 0, 0)"
  });
}

function turnWhite(cellId) {
  $("#" + cellId).css({
    "background-color": "rgb(255, 255, 255)"
  });
}

function turnGreen() {
  $("td").css({
    "background-color": "green"
  });
}

var player = 'rgb(0, 0, 0)';

function getColorofCell(cellId) {
  var colorOfCell = $('#' + parseInt(cellId)).css('background-color');
  console.log(colorOfCell);
  return colorOfCell;
}

function play(player, cellId) {
  console.log($('#' + (parseInt(cellId) - 9)).css('background-color'));
  console.log("plauer is: " + player);

  if (getColorofCell(cellId) === 'rgb(0, 0, 0)' || getColorofCell(cellId) === 'rgb(255, 255, 255)') {
    throw "Can't do that, the square is already taken";
  }

  if (checkValidMove(player, cellId) === true && checkNextPiece(player, cellId)) {

    // if (
    //   $('#' + (parseInt(cellId) - 9)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) + 9)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) - 1)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) + 1)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) - 10)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) + 10)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) - 11)).css('background-color') === player ||
    //   $('#' + (parseInt(cellId) + 11)).css('background-color') === player
    // )
    {

      $('#' + (cellId)).css({
        "background-color": player
      });

      if (player === 'rgb(0, 0, 0)') {
        player = 'rgb(255, 255, 255)';
        $(".everything").css({
          "background-color": "rgb(255, 255, 255)"
        });
        console.log("player: ", player);
      } else if (player === 'rgb(255, 255, 255)') {
        player = 'rgb(0, 0, 0)';
        $(".everything").css({
          "background-color": "rgb(0, 0, 0)"
        });
        console.log("player: ", player);
      }
    }

    // else {
    //   throw "Can't do that, you don't have the right pieces around you."
    // }
  }
}
