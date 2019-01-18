// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
window.onload = function(){
    document.getElementById('header_divider').style.marginTop = document.getElementsByTagName('header')[0].getBoundingClientRect().height + "px";
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height=(window.innerHeight-document.getElementsByTagName('header')[0].getBoundingClientRect().height)+'px';
};
window.onresize = function(){
    //메인 webview 높이 맞춤
    document.getElementById('webview_main').style.height=(window.innerHeight-document.getElementsByTagName('header')[0].getBoundingClientRect().height)+'px';
};