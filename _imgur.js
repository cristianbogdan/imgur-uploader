document.title='API/PUM Imgur uploader';


document.head.insertAdjacentHTML
( 'afterbegin','<style>'
+'.loadingimg{width:12pt; height:12pt;}'
+'</style>'
);

function insertHTML(){
document.body.insertAdjacentHTML
( 'afterbegin',
  `<a href="http://proinfrastructura.ro"><img id="api" src="http://proinfrastructura.ro/images/logos/api/logo_api_portrait_big.png" width="50" style="float:right"/></a>
Alege imaginile de incarcat la imgur: <input type="file" multiple id="filez">
  <hr>
  Optional, o descriere pt fiecare poza:
  <hr>
<div id="photoz"></div>
<hr>
Cand toate pozele sunt vizibile mai sus, selecteaza textul si copiaza, sau apasa <button id="cpy" onClick="selectElementContents(\'forumtext-all\')">copy!</button>.<br>
  <pre id="forumtext-all" style="background:lightgrey" onClick="selectElementContents(\'forumtext-all\')"><span id="forumtext"></span>
[size=8pt]Powered by [URL=http://proinfrastructura.ro/poze.html]API/PUM imgur uploader[/URL][/size]</pre>
<hr>Atentie, se vor salva la imgur <a href="http://forum.peundemerg.ro/index.php?topic=176.msg190425#msg190425">informatii 
fotografice EXIF, inclusiv pozitia GPS</a>! 
Numele fisierului nu este salvat nicaieri. 
Daca sunt probleme cu uploader-ul, <a href="http://forum.peundemerg.ro/index.php?action=pm;sa=send;u=2034">PM cristi5</a>.
 `
)  ;
}

loadScript([
    "exif.js",
    insertHTML,
    "imgur-loaded.js"
], 0);


