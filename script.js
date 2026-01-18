// THE TRUTH LENS - JavaScript
// Cyberpunk SPA functionality

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c THE TRUTH LENS ', 'background: #00ff41; color: #050a14; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c System Initialized ', 'background: #050a14; color: #00ff41; font-size: 14px; padding: 5px;');

    // Initialize Particles.js
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff41'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff41',
                opacity: 0.2,
                width: 1
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });

    // Truth Calculator Form Logic
    const truthForm = document.getElementById('truthForm');
    const resultMessage = document.getElementById('resultMessage');
    const resultContent = resultMessage.querySelector('.result-content');

    // Update checkbox icons in real-time
    const checkboxes = document.querySelectorAll('.custom-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const icon = this.nextElementSibling.querySelector('.checkbox-icon');
            if (this.checked) {
                icon.textContent = '[✓]';
            } else {
                icon.textContent = '[ ]';
            }
        });
    });

    // Form submission handler
    truthForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get checkbox states
        const hasDegree = document.getElementById('degree').checked;
        const hasProof = document.getElementById('proof').checked;
        const noConflict = document.getElementById('conflict').checked;

        // Check if all criteria are met
        const allChecked = hasDegree && hasProof && noConflict;

        // Remove previous classes
        resultMessage.classList.remove('hidden', 'trusted', 'warning');

        if (allChecked) {
            // All criteria passed - TRUSTED
            resultMessage.classList.add('trusted');
            resultContent.innerHTML = '✓ TRUSTED<br><span style="font-size: 0.875rem; letter-spacing: 0.05em;">All verification criteria passed</span>';

            // Play success sound (optional)
            playSound('success');
        } else {
            // Some criteria failed - WARNING
            resultMessage.classList.add('warning');
            resultContent.innerHTML = '⚠ WARNING: UNVERIFIED<br><span style="font-size: 0.875rem; letter-spacing: 0.05em;">Verification failed. Check all criteria.</span>';

            // Play glitch/error sound (optional)
            playSound('error');
        }

        // Scroll to result
        resultMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    // Optional: Sound effect function
    function playSound(type) {
        // Create audio context for sound generation
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        if (type === 'success') {
            // Success sound: ascending tones
            oscillator.frequency.setValueAtTime(400, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 0.1);
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        } else if (type === 'error') {
            // Error/glitch sound: harsh descending tones
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.15);
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.15);
        }
    }
});
