selector_to_html = {"a[href=\"#customising-your-favourites\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Customising your favourites<a class=\"headerlink\" href=\"#customising-your-favourites\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#contribute-your-favourite\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Contribute your favourite<a class=\"headerlink\" href=\"#contribute-your-favourite\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#teachbooks-favourites\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">TeachBooks Favourites<a class=\"headerlink\" href=\"#teachbooks-favourites\" title=\"Link to this heading\">#</a></h1><p>The <strong>TeachBooks-Favourites</strong> extension brings together TeachBooks\u2019 most-used and most-loved features in one convenient package. It bundles several Sphinx extensions\u2014developed both by TeachBooks and others\u2014into a single install, making it easier to start a new TeachBook with all recommended functionality already enabled.</p><p>This exercise will guide you through installing the <strong>TeachBooks-Favourites</strong> extension, enabling it in your configuration, and exploring what it includes.</p>", "a[href=\"#explore-whats-included\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Explore what\u2019s included<a class=\"headerlink\" href=\"#explore-whats-included\" title=\"Link to this heading\">#</a></h2><p>The TeachBooks-Favourites bundle includes many extensions. For more information on each extension and how to use it, see the <a class=\"reference external\" href=\"https://teachbooks.io/manual/features/favourites.html#\">TeachBooks manual</a></p>"}
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
