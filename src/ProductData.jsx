
const categoriesProduct = [
    {
      name: "Watches",
      items: [
        {
          id: 1,
          name: "Rolex Submariner",
          description: "Classic dive watch with a timeless design.",
          price_per_day: 100,
          image_url: "images/watches/rolex_submariner.jpg",
          availability: true
        },
        {
          id: 2,
          name: "Omega Speedmaster",
          description: "Iconic chronograph known for its space missions.",
          price_per_day: 90,
          image_url: "images/watches/omega_speedmaster.jpg",
          availability: true
        },
        {
          id: 3,
          name: "Tag Heuer Carrera",
          description: "Luxury sports watch with a sleek design.",
          price_per_day: 80,
          image_url: "images/watches/tag_heuer_carrera.jpg",
          availability: true
        },
        {
          id: 4,
          name: "Seiko Prospex",
          description: "Durable and reliable dive watch.",
          price_per_day: 70,
          image_url: "images/watches/seiko_prospex.jpg",
          availability: true
        },
        {
          id: 5,
          name: "Casio G-Shock",
          description: "Rugged and shock-resistant digital watch.",
          price_per_day: 30,
          image_url: "images/watches/casio_gshock.jpg",
          availability: true
        },
        {
          id: 6,
          name: "Apple Watch Series 6",
          description: "Smartwatch with advanced health tracking features.",
          price_per_day: 50,
          image_url: "images/watches/apple_watch_series6.jpg",
          availability: true
        },
        {
          id: 7,
          name: "Garmin Forerunner 945",
          description: "GPS running watch with advanced training features.",
          price_per_day: 40,
          image_url: "images/watches/garmin_forerunner_945.jpg",
          availability: true
        },
        {
          id: 8,
          name: "Fossil Gen 5",
          description: "Stylish smartwatch with Wear OS.",
          price_per_day: 35,
          image_url: "images/watches/fossil_gen5.jpg",
          availability: true
        },
        {
          id: 9,
          name: "Tissot Le Locle",
          description: "Elegant dress watch with Swiss craftsmanship.",
          price_per_day: 60,
          image_url: "images/watches/tissot_le_locle.jpg",
          availability: true
        },
        {
          id: 10,
          name: "Breitling Navitimer",
          description: "Pilot's watch with a classic aviation design.",
          price_per_day: 110,
          image_url: "images/watches/breitling_navitimer.jpg",
          availability: true
        }
      ]
    },
    {
      name: "Cameras",
      items: [
        {
          id: 1,
          name: "Canon EOS R5",
          description: "Full-frame mirrorless camera with 45MP resolution.",
          price_per_day: 150,
          image_url: "images/cameras/canon_eos_r5.jpg",
          availability: true
        },
        {
          id: 2,
          name: "Sony A7 III",
          description: "Versatile full-frame mirrorless camera.",
          price_per_day: 120,
          image_url: "images/cameras/sony_a7_iii.jpg",
          availability: true
        },
        {
          id: 3,
          name: "Nikon Z6",
          description: "Mirrorless camera with excellent video capabilities.",
          price_per_day: 130,
          image_url: "images/cameras/nikon_z6.jpg",
          availability: true
        },
        {
          id: 4,
          name: "Fujifilm X-T4",
          description: "APS-C mirrorless camera with retro design.",
          price_per_day: 100,
          image_url: "images/cameras/fujifilm_xt4.jpg",
          availability: true
        },
        {
          id: 5,
          name: "Panasonic Lumix GH5",
          description: "Micro Four Thirds camera with 4K video.",
          price_per_day: 90,
          image_url: "images/cameras/panasonic_gh5.jpg",
          availability: true
        },
        {
          id: 6,
          name: "Olympus OM-D E-M1 Mark III",
          description: "Compact mirrorless camera with in-body stabilization.",
          price_per_day: 80,
          image_url: "images/cameras/olympus_em1_markiii.jpg",
          availability: true
        },
        {
          id: 7,
          name: "Canon EOS 90D",
          description: "DSLR with 32.5MP APS-C sensor.",
          price_per_day: 70,
          image_url: "images/cameras/canon_eos_90d.jpg",
          availability: true
        },
        {
          id: 8,
          name: "Sony RX100 VII",
          description: "Premium compact camera with 1-inch sensor.",
          price_per_day: 60,
          image_url: "images/cameras/sony_rx100_vii.jpg",
          availability: true
        },
        {
          id: 9,
          name: "GoPro HERO9 Black",
          description: "Action camera with 5K video recording.",
          price_per_day: 50,
          image_url: "images/cameras/gopro_hero9_black.jpg",
          availability: true
        },
        {
          id: 10,
          name: "Leica Q2",
          description: "Full-frame compact camera with 47.3MP sensor.",
          price_per_day: 200,
          image_url: "images/cameras/leica_q2.jpg",
          availability: true
        }
      ]
    },
    {
      name: "Drones",
      items: [
        {
          id: 1,
          name: "DJI Mavic Air 2",
          description: "Compact drone with 4K camera and obstacle avoidance.",
          price_per_day: 80,
          image_url: "images/drones/dji_mavic_air2.jpg",
          availability: true
        },
        {
          id: 2,
          name: "DJI Phantom 4 Pro",
          description: "Professional-grade drone with 20MP camera.",
          price_per_day: 120,
          image_url: "images/drones/dji_phantom4_pro.jpg",
          availability: true
        },
        {
          id: 3,
          name: "DJI Inspire 2",
          description: "High-performance drone for filmmakers.",
          price_per_day: 150,
          image_url: "images/drones/dji_inspire2.jpg",
          availability: true
        },
        {
          id: 4,
          name: "Parrot Anafi",
          description: "Compact and lightweight drone with 4K HDR camera.",
          price_per_day: 70,
          image_url: "images/drones/parrot_anafi.jpg",
          availability: true
        },
        {
          id: 5,
          name: "Autel Robotics EVO II",
          description: "8K camera drone with long flight time.",
          price_per_day: 140,
          image_url: "images/drones/autel_evo_ii.jpg",
          availability: true
        },
        {
          id: 6,
          name: "DJI Mavic Mini",
          description: "Compact drone with 2.7K camera, perfect for beginners.",
          price_per_day: 50,
          image_url: "images/drones/dji_mavic_mini.jpg",
          availability: true
        },
        {
          id: 7,
          name: "Skydio 2",
          description: "AI-powered drone with autonomous flying capabilities.",
          price_per_day: 110,
          image_url: "images/drones/skydio_2.jpg",
          availability: true
        },
        {
          id: 8,
          name: "PowerVision PowerEgg X",
          description: "Versatile drone and AI camera in one.",
          price_per_day: 100,
          image_url: "images/drones/powervision_poweregg_x.jpg",
          availability: true
        },
        {
          id: 9,
          name: "Yuneec Typhoon H Pro",
          description: "Hexacopter with 4K camera and obstacle avoidance.",
          price_per_day: 130,
          image_url: "images/drones/yuneec_typhoon_h_pro.jpg",
          availability: true
        },
        {
          id: 10,
          name: "DJI Spark",
          description: "Mini drone with intelligent flight modes.",
          price_per_day: 60,
          image_url: "images/drones/dji_spark.jpg",
          availability: true
        }
      ]
    },
    {
      name: "Laptops",
      items: [
        {
          id: 1,
          name: "MacBook Pro 16",
          description: "High-performance laptop with Retina display.",
          price_per_day: 120,
          image_url: "images/laptops/macbook_pro_16.jpg",
          availability: true
        },
        {
          id: 2,
          name: "Dell XPS 13",
          description: "Compact and powerful ultrabook.",
          price_per_day: 100,
          image_url: "images/laptops/dell_xps_13.jpg",
          availability: true
        },
        {
          id: 3,
          name: "HP Spectre x360",
          description: "Convertible laptop with 4K display.",
          price_per_day: 90,
          image_url: "images/laptops/hp_spectre_x360.jpg",
          availability: true
        },
        {
          id: 4,
          name: "Lenovo ThinkPad X1 Carbon",
          description: "Lightweight business laptop with durable design.",
          price_per_day: 110,
          image_url: "images/laptops/lenovo_thinkpad_x1_carbon.jpg",
          availability: true
        },
        {
          id: 5,
          name: "Asus ROG Zephyrus G14",
          description: "Gaming laptop with high refresh rate display.",
          price_per_day: 130,
          image_url: "images/laptops/asus_rog_zephyrus_g14.jpg",
          availability: true
        },
        {
          id: 6,
          name: "Microsoft Surface Laptop 4",
          description: "Stylish and powerful laptop with touch screen.",
          price_per_day: 90,
          image_url: "images/laptops/microsoft_surface_laptop_4.jpg",
          availability: true
        },
        {
          id: 7,
          name: "Acer Swift 3",
          description: "Affordable ultrabook with long battery life.",
          price_per_day: 60,
          image_url: "images/laptops/acer_swift_3.jpg",
          availability: true
        },
        {
          id: 8,
          name: "Razer Blade 15",
          description: "High-end gaming laptop with powerful GPU.",
          price_per_day: 140,
          image_url: "images/laptops/razer_blade_15.jpg",
          availability: true
        },
        {
          id: 9,
          name: "LG Gram 17",
          description: "Ultra-lightweight laptop with large display.",
          price_per_day: 100,
          image_url: "images/laptops/lg_gram_17.jpg",
          availability: true
        },
        {
          id: 10,
          name: "Google Pixelbook Go",
          description: "Chromebook with sleek design and long battery life.",
          price_per_day: 70,
          image_url: "images/laptops/google_pixelbook_go.jpg",
          availability: true
        }
      ]
    },
    {
      name: "Smartphones",
      items: [
        {
          id: 1,
          name: "iPhone 12 Pro",
          description: "High-end smartphone with triple-camera system.",
          price_per_day: 70,
          image_url: "images/smartphones/iphone_12_pro.jpg",
          availability: true
        },
        {
          id: 2,
          name: "Samsung Galaxy S21",
          description: "Flagship phone with advanced camera features.",
          price_per_day: 60,
          image_url: "images/smartphones/galaxy_s21.jpg",
          availability: true
        },
        {
          id: 3,
          name: "Google Pixel 5",
          description: "5G phone with excellent camera performance.",
          price_per_day: 50,
          image_url: "images/smartphones/pixel_5.jpg",
          availability: true
        },
        {
          id: 4,
          name: "OnePlus 9 Pro",
          description: "High-performance phone with fast charging.",
          price_per_day: 55,
          image_url: "images/smartphones/oneplus_9_pro.jpg",
          availability: true
        },
        {
          id: 5,
          name: "Sony Xperia 1 III",
          description: "Flagship phone with 4K HDR display.",
          price_per_day: 65,
          image_url: "images/smartphones/xperia_1_iii.jpg",
          availability: true
        },
        {
          id: 6,
          name: "Huawei P40 Pro",
          description: "Smartphone with advanced camera system.",
          price_per_day: 60,
          image_url: "images/smartphones/huawei_p40_pro.jpg",
          availability: true
        },
        {
          id: 7,
          name: "Xiaomi Mi 11 Ultra",
          description: "Premium phone with large camera sensor.",
          price_per_day: 50,
          image_url: "images/smartphones/mi_11_ultra.jpg",
          availability: true
        },
        {
          id: 8,
          name: "Oppo Find X3 Pro",
          description: "Flagship phone with innovative camera design.",
          price_per_day: 55,
          image_url: "images/smartphones/find_x3_pro.jpg",
          availability: true
        },
        {
          id: 9,
          name: "Asus ROG Phone 5",
          description: "Gaming phone with high refresh rate display.",
          price_per_day: 70,
          image_url: "images/smartphones/rog_phone_5.jpg",
          availability: true
        },
        {
          id: 10,
          name: "Realme GT",
          description: "Affordable flagship with powerful performance.",
          price_per_day: 45,
          image_url: "images/smartphones/realme_gt.jpg",
          availability: true
        }
      ]
    }
  ]

export {categoriesProduct};