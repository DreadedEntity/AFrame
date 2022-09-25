AFRAME.registerComponent('spinning', {
    schema: {
        dx: { type: 'number', default: 0 },
        dy: { type: 'number', default: 0 },
        dz: { type: 'number', default: 0 }
    },

    tick: function (time, timeDelta) {
        var element = this.el;
        var rotation = element.object3D.rotation;

        rotation.x += this.data.dx;
        rotation.y += this.data.dy;
        rotation.z += this.data.dz;
    }
});