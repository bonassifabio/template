selector_to_html = {"a[href=\"#external-resources\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">External resources<a class=\"headerlink\" href=\"#external-resources\" title=\"Link to this heading\">#</a></h3><p>Parts of this book are taken from other external resources and reused in various ways. If an author is not listed on a particular page, it is by the Authors, except as follows:</p><p>The following pages are included directly from an external resource and is not edited by <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;Editor&gt;</span></code>:</p>", "a[href=\"#license\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">License<a class=\"headerlink\" href=\"#license\" title=\"Link to this heading\">#</a></h2><p>This book is <a class=\"reference external\" href=\"https://creativecommons.org/licenses/by/4.0/\">CC BY 4.0 licensed</a> allowing you to share and adapt the material, as long as the source is named. External resources that are reused in this book are listed below.</p>", "a[href=\"#acknowledgements\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Acknowledgements<a class=\"headerlink\" href=\"#acknowledgements\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#about-the-editors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">About the Editors<a class=\"headerlink\" href=\"#about-the-editors\" title=\"Link to this heading\">#</a></h2><h3>Acknowledgements<a class=\"headerlink\" href=\"#acknowledgements\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#credits-and-license\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Credits and License<a class=\"headerlink\" href=\"#credits-and-license\" title=\"Link to this heading\">#</a></h1><p>You can refer to this book as:</p>", "a[href=\"#how-the-book-is-made\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">How the book is made<a class=\"headerlink\" href=\"#how-the-book-is-made\" title=\"Link to this heading\">#</a></h2><p>This website is written in markdown and jupyter notebooks files, which are converted to html using tools from <a class=\"reference external\" href=\"https://teachbooks.io/\">TeachBooks</a>. The files are stored on a [public GitHub repository](<code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;link</span> <span class=\"pre\">to</span> <span class=\"pre\">GitHub</span> <span class=\"pre\">repo&gt;</span></code>). The website can be viewed at <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;link</span> <span class=\"pre\">to</span> <span class=\"pre\">book</span> <span class=\"pre\">website</span> <span class=\"pre\">url&gt;</span></code>.</p><p>To recreate the website you have two options (more information in the <a class=\"reference external\" href=\"https://teachbooks.io/manual/\">TeachBooks manual</a>:</p>"}
skip_classes = ["headerlink", "sd-stretched-link"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: false,
                placement: 'auto-start', maxWidth: 500, interactive: true, boundary: document.body, appendTo: document.body,
                onShow(instance) {MathJax.typesetPromise([instance.popper]).then(() => {var isFirefox=typeof InstallTrigger!=='undefined';if(isFirefox&&window.MathJax&&MathJax.startup&&MathJax.startup.output&&MathJax.startup.output.name==="SVG"){const svgs=instance.popper.querySelectorAll('svg');svgs.forEach(svg=>{let bbox=svg.getBBox(),x=bbox.x,y=bbox.y,width=bbox.width,height=bbox.height;svg.setAttribute('width',width);svg.setAttribute('height',height);svg.setAttribute('viewBox',`${x} ${y} ${width} ${height}`);});let rescale=0.015;svgs.forEach(svg=>{let bbox=svg.getBBox(),width=bbox.width,height=bbox.height;svg.setAttribute('width',width*rescale);svg.setAttribute('height',height*rescale);});}});},
            });
        };
    };
    console.log("tippy tips loaded!");
};
