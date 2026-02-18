selector_to_html = {"a[href=\"#previous-version\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;previous</span> <span class=\"pre\">version&gt;</span></code>: &lt;\u2026&gt;<a class=\"headerlink\" href=\"#previous-version\" title=\"Link to this heading\">#</a></h2><p>&lt;\u2026&gt;</p>", "a[href=\"#changelog\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Changelog<a class=\"headerlink\" href=\"#changelog\" title=\"Link to this heading\">#</a></h1><h2><code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;latest</span> <span class=\"pre\">version&gt;</span></code>: <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;date&gt;</span></code><a class=\"headerlink\" href=\"#latest-version-date\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#latest-version-date\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;latest</span> <span class=\"pre\">version&gt;</span></code>: <code class=\"docutils literal notranslate\"><span class=\"pre\">&lt;date&gt;</span></code><a class=\"headerlink\" href=\"#latest-version-date\" title=\"Link to this heading\">#</a></h2>"}
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
