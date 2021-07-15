window.addEventListener('load', function(params) {
    let container = document.querySelector('.container');
    let colors = ['red', 'yellow', 'green'];
    let time = 10;


    function CreateHtmlElements(params) {

        let traffic = document.createElement('div');
        traffic.classList.add("traffic");


        for (let index = 0; index < colors.length; index++) {
            const element = colors[index];

            let traffic_light = document.createElement('div');

            traffic_light.classList.add('traffic__light');
            traffic_light.classList.add(`traffic__light--${element}`);
            traffic_light.setAttribute('data-color', element);
            traffic.appendChild(traffic_light);
        }

        let timer = document.createElement('div');
        timer.classList.add("timer");

        let span = document.createElement('span');
        // span.classList.add("timer");
        timer.appendChild(span);


        container.appendChild(traffic);
        traffic.appendChild(timer);

    }
    CreateHtmlElements();

    function TrafficLights() {
        let lights = this.document.querySelectorAll('.traffic__light');


        function BrightRed(second) {

            setTimeout((second) => {
                time = 10;
                let color = lights[0].getAttribute('data-color');
                lights[2].style.boxShadow = `none`;
                lights[0].style.boxShadow = `0 0 20px 14px ${color}`;

            }, second);
        }

        function BrightYellow(second) {

            setTimeout(() => {
                time = 2;
                let color = lights[1].getAttribute('data-color');
                lights[0].style.boxShadow = `none`;
                lights[1].style.boxShadow = `0 0 20px 14px ${color}`;

            }, second);
        }


        function BrightGreen(second) {

            setTimeout(() => {

                time = 15;
                let color = lights[2].getAttribute('data-color');
                lights[1].style.boxShadow = `none`;
                lights[2].style.boxShadow = `0 0 20px 14px ${color}`;

            }, second);
        }



        BrightRed(0);
        BrightYellow(11000);
        BrightGreen(13000);

        setInterval(() => {
            BrightRed(0);
            BrightYellow(11000);
            BrightGreen(13500);
        }, 28000);




    }

    //Trafic Light Operation
    TrafficLights();


    setInterval(() => {
        let x = document.querySelector('span');

        x.textContent = time;
        time -= 1;



    }, 1000);


});