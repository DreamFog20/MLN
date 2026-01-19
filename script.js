// THE TRUTH LENS - JavaScript
// Cyberpunk SPA with Pudding-Style Scrollytelling

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c THE TRUTH LENS ', 'background: #00ff41; color: #050a14; font-size: 20px; font-weight: bold; padding: 10px;');
    console.log('%c Pudding-Style Scrollytelling Activated ', 'background: #050a14; color: #00ff41; font-size: 14px; padding: 5px;');

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

    // Floating Icons Modal with Dynamic Content
    const floatingIcons = document.querySelectorAll('.floating-icon');
    const modal = document.getElementById('conceptModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    const modalClose = modal ? modal.querySelector('.modal-close') : null;

    // Content for each concept
    const conceptContent = {
        rationality: {
            title: 'NÃO BỘ - TƯ DUY LÝ TÍNH',
            content: `
                <p><strong>Tư duy lý tính</strong> là khả năng phân tích, suy luận logic để hiểu bản chất sự vật.</p>
                <p><strong>Đặc điểm:</strong></p>
                <ul>
                    <li>Phản ánh bản chất, quy luật bên trong</li>
                    <li>Sử dụng logic, phân tích, tổng hợp</li>
                    <li>Vượt qua cảm nhận bề ngoài</li>
                    <li>Tạo ra khái niệm, phán đoán, suy lý</li>
                </ul>
                <p><em>Ví dụ:</em> Phân tích lý do tại sao KOL quảng cáo sản phẩm (có hoa hồng? có kiểm chứng?)</p>
            `
        },
        observation: {
            title: 'MẮT - QUAN SÁT THỰC TẾ',
            content: `
                <p><strong>Quan sát</strong> là bước đầu tiên của nhận thức - thu thập thông tin qua giác quan.</p>
                <p><strong>Nguyên tắc quan sát đúng:</strong></p>
                <ul>
                    <li>Quan sát toàn diện, không chỉ nhìn bề ngoài</li>
                    <li>Ghi nhận chi tiết, dấu hiệu bất thường</li>
                    <li>So sánh với thực tế đã biết</li>
                    <li>Không vội kết luận từ ấn tượng ban đầu</li>
                </ul>
                <p><em>Ví dụ:</em> Nhìn KOL đăng ảnh xe sang → Quan sát kỹ: Có biển số? Có giấy tờ? Hay chỉ thuê chụp?</p>
            `
        },
        logic: {
            title: 'BÁNH RĂNG - CƠ CHẾ PHÂN TÍCH',
            content: `
                <p><strong>Phân tích</strong> là quá trình tách nhỏ vấn đề để hiểu từng bộ phận.</p>
                <p><strong>Các bước phân tích:</strong></p>
                <ul>
                    <li><strong>Phân tích:</strong> Tách thông tin thành các yếu tố nhỏ</li>
                    <li><strong>Tổng hợp:</strong> Kết nối các yếu tố để thấy toàn cảnh</li>
                    <li><strong>So sánh:</strong> Đối chiếu với các trường hợp tương tự</li>
                    <li><strong>Khái quát hóa:</strong> Rút ra quy luật chung</li>
                </ul>
                <p><em>Ví dụ:</em> Phân tích lời quảng cáo → Tách ra: Lời hứa, bằng chứng, nguồn gốc → Đối chiếu thực tế</p>
            `
        },
        connection: {
            title: 'MẠNG LƯỚI - KẾT NỐI THÔNG TIN',
            content: `
                <p><strong>Kết nối thông tin</strong> giúp nhìn thấy mối quan hệ giữa các sự kiện.</p>
                <p><strong>Cách kết nối hiệu quả:</strong></p>
                <ul>
                    <li>Tìm mối liên hệ giữa các nguồn tin</li>
                    <li>Xác định ai hưởng lợi từ thông tin này</li>
                    <li>Kiểm tra tính nhất quán của câu chuyện</li>
                    <li>So sánh với nhiều nguồn độc lập</li>
                </ul>
                <p><em>Ví dụ:</em> KOL A quảng cáo sản phẩm X → Kiểm tra: KOL B, C, D có quảng cáo không? Họ có liên quan gì?</p>
            `
        },
        security: {
            title: 'KHÓA - KIỂM CHỨNG BẢO MẬT',
            content: `
                <p><strong>Kiểm chứng</strong> là bước cuối cùng - xác minh tính đúng đắn của thông tin.</p>
                <p><strong>Tiêu chí kiểm chứng:</strong></p>
                <ul>
                    <li>✅ Có bằng cấp/chứng chỉ chính thức?</li>
                    <li>✅ Có bằng chứng khoa học được công bố?</li>
                    <li>✅ Có xung đột lợi ích không?</li>
                    <li>✅ Thông tin có thể tái hiện được không?</li>
                </ul>
                <p><em>Ví dụ:</em> Kiểm tra giấy phép kinh doanh, chứng nhận FDA, đánh giá từ tổ chức độc lập</p>
            `
        }
    };

    // Add click event to each icon
    floatingIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const concept = icon.getAttribute('data-concept');
            const content = conceptContent[concept];

            if (content && modal && modalTitle && modalBody) {
                modalTitle.textContent = content.title;
                modalBody.innerHTML = content.content;
                modal.classList.remove('hidden');
            }
        });
    });

    // Close modal
    if (modalClose) {
        modalClose.addEventListener('click', () => {
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Close modal when clicking outside
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
            modal.classList.add('hidden');
        }
    });

    // Library Sidebar Toggle
    const libraryBtn = document.getElementById('libraryBtn');
    const librarySidebar = document.getElementById('librarySidebar');
    const closeSidebar = document.getElementById('closeSidebar');

    if (libraryBtn && librarySidebar) {
        libraryBtn.addEventListener('click', () => {
            librarySidebar.classList.add('active');
        });
    }

    if (closeSidebar) {
        closeSidebar.addEventListener('click', () => {
            librarySidebar.classList.remove('active');
        });
    }

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (librarySidebar && librarySidebar.classList.contains('active') &&
            !librarySidebar.contains(e.target) &&
            !libraryBtn.contains(e.target)) {
            librarySidebar.classList.remove('active');
        }
    });

    // Truth Calculator Form Logic (Original)
    const truthForm = document.getElementById('truthForm');
    const resultMessage = document.getElementById('resultMessage');

    if (truthForm && resultMessage) {
        const resultContent = resultMessage.querySelector('.result-content');

        // Update checkbox icons in real-time
        const checkboxes = document.querySelectorAll('.custom-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function () {
                const icon = this.nextElementSibling.querySelector('.checkbox-icon');
                if (icon) {
                    if (this.checked) {
                        icon.textContent = '[✓]';
                    } else {
                        icon.textContent = '[ ]';
                    }
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
                resultContent.innerHTML = '✓ UY TÍN<br><span style="font-size: 0.875rem; letter-spacing: 0.05em;">Tất cả tiêu chí xác minh đã đạt</span>';

                // Play success sound (optional)
                playSound('success');
            } else {
                // Some criteria failed - WARNING
                resultMessage.classList.add('warning');
                resultContent.innerHTML = '⚠ CẢNH BÁO: CHƯƠA XÁC MINH<br><span style="font-size: 0.875rem; letter-spacing: 0.05em;">Xác minh thất bại. Kiểm tra tất cả tiêu chí.</span>';

                // Play glitch/error sound (optional)
                playSound('error');
            }

            // Scroll to result
            resultMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    }

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

    // --- PUDDING-STYLE SCROLLYTELLING LOGIC ---
    const steps = document.querySelectorAll('.step');
    const scenes = document.querySelectorAll('.scene');

    if (steps.length > 0 && scenes.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // 1. Xác định bước nào đang hiện
                    const index = entry.target.getAttribute('data-step');

                    // 2. Active Text Box (hiện chữ)
                    steps.forEach(s => s.classList.remove('active'));
                    entry.target.classList.add('active');

                    // 3. Active Scene (đổi hình nền tương ứng)
                    if (index) {
                        scenes.forEach(scene => scene.classList.remove('active'));
                        const targetScene = document.getElementById(`scene-${index}`);
                        if (targetScene) {
                            targetScene.classList.add('active');
                        }
                    }
                }
            });
        }, {
            threshold: 0.5 // Kích hoạt khi lướt qua 50% step
        });

        steps.forEach(step => observer.observe(step));
    }
});

