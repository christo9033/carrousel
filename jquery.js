$(document).ready(function () {

    var $carrousel = $('#carrousel'),
        $img = $('#carrousel img'),
        indexImg = $img.length - 1,
        i = 0,
        $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');

    $carrousel.append('<div class="controls"> <span class="prev"><img src="fleche1.jpg" alt="precedent"></span> <span class="next"><img src="fleche2.jpg" alt="suivant"></span> </div>');

    $('.next').click(() => {

        i++;

        if (i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else {
            i = indexImg;
        }

    });

    $('.prev').click(() => {

        i--;

        if (i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
        else {
            i = 0;
        }
    });

    function slideImg() {
        setTimeout(() => {

            if (i < indexImg) {
                i++;
            }
            else {
                i = 0;
            }

            $img.css('display', 'none');

            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            slideImg();
        }, 3000);
    }

    slideImg();

});
