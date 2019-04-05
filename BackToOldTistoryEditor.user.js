// ==UserScript==
// @name Back to old tistory editor
// @namespace BackToOldTistoryEditor
// @description 티스토리의 구버전 에디터 사용을 위한 버튼을 생성
// @version     0.0.1
// @include */manage/posts*
// @include *.tistory.com/manage*
// @homepageURL https://nomomo.github.io/BackToOldTistoryEditor/
// @supportURL  https://github.com/nomomo/BackToOldTistoryEditor/issues
// @downloadURL https://raw.githubusercontent.com/nomomo/BackToOldTistoryEditor/master/BackToOldTistoryEditor.user.js
// @updateURL   https://raw.githubusercontent.com/nomomo/BackToOldTistoryEditor/master/BackToOldTistoryEditor.user.js
// @grant none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js
// ==/UserScript==

/* arrive.js
    * v2.4.1
    * https://github.com/uzairfarooq/arrive
    * MIT licensed
    * Copyright (c) 2014-2017 Uzair Farooq
*/
var Arrive=function(e,t,n){"use strict";function r(e,t,n){l.addMethod(t,n,e.unbindEvent),l.addMethod(t,n,e.unbindEventWithSelectorOrCallback),l.addMethod(t,n,e.unbindEventWithSelectorAndCallback);}function i(e){e.arrive=f.bindEvent,r(f,e,"unbindArrive"),e.leave=d.bindEvent,r(d,e,"unbindLeave");}if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var o=0,l=function(){var t=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector;return{matchesSelector:function(e,n){return e instanceof HTMLElement&&t.call(e,n);},addMethod:function(e,t,r){var i=e[t];e[t]=function(){return r.length==arguments.length?r.apply(this,arguments):"function"==typeof i?i.apply(this,arguments):n;};},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback);},checkChildNodesRecursively:function(e,t,n,r){for(var i,o=0;i=e[o];o++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&l.checkChildNodesRecursively(i.childNodes,t,n,r);},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r;},toElementsArray:function(t){return n===t||"number"==typeof t.length&&t!==e||(t=[t]),t;}};}(),c=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null;};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i;},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null);}},e.prototype.beforeAdding=function(e){this._beforeAdding=e;},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e;},e;}(),a=function(t,r){var i=new c,o=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,l=n.target;(l===e.document||l===e)&&(l=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n);});var c=t(n.options);i.observe(l,c),n.observer=i,n.me=o;}),i.beforeRemoving(function(e){e.observer.disconnect();}),this.bindEvent=function(e,t,n){t=l.mergeArrays(a,t);for(var r=l.toElementsArray(this),o=0;o<r.length;o++)i.addEvent(r[o],e,t,n);},this.unbindEvent=function(){var e=l.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1;});},this.unbindEventWithSelectorOrCallback=function(e){var t,r=l.toElementsArray(this),o=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===o)return!0;return!1;}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1;},i.removeEvent(t);},this.unbindEventWithSelectorAndCallback=function(e,t){var r=l.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1;});},this;},s=function(){function e(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t;}function t(e,t){e.forEach(function(e){var n=e.addedNodes,i=e.target,o=[];null!==n&&n.length>0?l.checkChildNodesRecursively(n,t,r,o):"attributes"===e.type&&r(i,t,o)&&o.push({callback:t.callback,elem:i}),l.callCallbacks(o,t);});}function r(e,t){return l.matchesSelector(e,t.selector)&&(e._id===n&&(e._id=o++),-1==t.firedElems.indexOf(e._id))?(t.firedElems.push(e._id),!0):!1;}var i={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};f=new a(e,t);var c=f.bindEvent;return f.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t);var o=l.toElementsArray(this);if(t.existing){for(var a=[],s=0;s<o.length;s++)for(var u=o[s].querySelectorAll(e),f=0;f<u.length;f++)a.push({callback:r,elem:u[f]});if(t.onceOnly&&a.length)return r.call(a[0].elem,a[0].elem);setTimeout(l.callCallbacks,1,a);}c.call(this,e,t,r);},f;},u=function(){function e(){var e={childList:!0,subtree:!0};return e;}function t(e,t){e.forEach(function(e){var n=e.removedNodes,i=[];null!==n&&n.length>0&&l.checkChildNodesRecursively(n,t,r,i),l.callCallbacks(i,t);});}function r(e,t){return l.matchesSelector(e,t.selector);}var i={};d=new a(e,t);var o=d.bindEvent;return d.bindEvent=function(e,t,r){n===r?(r=t,t=i):t=l.mergeArrays(i,t),o.call(this,e,t,r);},d;},f=new s,d=new u;t&&i(t.fn),i(HTMLElement.prototype),i(NodeList.prototype),i(HTMLCollection.prototype),i(HTMLDocument.prototype),i(Window.prototype);var h={};return r(f,h,"unbindAllArrive"),r(d,h,"unbindAllLeave"),h;}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);


