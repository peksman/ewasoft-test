export function initTabs() {
    // document.querySelectorAll('.four-column-filter__box button').forEach(function(btn) {
    //     btn.addEventListener('click', function() {
    //         var attr = this.getAttribute('data-li');
    
    //         document.querySelectorAll('.four-column-filter__box button').forEach(function(btn) {
    //             btn.classList.remove('active');
    //         });
    //         this.classList.add('active');
    
    //         document.querySelectorAll('.four-column__slider-box').forEach(function(item) {
    //             item.style.display = 'none';
    //         });
    
    //         if (attr && (attr == "all" || attr == "hatchback" || attr == "sportback" || attr == "limousine" || attr == "suv" || attr == "cabrio")) {
    //             document.querySelectorAll('.' + attr).forEach(function(item) {
    //                 item.style.display = 'block';
    //             });
    //         } else {
    //             document.querySelectorAll('.four-column__slider-box').forEach(function(item) {
    //                 item.style.display = 'block';
    //             });
    //         }
    //     });
    // }); 
    document.querySelectorAll('.four-column-filter__box button').forEach(function(btn) {
        btn.addEventListener('click', function() {
            var attr = this.getAttribute('data-li');
    
            document.querySelectorAll('.four-column-filter__box button').forEach(function(btn) {
                btn.classList.remove('active');
            });
            this.classList.add('active');
    
            document.querySelectorAll('.four-column__slider-box').forEach(function(item) {
                var itemAttr = item.getAttribute('data-li');
                if (itemAttr && itemAttr.includes(attr)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });          
}