// disable right click
function disable_right_click(event) {
    event.preventDefault();
}
document.addEventListener('contextmenu', disable_right_click);
// menu actions
const menu_button = document.getElementById('menu_button');
const menu = document.getElementById('menu');
menu_button.addEventListener('click', () => {
    menu.classList.toggle('show');
});
window.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menu_button) {
        menu.classList.remove('show');
    }
});
// open popup
function open_popup() {
  document.getElementById("msg_popup").style.display = "block";
  document.getElementById("hide_background").style.display = "block";
}
window.onload = function() {
    open_popup();
};
// close popup
function close_popup() {
  document.getElementById("msg_popup").style.display = "none";
  document.getElementById("hide_background").style.display = "none";
}
// particle configuration
particlesJS({
	"particles": {
		"number": {
			"value": 60,
			"density": {
				"enable": true,
				"value_area": 800
			}
		},
		"color": {
			"value": "#ffffff"
		},
		"shape": {
			"type": "circle",
			"stroke": {
				"width": 0,
				"color": "#000000"
			},
		},
		"opacity": {
			"value": 0.8,
			"random": false,
			"anim": {
				"enable": false,
				"speed": 1,
				"opacity_min": 0.1,
				"sync": false
			}
		},
		"size": {
			"value": 6,
			"random": true,
			"anim": {
				"enable": false,
				"speed": 40,
				"size_min": 0.1,
				"sync": false
			}
		},
		"line_linked": {
			"enable": true,
			"distance": 150,
			"color": "#ffffff",
			"opacity": 0.4,
			"width": 1
		},
		"move": {
			"enable": true,
			"speed": 6,
			"direction": "none",
			"random": false,
			"straight": false,
			"out_mode": "out",
			"bounce": false,
			"attract": {
				"enable": false,
				"rotateX": 600,
				"rotateY": 1200
			}
		}
	},
	"interactivity": {
		"detect_on": "canvas",
		"events": {
			"onhover": {
				"enable": false,
				"mode": "repulse"
			},
			"onclick": {
				"enable": false,
				"mode": "push"
			},
			"resize": true
		},
		"modes": {
			"grab": {
				"distance": 400,
				"line_linked": {
					"opacity": 1
				}
			},
			"bubble": {
				"distance": 400,
				"size": 40,
				"duration": 2,
				"opacity": 8,
				"speed": 3
			},
			"repulse": {
				"distance": 200,
				"duration": 0.4
			},
			"push": {
				"particles_nb": 4
			},
			"remove": {
				"particles_nb": 2
			}
		}
	},
	"retina_detect": true
});