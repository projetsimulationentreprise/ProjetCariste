var a;
a=1;

$('.cache').fadeOut(0);

$('.pop').click(function () {
    if(a==1){
        $('.cache').fadeIn(1);
        a=0;
    }
    else{
        $('.cache').fadeOut(1);
        a=1;
    }
});

var b;
b=1;

$('.cacher').fadeOut(0);

$('.pope').click(function () {
    if(b==1){
        $('.cacher').fadeIn(1);
        b=0;
    }
    else{
        $('.cacher').fadeOut(1);
        b=1;
    }
});

var c;
c=1;

$('.cachere').fadeOut(0);

$('.popee').click(function () {
    if(c==1){
        $('.cachere').fadeIn(1);
        c=0;
    }
    else{
        $('.cachere').fadeOut(1);
        c=1;
    }
 });
