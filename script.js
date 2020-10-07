$('.erro').hide();
$('.erro-pes').hide();
$('.erro-alt').hide();
$('.flip-box').hide();
$('#return').hide();
$('button').bind('click', function () {
    var altura = $('#altura').val();
    var peso = $('#peso').val();
    altura = altura.replace(',', '.')
    peso = peso.replace(',', '.')
    var imc = peso / (altura * altura);
    
    if (peso == '' && altura == '') {
        $('.erro').show('fast');
        setTimeout(function fade(){
            $('.erro').fadeToggle();
        },2000);
           fade();
        return false;
    } else if (peso == '') {
        $('.erro-pes').show('fast');
        setTimeout(function fade(){
            $('.erro-pes').fadeToggle();
        },1000);
           fade();
        return false;
    } else if (altura == '') {
$('.erro-alt').show('fast');
setTimeout(function fade(){
    $('.erro-alt').fadeToggle();
},1000);
   fade();
 return false;
} else if (imc < 16) {
    var traducao = 'BAIXO PESO MUITO GRAVE';
    $('#status').css('color','red');
} else if (imc >= 16 && imc < 16.99) {
    var traducao = 'BAIXO PESO GRAVE';
    $('#status').css('color','#FF4136');
} else if (imc >= 17 && imc < 18.49) {
    var traducao = 'BAIXO PESO';
    $('#status').css('color','#DD4124');
} else if (imc >= 18.50 && imc < 24.99) {
    var traducao = 'PESO NORMAL'
    $('#status').css('color','#00e4c6');
} else if (imc >= 25 && imc < 29.99) {
    var traducao = 'SOBREPESO';
    $('#status').css('color','yellow');
} else if (imc >= 30 && imc < 34.99) {
    var traducao = 'OBEDSIDADE GRAU I';
    $('#status').css('color','#E08119');
} else if (imc >= 35 && imc < 39.99) {
    var traducao = 'OBEDSIDADE GRAU II';
    $('#status').css('color','#E94B3C');
} else if (imc >= 40) {
    var traducao = 'OBEDSIDADE GRAU III (OBESIDADE MÓRBIDA)';
    $('#status').css('color','#F96714');
}

$('#form').fadeToggle('fast');
$('.flip-box').show();
    imcfix = imc.toFixed(3)

    $('#imc').html(imcfix + ' kg/m²' )
    $('#status').html(' '+traducao)
    $('#return').show();
    $('#return').bind('click',function(){
        $('.flip-box').hide();
        $('#return').hide();
        $('#form').show();
    })

})

$("#peso").on('keyup', function (e) {
    if (e.key === 'Enter' || e.keyCode === 13 && peso != '' && altura != '') {
        e.preventDefault();
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        altura = altura.replace(',', '.')
        peso = peso.replace(',', '.')
        var imc = peso / (altura * altura);

        if (peso == '' && altura == '') {
            $('.erro').show('fast');
            setTimeout(function fade(){
                $('.erro').fadeToggle();
            },2000);
               fade();
            return false;
        } else if (peso == '') {
            $('.erro-pes').show('fast');
            setTimeout(function fade(){
                $('.erro-pes').fadeToggle();
            },1000);
               fade();
            return false;
        } else if (altura == '') {
    $('.erro-alt').show('fast');
    setTimeout(function fade(){
        $('.erro-alt').fadeToggle();
    },1000);
       fade();
     return false;
        } else if (imc < 16) {
            var traducao = 'BAIXO PESO MUITO GRAVE';
            $('#status').css('color','red');
        } else if (imc >= 16 && imc < 16.99) {
            var traducao = 'BAIXO PESO GRAVE';
            $('#status').css('color','#FF4136');
        } else if (imc >= 17 && imc < 18.49) {
            var traducao = 'BAIXO PESO';
            $('#status').css('color','#DD4124');
        } else if (imc >= 18.50 && imc < 24.99) {
            var traducao = 'PESO NORMAL'
            $('#status').css('color','#00e4c6');
        } else if (imc >= 25 && imc < 29.99) {
            var traducao = 'SOBREPESO';
            $('#status').css('color','yellow');
        } else if (imc >= 30 && imc < 34.99) {
            var traducao = 'OBEDSIDADE GRAU I';
            $('#status').css('color','#E08119');
        } else if (imc >= 35 && imc < 39.99) {
            var traducao = 'OBEDSIDADE GRAU II';
            $('#status').css('color','#E94B3C');
        } else if (imc >= 40) {
            var traducao = 'OBEDSIDADE GRAU III (OBESIDADE MÓRBIDA)';
            $('#status').css('color','#F96714');
        }
        
        $('#form').fadeToggle('fast');
        $('.flip-box').show();

        imcfix = imc.toFixed(3)
       
    $('#imc').html(imcfix + ' kg/m²' )
    $('#status').html(' '+traducao)
    $('#return').show();
    }
    $('#return').bind('click',function(){
        $('.flip-box').hide();
        $('#return').hide();
        $('#form').show();
    })
});
