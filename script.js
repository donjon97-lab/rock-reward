const params = new URLSearchParams(window.location.search);
const user = params.get("user");

// rockId dari URL = "126"
const rockNumber = parseInt(params.get("rockId"), 10);

// ubah jadi "rock126"
const rockId = `rock${String(rockNumber).padStart(3, "0")}`;

fetch("rocks.json")
  .then(res => res.json())
  .then(rocks => {
    const rock = rocks.find(r => r.id === rockId);
    if (!rock) {
      console.error("Rock not found:", rockId);
      return;
    }

    const img = document.getElementById("rockImage");
    const text = document.getElementById("resultText");
    const container = document.getElementById("container");

    img.src = rock.imgUrl;
    text.innerText = `${user} got ${rock.rockName}`;

    container.classList.remove("hidden");
  });
