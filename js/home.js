const chartCanvas =
document.getElementById("mentalChart");

if(chartCanvas){

    const ctx =
    chartCanvas.getContext("2d");

    new Chart(ctx, {

        type: "line",

        data: {

            labels: [
                "2007",
                "2013",
                "2018"
            ],

            datasets: [{

                label:
                "Gangguan Mental Emosional (%)",

                data: [
                    11.6,
                    6.0,
                    9.8
                ],

                borderColor:
                "#6366f1",

                backgroundColor:
                "rgba(99,102,241,0.2)",

                fill: true,

                tension: 0.4

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false

        }

    });

}