selector_to_html = {"a[href=\"004.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 4: <em>Your</em> Version of the Book<a class=\"headerlink\" href=\"#exercise-4-your-version-of-the-book\" title=\"Link to this heading\">#</a></h1><p>By now, we\u2019ve covered the essentials: content files, <code class=\"docutils literal notranslate\"><span class=\"pre\">_toc.yml</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">_config.yml</span></code>. But what if you want to make some changes but don\u2019t want to share them directly with the general public of your book website? Or what if you have some work-in-progress that you want to share with colleagues? You need a version of your book! Let\u2019s try and do that! Later on, you\u2019ll probably want to merge your newest version back into the original book. That\u2019s what we\u2019ll do in <a class=\"reference internal\" href=\"005.html\"><span class=\"std std-doc\">Exercise 5: Merge your version in the original book</span></a>.</p>", "a[href=\"#exercise-7-contribute-to-the-book-of-somebody-else\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 7: Contribute to the book of somebody else<a class=\"headerlink\" href=\"#exercise-7-contribute-to-the-book-of-somebody-else\" title=\"Link to this heading\">#</a></h1><p>So far you did everything on your own, within a single repository. However, book-editing would be really boring if it would always be like that. Let\u2019s team up with someone to see the potential of collaborative book editing using Git! In this exercise you will take the book of someone else and create your own version of that one. However, unlike a previous exercise, we cannot simply make a branch, because you don\u2019t have <em>access</em> to their repository. However, you can make a copy of the repository on your own account and make some changes there. Then, you can send that back to your friend\u2019s repository and see if they would like to incorporate your changes. The repository you create (your own version) is called a <strong>fork</strong>.</p>"}
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
