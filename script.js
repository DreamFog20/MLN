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
            title: '🧠 NÃO BỘ - TƯ DUY LÝ TÍNH',
            content: `
                <div class="concept-detail">
                    <p class="highlight-text">"Nhận thức lý tính là giai đoạn cao của quá trình nhận thức, đi sâu vào bản chất bên trong."</p>
                    
                    <h4>📍 Đặc điểm chính:</h4>
                    <ul>
                        <li><strong>Trừu tượng hóa:</strong> Gạt bỏ cái ngẫu nhiên, bề ngoài, chỉ giữ lại cái cốt lõi.</li>
                        <li><strong>Khái quát hóa:</strong> Tìm ra nguyên lý chung cho nhiều sự việc.</li>
                        <li><strong>Gián tiếp:</strong> Không cần tiếp xúc trực tiếp vẫn hiểu được (VD: Hiểu lõi Trái Đất dù chưa đến đó).</li>
                    </ul>

                    <h4>💡 Ứng dụng thực tế:</h4>
                    <p>Khi thấy một KOL khoe xe sang, nhà lầu (Cảm tính), tư duy lý tính sẽ đặt câu hỏi: <em>"Nguồn tiền từ đâu? Có hợp lý với thu nhập không? Hay chỉ là phông bạt để lùa gà?"</em></p>
                </div>
            `
        },
        observation: {
            title: '👁️ MẮT - QUAN SÁT THỰC TẾ',
            content: `
                <div class="concept-detail">
                    <p class="highlight-text">"Trực quan sinh động là nguồn gốc của mọi hiểu biết, nhưng chưa đủ để thấy chân lý."</p>
                    
                    <h4>📍 Vai trò & Hạn chế:</h4>
                    <ul>
                        <li><strong>Vai trò:</strong> Cung cấp dữ liệu thô (hình ảnh, âm thanh) cho não bộ xử lý.</li>
                        <li><strong>Hạn chế:</strong> Chỉ phản ánh cái bên ngoài, cái riêng lẻ, dễ bị méo mó do ảo giác hoặc ngụy tạo.</li>
                    </ul>

                    <h4>💡 Ứng dụng thực tế:</h4>
                    <p>Mắt thấy "Ảnh chụp màn hình chuyển khoản 10 tỷ".<br>
                    <strong>Cảnh báo:</strong> Ảnh có thể photoshop. Mắt thấy chưa chắc là sự thật. Cần kiểm chứng lại bằng sao kê ngân hàng (Thực tiễn).</p>
                </div>
            `
        },
        logic: {
            title: '⚙️ BÁNH RĂNG - CƠ CHẾ PHÂN TÍCH',
            content: `
                <div class="concept-detail">
                    <p class="highlight-text">"Tư duy không phải là một khối hỗn độn, mà là cỗ máy vận hành theo quy luật logic."</p>
                    
                    <h4>📍 Các thao tác tư duy:</h4>
                    <ul>
                        <li><strong>Phân tích:</strong> Mổ xẻ đối tượng thành các bộ phận (Mổ xẻ profile của KOL).</li>
                        <li><strong>Tổng hợp:</strong> Liên kết các bộ phận đã phân tích để nhìn toàn cảnh.</li>
                        <li><strong>So sánh:</strong> Đối chiếu cái này với cái khác để tìm sự khác biệt (So sánh giá trị thật vs giá ảo).</li>
                    </ul>

                    <h4>💡 Ứng dụng thực tế:</h4>
                    <p>KOL nói: "Đầu tư cái này lãi 50%/tháng".<br>
                    <strong>Phân tích:</strong> Lãi suất ngân hàng 6%/năm. Warren Buffett giỏi nhất cũng chỉ 20%/năm. -> <strong>Kết luận:</strong> 50%/tháng là phi lý -> Lừa đảo.</p>
                </div>
            `
        },
        connection: {
            title: '🔗 MẠNG LƯỚI - MỐI LIÊN HỆ PHỔ BIẾN',
            content: `
                <div class="concept-detail">
                    <p class="highlight-text">"Không sự vật nào tồn tại cô lập. Mọi thứ đều nằm trong mạng lưới liên hệ chằng chịt."</p>
                    
                    <h4>📍 Nguyên lý liên hệ:</h4>
                    <ul>
                        <li>Sự vật này tác động qua lại với sự vật kia.</li>
                        <li>Muốn hiểu một người, hãy xem các mối quan hệ của họ.</li>
                        <li>Đặt thông tin vào bối cảnh cụ thể (Thời gian, không gian, điều kiện).</li>
                    </ul>

                    <h4>💡 Ứng dụng thực tế:</h4>
                    <p>Tại sao KOL A, B, C cùng lúc PR cho một loại tiền ảo?<br>
                    -> Có một "Mạng lưới lợi ích" đứng sau thuê họ. Đây là chiến dịch marketing, không phải lời khuyên chân thật.</p>
                </div>
            `
        },
        security: {
            title: '🔒 KHÓA - THỰC TIỄN KIỂM CHỨNG',
            content: `
                <div class="concept-detail">
                    <p class="highlight-text">"Thực tiễn là tiêu chuẩn duy nhất của chân lý. Lý thuyết màu xám, còn cây đời mãi xanh."</p>
                    
                    <h4>📍 Tiêu chuẩn kiểm tra:</h4>
                    <ul>
                        <li><strong>Kết quả vật chất:</strong> Có làm ra sản phẩm thật không? Hay chỉ nói mồm?</li>
                        <li><strong>Tính lặp lại:</strong> Người khác làm theo có thành công không? Hay chỉ mình họ may mắn?</li>
                        <li><strong>Tính pháp lý:</strong> Giấy tờ, chứng chỉ, sự công nhận của xã hội.</li>
                    </ul>

                    <h4>💡 Ứng dụng thực tế:</h4>
                    <p>Đừng tin lời hứa "Bao lời". Hãy yêu cầu xem Báo cáo tài chính, Giấy phép hoạt động, Cam kết pháp lý. Nếu không có -> 🚩 Cờ đỏ ngay lập tức.</p>
                </div>
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

document.addEventListener('DOMContentLoaded', function () {
    const aiModal = document.getElementById('aiDisclosureModal');
    const aiBtn = document.getElementById('aiDisclosureBtn');
    const aiClose = document.querySelector('.ai-close');

    if (aiModal && aiBtn) {
        // Open Modal
        aiBtn.addEventListener('click', function () {
            aiModal.style.display = 'block';
            playSound('success'); // Reusing existing sound function
        });

        // Close Modal
        aiClose.addEventListener('click', function () {
            aiModal.style.display = 'none';
        });

        // Click outside to close
        window.addEventListener('click', function (event) {
            if (event.target == aiModal) {
                aiModal.style.display = 'none';
            }
        });

        // ESC key to close
        document.addEventListener('keydown', function (event) {
            if (event.key === 'Escape' && aiModal.style.display === 'block') {
                aiModal.style.display = 'none';
            }
        });
    }
});
