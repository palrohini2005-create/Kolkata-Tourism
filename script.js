// 15 Kolkata Heritage Sites Dataset
const heritageSites = [
  {
    id: 1,
    name: "Victoria Memorial",
    img: "images/victoria-memorial.jpg",
    desc: "Built between 1906 and 1921, the Victoria Memorial is a grand marble building dedicated to the memory of Queen Victoria.",
    history: "Designed by Sir William Emerson, it incorporates British and Mughal elements in Indo-Saracenic revival architecture. Today it functions as a museum holding an extraordinary collection of colonial-era paintings, artifacts, and manuscripts."
  },
  {
    id: 2,
    name: "Howrah Bridge",
    img: "images/howrah-bridge.jpg",
    desc: "An iconic balanced cantilever bridge over the Hooghly River, connecting Kolkata and Howrah.",
    history: "Commissioned in 1943 during WWII without any nuts or bolts, it was built using riveted high-tensile steel. It remains one of the busiest cantilever bridges in the world."
  },
  {
    id: 3,
    name: "Dakshineswar Kali Temple",
    img: "images/dakshineswar-kali-temple.jpg",
    desc: "A famous Navaratna Hindu temple located on the eastern bank of the Hooghly River.",
    history: "Founded in 1855 by Rani Rashmoni, a philanthropist and devotee of Kali. The temple is historically associated with Ramakrishna Paramahamsa, who served as its head priest."
  },
  {
    id: 4,
    name: "Indian Museum",
    img: "images/indian-museum.jpg",
    desc: "The ninth oldest museum in the world and the largest museum in India.",
    history: "Established in 1814 by the Asiatic Society of Bengal, the museum has rare collections of antiques, armor, ornaments, fossils, mummies, and Mughal paintings."
  },
  {
    id: 5,
    name: "Marble Palace",
    img: "images/marble-palace.jpg",
    desc: "A palatial 19th-century mansion in North Kolkata known for its marble walls, floors, and sculptures.",
    history: "Built in 1835 by Raja Rajendra Mullick, this neoclassical mansion houses European artwork, antique furniture, and a private zoo."
  },
  {
    id: 6,
    name: "St. Paul's Cathedral",
    img: "images/st-pauls-cathedral.jpg",
    desc: "An Anglican cathedral noted for its Gothic Revival architecture and stained glass windows.",
    history: "Completed in 1847, St. Paul's Cathedral was the first cathedral built in the overseas territory of the British Empire."
  },
  {
    id: 7,
    name: "Kalighat Kali Temple",
    img: "images/kalighat-kali-temple.jpg",
    desc: "One of the 51 Shakti Peethas, dedicated to Goddess Kali.",
    history: "The present temple structure was completed in 1809 under the patronage of the Sabarna Roy Choudhury family, though worship at the site dates back centuries earlier."
  },
  {
    id: 8,
    name: "Jorasanko Thakur Bari",
    img: "images/jorasanko-thakur-bari.jpg",
    desc: "The ancestral home of the Tagore family, where Nobel laureate Rabindranath Tagore was born and spent his childhood.",
    history: "Built in the 18th century, it is currently a museum showcasing Tagore's life, paintings, and literary achievements."
  },
  {
    id: 9,
    name: "Princep Ghat",
    img: "images/princep-ghat.jpg",
    desc: "A ghat built along the Kolkata bank of the Hooghly River featuring Greek and Gothic architectural styles.",
    history: "Constructed in 1841 in memory of Anglo-Indian scholar James Prinsep, it offers view points of the Vidyasagar Setu."
  },
  {
    id: 10,
    name: "Belur Math",
    img: "images/belur-math.jpg",
    desc: "The headquarters of the Ramakrishna Math and Mission on the west bank of the Hooghly.",
    history: "Founded by Swami Vivekananda in 1897, the temple architecture integrates Hindu, Christian, and Islamic motifs as a symbol of universal faith."
  },
  {
    id: 11,
    name: "Town Hall",
    img: "images/town-hall.jpg",
    desc: "A Roman Doric style heritage building constructed in 1813 for public gatherings.",
    history: "Built with funds raised from a lottery, Town Hall served as a center for social gatherings and meetings during the Bengal Renaissance."
  },
  {
    id: 12,
    name: "Writer's Building",
    img: "images/writers-building.jpg",
    desc: "The historic secretariat building of the state government of West Bengal.",
    history: "Designed by Thomas Lyon in 1777 for junior writers of the East India Company, it features a red brick Greco-Roman facade."
  },
  {
    id: 13,
    name: "Sobhabazar Rajbari",
    img: "images/sobhabazar-rajbari.jpg",
    desc: "One of the oldest royal houses in Kolkata, famed for its grand traditional Durga Puja celebrations.",
    history: "Built by Raja Nabakrishna Deb in the mid-18th century, it played a key role in Kolkata's cultural history."
  },
  {
    id: 14,
    name: "Vidyasagar Setu",
    img: "images/vidyasagar-setu.jpg",
    desc: "Also known as the Second Hooghly Bridge, a toll bridge linking Kolkata and Howrah.",
    history: "Opened in 1992, it is a fan-type cable-stayed bridge spanning 823 meters across the Hooghly river."
  },
  {
    id: 15,
    name: "St. John's Church",
    img: "images/st-johns-church.jpg",
    desc: "One of the oldest public buildings in Kolkata, containing the tomb of Job Charnock.",
    history: "Built in 1787 using stone from ancient ruins, it features Last Supper paintings and historical colonial monuments."
  }
];

// Single Page Navigation Switcher
function showView(viewName) {
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));

  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  const navBtn = document.getElementById(`nav-${viewName}`);
  if (navBtn) navBtn.classList.add('active');

  window.scrollTo(0, 0);
}

// Render Heritage List Grid
function renderHeritageList() {
  const listContainer = document.getElementById('heritage-list');
  listContainer.innerHTML = heritageSites.map(site => `
    <div class="heritage-item" onclick="openHeritageDetail(${site.id})">
      <img src="${site.img}" alt="${site.name}">
      <div class="heritage-item-info">
        <h4>${site.name}</h4>
      </div>
    </div>
  `).join('');
}

// Render Dedicated Individual Heritage Page
function openHeritageDetail(siteId) {
  const site = heritageSites.find(s => s.id === siteId);
  if (!site) return;

  const detailContent = document.getElementById('heritage-detail-content');
  detailContent.innerHTML = `
    <img src="${site.img}" alt="${site.name}">
    <h2>${site.name}</h2>
    <p><strong>Overview:</strong> ${site.desc}</p>
    <p><strong>History & Significance:</strong> ${site.history}</p>
  `;

  showView('heritage-detail');
}

// Render Photo Gallery Grid
function renderGallery() {
  const galleryContainer = document.getElementById('gallery-container');
  galleryContainer.innerHTML = heritageSites.map(site => `
    <div class="gallery-item">
      <img src="${site.img}" alt="${site.name}" title="${site.name}">
    </div>
  `).join('');
}

// Initialize Renderers on Page Load
document.addEventListener('DOMContentLoaded', () => {
  renderHeritageList();
  renderGallery();
});