$(document).on("ready",function(){

  $(document).arrive("ul.list_post li", {existing: true}, function(elem){
    elem = $(elem);
    var $btn_post = elem.find("a.btn_post").filter(function(){
      return $(this).text() === "수정";
    });
    elem.find(".post_btn").css("width","280px");
    elem.find(".opt_set").css("vertical-align","top");

    $btn_post.each(function(){
      var $this = $(this);
      if($this.find(".btn_post_new").length !== 0){
        return false;
      }

      var href = $this.attr("href");
      var temp = href.replace("/manage/","").split("/");
      var type = temp[0];
      var id = temp[1].split("?").shift();
      var oldhref = "/admin/entry/post/?id="+id+"&type="+type;
      var newhref = "";
      if(type == "page"){
        newhref = "/manage/"+type+"/"+id;
      }
      else{
        newhref = "/manage/newpost/" + id;
      }
      $this
        .wrap($("<div style='display:inline-block;margin-right:3px;'>"))
        .after($("<br /><a class='btn_post btn_post_new' href='"+oldhref+"' style='width:60px;margin-top:3px;'>수정 <span style='font-size:0.8em'>(old)</span></a>"))
        .html("수정 <span style='font-size:0.8em'>(new)</span>")
        .attr("href", newhref)
        .css("width","60px");
    });
  });

  $(document).arrive(".tit_cont .link_write", {existing: true}, function(elem){
    var $this = $(elem);
    if($this.hasClass("fired")){
      return false;
    }
    $this.addClass("fired");
    var type = $this.attr("href").replace("/manage/","").split("/").shift();
    $this.clone().addClass("link_write_new").attr("href","/admin/entry/post?type="+type).html($this.html().replace("쓰기", "쓰기 (old)")).insertAfter($this);
    $this.html($this.html().replace("쓰기", "쓰기 (new)")).css("right",$(".link_write_new").first().width() + 35 + "px");
  });

  $(".aside_write")
    .first()
    .after($('<div class="aside_write aside_write_new"><a href="/admin/entry/post" class="link_write">이전 에디터로 쓰기</a><a href="#" class="btn_open"><span class="txt_bar"></span><span class="ico_blog ico_open">글 쓰기 메뉴 열기</span></a><div class="wrap_menu wrap_menu_new hide"><ul class="list_write"><li><a href="/admin/entry/post" class="link_list">글 (이전 에디터)</a></li><li><a href="/admin/entry/post?type=notice" class="link_list">공지 (이전 에디터)</a></li><li><a href="/admin/entry/post?type=template" class="link_list">서식 (이전 에디터)</a></li><li><a href="/admin/entry/post?type=page" class="link_list">페이지 (이전 에디터)</a></li></ul><a href="#" class="btn_close"><span class="ico_blog ico_close">글 쓰기 메뉴 닫기</span></a></div></div>'))
    .find(".link_write")
    .first()
    .html("새 에디터로 쓰기");

  $(document).on("click", "body", function(){
    $(".wrap_menu_new").addClass("hide");
  });

  $(".aside_write_new .btn_open").click(function(e){
    e.stopPropagation();
    e.preventDefault();
    var $this = $(this);
    $this.closest("div").find(".wrap_menu").first().toggleClass("hide");
    console.log('toggleclass', $this.closest("div").find(".wrap_menu"));
  });

  $(".btn_tistory.btn_log_info")
    .html("글쓰기 (new)")
    .css("margin-right","10px")
    .after('<a href="/admin/entry/post" class="btn_tistory btn_log_info">글쓰기 (old)</a>');
});
