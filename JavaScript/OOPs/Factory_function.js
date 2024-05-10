// Factory function
// This is not used nowadays

function hex(r, g, b) {
    return '#' + ((1 << 24) + (r << 16) + (g<<8) +b).toString(16).slice(1);
}

function rgb(r,g,b){
    return `rgb(${r}, ${g},${b})`
}

function makeColor(r, g, b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const {r,g,b} = this;  // extract the values of rgb from object color
        return `rgb(${r}, ${g}, ${b})`;
    };
    return color;
}

const firstColor = makeColor(35,255,78);