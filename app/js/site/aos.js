export function initAos() {
    let aosInitialized = false;

    function initAOS() {
        if (!aosInitialized) {
            AOS.init({
                once: true,
                disable: 'mobile'   
            });
            aosInitialized = true;
        }
    }

    window.onload = initAOS;
    window.addEventListener('resize', initAOS);
}