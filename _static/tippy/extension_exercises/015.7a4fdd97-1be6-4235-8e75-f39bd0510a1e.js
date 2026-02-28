selector_to_html = {"a[href=\"#trigger-the-workflow\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trigger the workflow<a class=\"headerlink\" href=\"#trigger-the-workflow\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#customise-the-workflow\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Customise the workflow<a class=\"headerlink\" href=\"#customise-the-workflow\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#scenario-2-draft-and-release-workflow\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Scenario 2 \u2014 Draft and release workflow<a class=\"headerlink\" href=\"#scenario-2-draft-and-release-workflow\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#scenario-1-academic-years\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\">Scenario 1 \u2014 Academic years<a class=\"headerlink\" href=\"#scenario-1-academic-years\" title=\"Link to this heading\">#</a></h3>", "a[href=\"#deploy-book-workflow\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Deploy Book Workflow<a class=\"headerlink\" href=\"#deploy-book-workflow\" title=\"Link to this heading\">#</a></h1><p>The <strong>Deploy Book Workflow (DBW)</strong> automatically builds and publishes your TeachBook whenever changes are pushed to your repository. If you started your book from the TeachBooks Template, this workflow is already included.</p><p>With this workflow, readers can see your latest book version online without manual intervention. This exercise will guide you through triggering the workflow, configuring branch-specific builds, and customising deployment options.</p>", "a[href=\"#common-usage-scenarios\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Common usage scenarios<a class=\"headerlink\" href=\"#common-usage-scenarios\" title=\"Link to this heading\">#</a></h2><h3>Scenario 1 \u2014 Academic years<a class=\"headerlink\" href=\"#scenario-1-academic-years\" title=\"Link to this heading\">#</a></h3>"}
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
