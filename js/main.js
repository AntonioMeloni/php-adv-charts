$(document).ready(function () {

    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    $.ajax({
        url: 'server.php',
        method: 'GET',
        success: function (data) {
           createLineChart(mesi,data);
        },
        error: function (error) {
           alert('BOOM');
        }
    });

    $.ajax({
        url: 'server2.php',
        method: 'GET',
        success: function (data) {
           var first_type = data.fatturato.type;
           var dati = data.fatturato.data;
           createChart('#vendite-mensili2',first_type, mesi, dati)


           var nomi = Object.keys(data.fatturato_by_agent.data);
           var vendite = Object.values(data.fatturato_by_agent.data);
           var tipo = data.fatturato_by_agent.type;
           createChart('#vendite-mensili2-pie',tipo, nomi, vendite)

        },
        error: function (error) {
           alert('BOOM');
        }
    });

    function createLineChart(labels, data) {
        var ctx = $('#vendite-mensili');
                var chart = new Chart(ctx, {
                    type: 'line',

                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Grafico Vendite Mensili',
                            borderColor: 'rgb(255, 99, 132)',
                            data: data
                        }]
                    },


                });
    }



    function createChart(ctx,type,labels, data) {
        var ctx = $(ctx);
                var chart = new Chart(ctx, {
                    type: type,

                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Grafico Vendite Mensili',
                            borderColor: 'rgb(255, 99, 132)',
                            data: data
                        }]
                    },


                });
    }

});
