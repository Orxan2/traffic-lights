window.addEventListener('load', function(params) {
    let container = document.querySelector('.container');
    let colors = ['red', 'yellow', 'green'];



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

        // let timer = document.createElement('div');
        // timer.classList.add("timer");

        container.appendChild(traffic);

    }




    CreateHtmlElements();

    function TrafficLights() {
        let lights = this.document.querySelectorAll('.traffic__light');

        function BrightRed() {
            setTimeout(() => {
                let color = lights[0].getAttribute('data-color');
                lights[2].style.boxShadow = `none`;
                lights[0].style.boxShadow = `0 0 20px 14px ${color}`;
            }, 1000);
        }

        function BrightYellow() {
            setTimeout(() => {
                let color = lights[1].getAttribute('data-color');
                lights[0].style.boxShadow = `none`;
                lights[1].style.boxShadow = `0 0 20px 14px ${color}`;
            }, 10000);
        }


        function BrightGreen() {
            setTimeout(() => {
                let color = lights[2].getAttribute('data-color');
                lights[1].style.boxShadow = `none`;
                lights[2].style.boxShadow = `0 0 20px 14px ${color}`;
            }, 12000);
        }

        BrightRed();
        BrightYellow();
        BrightGreen();

        setInterval(() => {

            BrightRed();
            BrightYellow();
            BrightGreen();

        }, 12000);

    }

    //Trafic Light Operation
    TrafficLights();

});