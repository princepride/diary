import '../styles/index.scss';
import showdown from 'showdown';

var diaryContainer = document.getElementById("diary-container");
    var converter = new showdown.Converter();
    console.log(__filename);
    // Load diary content from .md file
    fetch("./diaryReadme/test.md")
      .then(response => response.text())
      .then(mdText => {
        // Convert .md to HTML
        var html = converter.makeHtml(mdText);
        // Insert HTML into diary container
        diaryContainer.innerHTML = html;
      });
