var html = "";
var css = "";
var js = "";

var htmlb = "";
var cssb = "";
var jsb = "";

setInterval(() => {
  const htmli = document.getElementById("htmli");
  const cssi = document.getElementById("cssi");
  const jsi = document.getElementById("jsi");
  htmlb = htmli.value;
  cssb = cssi.value;
  jsb = jsi.value;

  if (htmlb == html) {
    // html = htmlb;
  } else {
    html = htmlb;
    gan();
  }
  if (cssb == css) {
    // css = cssb;
  } else {
    css = cssb;
    gan();
  }
  if (jsb == js) {
    // js = jsb;
  } else {
    js = jsb;
    gan();
  }
}, 1000);

var akhirjs = "<" + "/" + "s" + "c" + "r" + "i" + "p" + "t" + ">";
let urls = "";
function gan() {
  var htmlctn =
    html + "\n<style>" + css + "</style>" + "\n<script>" + js + akhirjs;

  // console.log(htmlctn);
  const blob = new Blob([htmlctn], { type: "text/html" });
  const url = URL.createObjectURL(blob);
  const ifram = document.getElementById("ifram");
  ifram.src = url;
  // window.open(url);
  urls = url;
}
function buka() {
  window.open(urls);
}
