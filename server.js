
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const SCRIPT_URL =
"https://raw.githubusercontent.com/parthsahni88995-png/V8--SCRIPT/refs/heads/main/bY.13_PARTH";

const htmlPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EGO EMPIRE | Protector</title>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: white;
  background:
    radial-gradient(ellipse at top, #59431355, transparent 60%),
    #080807;
}

.card {
  width: 100%;
  max-width: 460px;
  padding: 45px 28px;
  text-align: center;
  border: 1px solid #e7b83c66;
  border-radius: 25px;
  background: linear-gradient(145deg,#d4a72b22,#ffffff08);
  backdrop-filter: blur(22px);
  box-shadow: 0 0 60px #d9a52b22;
}

.logo {
  width: 95px;
  height: 95px;
  margin: auto auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  background: linear-gradient(145deg,#e9c45b,#76510c);
  color: #080807;
  font-size: 36px;
  font-weight: 900;
}

h1 {
  font-size: 35px;
  letter-spacing: 3px;
  color: #f2cf71;
}

.subtitle {
  margin-top: 10px;
  color: #c7a94e;
  letter-spacing: 6px;
  text-transform: uppercase;
  font-size: 13px;
}

.line {
  width: 65px;
  height: 2px;
  margin: 27px auto;
  background: #e6b83b;
}

.tagline {
  color: #e7d8ad;
  font-size: 13px;
  line-height: 1.8;
}

.hindi {
  margin-top: 15px;
  color: #d6ad43;
  font-size: 14px;
  font-weight: bold;
}

button {
  width: 100%;
  margin-top: 35px;
  padding: 17px;
  border: 0;
  border-radius: 12px;
  background: linear-gradient(110deg,#a87912,#edc653);
  color: #100d06;
  font-size: 14px;
  font-weight: 900;
  letter-spacing: 1px;
  cursor: pointer;
}

button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px #d8a92f55;
}

#status {
  margin-top: 15px;
  color: #e7c65e;
  font-size: 12px;
}

.footer {
  margin-top: 30px;
  color: #77705c;
  font-size: 10px;
  letter-spacing: 2px;
}
</style>
</head>

<body>
<div class="card">

  <div class="logo">EE</div>

  <h1>EGO EMPIRE</h1>
  <div class="subtitle">Protector</div>

  <div class="line"></div>

  <p class="tagline">
    THIS SCRIPT PROTECTED BY EGO EMPIRE
  </p>

  <p class="hindi">
    Papa Ki Script Chori Kar Nai Sakta Bache
  </p>

  <button onclick="copyLoadstring()">
    COPY LOADSTRING
  </button>

  <div id="status"></div>

  <div class="footer">
    EGO EMPIRE © 2026
  </div>

</div>

<script>
async function copyLoadstring() {
  const link = location.origin + "/load";
  const code =
    'loadstring(game:HttpGet("' + link + '"))()';

  try {
    await navigator.clipboard.writeText(code);
    document.getElementById("status").textContent =
      "LOADSTRING COPIED SUCCESSFULLY!";
  } catch (e) {
    document.getElementById("status").textContent =
      "Clipboard unavailable. Please copy manually.";
  }
}
</script>
</body>
</html>`;

app.get("/load", async (req, res) => {

  const accept = req.headers.accept || "";
  const userAgent = req.headers["user-agent"] || "";

  const isBrowser =
    accept.includes("text/html") &&
    !/Roblox/i.test(userAgent);

  if (isBrowser) {
    return res.type("html").send(htmlPage);
  }

  try {
    const response = await fetch(SCRIPT_URL, {
      signal: AbortSignal.timeout(15000)
    });

    if (!response.ok) {
      return res.status(502).send("Script fetch failed.");
    }

    const script = await response.text();

    if (!script.trim()) {
      return res.status(502).send("Script is empty.");
    }

    res.set("Cache-Control", "no-store");
    return res.type("text/plain").send(script);

  } catch (error) {
    console.error(error);
    return res.status(502).send("Script server unavailable.");
  }
});

app.get("/", (req, res) => {
  res.redirect("/load");
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("EGO EMPIRE PROTECTOR RUNNING!");
});
