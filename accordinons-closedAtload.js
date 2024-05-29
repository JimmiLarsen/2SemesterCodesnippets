<script>
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var accordions = document.querySelectorAll('.elementor-accordion .elementor-accordion-item');
        accordions.forEach(function(accordion) {
            var content = accordion.querySelector('.elementor-tab-content');
            accordion.classList.remove('elementor-active');
            if (content) {
                content.style.display = 'none';
            }
        });
    }, 100); // Forsinker eksekveringen med 100 millisekunder
});
</script>
