selector_to_html = {"a[href=\"#image-and-iframe-dark-mode-colour-inverter\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Image and Iframe Dark Mode Colour Inverter<a class=\"headerlink\" href=\"#image-and-iframe-dark-mode-colour-inverter\" title=\"Link to this heading\">#</a></h1><p>The <strong>Sphinx-Image-Inverter</strong> extension automatically adapts figures, images, and iframes to dark mode by inverting their colours. Meanwhile, it makes sure that a colour is still recognizable, i.e. red stays red, blue stays blue, etc. This ensures that visuals remain readable and consistent across light and dark themes. In this exercise, you\u2019ll install the extension, configure its options, and experiment with enabling and disabling inversion for specific images.</p>", "a[href=\"#configure-image-inversion\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Configure image inversion<a class=\"headerlink\" href=\"#configure-image-inversion\" title=\"Link to this heading\">#</a></h1><p>You can control how and when images are inverted by adjusting parameters in <code class=\"docutils literal notranslate\"><span class=\"pre\">_config.yml</span></code>.</p>"}
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
