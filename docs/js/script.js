document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Hide/Reveal Logic
    let lastScrollTop = 0;
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) header.classList.add('header-hidden');
        else header.classList.remove('header-hidden');
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // -------------------------
    // IMAGE + MODEL + VIDEO DATA
    // Add modelSrc to open the 3D viewer or videoSrc/videoGroup to open the video modal.
    // -------------------------
    const images = [
  { src: "WixMedia/Photography/IMG_2101.jpg", category: "photography", title: "Enviormental Storytelling", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 5" },
  { src: "WixMedia/Photography/IMG_3341.jpg", category: "photography", title: "Playing With The Big Toys", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 16" },
  { src: "WixMedia/Photography/IMG_3796.jpg", category: "photography", title: "Freedom From The World", description: "", alt: "Photography 21" },
  { src: "WixMedia/Photography/IMG_3836.jpg", category: "photography", title: "Dust Kickin'", description: "", alt: "Photography 22" },
  { src: "WixMedia/Photography/IMG_3956.jpg", category: "photography", title: "We Know You're With Us", description: "", alt: "Photography 23" },
  { src: "WixMedia/Photography/IMG_4008.jpg", category: "photography", title: "Flying High", description: "", alt: "Photography 24" },
  { src: "WixMedia/Photography/Tractor.jpg", category: "photography", title: "Buried and Bruised", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 27" },
  { src: "WixMedia/Photography/Tractor_Front.jpg", category: "photography", title: "Beaming", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 28" },
  { src: "WixMedia/Photography/Truck_HeroImage.jpg", category: "photography", title: "Worked to Death", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 29" },
  { src: "WixMedia/Photography/Truck_side.jpg", category: "photography", title: "A Trooper", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 30" },
  { src: "WixMedia/Photography/743A7988.jpg", category: "photography", title: "Good Friends and Good Stories", description: "Part of Athena Erie Project", alt: "Photography 31" },
  { src: "WixMedia/Photography/Boat_Far.jpg", category: "photography", title: "Land Ahoy", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 32" },
  { src: "WixMedia/Photography/Boat_Top.jpg", category: "photography", title: "Flow", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 33" },
  { src: "WixMedia/Photography/Car_Font.jpg", category: "photography", title: "Wishing For Open Roads", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 34" },
  { src: "WixMedia/Photography/Car_top.jpg", category: "photography", title: "Wishing For Open Roads 2", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 35" },
  { src: "WixMedia/Photography/Crane_Bucket.jpg", category: "photography", title: "Collecting", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 36" },
  { src: "WixMedia/Photography/Crane_Close.jpg", category: "photography", title: "Unearthed", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 37" },
  { src: "WixMedia/Photography/Crane_Far.jpg", category: "photography", title: "Behemoth", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 38" },

  // badimages
  { src: "WixMedia/Photography/badimages/IMG_3287.jpg", category: "photography", title: "Flow", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 1" },
  { src: "WixMedia/Photography/badimages/IMG_3623.jpg", category: "photography", title: "Mist 2", description: "", alt: "Photography 2" },
  { src: "WixMedia/Photography/badimages/IMG_3624.jpg", category: "photography", title: "Mist", description: "", alt: "Photography 3" },
  { src: "WixMedia/Photography/badimages/IMG_3664.jpg", category: "photography", title: "Sunset Erie", description: "", alt: "Photography 4" },
  { src: "WixMedia/Photography/badimages/IMG_3696.jpg", category: "photography", title: "There is a God and He Loves You", description: "", alt: "Photography 5" },
  { src: "WixMedia/Photography/badimages/IMG_9459.jpg", category: "photography", title: "Eerie Erie Eclipse", description: "", alt: "Photography 6" },
  { src: "WixMedia/Photography/badimages/IMG_041212321.jpg", category: "photography", title: "Pittsburgh Skyline", description: "", alt: "Photography 7" },
  { src: "WixMedia/Photography/badimages/IMG_0360.jpg", category: "photography", title: "Glowing and Growing", description: "", alt: "Photography 8" },
  { src: "WixMedia/Photography/badimages/IMG_0373.jpg", category: "photography", title: "Droplet", description: "", alt: "Photography 9" },
  { src: "WixMedia/Photography/badimages/IMG_0395.jpg", category: "photography", title: "Heavenly", description: "", alt: "Photography 10" },
  { src: "WixMedia/Photography/badimages/IMG_1944.jpg", category: "photography", title: "Resting In The Sunset", description: "", alt: "Photography 11" },
  { src: "WixMedia/Photography/badimages/IMG_2707.jpg", category: "photography", title: "Leader 2", description: "Taken for Crenshaw Brothers Construction", alt: "Photography 12" },
  { src: "WixMedia/Photography/badimages/IMG_2836.jpg", category: "photography", title: "Leader", description: "Taken for Crenshaw Brothers Construction", alt: "Photography 13" },
  { src: "WixMedia/Photography/badimages/IMG_2931.jpg", category: "photography", title: "Labor for Love", description: "Taken for Crenshaw Brothers Construction", alt: "Photography 14" },
  { src: "WixMedia/Photography/badimages/IMG_3101.jpg", category: "photography", title: "Bright", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 15" },
  { src: "WixMedia/Photography/badimages/IMG_3139.jpg", category: "photography", title: "Standing Tall", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 16" },
  { src: "WixMedia/Photography/badimages/IMG_3160.jpg", category: "photography", title: "Rusted Flower", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 17" },
  { src: "WixMedia/Photography/badimages/IMG_3175.jpg", category: "photography", title: "Overgrown", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 18" },
  { src: "WixMedia/Photography/badimages/IMG_3193.jpg", category: "photography", title: "Through A Missing Window", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 19" },
  { src: "WixMedia/Photography/badimages/IMG_3213.jpg", category: "photography", title: "Wide Load", description: "Part of Nature Reclaims Photo Essay", alt: "Photography 20" },

  // more photography
  { src: "WixMedia/Photography/743A0026.jpg", category: "photography", title: "Growing Old Together", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/743A0113.jpg", category: "photography", title: "White Walled", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/743A0206.jpg", category: "photography", title: "A Legacy", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/743A9969.jpg", category: "photography", title: "The Grinch", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/743A9989.jpg", category: "photography", title: "Out With The New, In With The Old", description: "", alt: "Photography 35" },

  // FireDept
  { src: "WixMedia/Photography/FireDept/IMG_4263.jpg", category: "photography", title: "Age is a State of Mind", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/FireDept/IMG_4213.jpg", category: "photography", title: "Standing By", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/FireDept/IMG_4315.jpg", category: "photography", title: "Never Out of Style", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/FireDept/IMG_4390.jpg", category: "photography", title: "Lawrence Park", description: "", alt: "Photography 35" },

  // Webadd
  { src: "WixMedia/Photography/Webadd/Image2.jpg", category: "photography", title: "Mini Road Rage", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/Image3.jpg", category: "photography", title: "Toasty", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/Image4.jpg", category: "photography", title: "Nothing Like a Good Cleaning", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/Image5.jpg", category: "photography", title: "Cowboy Behavior", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/Image7.jpg", category: "photography", title: "Tiltshift Tools", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_5860.jpg", category: "photography", title: "Inception", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_5875.JPG", category: "photography", title: "Crumby Day", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_6321.jpg", category: "photography", title: "In Time", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_6370.jpg", category: "photography", title: "Somberly", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_6379.jpg", category: "photography", title: "Cheesin", description: "", alt: "Photography 35" },
  { src: "WixMedia/Photography/Webadd/IMG_6433.jpg", category: "photography", title: "Virtually Not Here", description: "", alt: "Photography 35" },

  // Paintings
  { src: "WixMedia/Painting/MiniLandscape.jpg", category: "paintings", title: "MiniLandscape", description: "Painted for ART50 - Intro Painting", alt: "MiniLandscape painting" },
  { src: "WixMedia/Painting/SeaGlass.jpg", category: "paintings", title: "SeaGlass", description: "Painted for ART50 - Intro Painting", alt: "SeaGlass painting" },
  { src: "WixMedia/Painting/WinterBoots.jpg", category: "paintings", title: "WinterBoots", description: "Painted for ART50 - Intro Painting", alt: "WinterBoots painting" },
  { src: "WixMedia/Painting/Minha.jpg", category: "paintings", title: "Minha", description: "Painted for ART50 - Intro Painting", alt: "Minha painting" },

  // Videos
  { src: "WixMedia/Videos/Dr.BVideo.png", category: "videos", title: "Dr. B Video", description: "Intro to DHSI course: Processing Your XML/TEI with the XML Family of Languages.", videoSrc: "https://www.youtube.com/watch?v=gKdkn8Tp-1E", alt: "Dr. B Video thumbnail" },
  { src: "WixMedia/Videos/VARVideos.png", category: "videos", title: "VAR All TV Intros", description: "Video branding and intro work created for the VAR Lab.", videoSrc: "https://youtu.be/D6160XEQh9w", alt: "VAR All TV Intros thumbnail" },
  { src: "WixMedia/Videos/VARTravels.png", category: "videos", title: "Exploring The Outerbanks - VAR Travels #4", description: "Travel-focused video from the VAR Travels series.", videoSrc: "https://www.youtube.com/watch?v=eTwAI6rqkSc&list=PLZllh0dfSonoEmqp_WwRmcoSVjoUhdUo7&index=4", alt: "VAR Travels thumbnail" },
  {
    src: "WixMedia/Videos/HighSchool.png",
    category: "videos",
    title: "Highschool Stuff",
    description: "Archived high school video projects collected in one place.",
    videoGroup: [
      { title: "High School Video 1", url: "https://youtu.be/d-jLy5gPrHU" },
      { title: "High School Video 2", url: "https://youtu.be/IMX7k-O5rjw" },
      { title: "High School Video 3", url: "https://youtu.be/DJvC8yhKpuI" },
      { title: "High School Video 4", url: "https://youtu.be/JaWS7j72qD8" },
      { title: "High School Video 5", url: "https://youtu.be/oR4BpEJiL-I" },
      { title: "High School Video 6", url: "https://youtu.be/tr9LX__Lt-M" },
      { title: "High School Video 7", url: "https://youtu.be/nuNo_elRsrg" },
      { title: "High School Video 8", url: "https://youtu.be/x7gHKn8C9UE" }
    ],
    alt: "High school archive thumbnail"
  },
  { src: "WixMedia/Videos/ProceduralCrowd.png", category: "videos", title: "Procedural Crowd DIGIT 409", description: "Procedural crowd animation and visualization work.", videoSrc: "https://youtu.be/uGpqOvnBRrA", alt: "Procedural Crowd thumbnail" },
  { src: "WixMedia/Videos/Project1.png", category: "videos", title: "DIGIT 297 Project 1", description: "Course project video developed for DIGIT 297.", videoSrc: "https://www.youtube.com/watch?v=9xZAlnhV98o", alt: "DIGIT 297 Project 1 thumbnail" },
  { src: "WixMedia/Videos/pandoamerica.png", category: "videos", title: "PandoAmerica", description: "Video work connected to the PandoAmerica project.", videoSrc: "https://youtu.be/T5IBdmVY5Z0", alt: "PandoAmerica thumbnail" },
  { src: "WixMedia/Videos/CalmOcean.png", category: "videos", title: "GAME 180 Turbulent and Calm Ocean Sim", description: "Ocean simulation study created for GAME 180.", videoSrc: "https://youtu.be/8CIhAO-3f18", alt: "Calm Ocean thumbnail" },
  { src: "WixMedia/Videos/TheForest.png", category: "videos", title: "TheForest", description: "Environment-focused video study.", videoSrc: "https://youtu.be/3Vt0E-bE3Ec", alt: "The Forest thumbnail" },
  { src: "WixMedia/Videos/TheStump.png", category: "videos", title: "TheStump", description: "A short environment and rendering study.", videoSrc: "https://youtu.be/DqYWCvtF-9o", alt: "The Stump thumbnail" },
  { src: "WixMedia/Videos/VARWestern.png", category: "videos", title: "VAR Western Skit", description: "A playful VAR Lab video project with a western theme.", videoSrc: "https://youtu.be/gc5N7oz9Tag", alt: "VAR Western thumbnail" },
  { src: "WixMedia/Videos/LowPower.png", category: "videos", title: "LowPower", description: "Short film work connected to the Low Power project.", videoSrc: "https://youtu.be/tf7oeub9Nws", alt: "Low Power thumbnail" },
  { src: "WixMedia/Videos/BladeAndSorcery.png", category: "videos", title: "VR Immersion Done Right - Blade and Sorcery", description: "GAME 460 final project examining VR immersion.", videoSrc: "https://youtu.be/4PBTQe9u86E", alt: "Blade and Sorcery thumbnail" },
  { src: "WixMedia/Videos/MotionMatch1.png", category: "videos", title: "MotionMatching1", description: "Motion matching test and animation study.", videoSrc: "https://www.youtube.com/watch?v=C5nLx2CI8fY", alt: "Motion Matching 1 thumbnail" },
  { src: "WixMedia/Videos/MotionMatch2.png", category: "videos", title: "MotionMatch2", description: "Second motion matching exploration.", videoSrc: "https://youtu.be/lfITEl4ALZ4", alt: "Motion Matching 2 thumbnail" },
  { src: "WixMedia/Videos/LoopedWalkCycle.png", category: "videos", title: "Looped Walk Cycle", description: "Looped character motion exercise.", videoSrc: "https://youtu.be/Yg3gntA9KLI", alt: "Looped walk cycle thumbnail" },
  { src: "WixMedia/Videos/NoiseAnimation.png", category: "videos", title: "Noise Animation", description: "Motion study driven by noise-based animation.", videoSrc: "https://youtu.be/lR261JJPwkQ", alt: "Noise Animation thumbnail" },
  { src: "WixMedia/Videos/ManualBallBounce.png", category: "videos", title: "ManualBallBounce", description: "Animation exercise focused on timing and bounce.", videoSrc: "https://youtu.be/T49CCjFFME0", alt: "Manual Ball Bounce thumbnail" },
  { src: "WixMedia/Videos/ProjectCorpoTrailer.png", category: "videos", title: "Project Corpo Trailer", description: "Trailer editing and presentation for Project Corpo.", videoSrc: "https://youtu.be/PdrzPxJWkic", alt: "Project Corpo Trailer thumbnail" },
  { src: "WixMedia/Videos/theMuseum.png", category: "videos", title: "The Museum", description: "Museum-themed video project.", videoSrc: "https://youtu.be/U_NEi3p8j4M", alt: "The Museum thumbnail" },
  { src: "WixMedia/Videos/LamplightTrailer.png", category: "videos", title: "LamplightTrailer", description: "Trailer cut for the Lamplight project.", videoSrc: "https://youtu.be/JmSoUX08f0s", alt: "Lamplight Trailer thumbnail" },
  { src: "WixMedia/Videos/RoutineRust.png", category: "videos", title: "Routine Rust", description: "Trailer and showcase video for Routine Rust.", videoSrc: "https://youtu.be/IBrJg1t4MA0", alt: "Routine Rust thumbnail" },

  // =================
  // 3D Works
  // =================
  { src: "WixMedia/Renders/FactoBot1.jpg", category: "3dworks", title: "9 to Death", description: "Part of the Routine Rust Project", alt: "3dworks 1" },
  { src: "WixMedia/Renders/FactoBot2.jpg", category: "3dworks", title: "Well Hello!", description: "Part of the Routine Rust Project", alt: "3dworks 2" },
  { src: "WixMedia/Renders/FactoBot3.jpg", category: "3dworks", title: "Rusted Beyond Repair", description: "Part of the Routine Rust Project", alt: "3dworks 3" },
  { src: "WixMedia/Renders/FactoryBotProgress.jpg", category: "3dworks", title: "Facto Bot in Progress", description: "Part of the Routine Rust Project", alt: "3dworks 4" },
  { src: "WixMedia/Renders/FactoryBotProgress2.jpg", category: "3dworks", title: "Nuclear Testing Ready", description: "Part of the Routine Rust Project", alt: "3dworks 5" },
  { src: "WixMedia/Renders/FairmountLivingRoomFinsih6.jpg", category: "3dworks", title: "Digital Comfort 2", description: "", alt: "3dworks 6" },
  { src: "WixMedia/Renders/FairMountLivingRoomProgress1.jpg", category: "3dworks", title: "The Matrix Hasn't Finish Loading", description: "", alt: "3dworks 7" },
  { src: "WixMedia/Renders/First_Rig.jpg", category: "3dworks", title: "First Blender Rig", description: "", alt: "3dworks 8" },
  { src: "WixMedia/Renders/ForestAlien4.jpg", category: "3dworks", title: "Hmmm. Not Hanging Around Here", description: "Part of the PandoAmerica Project", alt: "3dworks 9" },
  { src: "WixMedia/Renders/ForestReal.jpg", category: "3dworks", title: "Into The Forest", description: "Part of the PandoAmerica Project", alt: "3dworks 10" },
  { src: "WixMedia/Renders/justSomeRandomPlants2.jpg", category: "3dworks", title: "Just Some Digital Allergies", description: "", alt: "3dworks 11" },
  { src: "WixMedia/Renders/livingroom.jpg", category: "3dworks", title: "50's Living Room", description: "Part of the Routine Rust Project", alt: "3dworks 12" },
  { src: "WixMedia/Renders/LivingRoomProgress.jpg", category: "3dworks", title: "Digital Comfort", description: "", alt: "3dworks 13" },
  { src: "WixMedia/Renders/MrSpit.jpg", category: "3dworks", title: "Mr. Spit", description: "", alt: "3dworks 14" },
  { src: "WixMedia/Renders/mutant.jpg", category: "3dworks", title: "Mutant", description: "", alt: "3dworks 15" },
  { src: "WixMedia/Renders/Mutant3.jpg", category: "3dworks", title: "Mutant 2", description: "", alt: "3dworks 16" },
  { src: "WixMedia/Renders/OceanRender.jpg", category: "3dworks", title: "Caught In The Digital Riptide", description: "", alt: "3dworks 17" },
  { src: "WixMedia/Renders/OrangeO_Cereal.jpg", category: "3dworks", title: "Probably Taste Like Pixels", description: "", alt: "3dworks 18" },
  { src: "WixMedia/Renders/plains_render.jpg", category: "3dworks", title: "I don't think you can park there", description: "Part of the PandoAmerica Project", alt: "3dworks 19" },
  { src: "WixMedia/Renders/ProceduralCrowd.jpg", category: "3dworks", title: "Brains!", description: "Part of the Then There Were Few Project", alt: "3dworks 20" },
  { src: "WixMedia/Renders/ProjectCorpoAdvert.jpg", category: "3dworks", title: "Project Corpo Advert", description: "Part of The Project Corpo Project", alt: "3dworks 21" },
  { src: "WixMedia/Renders/RobotRender_Eevee.jpg", category: "3dworks", title: "Hank", description: "", alt: "3dworks 22" },
  { src: "WixMedia/Renders/rorange_Frame1_RawTextures.jpg", category: "3dworks", title: "Taken From Life", description: "", alt: "3dworks 23" },
  { src: "WixMedia/Renders/rorange_LowPoly3.jpg", category: "3dworks", title: "Lowpoly Attempt", description: "", alt: "3dworks 24" },
  { src: "WixMedia/Renders/SimpleCouch.jpg", category: "3dworks", title: "Simple Couch", description: "", alt: "3dworks 25" },
  { src: "WixMedia/Renders/SockPuppetShow.jpg", category: "3dworks", title: "The Sock Puppet Show", description: "", alt: "3dworks 26" },
  { src: "WixMedia/Renders/WoodenTrain.jpg", category: "3dworks", title: "Wooden Train", description: "", alt: "3dworks 27" },
  { src: "WixMedia/Renders/Alien_Takeover_ProcCity2.jpg", category: "3dworks", title: "Alien Takeover", description: "", alt: "3dworks 28" },
  { src: "WixMedia/Renders/Blender_First_Donut_Eevee.jpg", category: "3dworks", title: "Thanks to The Guru", description: "", alt: "3dworks 29" },
  { src: "WixMedia/Renders/BlenderBulletRender2.jpg", category: "3dworks", title: "Bullets Rendered", description: "", alt: "3dworks 30" },
  { src: "WixMedia/Renders/CanRender2.jpg", category: "3dworks", title: "Fake Advert", description: "", alt: "3dworks 31" },
  { src: "WixMedia/Renders/Cave.jpg", category: "3dworks", title: "Cave", description: "Part of the PandoAmerica Project", alt: "3dworks 32" },
  { src: "WixMedia/Renders/cave_render.jpg", category: "3dworks", title: "Cave Render", description: "Part of the PandoAmerica Project", alt: "3dworks 33" },
  { src: "WixMedia/Renders/cloth1.jpg", category: "3dworks", title: "Cloth Sim", description: "", alt: "3dworks 34" },
  { src: "WixMedia/Renders/coffeesimrender.jpg", category: "3dworks", title: "Coffee Like Syrup", description: "", alt: "3dworks 35" },
  { src: "WixMedia/Renders/couch7.jpg", category: "3dworks", title: "Faux Faux Leather", description: "", alt: "3dworks 36" },
  { src: "WixMedia/Renders/DeerReal.jpg", category: "3dworks", title: "As The Deer Panteth", description: "Part of the PandoAmerica Project", alt: "3dworks 37" },
  { src: "WixMedia/Renders/RobotMuseum2.jpg", category: "3dworks", title: "A Human Museum. Just look at that!", description: "", alt: "3dworks 37" },

  // extras at end
  { src: "WixMedia/Renders/Ghosts1.png", category: "3dworks", title: "Ghosts In the Machine", description: "Outliers in FARO Focus S Scan", alt: "3dworks 37" },
  { src: "WixMedia/Renders/Ghosts2.png", category: "3dworks", title: "Ghosts In the Machine", description: "Outliers in FARO Focus S Scan", alt: "3dworks 37" },
  { src: "WixMedia/Renders/BrunoScan.png", category: "3dworks", title: "Gravestone Scan Bake", description: "", alt: "3dworks 37" },
  { src: "WixMedia/Renders/DrillScan.png", category: "3dworks", title: "Drill Scan Bake", description: "", alt: "3dworks 37" },
  { src: "WixMedia/Renders/LightHouseRender1.png", category: "3dworks", title: "Lighthouse Drone Scan", description: "", alt: "3dworks 37" },
  { src: "WixMedia/Renders/Bluffs.png", category: "3dworks", title: "Drone Scan of Bluffs with Blender Water", description: "", alt: "3dworks 37" },
  { src: "WixMedia/Renders/boots1.png", category: "3dworks", title: "Boot Photogrammetry", description: "", alt: "3dworks 37" },

    // 3D Models
{ src: "WixMedia/3DModels/ProjectCorpo_Pistol/Pistol.png", category: "3dmodels", title: "Project Corpo Pistol", description: "Pistol from Project Corpo Project", modelSrc: "WixMedia/3DModels/ProjectCorpo_Pistol/ProjectCorpo_Pistol.glb", alt: "Project Corpo Pistol" },
{ src: "WixMedia/3DModels/RollingChair/RollingChair.png", category: "3dmodels", title: "Rolling Chair", description: "Chair from Project Corpo Project", modelSrc: "WixMedia/3DModels/RollingChair/RollingChair.glb", alt: "RollingChair" },  
{ src: "WixMedia/3DModels/ResearcherRobot/ResearcherRobot.png", category: "3dmodels", title: "Researcher Robot", description: "Researcher Robot from Project Corpo Project", modelSrc: "WixMedia/3DModels/ResearcherRobot/ResearcherRobot.glb", alt: "ResearcherRobot" },    
{ src: "WixMedia/3DModels/SecurityCamera/SecurityCamera.jpg", category: "3dmodels", title: "Security Camera", description: "Security Camera Robot from Project Corpo Project", modelSrc: "WixMedia/3DModels/SecurityCamera/SecurityCamera.glb", alt: "SecurityCamera" },  
{ src: "WixMedia/3DModels/DogStatue_Scan/DogStatue_Scan.png", category: "3dmodels", title: "Dog Statue 3D Scan", description: "Statue scanned with Artec Eva", modelSrc: "WixMedia/3DModels/DogStatue_Scan/DogStatue_Scan.glb", alt: "DogStatue_Scan" },  
{ src: "WixMedia/3DModels/BlueChair_Scan/BlueChair_Scan.png", category: "3dmodels", title: "Blue Chair 3D Scan", description: "Blue chair 3D scanned with Artec Eva", modelSrc: "WixMedia/3DModels/BlueChair_Scan/BlueChair_Scan.glb", alt: "BlueChair_Scan" },  
{ src: "WixMedia/3DModels/Flashlight/Flashlight.png", category: "3dmodels", title: "Flashlight", description: "Flashlight made for Lamplight Game project", modelSrc: "WixMedia/3DModels/Flashlight/Flashlight.glb", alt: "Flashlight" },
{ src: "WixMedia/3DModels/Guncase/Guncase.jpg", category: "3dmodels", title: "Gun Case", description: "Gun case Scan", modelSrc: "WixMedia/3DModels/Guncase/Guncase.glb", alt: "Guncase" },
{ src: "WixMedia/3DModels/WoodenPipe/WoodenPipe.jpg", category: "3dmodels", title: "Wooden Pipe", description: "Wooden pipe Scan - Carved by Ethan Woodring and then scanned with Artec Eva", modelSrc: "WixMedia/3DModels/WoodenPipe/WoodenPipe.glb", alt: "WoodenPipe" },

];

  
// 3. Render Collage
    const imageContainer = document.getElementById('image-collage');
    if (!imageContainer) return;

    function createImageItem(item, index) {
        const wrapper = document.createElement('div');
        wrapper.className = 'image-item';
        wrapper.setAttribute('data-category', item.category);
        wrapper.setAttribute('data-index', String(index));
        if (item.videoSrc || item.videoGroup) {
            wrapper.classList.add('video-item');
        }

        const img = document.createElement('img');
        img.src = item.src;
        img.alt = item.alt || item.title || 'Image';
        img.setAttribute('data-title', item.title || '');
        img.setAttribute('data-description', item.description || '');
        if (item.modelSrc) img.setAttribute('data-model-src', item.modelSrc);

        wrapper.appendChild(img);
        return wrapper;
    }

    // Populate and Shuffle
    images.forEach((item, index) => imageContainer.appendChild(createImageItem(item, index)));
    
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    shuffleArray(Array.from(imageContainer.children)).forEach(item => imageContainer.appendChild(item));

  // 4. Modal Elements
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.querySelector('#lightbox .close');

    const videobox = document.getElementById('videobox');
    const videoboxFrame = document.getElementById('videobox-frame');
    const videoboxTitle = document.getElementById('videobox-title');
    const videoboxDescription = document.getElementById('videobox-description');
    const videoboxPlaylist = document.getElementById('videobox-playlist');
    const videoboxClose = document.getElementById('videobox-close');

    const modelbox = document.getElementById('modelbox');
    const modelboxViewer = document.getElementById('modelbox-viewer');
    const modelboxCaption = document.getElementById('modelbox-caption');
    const modelboxClose = document.getElementById('modelbox-close');

    const wireframeBtn = document.getElementById('toggle-wireframe');
    const rotateBtn = document.getElementById('toggle-auto-rotate');
    let isWireframe = false;

    // 5. Open/Close Functions
function openLightbox(imgSrc, title, description) {
    if (!lightbox) return;
    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = title + (description ? ` - ${description}` : '');
    lightbox.style.display = 'flex'; // This ensures the background covers the screen
}

    function buildYouTubeEmbedUrl(url) {
        try {
            const parsed = new URL(url);
            const playlistId = parsed.searchParams.get('list');
            let videoId = '';

            if (parsed.hostname.includes('youtu.be')) {
                videoId = parsed.pathname.replace('/', '');
            } else if (parsed.searchParams.get('v')) {
                videoId = parsed.searchParams.get('v');
            } else if (parsed.pathname.startsWith('/embed/')) {
                videoId = parsed.pathname.split('/')[2];
            }

            if (!videoId) {
                return url;
            }

            const params = new URLSearchParams({ autoplay: '1', rel: '0' });
            if (playlistId) {
                params.set('list', playlistId);
            }

            return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
        } catch (error) {
            return url;
        }
    }

    function renderVideoPlaylist(videos, activeIndex) {
        if (!videoboxPlaylist) return;

        videoboxPlaylist.innerHTML = '';
        if (!videos || videos.length < 2) {
            return;
        }

        videos.forEach((video, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.textContent = video.title || `Video ${index + 1}`;
            if (index === activeIndex) {
                button.classList.add('active');
            }
            button.addEventListener('click', () => {
                playVideoSelection(videos, index);
            });
            videoboxPlaylist.appendChild(button);
        });
    }

    function playVideoSelection(videos, index) {
        const activeVideo = videos[index];
        if (!activeVideo || !videoboxFrame) return;

        videoboxFrame.src = buildYouTubeEmbedUrl(activeVideo.url || activeVideo.videoSrc || '');
        if (videoboxTitle) {
            videoboxTitle.textContent = activeVideo.title || '';
        }
        if (videoboxDescription) {
            videoboxDescription.textContent = activeVideo.description || '';
        }
        renderVideoPlaylist(videos, index);
    }

    function openVideobox(item) {
        if (!videobox || !videoboxFrame) return;

        const videos = item.videoGroup && item.videoGroup.length
            ? item.videoGroup
            : [{
                title: item.title,
                description: item.description,
                url: item.videoSrc
            }];

        videobox.setAttribute('aria-hidden', 'false');
        videobox.style.display = 'flex';
        playVideoSelection(videos, 0);
    }

    function openModelbox(modelSrc, posterSrc, title, description) {
        if (!modelbox || !modelboxViewer) return;
        
        // Reset Wireframe State for new model
        isWireframe = false;
        wireframeBtn?.classList.remove('active');
        
        modelboxCaption.textContent = title + (description ? ` - ${description}` : '');
        modelboxViewer.setAttribute('poster', posterSrc);
        modelboxViewer.setAttribute('src', modelSrc);
        
        modelbox.setAttribute('aria-hidden', 'false');
        modelbox.style.display = 'flex';
    }

    function closeAllModals() {
        if (lightbox) lightbox.style.display = 'none';
        if (videobox) {
            videobox.setAttribute('aria-hidden', 'true');
            videobox.style.display = 'none';
            if (videoboxFrame) {
                videoboxFrame.src = '';
            }
            if (videoboxPlaylist) {
                videoboxPlaylist.innerHTML = '';
            }
        }
        if (modelbox) {
            modelbox.setAttribute('aria-hidden', 'true');
            modelbox.style.display = 'none';
            modelboxViewer.removeAttribute('src'); 
        }
    }

    // Close Listeners
    [lightboxClose, videoboxClose, modelboxClose].forEach(btn => btn?.addEventListener('click', closeAllModals));
    window.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === videobox || e.target === modelbox) closeAllModals();
    });

    // 6. Mesh/Viewer Controls (FIXED WIREFRAME)
    wireframeBtn?.addEventListener('click', () => {
        isWireframe = !isWireframe;
        wireframeBtn.classList.toggle('active', isWireframe);

        // Access internal Three.js scene via Symbols
        const symbols = Object.getOwnPropertySymbols(modelboxViewer);
        const sceneSymbol = symbols.find(s => s.description === 'scene');
        const scene = modelboxViewer[sceneSymbol];

        if (scene) {
            scene.traverse((object) => {
                if (object.isMesh) {
                    const materials = Array.isArray(object.material) ? object.material : [object.material];
                    materials.forEach(mat => {
                        mat.wireframe = isWireframe;
                        mat.needsUpdate = true;
                    });
                }
            });
        }
    });

    rotateBtn?.addEventListener('click', () => {
        modelboxViewer.autoRotate = !modelboxViewer.autoRotate;
        rotateBtn.classList.toggle('active', modelboxViewer.autoRotate);
    });

    // 7. Click Handler (Event Delegation)
    imageContainer.addEventListener('click', (e) => {
        const wrapper = e.target.closest('.image-item');
        if (!wrapper) return;

        const item = images[Number(wrapper.getAttribute('data-index'))];
        const img = wrapper.querySelector('img');
        if (!item || !img) return;

        if (item.videoSrc || item.videoGroup) {
            openVideobox(item);
            return;
        }

        if (item.modelSrc) {
            openModelbox(item.modelSrc, img.src, item.title || '', item.description || '');
        } else {
            openLightbox(img.src, item.title || '', item.description || '');
        }
    });

    // --- Loading Progress Handler ---
    modelboxViewer?.addEventListener('progress', (event) => {
        const progressBar = document.querySelector('.update-bar');
        if (progressBar) {
            const progress = event.detail.totalProgress * 100;
            progressBar.style.width = `${progress}%`;
            if (progress === 100) {
                setTimeout(() => progressBar.parentElement.style.display = 'none', 500);
            } else {
                progressBar.parentElement.style.display = 'block';
            }
        }
    });

// 8. FIXED Filter Functionality
const filterButton = document.querySelector('.filter-button');
const filterDropdown = document.querySelector('.filter-dropdown'); // Target the container
const filterOptions = document.querySelectorAll('.filter-option');

filterButton?.addEventListener('click', (e) => {
    e.stopPropagation();
    // This matches your CSS: .filter-dropdown.active .filter-menu
    filterDropdown?.classList.toggle('active'); 
});

// Close filter menu when clicking anywhere else
window.addEventListener('click', () => {
    filterDropdown?.classList.remove('active');
});

filterOptions.forEach(option => {
    option.addEventListener('click', (e) => {
        e.stopPropagation();
        const category = option.getAttribute('data-filter');
        
        // UI Update
        filterOptions.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        // Execute the filter
        filterImages(category);
        
        // Close menu
        filterDropdown?.classList.remove('active');
    });
});

function filterImages(category) {
    const items = document.querySelectorAll('.image-item');
    items.forEach(item => {
        const itemCat = item.getAttribute('data-category');
        if (category === 'all' || itemCat === category) {
            item.style.display = ''; // Returns to default (flex/block)
        } else {
            item.style.display = 'none';
        }
    });
}

    // Default state
    filterImages('all');
});
