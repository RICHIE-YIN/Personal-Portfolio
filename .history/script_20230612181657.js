const typewriterElements = document.querySelectorAll('.typewriter h1');
typewriterElements.forEach((element) => {
  element.innerHTML = element.innerHTML.trim();
});

typewriterElements.forEach((element, index) => {
  setTimeout(() => {
    element.classList.remove('hidden');
  }, index * 2000); // Delay each text by 2 seconds
});

function openPopup(projectId) {
  document.getElementById(projectId).style.display = 'block';
}

function closePopup(projectId) {
  document.getElementById(projectId).style.display = 'none';
}

function projectPopup(idx) {
  let popup = document.querySelector(".project-popup");
  let popupContent = document.querySelector(".project-popup-content");
  let gifSrc = `your-gif-source-${idx}.gif`;
  let projectLink = `your-project-link-${idx}`;

  popupContent.innerHTML = `
      <div class="gif-container">
          <img src="${gifSrc}" alt="Project gif" />
      </div>
      <div class="link-container">
          <a href="${projectLink}" target="_blank">Check out the project</a>
          <button onclick="closePopup()">Close</button>
      </div>
  `;
  popup.style.display = "block";
}

window.addEventListener('scroll', function () {
	var navbar = document.getElementById('navbar');
	var firstSection = document.querySelector('.first-section'); // Replace this with the correct selector for your first section
	var rect = firstSection.getBoundingClientRect();
	var navbarPosition = rect.top + rect.height - navbar.offsetHeight;

	if (window.pageYOffset >= navbarPosition) {
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
	}
});

const textElement = document.getElementById('text');
const phrases = ['Richie Yin', 'Full Stack Developer'];
let index = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentPhrase = phrases[index % phrases.length];
    
    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    textElement.textContent = currentPhrase.slice(0, charIndex);

    let typeSpeed = isDeleting ? 100 : 150;

    if (charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 1000; // Pause after typing
    } else if (charIndex === 0) {
        isDeleting = false;
        index++; // Move to the next phrase
        typeSpeed = 500; // Pause before start typing
    }

    setTimeout(typeWriter, typeSpeed);
}

typeWriter();

// class StickyNavigation {
	
// 	constructor() {
// 		this.currentId = null;
// 		this.currentTab = null;
// 		this.tabContainerHeight = 70;
// 		let self = this;
// 		$('.et-hero-tab').click(function() { 
// 			self.onTabClick(event, $(this)); 
// 		});
// 		$(window).scroll(() => { this.onScroll(); });
// 		$(window).resize(() => { this.onResize(); });
// 	}
	
// 	onTabClick(event, element) {
// 		event.preventDefault();
// 		let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
// 		$('html, body').animate({ scrollTop: scrollTop }, 600);
// 	}
	
// 	onScroll() {
// 		this.checkTabContainerPosition();
//     this.findCurrentTabSelector();
// 	}
	
// 	onResize() {
// 		if(this.currentId) {
// 			this.setSliderCss();
// 		}
// 	}
	
// 	checkTabContainerPosition() {
// 		let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
// 		if($(window).scrollTop() > offset) {
// 			$('.et-hero-tabs-container').addClass('et-hero-tabs-container--top');
// 		} 
// 		else {
// 			$('.et-hero-tabs-container').removeClass('et-hero-tabs-container--top');
// 		}
// 	}
	
// 	findCurrentTabSelector(element) {
// 		let newCurrentId;
// 		let newCurrentTab;
// 		let self = this;
// 		$('.et-hero-tab').each(function() {
// 			let id = $(this).attr('href');
// 			let offsetTop = $(id).offset().top - self.tabContainerHeight;
// 			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
// 			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
// 				newCurrentId = id;
// 				newCurrentTab = $(this);
// 			}
// 		});
// 		if(this.currentId != newCurrentId || this.currentId === null) {
// 			this.currentId = newCurrentId;
// 			this.currentTab = newCurrentTab;
// 			this.setSliderCss();
// 		}
// 	}
	
// 	setSliderCss() {
// 		let width = 0;
// 		let left = 0;
// 		if(this.currentTab) {
// 			width = this.currentTab.css('width');
// 			left = this.currentTab.offset().left;
// 		}
// 		$('.et-hero-tab-slider').css('width', width);
// 		$('.et-hero-tab-slider').css('left', left);
// 	}
	
// }

// document.getElementById('contact-form').addEventListener('submit', function(event) {
// 	event.preventDefault();
// 	// You can add any additional JavaScript code here, e.g., form validation, animations, etc.
// 	this.submit();
//   });
new StickyNavigation();