// --- CALCULATOR VERIFICATION FUNCTION (for Pudding-style calculator) ---
function checkTruth() {
    const check1 = document.getElementById('check1');
    const check2 = document.getElementById('check2');
    const check3 = document.getElementById('check3');
    const result = document.getElementById('result-pudding');

    if (!check1 || !check2 || !check3 || !result) {
        console.error('Calculator elements not found');
        return;
    }

    // Remove previous classes
    result.classList.remove('show', 'trusted', 'warning');

    // Check if all criteria are met
    const allChecked = check1.checked && check2.checked && check3.checked;

    // Show result with animation
    setTimeout(() => {
        result.classList.add('show');

        if (allChecked) {
            result.classList.add('trusted');
            result.innerHTML = '✓ UY TÍN<br><span style="font-size: 1rem; letter-spacing: 0.05em;">Tất cả tiêu chí xác minh đã đạt</span>';
        } else {
            result.classList.add('warning');
            result.innerHTML = '⚠ CẢNH BÁO: CHƯƠA XÁC MINH<br><span style="font-size: 1rem; letter-spacing: 0.05em;">Xác minh thất bại. Kiểm tra tất cả tiêu chí.</span>';
        }
    }, 100);
}

// ===================================
// AI DISCLOSURE MODAL
// ===================================

// Get elements
const aiDisclosureBtn = document.getElementById('aiDisclosureBtn');
const aiDisclosureModal = document.getElementById('aiDisclosureModal');
const closeAiModal = document.getElementById('closeAiModal');

// Open modal
if (aiDisclosureBtn) {
    aiDisclosureBtn.addEventListener('click', () => {
        aiDisclosureModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scroll
    });
}

// Close modal
if (closeAiModal) {
    closeAiModal.addEventListener('click', () => {
        aiDisclosureModal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Restore scroll
    });
}

// Close modal when clicking outside
if (aiDisclosureModal) {
    aiDisclosureModal.addEventListener('click', (e) => {
        if (e.target === aiDisclosureModal) {
            aiDisclosureModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !aiDisclosureModal.classList.contains('hidden')) {
        aiDisclosureModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

/* ===================================
   AI DISCLOSURE MODAL LOGIC
   =================================== */

document.addEventListener('DOMContentLoaded', function() {
    const aiModal = document.getElementById('aiDisclosureModal');
    const aiBtn = document.getElementById('aiDisclosureBtn');
    const aiClose = document.querySelector('.ai-close');

    if (aiModal && aiBtn) {
        // Open Modal
        aiBtn.addEventListener('click', function() {
            aiModal.style.display = 'block';
            playSound('success'); // Reusing existing sound function
        });

        // Close Modal
        aiClose.addEventListener('click', function() {
            aiModal.style.display = 'none';
        });

        // Click outside to close
        window.addEventListener('click', function(event) {
            if (event.target == aiModal) {
                aiModal.style.display = 'none';
            }
        });

        // ESC key to close
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape' && aiModal.style.display === 'block') {
                aiModal.style.display = 'none';
            }
        });
    }
});
