$(document).ready(function(){
    mainSlider1();
    mainSlider2();
    tabUI(".multiTab > input[type='button']", ".tabPage");
    tabUI(".tabNav li", ".tabPage");
    tabUI(".paymentContainer div input[type='button']", ".tabPage");
    changeBookmark('ul li div #bookMark');
    moblieNav('.navBtn');
    panelControl("header > div > div > input[value='searchPanel']");
    controlComplete(".signContainer > div:last-child div input[type='button']", "[id$='Complete']");
    controlComplete(".findPasswordContainer div input[type='button']", "[id$='Complete']");
    controlComplete(".newsLetterContainer input[type='button']", ".newsLetterContainer .subscribeDone");
    newsletterControl(".subscribe input[type='button']", ".subscribe", ".subscribeDone");
    if (window.matchMedia("(max-width: 767px)").matches) {
        $("header nav ul > li").click(function(){
            justToggle($(this));
        });
    }
    quantityComponent(".quantComponent .count",".quantComponent #minus",".quantComponent #plus");
    imgHover();
    selectAll("#selectAll", "input[id^='listItem']");
});

function selectAll(selectAll, selectItem){
    $(selectAll).click(function(){
        var check = $(selectAll).is(":checked");

        if(check){
            $(selectItem).prop('checked', true);
        } else{
            $(selectItem).prop('checked', false);
        }
    });
}

function imgHover(){
    $(".listContainer ul li a img").mouseover(function(){ // ? .listConainer ul li a img에 mouseover 시
        $(this).attr('src', $(this).attr('src').replace(".png","_hover.png")); // ? .listConainer ul li a img의 src를 .png에서 _hover.png로 변경
    });
    $(".listContainer ul li a img").mouseleave(function(){ // ? .listConainer ul li a img에 mouseleave 시
        $(this).attr('src', $(this).attr('src').replace("_hover.png",".png")); // ? .listConainer ul li a img의 src를 _hover.png에서 .png로 변경
    });
}

function quantityComponent(target, minus, plus){
    var orderField = $(target);
    var orderCount = $(orderField).val();
    $(minus).click(function(){// ? minBtn 클릭 시
        orderCount --; // ? orderCount 1씩 감소
        if(orderCount <= 1){ // ? 만약 orderCount가 1보다 작거나 같으면
            orderCount = 1; // ? orderCount 1로 고정
        }
        orderField.val(orderCount); // ? 출력
    });
    $(plus).click(function(){ // ? plusBtn 클릭 시
        orderCount ++; // ? orderCount 1씩 증가
        if(orderCount >= 99){ // ? 만약, orderCount가 99보다 크거나 같으면
            orderCount = 99; // ? orderCount 99로 고정
        }
        orderField.val(orderCount); // ? 출력
    });
}

function panelControl(btn){
    var currentPanel = null;
    $(btn).click(function(){
        currentPanel = "#" + $(this).val();
        $(currentPanel).addClass("active");
    });
    $(".closeBtn").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function mainSlider1(){
    $(".sideWay1Slider").bxSlider();
}

function mainSlider2(){
    $(".way4Slider").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 520,
        slideMargin: 30
    });
}

function tabUI(btn,pages){
    $(btn).click(function(){
        var activeTab = "#" + $(this).attr("data-tabPage");

        $(btn).removeClass("active");
        $(this).addClass("active");
        $(pages).removeClass("active");
        $(activeTab).addClass("active");
    });
}

function changeBookmark(bookMark){
    $(bookMark).click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
}

function imageHover(img){
    $(img).hover(function(){
        // replace function 사용해서 hover 구현예정
    });
}

function justToggle(target){
    $(target).toggleClass("active");
}

function moblieNav(btn){
    $(btn).click(function(){
        justToggle("header > div nav");
    });
}

function controlComplete(btn, complete){
    $(btn).click(function(){
        $(complete).addClass("active");
    });
}

function newsletterControl(btn, subscribe, subscribeDone){
    $(btn).click(function(){
        $(subscribe).removeClass("active");
        $(subscribeDone).addClass("active");
    });
}