let list_unit_fullstack = [
    { url: "https://unitop.vn/my-course", name: "Khóa học UNITOP", img: "https://unitop.vn/public/images/favicon.ico" },
    { url: "https://hocwebchuan.com/", name: "Học Web Chuẩn", img: "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://hocwebchuan.com&size=64" },
    { url: "https://webcoban.vn/", name: "Web cơ bản", img: "https://webcoban.vn/home/image/favicon.png" },
]

let list_unit_jquery = [
    { url: "https://www.w3schools.com/jquery/", name: "jQuery Tutorial - W3SCHOOL" },
    { url: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=JQUERY", name: "Bài tập trắc nghiệm - Jquery" },
    { url: "https://www.w3schools.com/jquery/exercise_jq.asp", name: "Bài tập điền code - Jquery" },
    { url: "https://hocwebchuan.com/exercises/jquery/", name: "Bài tập Jquery - hocwebchuan" },
    { url: "https://freetuts.net/hoc-jquery/bai-tap-jquery", name: "Bài tập Jquery - freetuts" },
    { url: "https://blogit.vn/series/bai-tap-jquery", name: "Bài tập Jquery - blogit" },
]

let list_unit_markdown = [
    { url: 'https://www.youtube.com/watch?v=jJky0Ws9xKg', name: 'Video: Cách viết tài liệu Markdown (file README.md) trên Visual Studio Code.' },
    { url: 'https://www.markdownguide.org/basic-syntax/', name: 'Cú pháp cơ bản' },
    { url: 'https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-', name: 'Markdown Text 101 (Chat Formatting: Bold, Italic, Underline)' },
]

let list_unit_app = [
    { url: 'webrun:C:/Users/lamva/AppData/Local/Programs/Anki/anki.exe', name: 'ANKI', img: "https://apps.ankiweb.net/favicon.ico"},
    { url: 'https://www.duolingo.com/', name: 'Duolingo', img: "https://d35aaqx5ub95lt.cloudfront.net/favicon.ico" },
    { url: 'https://snippet-generator.app/', name: 'snippet-generator', img: "https://snippet-generator.app/favicon-32x32.png"},
]

let list_unit_responsive = [
    { url: "https://www.technewstoday.com/fix-the-cloud-file-provider-is-not-running/", name: 'DEMO NAVBAR 1' },
    { url: "https://ttn.edu.vn", name: 'DEMO NAVBAR 2' },
    { url: "https://hocwebchuan.com/tutorial/responsive/responsive_type.php", name: 'DEMO NAVBAR 3' },
]

let list_unit_tool = [
    { url: "https://ticktick.com/", name: 'ticktick', img: "https://www.google.com/s2/favicons?sz=64&domain=ticktick.com" },
]

function renderHTMT_function(h4_title, data_array) {
    let renderHTML_listUnit = ""
    for (let unit of data_array) {
        let icon_angleDoubleRight = `<i class="fa fa-angle-double-right" aria-hidden="true"></i>`
        let img = unit.img ? `<img src='${unit.img}' style="width: 16px; height: 16px; margin-right: 16px"> ` : "";

        if (unit.url.toString().includes("webrun:")) {
            renderHTML_listUnit += ` <li class="list-group-item">
            <span onclick="openTab('${unit.url}', true)">${img} ${unit.name}</span>
            </li>`;
        } else {
            renderHTML_listUnit += ` <li class="list-group-item d-flex justify-content-between align-items-center">

            <span class="d-flex align-items-center" onclick="openTab('${unit.url}', true)">${img} ${unit.name}</span>
            <span onclick="openTab('${unit.url}')">
            <i class="fa fa-external-link" aria-hidden="true"></i>
            </span>
            </li>`;
        }

    }
    renderHTML_listUnit = `<div class="col-4 item"> <h4>${h4_title}</h4> <ul class="list-group list-group-flush">${renderHTML_listUnit}</ul> </div>`
    $("#list-unit .container .row").html($("#list-unit  .container .row").html() + renderHTML_listUnit);

}
$(document).ready(function () {
    renderHTMT_function('TÀI LIỆU FULL STACK', list_unit_fullstack);
    renderHTMT_function('TÀI LIỆU JQUERY', list_unit_jquery);
    renderHTMT_function('BÀI TẬP WEBRESPONSIVE', list_unit_responsive);
    renderHTMT_function('TÀI LIỆU MARKDOWN', list_unit_markdown);
    renderHTMT_function('APP HỌC TẬP', list_unit_app);
    renderHTMT_function('CÔNG CỤ', list_unit_tool);
})

let tabs = [];
function openTab(url, isFullWidth) {
    let width = window.outerWidth;
    let offsetWidth = 300
    let height = window.outerHeight;
    if (isFullWidth) {
        tabs[tabs.length] = window.open(url, "_blank");
    } else {
        tabs[tabs.length] = window.open(url, "_blank", `width=${width - offsetWidth}, height=${height}, left=${offsetWidth}, top=${height - 20}`);
    }
}

window.addEventListener('beforeunload', function () {
    for (let tab of tabs) {
        for (let tab of tabs) {
            tab.close();
        }
    }
})
