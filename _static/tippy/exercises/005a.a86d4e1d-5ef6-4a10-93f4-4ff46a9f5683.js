selector_to_html = {"a[href=\"#external-page-attribution\"]": "<figure class=\"align-default\" id=\"external-page-attribution\">\n<a class=\"reference internal image-reference\" href=\"https://github.com/TeachBooks/template_figures/blob/main/external_page_attribution.png?raw=true\"><img alt=\"Example of attribution box shown at the top of an external page\" src=\"https://github.com/TeachBooks/template_figures/blob/main/external_page_attribution.png?raw=true\" style=\"width: 100%;\"/>\n</a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 2 </span><span class=\"caption-text\">Example of attribution box at the top of an external page.</span><a class=\"headerlink\" href=\"#external-page-attribution\" title=\"Link to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#exercise-6-reuse-content-from-another-book\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 6: Reuse content from another book<a class=\"headerlink\" href=\"#exercise-6-reuse-content-from-another-book\" title=\"Link to this heading\">#</a></h1><p>So far, you\u2019ve been working inside your own book. But what if someone else has already written a page you\u2019d like to reuse? Instead of copying it, you can <strong>include it directly</strong> into your own book using the <code class=\"docutils literal notranslate\"><span class=\"pre\">external:</span></code> feature in your <code class=\"docutils literal notranslate\"><span class=\"pre\">_toc.yml</span></code>.</p><p>You can find the link to reuse in one of two ways:</p>"}
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
