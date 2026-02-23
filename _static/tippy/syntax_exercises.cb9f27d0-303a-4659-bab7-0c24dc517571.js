selector_to_html = {"a[href=\"#syntax-exercises\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Syntax exercises<a class=\"headerlink\" href=\"#syntax-exercises\" title=\"Link to this heading\">#</a></h1><p>The previous exercise guide you through making your own book following the TeachBooks workflow. Now lets get specific and dive into the possibilities of the syntax used!</p><p>As user type 3 you will work primarily in <code class=\"docutils literal notranslate\"><span class=\"pre\">.md</span></code> (Markdown) or <code class=\"docutils literal notranslate\"><span class=\"pre\">.ipynb</span></code>(Jupyter Notebook) files. In TeachBooks, <code class=\"docutils literal notranslate\"><span class=\"pre\">.md</span></code> files contain text-based content with formatting, while <code class=\"docutils literal notranslate\"><span class=\"pre\">ipynb</span></code> files contain both text and executable code cells. <code class=\"docutils literal notranslate\"><span class=\"pre\">.md</span></code> files are much easier to edit online, so let\u2019s start with those!</p>"}
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
