"use strict";function _typeof3(e){return(_typeof3="function"==typeof Symbol&&"symbol"===_typeof3(Symbol.iterator)?function(e){return void 0===e?"undefined":_typeof3(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":void 0===e?"undefined":_typeof3(e)})(e)}!function(e,n){"object"==("undefined"==typeof exports?"undefined":_typeof3(exports))&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):e.hanabi=n()}(void 0,function(){var e,r=(function(e){var n=e.exports=function(){return new RegExp("(?:"+n.line().source+")|(?:"+n.block().source+")","gm")};n.line=function(){return/(?:^|\s)\/\/(.+?)$/gm},n.block=function(){return/\/\*([\S\s]*?)\*\//gm}}(e={exports:{}}),e.exports),o=["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"];return function(e,n){var i=(n=void 0===n?{}:n).colors;void 0===i&&(i=o);var t=0,a={},n=new RegExp("("+/[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af\u0400-\u04FF]+|\w+/.source+"|"+/</.source+")|("+r().source+")","gmi");return e.replace(n,function(e,n,r){return r?'<span style="color: slategray">'+r+"</span>":"<"===n?"&lt;":(a[n]?o=a[n]:(o=i[t],a[n]=o),t=++t%i.length,'<span style="color: #'+o+'">'+n+"</span>");var o})}});var HanabiBrowser={ref:{colors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"],lineNumber:!0},default:{defaultColors:["23AC69","91C132","F19726","E8552D","1AAB8E","E1147F","2980C1","1BA1E6","9FA0A0","F19726","E30B20","E30B20","A3338B"]},start:function(e,n){HanabiBrowser.ref.lineNumber=n,$(e||"code").each(function(e,n){var r=(r=hanabi($(n).html().replace(new RegExp("&lt;","g"),"<").replace(new RegExp("&gt;","g"),">"),HanabiBrowser.ref)).substring(0,r.length-1).replace(new RegExp("\n","g"),"<br>").replace(new RegExp("  ","g"),"&nbsp&nbsp"),o=0,i=[];r.split("<br>").forEach(function(e){HanabiBrowser.ref.lineNumber?i.push('<span style="width: 30px; display: inline-block" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e):i.push('<span style="width: 30px; display: none" class="hanabi-linenumber">'+(++o).toString()+"</span>"+e)}),r=i.join("<br>"),$(n).html(r)})},setLinenumber:function(e){HanabiBrowser.ref.lineNumber=e,HanabiBrowser.ref.lineNumber?$(".hanabi-linenumber").css("display","inline-block"):$(".hanabi-linenumber").css("display","none")},toggleLinenumber:function(){HanabiBrowser.ref.lineNumber=!HanabiBrowser.ref.lineNumber,HanabiBrowser.setLinenumber(HanabiBrowser.ref.lineNumber)},putColor:function(e){"string"==typeof e?HanabiBrowser.ref.colors.push(e):HanabiBrowser.ref.colors=HanabiBrowser.ref.colors.concat(e)},defaultColors:function(){HanabiBrowser.ref.colors=HanabiBrowser.default.defaultColors},clearColors:function(){HanabiBrowser.ref.colors=[]}};