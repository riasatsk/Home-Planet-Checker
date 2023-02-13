let planet = [
  "marcury",
  "venus",
  "earth",
  "mars",
  "jupiter",
  "saturn",
  "uranus",
  "neptune",
  "pluto",
];
var button = document.getElementById("myButton");
var sound = document.getElementById("clickSound");

button.addEventListener("click", function() {
  sound.play();
});


function random_planet() {
  let random = Math.random();
let random_number = Math.ceil(random * 8);

let myPlanet = planet[random_number];
  document.getElementById(
    "planet"
  ).innerHTML = `Your home planet is ${myPlanet} , Let's Go to ${myPlanet}🚀👨‍🚀`;
  if (random_number == 0) {
    document.getElementById("quote").innerHTML =
      "Mercury, the tiny, sizzling hot planet closest to the Sun, is like a baked potato that's been forgotten in the oven for too long. It's so hot that you could probably fry an egg on its surface, if you don't mind a little radiation with your breakfast. And don't even think about trying to grow plants there, because they'd be toast in no time. But if you're a fan of extreme sports, Mercury might be the ultimate destination. You could go snowboarding down the towering peaks of its crater rims, or take a dip in one of its many lava pools for a nice warm bath. Just remember to pack some SPF 10,000 sunscreen and a few extra sets of sunglasses, because you're going to need them!";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Mercury_in_true_color.jpg/1024px-Mercury_in_true_color.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/PIA19450-PlanetMercury-CalorisBasin-20150501.jpg/1920px-PIA19450-PlanetMercury-CalorisBasin-20150501.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/9/93/North_pole_of_Mercury_--_NASA.jpg";
  } else if (random_number == 1) {
    document.getElementById("quote").innerHTML =
      "Venus, also known as Earth's evil twin, is like a hot date that turned out to be a nightmare. With temperatures that can melt lead and sulfuric acid rain that could ruin your new outfit, it's not exactly a planet that screams \"romantic getaway.\" But if you're looking for an extreme spa experience, Venus has got you covered. The heat and humidity will do wonders for your pores, and the acid rain will give you a natural exfoliation. Just make sure you pack some goggles and a gas mask, because you don't want to get blinded or suffocated by the atmosphere. And if you hear any strange hissing sounds, don't worry, it's just the sound of your spaceship melting. All in all, Venus is a planet that's not for the faint of heart or the weak of skin.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/5/54/Venus_-_December_23_2016.png";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/PIA00103_Venus_-_3-D_Perspective_View_of_Lavinia_Planitia.jpg/1280px-PIA00103_Venus_-_3-D_Perspective_View_of_Lavinia_Planitia.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/c/cc/Solar_system_orrery_inner_planets.gif";
  } else if (random_number == 2) {
    document.getElementById("quote").innerHTML =
      "Earth, the third rock from the sun, is like a cozy little nest in the vastness of space. It's got everything you need for a good time: water, air, and a whole lot of gravity to keep you grounded. But watch out for those pesky humans, who have a tendency to make a mess of things. They've built big cities, highways, and theme parks all over the place, and sometimes it feels like there's no escape from their constant noise and pollution. But if you can find a quiet spot in nature, like a beach or a forest, you might just remember why Earth is such a great place to be. Just don't forget your bug spray, because the mosquitoes are always out for blood. All in all, Earth is a planet that's both beautiful and bizarre, and it's up to you to make the most of your time here.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/1024px-The_Blue_Marble_%28remastered%29.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Earth2014shape_SouthAmerica_small.jpg/1024px-Earth2014shape_SouthAmerica_small.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/EpicEarth-Globespin-tilt-23.4.gif/1024px-EpicEarth-Globespin-tilt-23.4.gif";
  } else if (random_number == 3) {
    document.getElementById("quote").innerHTML =
      "Mars, the red planet, is like a grumpy old man who doesn't like visitors. With its dusty, desolate landscape and freezing temperatures, it's not exactly a planet that's rolling out the red carpet. But if you're a fan of hiking, Mars has got some of the best trails in the solar system. You can climb the towering peaks of Olympus Mons, the largest volcano in the solar system, or explore the deep canyons of Valles Marineris, which make the Grand Canyon look like a crack in the sidewalk. Just make sure you bring a few extra oxygen tanks and a good pair of boots, because the terrain can be a little rough. And if you run into any little green men, be sure to offer them a Snickers bar, because who knows, they might be having a bad day too. All in all, Mars is a planet that's both challenging and rewarding, and it's definitely worth a visit if you're looking for a little adventure.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png/1024px-Tharsis_and_Valles_Marineris_-_Mars_Orbiter_Mission_%2830055660701%29.png";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg/1920px-PIA17944-MarsCuriosityRover-AfterCrossingDingoGapSanddune-20140209.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Olympus_Mons_alt.jpg/1024px-Olympus_Mons_alt.jpg";
  } else if (random_number == 4) {
    document.getElementById("quote").innerHTML =
      "Jupiter, the big, bad king of the planets, is like a giant beach ball that's been inflated a little too much. It's so massive that it could swallow up all the other planets in the solar system and still have room for dessert. But don't let its size fool you, Jupiter's got a lot of personality, and it's not afraid to show it off. With swirling storms, colorful clouds, and a never-ending supply of moons, it's a planet that knows how to make an entrance. And if you're lucky, you might catch a glimpse of its famous Great Red Spot, which is like a giant zit that never goes away. Just be careful not to get too close, or you might get sucked into its intense gravity and become a permanent resident. All in all, Jupiter is a planet that's both awe-inspiring and a little intimidating, but it's definitely worth a visit, even if it's just for the Instagram pics.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Jupiter_New_Horizons.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Jupiter_and_Europa_2020.tiff/lossy-page1-1024px-Jupiter_and_Europa_2020.tiff.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/a/a3/790106-0203_Voyager_58M_to_31M_reduced.gif";
  } else if (random_number == 5) {
    document.getElementById("quote").innerHTML =
      "Saturn, the lord of the rings, is like a fashionista who knows how to accessorize. With its stunning array of rings, it's a planet that's always on-trend. But don't let its bling fool you, Saturn's got some substance to go with its style. With dozens of moons and a giant hexagonal storm on its north pole, it's a planet that's never short on drama. And if you're in the mood for a little cosmic disco, Saturn's got one of the biggest and brightest dance floors in the solar system. You can boogie with its many moons and maybe even catch a glimpse of the planet's auroras, which are like a cosmic light show. Just be sure to bring some SPF 1000 sunscreen, because Saturn's rings can be a little intense. All in all, Saturn is a planet that's both dazzling and dynamic, and it's definitely worth a visit if you want to add a little sparkle to your life.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1920px-Saturn_during_Equinox.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Saturn_from_Cassini_Orbiter_%282007-01-19%29.jpg/1280px-Saturn_from_Cassini_Orbiter_%282007-01-19%29.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/c/c1/Solar_system_orrery_outer_planets.gif";
  } else if (random_number == 6) {
    document.getElementById("quote").innerHTML =
      "Uranus, the butt of all planet jokes, is like a prankster who loves to mess with people. With its wonky rotation and sideways rings, it's a planet that's always a little off-kilter. But don't let its oddball nature fool you, Uranus has got a lot going for it. With a dozen moons and a blue-green hue that's out of this world, it's a planet that's both unique and mesmerizing. And if you're in the mood for a little \"me time,\" Uranus has got one of the quietest and darkest corners of the solar system, where you can stargaze and contemplate the mysteries of the universe. Just be sure to pack some extra blankets, because Uranus is one of the coldest planets in the solar system. And if you hear any strange sounds coming from the planet, don't worry, it's just the sound of everyone snickering at its name. All in all, Uranus is a planet that's both silly and sublime, and it's definitely worth a visit if you're looking for a good laugh and some peace and quiet.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg/1024px-Uranus_as_seen_by_NASA%27s_Voyager_2_%28remastered%29_-_JPEG_converted.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Adding_to_Uranus%27s_legacy.tif/lossy-page1-1022px-Adding_to_Uranus%27s_legacy.tif.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/7/73/PIA23683-Uranus-MagneticField-20200325.gif";
  } else if (random_number == 7) {
    document.getElementById("quote").innerHTML =
      "Neptune, the god of the sea, is like a mermaid who's got a little too much caffeine in her system. With its beautiful blue hue and its turbulent storms, it's a planet that's both serene and savage. But don't let its calm exterior fool you, Neptune's got a lot of energy and excitement going on. With its many moons and its fast winds that can reach up to 1,200 miles per hour, it's a planet that's always in motion. And if you're in the mood for a little underwater adventure, Neptune's got a giant ocean that's deep enough to swallow up the entire Earth. You can swim with its many strange and wonderful creatures, and maybe even catch a glimpse of its elusive and mysterious dark spots. Just be sure to bring a good wetsuit, because Neptune's ocean is one of the coldest and most turbulent in the solar system. All in all, Neptune is a planet that's both enchanting and exhilarating, and it's definitely worth a visit if you're looking for a little excitement and a lot of blue.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/c/c8/Neptune_clouds.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/8/8c/Neptune_storms.jpg";
  } else if (random_number == 8) {
    document.getElementById("quote").innerHTML =
      "Pluto, the little planet that could, is like a scrappy underdog who's always trying to prove itself. With its tiny size and its icy, remote location, it's a planet that's easy to overlook. But don't let its small stature fool you, Pluto's got a lot of personality and charm. With its heart-shaped feature and its five moons, it's a planet that's full of surprises. And if you're in the mood for a little quiet reflection, Pluto's got one of the most remote and peaceful corners of the solar system, where you can contemplate the mysteries of the universe and maybe even catch a glimpse of some distant galaxies. Just be sure to bring a warm coat, because Pluto's surface temperatures can dip as low as -375 degrees Fahrenheit, which is colder than your ex's heart. And if you hear any Pluto isn't a planet jokes, just brush them off, because deep down, we all know that Pluto is the cutest and most lovable planet of them all. All in all, Pluto is a planet that's both endearing and enduring, and it's definitely worth a visit if you're looking for a little inspiration and a lot of heart.";
    document.getElementById("img1").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/1024px-Pluto_in_True_Color_-_High-Res.jpg";
    document.getElementById("img2").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Pluto%E2%80%99s_Heart_-_Like_a_Cosmic_Lava_Lamp.jpg/1024px-Pluto%E2%80%99s_Heart_-_Like_a_Cosmic_Lava_Lamp.jpg";
    document.getElementById("img3").src =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charon_in_True_Color_-_High-Res.jpg/1024px-Charon_in_True_Color_-_High-Res.jpg";
  }
}
