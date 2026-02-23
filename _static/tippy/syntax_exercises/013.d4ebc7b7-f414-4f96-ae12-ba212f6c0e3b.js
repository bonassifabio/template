selector_to_html = {"a[href=\"#displaying-the-bibliography\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Displaying the bibliography<a class=\"headerlink\" href=\"#displaying-the-bibliography\" title=\"Link to this heading\">#</a></h2>", "a[href=\"../references.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">References<a class=\"headerlink\" href=\"#references\" title=\"Link to this heading\">#</a></h1>", "a[href=\"#customising-citation-styles\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Customising citation styles<a class=\"headerlink\" href=\"#customising-citation-styles\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#citing-sources-using-cite\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Citing sources using <code class=\"docutils literal notranslate\"><span class=\"pre\">{cite}</span></code><a class=\"headerlink\" href=\"#citing-sources-using-cite\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#adding-a-bibliography\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Adding a Bibliography<a class=\"headerlink\" href=\"#adding-a-bibliography\" title=\"Link to this heading\">#</a></h1><p>In this exercise, you will learn how to cite sources using the shared bibliography provided in this template, and how to control the citation style and reference formatting using <code class=\"docutils literal notranslate\"><span class=\"pre\">{cite}</span></code> roles and the <code class=\"docutils literal notranslate\"><span class=\"pre\">{bibliography}</span></code> directive.</p>", "a[href=\"#adding-an-entry-to-the-shared-bibliography\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding an entry to the shared bibliography<a class=\"headerlink\" href=\"#adding-an-entry-to-the-shared-bibliography\" title=\"Link to this heading\">#</a></h2>"}
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
