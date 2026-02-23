selector_to_html = {"a[href=\"#creating-tables-with-directives\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Creating Tables with directives<a class=\"headerlink\" href=\"#creating-tables-with-directives\" title=\"Link to this heading\">#</a></h2>", "a[href=\"011.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Cross-referencing content<a class=\"headerlink\" href=\"#cross-referencing-content\" title=\"Link to this heading\">#</a></h1><p>In this exercise, you will learn how to create references to other parts of your book, such as chapters, sections, equations, tables and figures, as well as links.</p>", "a[href=\"#create-tables\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Create tables<a class=\"headerlink\" href=\"#create-tables\" title=\"Link to this heading\">#</a></h1><p>In this exercise, we will explore how to create and format tables in your TeachBook using Markdown and reStructuredText.</p>", "a[href=\"#writing-tables-with-markdown\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Writing Tables with Markdown<a class=\"headerlink\" href=\"#writing-tables-with-markdown\" title=\"Link to this heading\">#</a></h2>"}
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
