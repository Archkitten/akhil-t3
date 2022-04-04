function importNav() {
  navParent = document.getElementById("navParent");
  nav = document.createElement("div");
  nav.innerHTML = `
<link rel="stylesheet" href="main.css">
<div id="top" class="rounded-corners box bar">
    <div class="bar-title">
        <h1>Welcome to Akhil</h1>
    </div>
    <div class="bar-links">
        <a class="link top-link" href="./index.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <h5 style="margin:10px">Home Page</h5>
                </div>
            </div>
        </a>
        <a class="link top-link" href="./techtalks.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <h5 style="margin:10px">Tech Talks</h5>
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="./testplans.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <h5 style="margin:10px">Test Prep</h5>
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="./sorts.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <h5 style="margin:10px">Sorts</h5>
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="https://github.com/algolg" alt="GitHub Profile" target="_blank" rel="noopener noreferrer" style="margin-right:0 !important;">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <h5 style="margin:10px">GitHub Profile</h5>
                </div>
            </div>
        </a>
    </div>
</div>
  `
  navParent.appendChild(nav);
}