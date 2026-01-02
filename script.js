const params = new URLSearchParams(window.location.search);
const user = params.get("user");
const rockId = params.get("rockId");

fetch("rocks.json")
  .then(res => res.json())
  .then(rocks => {
    const rock = rocks.find(r => r.id === rockId);
    if (!rock) return;

    const img = document.getElementById("rockImage");
    const text = document.getElementById("resultText");
    const container = document.getElementById("container");

    img.src = rock.imgUrl;
    text.innerText = `${user} got ${rock.rockName}`;

    container.classList.remove("hidden");
  });
