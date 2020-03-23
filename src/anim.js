import {dot} from "./dot.js";

export const anim = {
    start: function(duration) {
        this.duration = duration;
        this.tZero = Date.now();

        requestAnimationFrame(() => this.run());
    },
    
    run: function() {
        let u = Math.min((Date.now() - this.tZero) / this.duration, 1);
        
        if (u < 1) {
            // Keep requesting frames, till animation is ready
            requestAnimationFrame(() => this.run());
        } else {
            this.onFinish();
        }
        
        dot.move(u);
    },
    
    onFinish: function() {
        // Schedule the animation to restart
        setTimeout(() => this.start(this.duration), 1000);
    }
};