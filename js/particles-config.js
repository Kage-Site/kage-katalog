tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
        number: { value: 80, density: { enable: true, area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: true, speed: 2, size_min: 0.1, sync: false }
        },
        move: {
            enable: true,
            speed: 1,
            direction: "bottom",
            random: false,
            straight: false,
            outModes: { default: "out" },
            trail: { enable: true, length: 3, fillColor: "#000000" }
        }
    },
    interactivity: { detectsOn: "canvas", events: { resize: true } },
    detectRetina: true
});