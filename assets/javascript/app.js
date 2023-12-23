let list_unit_jquery = [
    { url: "https://unitop.vn/my-course", name: "Khóa học UNITOP" },
    { url: "https://www.w3schools.com/jquery/", name: "jQuery Tutorial - W3SCHOOL" },
    { url: "https://www.w3schools.com/quiztest/quiztest.asp?qtest=JQUERY", name: "Bài tập trắc nghiệm - Jquery" },
    { url: "https://www.w3schools.com/jquery/exercise_jq.asp", name: "Bài tập điền code - Jquery" },
    { url: "https://hocwebchuan.com/tutorial/jquery/", name: "Bài tập Jquery - hocwebchuan" },
    { url: "https://freetuts.net/hoc-jquery/bai-tap-jquery", name: "Bài tập Jquery - freetuts" },
    { url: "https://blogit.vn/series/bai-tap-jquery", name: "Bài tập Jquery - blogit" },
]

let list_unit_markdown = [
    { url: 'https://www.youtube.com/watch?v=jJky0Ws9xKg', name: 'Video: Cách viết tài liệu Markdown (file README.md) trên Visual Studio Code.' },
    { url: 'https://www.markdownguide.org/basic-syntax/', name: 'Cú pháp cơ bản' },
    { url: 'https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-', name: 'Markdown Text 101 (Chat Formatting: Bold, Italic, Underline)' },
]

let list_unit_app = [
    { url: 'webrun:C:/Users/lamva/AppData/Local/Programs/Anki/anki.exe', name: 'ANKI' }
]

let list_unit_responsive = [
    { url: "https://www.technewstoday.com/fix-the-cloud-file-provider-is-not-running/", name: 'DEMO NAVBAR 1' },
    { url: "https://ttn.edu.vn", name: 'DEMO NAVBAR 2' },
]

function renderHTMT_function(h2_title, data_array) {
    let renderHTML_listUnit = ""
    renderHTML_listUnit += `<h2>${h2_title}</h2>`
    for (let unit of data_array) {
        console.log(unit.url.toString().includes("webrun:"))
        if (unit.url.toString().includes("webrun:")) {
            renderHTML_listUnit += `- <span onclick="openTab('${unit.url}', true)">${unit.name}</span><br>`;
        } else {
            renderHTML_listUnit += `- <span onclick="openTab('${unit.url}')">${unit.name}</span> | `;
            renderHTML_listUnit += `<span onclick="openTab('${unit.url}', true)">Full Width</span><br>`;
        }
    }
    renderHTML_listUnit = `<div>${renderHTML_listUnit}</div>`
    $("#list-unit").html($("#list-unit").html() + renderHTML_listUnit);

}
$(document).ready(function () {
    renderHTMT_function('TÀI LIỆU JQUERY', list_unit_jquery);
    renderHTMT_function('TÀI LIỆU MARKDOWN', list_unit_markdown);
    renderHTMT_function('APP HỌC TẬP', list_unit_app);
    renderHTMT_function('BÀI TẬP WEBRESPONSIVE', list_unit_responsive);
})

let tab;
function openTab(url, isFullWidth) {
    if (tab) {
        tab.close();
    }
    let width = window.outerWidth;
    let offsetWidth = 300
    let height = window.outerHeight;
    if (isFullWidth) {
        tab = window.open(url, "_blank");
    } else {
        tab = window.open(url, "_blank", `width=${width - offsetWidth}, height=${height}, left=${offsetWidth}, top=${height - 20}`);
    }
}

window.addEventListener('beforeunload', function () {
    tab.close()
})