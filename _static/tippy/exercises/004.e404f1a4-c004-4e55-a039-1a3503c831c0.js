selector_to_html = {"a[href=\"002.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 2: Add a new file to the table of contents<a class=\"headerlink\" href=\"#exercise-2-add-a-new-file-to-the-table-of-contents\" title=\"Link to this heading\">#</a></h1><p>Let\u2019s continue by adding one additional step. Let\u2019s add a file to the table of contents! the <code class=\"docutils literal notranslate\"><span class=\"pre\">_toc.yml</span></code> contains a list of all the files to be shown in your book-website. Let\u2019s add a file which is not in the table of contents yet!</p>", "a[href=\"#exercise-4-your-version-of-the-book\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 4: <em>Your</em> Version of the Book<a class=\"headerlink\" href=\"#exercise-4-your-version-of-the-book\" title=\"Link to this heading\">#</a></h1><p>By now, we\u2019ve covered the essentials: content files, <code class=\"docutils literal notranslate\"><span class=\"pre\">_toc.yml</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">_config.yml</span></code>. But what if you want to make some changes but don\u2019t want to share them directly with the general public of your book website? Or what if you have some work-in-progress that you want to share with colleagues? You need a version of your book! Let\u2019s try and do that! Later on, you\u2019ll probably want to merge your newest version back into the original book. That\u2019s what we\u2019ll do in <a class=\"reference internal\" href=\"005.html\"><span class=\"std std-doc\">Exercise 5: Merge your version in the original book</span></a>.</p>", "a[href=\"005.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Exercise 5: Merge your version in the original book<a class=\"headerlink\" href=\"#exercise-5-merge-your-version-in-the-original-book\" title=\"Link to this heading\">#</a></h1><p>In <a class=\"reference internal\" href=\"004.html\"><span class=\"std std-doc\">Exercise 4: Your Version of the Book</span></a> you created your own version of a book. But it would be a pity if you never contribute back to the original book right? Probably your additions are very useful there too! You\u2019ll merge you version of the book which is stored on a branch into the original book which is on main. If there\u2019ve been some changes on that main branch in the meantime, git will take care of that!</p>"}
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
