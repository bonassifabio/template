selector_to_html = {"a[href=\"#adding-figures\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding figures<a class=\"headerlink\" href=\"#adding-figures\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#add-visual-media\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Add visual media<a class=\"headerlink\" href=\"#add-visual-media\" title=\"Link to this heading\">#</a></h1><p>To help you illustrate your content, it can be useful to add some type of visual media such as figures, gifs or videos. If you want to add a figure/gif to your book, you can refer to the URL to that image directly. This is quite handy but it does carry the risk that this figure file will no longer be visible if the location is changed, or if the website is down. Therefore, sometimes it can be better to add the source directly to the book (if done on small scale).</p>", "a[href=\"#adding-videos\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Adding videos<a class=\"headerlink\" href=\"#adding-videos\" title=\"Link to this heading\">#</a></h2>"}
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
