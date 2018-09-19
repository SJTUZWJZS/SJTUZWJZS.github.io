$(document).ready(function () {
    new Vue({
        el: '.nav-header',
        data: {
            maintitle: MainTitle,
            zerothtitle: ZerothTitle,
            firsttitle: FirstTitle,
            secondtitle: SecondTitle,
            thirdtitle: ThirdTitle,
            fourthtitle: FourthTitle
        }
    });
    new Vue({
        el: '#myCarousel',
        data: {
            firsttitleimgurl: FirstTitleImgURL,
            firstslidetitle: FirstSlideTitle,
            firstslidecontent: FirstSlideContent,
            firstslidebutton: FirstSlideButton,

            secondtitleimgurl: SecondTitleImgURL,
            secondslidetitle: SecondSlideTitle,
            secondslidecontent: SecondSlideContent,
            secondslidebutton: SecondSlideButton,

            thirdtitleimgurl: ThirdTitleImgURL,
            thirdslidetitle: ThirdSlideTitle,
            thirdslidecontent: ThirdSlideContent,
            thirdslidebutton: ThirdSlideButton,

            fourthtitleimgurl: FourthTitleImgURL,
            fourthslidetitle: FourthSlideTitle,
            fourthslidecontent: FourthSlideContent,
            fourthslidebutton: FourthSlideButton

        }
    });













});