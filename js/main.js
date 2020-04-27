$(document).ready(function () {

    var mesi = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre']
    // $.ajax({
    //     url: 'server.php',
    //     method: 'GET',
    //     success: function (data) {
    //        //createLineChart(mesi,data);
    //     },
    //     error: function (error) {
    //        alert('BOOM');
    //     }
    // });
    //
    // $.ajax({
    //     url: 'server2.php',
    //     method: 'GET',
    //     success: function (data) {
    //        var first_type = data.fatturato.type;
    //        var dati = data.fatturato.data;
    //        //createChart('#vendite-mensili2',first_type, mesi, dati)
    //
    //
    //        var nomi = Object.keys(data.fatturato_by_agent.data);
    //        var vendite = Object.values(data.fatturato_by_agent.data);
    //        var tipo = data.fatturato_by_agent.type;
    //       // createChart('#vendite-mensili2-pie',tipo, nomi, vendite)
    //
    //     },
    //     error: function (error) {
    //        alert('BOOM');
    //     }
    // });




//------------------STEP 3------------
//------------GUEST------------

$.ajax({
    url: 'guest_server.php',
    method: 'GET',
    success: function (data) {
        var fatt = data[0].data;
        createLineChart(mesi,fatt);
    },
    error: function (error) {
       alert('BOOM');
    }
});

//---------------EMPLOYEE-------------

$.ajax({
    url: 'employee_server.php',
    method: 'GET',
    success: function (data) {
        var fattAgente = data[0].data;
        var nomi = [];
        var vendite = [];

        for (var nome in fattAgente) {
            nomi.push(nome);
            vendite.push(fattAgente[nome]);
        }
        var tipo = data[0].type;
        createChart('#vendite-mensili2-pie',tipo, nomi, vendite)
    },
    error: function (error) {
       alert('BOOM');
    }
});

//-----------CLEVEL-----------

$.ajax({
    url: 'clevel_server.php',
    method: 'GET',
    success: function (data) {
        var fattTeam = data[0].data;
        var teams = [];
        var vendite = [];

        for (var team in fattTeam) {
            teams.push(team);
            vendite.push(fattTeam[team]);
        }
        var tipo = data[0].type;
        createMultilineChart( teams, vendite)
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


function createMultilineChart(data, labels) {
    var ctx = $('#vendite-mensili2');
            var chart = new Chart(ctx, {
                type: 'line',

                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Grafico Vendite Mensili',
                        borderColor: 'rgb(255, 99, 132)',
                        data: data[0]
                    }],
                    datasets: [{
                        borderColor: 'rgb(0, 99, 132)',
                        data: data[1]
                    }],
                    datasets: [{
                        borderColor: 'rgb(100, 99, 132)',
                        data: data[2]
                    }]
                },


            });
}
