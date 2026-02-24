selector_to_html = {"a[href=\"011.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Cross-referencing content<a class=\"headerlink\" href=\"#cross-referencing-content\" title=\"Link to this heading\">#</a></h1><p>In this exercise, you will learn how to create references to other parts of your book, such as chapters, sections, equations, tables and figures, as well as links.</p>", "a[href=\"#adding-colours-to-equations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding colours to equations<a class=\"headerlink\" href=\"#adding-colours-to-equations\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#writing-equations\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Writing equations<a class=\"headerlink\" href=\"#writing-equations\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#formatting-mathematical-symbols\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Formatting mathematical symbols<a class=\"headerlink\" href=\"#formatting-mathematical-symbols\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#use-equations\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use equations<a class=\"headerlink\" href=\"#use-equations\" title=\"Link to this heading\">#</a></h1><p>In this exercise, you will learn how to write and format mathematical equations in your TeachBook, both inline and as standalone blocks.</p>"}
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
