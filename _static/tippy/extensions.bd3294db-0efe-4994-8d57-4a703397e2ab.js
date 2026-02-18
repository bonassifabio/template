selector_to_html = {"a[href=\"#extension-exercises\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Extension exercises<a class=\"headerlink\" href=\"#extension-exercises\" title=\"Link to this heading\">#</a></h1><p>The previous exercises introduced you to the basics of writing content for your TeachBook, as well as getting started with the syntax used. Now let\u2019s explore how you can add functionalities to your book using extensions. TeachBooks created a variety of Sphinx extensions to enhance your book: see <a class=\"reference external\" href=\"https://teachbooks.io/manual/features/overview.html\">the manual</a> for a complete overview, including <a class=\"reference external\" href=\"https://github.com/TeachBooks/TeachBooks-Favourites\">TeachBooks Favourites</a> which collects a collection of our favourite Sphinx extensions. The TeachBooks Favourites collection is already included in this template. Furthermore, you can also install third-party extensions to further customize your content.</p>"}
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
