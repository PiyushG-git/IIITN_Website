
    function loadingAnimation() {
        var images = document.querySelectorAll(".loader-img"); 
        let delayTime = 0; 
    
        let tl = gsap.timeline(); 
        images.forEach((img, index) => {
            tl.to(img, { opacity: 1, duration: 0.05, delay: delayTime }) 
              .to(img, { opacity: 0, duration: 0.05, delay: 0.01 }); 
            delayTime += 0.02; 
        });
    
        setTimeout(() => {
            gsap.to("#loader", { opacity: 0, duration: 0.5, onComplete: () => {
                document.getElementById("loader").style.display = "none"; 
                //maine page1 ka animation hata diya hai
                document.getElementById("main").style.display = "block"; 
                gsap.from("#main", { opacity: 0, y: 50, duration: 1 }); 
            }});
        }, images.length * 200); 
    }
    
    loadingAnimation();
    
    const menuButtons = document.querySelectorAll(".menu");
const dropdowns = document.querySelectorAll(".dropdown");

menuButtons.forEach((button) => {
  const dropdownId = button.getAttribute("data-dropdown");
  const dropdownMenu = document.getElementById(dropdownId);

  button.addEventListener("mouseenter", () => {
    closeAllDropdowns(); // Close other dropdowns first
    button.classList.add("active");
    dropdownMenu.classList.add("active");
  });

  dropdownMenu.addEventListener("mouseenter", () => {
    dropdownMenu.classList.add("active");
  });

  dropdownMenu.addEventListener("mouseleave", () => {
    dropdownMenu.classList.remove("active");
    button.classList.remove("active");
  });
});

document.addEventListener("mouseover", (event) => {
  if (
    ![...menuButtons, ...dropdowns].some((elem) =>
      elem.contains(event.target)
    )
  ) {
    closeAllDropdowns();
  }
});

function closeAllDropdowns() {
  menuButtons.forEach((button) => button.classList.remove("active"));
  dropdowns.forEach((dropdown) => dropdown.classList.remove("active"));
}

    

  // Select all tiles
const tiles = document.querySelectorAll(".tile");

// Add hover animation effect
tiles.forEach(tile => {
    tile.addEventListener("mouseenter", () => {
        tile.classList.add("hover");
    });

    tile.addEventListener("mouseleave", () => {
        tile.classList.remove("hover");
    });
});



function slideCards(direction) {
  const container = document.getElementById("cards");
  const scrollAmount = 300;

  if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}






//javascripts for news
const events = [
  {
      date: "FEB 18, 2025",
      title: "School Students Visit at NIT Jalandhar",
      img: "https://nitj.ac.in/files/1739868813778-14Feb_Bilga.jpg",
      link: "#"
  },
  {
      date: "FEB 17, 2025",
      title: "NITJ Half Marathon – Pace for Positivity",
      img: "https://nitj.ac.in/files/1739621323062-1.jpeg",
      link: "#"
  },
  {
      date: "FEB 10, 2025",
      title: "All India Inter NIT Tournament",
      img: "https://nitj.ac.in/files/1739182171938-main.jpeg",
      link: "#"
  },
  {
      date: "JAN 29, 2025",
      title: "Placement Drive – Hematsingka",
      img: "https://nitj.ac.in/files/1738144114458-IMG-20250129-WA0002.jpg",
      link: "#"
  },
  {
      date: "MAR 15, 2024",
      title: "Utkansh’24 - Mega Cultural Festival",
      img: "https://www.nitj.ac.in/images/slider/02_Placement_Benchmarks_48903.png",
      link: "#"
  },
  {
      date: "APR 5, 2023",
      title: "Placed at a package of 1.2 crore",
      img: "https://www.nitj.ac.in/images/slider/04_Highest_Package_32291.png",
      link: "#"
  }
];

const carousel = document.getElementById("carousel");

events.forEach(event => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <img src="${event.img}" alt="${event.title}">
      <div class="card-content">
          <p class="date">${event.date}</p>
          <p class="title">${event.title}</p>
          <a href="${event.link}" class="read-more">Read More →</a>
      </div>
  `;
  carousel.appendChild(card);
});

function scrollCarousel(direction) {
  const scrollAmount = 300;
  if (direction === "left") {
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}





  // Sample news data
  const newsData = [
      {
          title: "Document Verification and Stage-II Selection Process",
          link: "https://www.nitj.ac.in/template/index.html?id=66ecf300033ae592141ef6e6?category=newpage",
          isNew: true
      },
      {
          title: "Annual Alumni Meet and Silver Jubilee Celebration - 22nd Dec 2025",
          link: "https://www.nitj.ac.in/template/index.html?id=67b850528b69e0412f1149a0?category=newpage",
          isNew: false
      },
      {
          title: "Job Openings: JRF/Project Assistant/Project Associate",
          link: "https://nitj.ac.in/template/index.html?id=65d43060f5e9d537566a6989?category=newpage",
          isNew: false
      },
      {
          title: "Stage-II Admit Card for Registrar, Librarian & Medical Officer",
          link: "https://www.nitj.ac.in/template/index.html?id=66ecf300033ae592141ef6e6?category=newpage",
          isNew: true
      }
  ];
  
  // Function to load news dynamically
  function loadNews() {
      const newsContainer = document.getElementById("news-cards");
      newsContainer.innerHTML = ""; // Clear existing news
  
      newsData.forEach(news => {
          const newsCard = document.createElement("div");
          newsCard.classList.add("news-card");
  
          if (news.isNew) {
              newsCard.innerHTML += `<span class="new-badge">NEW</span>`;
          }
  
          newsCard.innerHTML += `
              <a href="${news.link}" target="_blank">
                  ${news.title}
              </a>
          `;
  
          newsContainer.appendChild(newsCard);
      });
  }
  
  // Load news on page load
  window.onload = loadNews;