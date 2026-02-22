selector_to_html = {"a[href=\"#add-extensions-to-your-book\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add extensions to your book<a class=\"headerlink\" href=\"#add-extensions-to-your-book\" title=\"Link to this heading\">#</a></h1><p>TeachBooks supports many useful extensions, but sometimes you may want more functionality. In this exercise, you\u2019ll learn how to add an external extension to your book that is not already built-in. We will use the <a class=\"reference external\" href=\"https://github.com/TeachBooks/Sphinx-Indexed-Definitions\"><code class=\"docutils literal notranslate\"><span class=\"pre\">Sphinx-Indexed-Definitions</span></code></a> extension as an example, which allows you to define glossary-style entries with indexed labels in an easy way.</p>"}
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
