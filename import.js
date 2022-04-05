function importNav() {
  navParent = document.getElementById("navParent");
  nav = document.createElement("div");
  nav.innerHTML = `
<link rel="stylesheet" href="main.css">
<div id="top" class="rounded-corners box bar">
    <div class="bar-title centered-svg-container">
        <h1 class="centered-svg" style="margin-left:10px;">Welcome to Akhil</h1>
    </div>
    <div class="bar-links">
        <a class="link top-link" href="./index.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <abbr title="Home Page">
                        <h5>Home Page</h5>
                    </abbr>
                </div>
            </div>
        </a>
        <a class="link top-link" href="./techtalks.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <abbr title="Tech Talks">
                        <h5>Tech Talks</h5>
                    </abbr>
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="./testplans.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <abbr title="Test Prep">
                        <h5>Test Prep</h5>
                    </abbr>
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="./sorts.html">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <abbr title="Sorts">
                        <h5>Sorts</h5>
                    </abbr> 
                </div>
            </div>
        </a>
        <a class="link bottom-link" href="https://github.com/algolg" alt="GitHub Profile" target="_blank" rel="noopener noreferrer" style="margin-right:0 !important;">
            <div class="centered-svg-container">
                <div class="centered-svg">
                    <abbr title="GitHub Profile">
                        <h5>GitHub Profile</h5>
                    </abbr> 
                </div>
            </div>
        </a>
    </div>
</div>
  `
  navParent.appendChild(nav);
}