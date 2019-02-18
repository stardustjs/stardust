export let indexTemplate = `<!DOCTYPE html>
<link rel="stylesheet" href="https://stardustjs.github.io/css/main.css" crossorigin="anonymous">
<style type="text/css">
#container {
    width: 960px;
    margin: 10px auto;
}
.examples li {
    height: 168px;
}
</style>
<div id="container">
<h1>Stardust Examples - Development Version</h1>
<ul class="examples group">
    {{#examples}}
    <li>
        <a href="{{name}}/">
            <img src="{{name}}/preview.png" />
            <div class="overlay"><span>{{description}}</span></div>
        </a>
    </li>
    {{/examples}}
</ul>
</div>`;

export let jekyllTemplate = `---
layout: default
title: "{{description}}"
---
<h1>{{description}}</h1>
<iframe class="example-container" src="content.html" width="960px" height="500px" scrolling="no" sandbox="allow-popups allow-scripts allow-forms allow-same-origin"></iframe>
{{{content}}}
{{#files}}
<h2>{{filename}}</h2>
<pre><code class="highlight {{language}}">{{code}}</code></pre>
{{/files}}
`;

export let standaloneTemplate = `<!DOCTYPE html>
<link rel="stylesheet" href="https://stardustjs.github.io/css/main.css" crossorigin="anonymous">
<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/atom-one-light.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/highlight.min.js"></script>
<style type="text/css">
#container {
    width: 960px;
    margin: 10px auto;
}
iframe {
    border: none;
    outline: 1px solid #d1d1d1
}
</style>
<div id="container">
<p><a href="/">Back</a></p>
<h1>{{description}}</h1>
<iframe class="example-container" src="content.html" width="960px" height="500px" scrolling="no" sandbox="allow-popups allow-scripts allow-forms allow-same-origin"></iframe>
{{{content}}}
{{#files}}
<h2>{{filename}}</h2>
<pre><code class="highlight {{language}}">{{code}}</code></pre>
{{/files}}
</div>
<script>hljs.initHighlightingOnLoad();</script>

`;

export let indexMDTemplate = `---
layout: default
title: "Stardust Examples"
---

Stardust Examples
====
{{=<% %>=}}
<ul class="examples group">
<%#examples%>
    <li><a href="{{base}}/<%&path%>"><img src="{{base}}/<%&path%>/preview_small.png" /><div class="overlay"><span><%description%></span></div></a></li>
<%/examples%>
</ul>


Note: Examples are written in ES6 with WebGL. They work best in the latest version of [Google Chrome](https://www.google.com/chrome/) browser.
`;
