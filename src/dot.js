export const dot = {
    sprite: null,
    track: null,

    // Initialize the dot: connect sprite and track properties with supplied SVG elements
    init: function(sprite, track) {
        this.sprite = document.getElementById(sprite);
        this.track = document.getElementById(track);
    },
    
    // Put the dot on its spot
    move: function(u) {
        const p = this.track.getPointAtLength(u * this.track.getTotalLength());
        this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
    }
};
