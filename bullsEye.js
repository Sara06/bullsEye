var bullsEyeModule = (function(win, doc) {

    win.onload = init;

    // canvas and context variables
    var canvas;
    var context;

    // center of the pattern
    var centerX, centerY;


    function init() {
        
            canvas = doc.getElementById("testCanvas");
            context = canvas.getContext("2d");

            centerX = canvas.width / 2;
            centerY = canvas.height / 2;
            
            // draw the initial pattern
            drawPattern();
    }


    // called whenever the slider value changes
    function drawPattern()
    {
        context.clearRect(0, 0, canvas.width, canvas.height);
        
        var bandWidth = doc.getElementById("band").value;
        doc.getElementById("widthDisplay").value = bandWidth;

        var currentRadius = Math.min(centerX, centerY);
        var redTurn = true;
    
        while (currentRadius > 0)
        {
            if (redTurn)    
                context.fillStyle = '#FF0000';
            else
                context.fillStyle = '#0000FF';
                
            context.beginPath();
            context.arc(centerX, centerY, currentRadius, 0, 2*Math.PI);
            context.fill();
            currentRadius -= bandWidth;
            redTurn = !redTurn;
        } 
    }

    return {
        drawPattern: drawPattern
    };

})(window, document);






