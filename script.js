document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 800,
        once: true,
        offset: 80,
        easing: 'ease-out-cubic'
    });

    // 2. Navbar Scroll Effect (Glassmorphism enhancer)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Terminal Typewriter Effect
    const terminalCode = `
<span class="comment">// Architecting a scalable system</span>
<span class="keyword">class</span> <span class="class-name">SoftwareEngineer</span> {
  <span class="keyword">public</span> <span class="property">$name</span> = <span class="string">"Abdulrahman Al-Hammadi"</span>;
  <span class="keyword">public</span> <span class="property">$motto</span> = <span class="string">"Read Logs, Don't Guess"</span>;

  <span class="keyword">public function</span> <span class="class-name">buildSystem</span>() {
    <span class="keyword">return new</span> <span class="class-name">MicroserviceArchitecture</span>([
      <span class="string">'Backend'</span>  => <span class="string">'Laravel / PHP'</span>,
      <span class="string">'Frontend'</span> => <span class="string">'React SPA'</span>,
      <span class="string">'Database'</span> => <span class="string">'MongoDB / MySQL'</span>,
      <span class="string">'AI_Layer'</span> => <span class="string">'Python / FastAPI'</span>
    ]);
  }
}`;

    const typeWriterElement = document.getElementById('typewriter');
    // Using a faster typing speed to ensure users see the full code quickly
    let i = 0;
    const speed = 5; 
    let isTag = false;
    let text = "";

    function typeWriter() {
        if (i < terminalCode.length) {
            let char = terminalCode.charAt(i);
            text += char;
            
            // Handle HTML tags so they render instantly instead of char by char
            if (char === '<') isTag = true;
            if (char === '>') isTag = false;

            if (isTag) {
                i++;
                typeWriter();
            } else {
                typeWriterElement.innerHTML = text + '<span class="cursor"></span>';
                i++;
                setTimeout(typeWriter, speed);
            }
        } else {
            // Typing finished, keep the blinking cursor
            typeWriterElement.innerHTML = text + '<span class="cursor"></span>';
        }
    }

    // Start typing effect slightly after page load
    setTimeout(typeWriter, 1000);
});
