selector_to_html = {"a[href=\"#keep-practicing\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Keep practicing<a class=\"headerlink\" href=\"#keep-practicing\" title=\"Link to this heading\">#</a></h2><p>For additional practice, there are more exercises relating to the capacities of each user type.\nHave a look in the <a class=\"reference external\" href=\"https://teachbooks.io/manual/installation-and-setup/user_types.html\">manual</a> to see which user type you are!</p>", "a[href=\"#summary-of-exercises-all-exercises\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Summary of exercises: All Exercises<a class=\"headerlink\" href=\"#summary-of-exercises-all-exercises\" title=\"Link to this heading\">#</a></h1><p>With the simple exercises, you did all the steps of our TeachBooks workflow!</p>"}
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
