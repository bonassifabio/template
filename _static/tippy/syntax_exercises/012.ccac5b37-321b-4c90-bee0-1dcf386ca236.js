selector_to_html = {"a[href=\"#custom-titles-styles-for-admonitions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Custom titles &amp; styles for admonitions<a class=\"headerlink\" href=\"#custom-titles-styles-for-admonitions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#using-standard-admonitions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using standard admonitions<a class=\"headerlink\" href=\"#using-standard-admonitions\" title=\"Link to this heading\">#</a></h2>", "a[href=\"#custom-colours-for-admonitions\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Custom colours for admonitions<a class=\"headerlink\" href=\"#custom-colours-for-admonitions\" title=\"Link to this heading\">#</a></h2><p><strong>Step A: Add to <code class=\"docutils literal notranslate\"><span class=\"pre\">requirements.txt</span></code></strong></p><p>Ensure that the package is included in your project\u2019s <code class=\"docutils literal notranslate\"><span class=\"pre\">requirements.txt</span></code> (in the root of your repository) to make it available:</p>", "a[href=\"#use-admonitions\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Use admonitions<a class=\"headerlink\" href=\"#use-admonitions\" title=\"Link to this heading\">#</a></h1><p>In this exercise, you will learn how to use admonitions to enhance the readability and structure of your TeachBook content. Admonitions are special highlighted blocks that are useful for tips, warnings, notes, and more.</p>"}
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
