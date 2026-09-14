const { v4: uuidv4 } = require('uuid');

const products = [
  {
    id: uuidv4(),
    name: 'iPhone 15 Pro',
    slug: 'iphone-15-pro',
    brand: 'Apple',
    category: 'Smartphones',
    price: 999,
    originalPrice: 1199,
    description: 'The iPhone 15 Pro features the groundbreaking A17 Pro chip, a titanium design, and an advanced 48MP camera system. Experience unparalleled performance with USB-C connectivity and a stunning Super Retina XDR display with ProMotion technology.',
    shortDescription: 'Apple\'s most powerful smartphone with A17 Pro chip and titanium design',
    rating: 4.8,
    reviewCount: 2453,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80',
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80'
    ],
    specifications: {
      'Display': '6.1-inch Super Retina XDR OLED',
      'Chip': 'A17 Pro',
      'RAM': '8 GB',
      'Storage': '256 GB',
      'Battery': 'Up to 23 hours video playback',
      'Camera': '48MP Main + 12MP Ultra Wide + 12MP Telephoto',
      'OS': 'iOS 17',
      'Weight': '187 g',
      'Water Resistance': 'IP68'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Natural Titanium', value: 'natural-titanium' },
        { label: 'Blue Titanium', value: 'blue-titanium' },
        { label: 'White Titanium', value: 'white-titanium' },
        { label: 'Black Titanium', value: 'black-titanium' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '128 GB', value: '128gb' },
        { label: '256 GB', value: '256gb' },
        { label: '512 GB', value: '512gb' },
        { label: '1 TB', value: '1tb' }
      ]}
    ],
    features: [
      'A17 Pro chip for industry-leading performance',
      'Titanium design — lightweight and durable',
      '48MP camera system with 5x optical zoom',
      'USB-C with USB 3 speeds up to 10Gb/s',
      'Action Button for instant access to your favorite feature',
      'Emergency SOS via satellite and Crash Detection'
    ]
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy S24 Ultra',
    slug: 'samsung-galaxy-s24-ultra',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 1299,
    originalPrice: 1419,
    description: 'The Samsung Galaxy S24 Ultra redefines mobile intelligence with Galaxy AI built in. Featuring a titanium frame, a 200MP camera, and the integrated S Pen, this is the ultimate smartphone for productivity and creativity.',
    shortDescription: 'Samsung flagship with Galaxy AI, S Pen, and 200MP camera',
    rating: 4.7,
    reviewCount: 1876,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80'
    ],
    specifications: {
      'Display': '6.8-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '12 GB',
      'Storage': '256 GB',
      'Battery': '5000 mAh',
      'Camera': '200MP Main + 12MP Ultra Wide + 50MP Telephoto + 10MP Telephoto',
      'OS': 'Android 14 / One UI 6.1',
      'Weight': '232 g',
      'Water Resistance': 'IP68'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Titanium Black', value: 'titanium-black' },
        { label: 'Titanium Gray', value: 'titanium-gray' },
        { label: 'Titanium Violet', value: 'titanium-violet' },
        { label: 'Titanium Yellow', value: 'titanium-yellow' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '256 GB', value: '256gb' },
        { label: '512 GB', value: '512gb' },
        { label: '1 TB', value: '1tb' }
      ]}
    ],
    features: [
      'Galaxy AI for real-time translation and smart search',
      '200MP camera with advanced nightography',
      'Built-in S Pen for precision input',
      'Titanium frame for premium durability',
      '6.8-inch QHD+ display with 120Hz adaptive refresh',
      '5000 mAh battery with super fast charging'
    ]
  },
  {
    id: uuidv4(),
    name: 'Google Pixel 8 Pro',
    slug: 'google-pixel-8-pro',
    brand: 'Google',
    category: 'Smartphones',
    price: 899,
    originalPrice: 999,
    description: 'The Google Pixel 8 Pro is powered by the Tensor G3 chip and offers the most advanced Pixel camera yet. With Google AI features like Magic Eraser, Best Take, and real-time translation, it delivers a smarter smartphone experience.',
    shortDescription: 'Google\'s AI-powered flagship with the best smartphone camera',
    rating: 4.6,
    reviewCount: 1243,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800&q=80',
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80'
    ],
    specifications: {
      'Display': '6.7-inch Super Actua LTPO OLED',
      'Chip': 'Google Tensor G3',
      'RAM': '12 GB',
      'Storage': '128 GB',
      'Battery': '5050 mAh',
      'Camera': '50MP Main + 48MP Ultra Wide + 48MP Telephoto',
      'OS': 'Android 14',
      'Weight': '213 g',
      'Water Resistance': 'IP68'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Obsidian', value: 'obsidian' },
        { label: 'Porcelain', value: 'porcelain' },
        { label: 'Bay', value: 'bay' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '128 GB', value: '128gb' },
        { label: '256 GB', value: '256gb' },
        { label: '512 GB', value: '512gb' },
        { label: '1 TB', value: '1tb' }
      ]}
    ],
    features: [
      'Tensor G3 chip with on-device AI processing',
      'Pro-level triple camera system with 5x optical zoom',
      'Magic Eraser, Best Take, and Photo Unblur',
      '7 years of OS and security updates',
      'Temperature sensor for everyday measurements',
      'Super Actua display with 2400 nits peak brightness'
    ]
  },
  {
    id: uuidv4(),
    name: 'MacBook Pro M3',
    slug: 'macbook-pro-m3',
    brand: 'Apple',
    category: 'Laptops',
    price: 1999,
    originalPrice: 2199,
    description: 'The MacBook Pro with M3 chip delivers exceptional performance for demanding pro workflows. With up to 22 hours of battery life, a stunning Liquid Retina XDR display, and a spaciousMagic Keyboard, it\'s built for those who push boundaries.',
    shortDescription: 'Apple\'s pro laptop with M3 chip and all-day battery life',
    rating: 4.9,
    reviewCount: 3214,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80'
    ],
    specifications: {
      'Display': '14.2-inch Liquid Retina XDR',
      'Chip': 'Apple M3 Pro',
      'CPU': '12-core',
      'GPU': '18-core',
      'RAM': '18 GB Unified Memory',
      'Storage': '512 GB SSD',
      'Battery': 'Up to 17 hours',
      'Weight': '1.61 kg',
      'Ports': '3x Thunderbolt 4, HDMI, SD card, MagSafe'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Space Black', value: 'space-black' },
        { label: 'Silver', value: 'silver' }
      ]},
      { name: 'Configuration', type: 'storage', options: [
        { label: 'M3 Pro 12-core / 18GB / 512GB', value: 'm3-pro-base' },
        { label: 'M3 Pro 12-core / 18GB / 1TB', value: 'm3-pro-upgraded' },
        { label: 'M3 Max 14-core / 36GB / 1TB', value: 'm3-max' }
      ]}
    ],
    features: [
      'M3 Pro chip for blazing-fast professional workflows',
      'Liquid Retina XDR display with 1600 nits peak brightness',
      'Up to 17 hours of battery life',
      '1080p FaceTime HD camera with ISP',
      'Six-speaker sound system with Spatial Audio',
      'MagSafe charging and Thunderbolt 4 connectivity'
    ]
  },
  {
    id: uuidv4(),
    name: 'Dell XPS 15',
    slug: 'dell-xps-15',
    brand: 'Dell',
    category: 'Laptops',
    price: 1799,
    originalPrice: 1999,
    description: 'The Dell XPS 15 combines stunning visuals with powerful performance in an elegant, compact design. Featuring a 15.6-inch OLED display, 13th Gen Intel Core processors, and NVIDIA GeForce RTX graphics, it\'s perfect for creators and professionals.',
    shortDescription: 'Premium Windows laptop with OLED display and RTX graphics',
    rating: 4.5,
    reviewCount: 1567,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
      'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80'
    ],
    specifications: {
      'Display': '15.6-inch 3.5K OLED Touch',
      'Processor': 'Intel Core i7-13700H',
      'RAM': '16 GB DDR5',
      'Storage': '512 GB NVMe SSD',
      'Graphics': 'NVIDIA GeForce RTX 4050',
      'Battery': 'Up to 13 hours',
      'Weight': '1.86 kg',
      'Ports': '2x Thunderbolt 4, USB-C 3.2, SD Card'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Platinum Silver', value: 'platinum-silver' },
        { label: 'Graphite', value: 'graphite' }
      ]},
      { name: 'Configuration', type: 'storage', options: [
        { label: 'i7 / 16GB / 512GB / RTX 4050', value: 'base' },
        { label: 'i7 / 32GB / 1TB / RTX 4060', value: 'upgraded' },
        { label: 'i9 / 64GB / 2TB / RTX 4070', value: 'max' }
      ]}
    ],
    features: [
      '15.6-inch 3.5K OLED display with 400 nits brightness',
      '13th Gen Intel Core i7 processor',
      'NVIDIA GeForce RTX 4050 for creative workloads',
      'CNC-machined aluminum chassis',
      'Fingerprint reader for secure login',
      'Waves MaxxAudio Pro stereo speakers'
    ]
  },
  {
    id: uuidv4(),
    name: 'ThinkPad X1 Carbon Gen 11',
    slug: 'thinkpad-x1-carbon-gen-11',
    brand: 'Lenovo',
    category: 'Laptops',
    price: 1649,
    originalPrice: 1849,
    description: 'The ThinkPad X1 Carbon Gen 11 is the ultimate business ultrabook. Weighing just 1.12 kg with military-grade durability, 13th Gen Intel Core processors, and a brilliant 14-inch display, it\'s designed for professionals who work on the go.',
    shortDescription: 'Ultra-light business laptop with military-grade durability',
    rating: 4.6,
    reviewCount: 982,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
      'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80'
    ],
    specifications: {
      'Display': '14-inch 2.8K OLED',
      'Processor': 'Intel Core i7-1365U vPro',
      'RAM': '32 GB LPDDR5x',
      'Storage': '1 TB PCIe Gen 4 SSD',
      'Graphics': 'Intel Iris Xe',
      'Battery': 'Up to 15 hours',
      'Weight': '1.12 kg',
      'Certification': 'MIL-STD-810H'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' }
      ]},
      { name: 'Configuration', type: 'storage', options: [
        { label: 'i5 / 16GB / 512GB', value: 'base' },
        { label: 'i7 / 32GB / 1TB', value: 'upgraded' }
      ]}
    ],
    features: [
      'Ultralight at just 1.12 kg with carbon fiber build',
      'MIL-STD-810H military-grade durability tested',
      '13th Gen Intel Core i7 with vPro for enterprise security',
      'Fingerprint reader and IR camera for Windows Hello',
      '4-mic array with AI-based noise cancellation',
      'Rapid Charge: 80% in just 60 minutes'
    ]
  },
  {
    id: uuidv4(),
    name: 'AirPods Pro 2',
    slug: 'airpods-pro-2',
    brand: 'Apple',
    category: 'Audio',
    price: 249,
    originalPrice: 279,
    description: 'AirPods Pro 2 feature up to 2x more Active Noise Cancellation than the previous generation, Adaptive Transparency, and Personalized Spatial Audio. The USB-C charging case includes a built-in speaker and lanyard loop for easy portability.',
    shortDescription: 'Apple\'s premium earbuds with industry-leading noise cancellation',
    rating: 4.8,
    reviewCount: 5632,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=800&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
      'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80'
    ],
    specifications: {
      'Driver': 'Custom high-excursion Apple driver',
      'Chip': 'Apple H2',
      'ANC': 'Active Noise Cancellation',
      'Battery': 'Up to 6 hours listening time',
      'Case Battery': 'Up to 30 hours total',
      'Charging': 'USB-C, MagSafe, Qi, Apple Watch charger',
      'Water Resistance': 'IPX4 (earbuds and case)',
      'Connectivity': 'Bluetooth 5.3'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'White', value: 'white' }
      ]}
    ],
    features: [
      'Up to 2x more Active Noise Cancellation',
      'Adaptive Transparency for natural listening',
      'Personalized Spatial Audio with dynamic head tracking',
      'USB-C charging case with built-in speaker and lanyard loop',
      'Touch control for volume swipe',
      'IPX4 water and sweat resistance'
    ]
  },
  {
    id: uuidv4(),
    name: 'Sony WH-1000XM5',
    slug: 'sony-wh-1000xm5',
    brand: 'Sony',
    category: 'Audio',
    price: 349,
    originalPrice: 399,
    description: 'The Sony WH-1000XM5 headphones redefine silence with industry-leading noise cancellation powered by eight microphones and two processors. With exceptional sound quality, 30-hour battery life, and an ultra-comfortable design, they\'re perfect for music lovers and professionals.',
    shortDescription: 'Industry-leading noise-cancelling headphones with 30-hour battery',
    rating: 4.7,
    reviewCount: 3876,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
    ],
    specifications: {
      'Driver': '30mm',
      'Frequency Response': '4 Hz - 40,000 Hz',
      'ANC': 'Dual Processor, 8 microphones',
      'Battery': 'Up to 30 hours (NC ON)',
      'Charging': 'USB-C, 3 min charge = 3 hours playback',
      'Bluetooth': '5.2 with multipoint',
      'Weight': '250 g',
      'Codecs': 'LDAC, AAC, SBC'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' },
        { label: 'Platinum Silver', value: 'platinum-silver' }
      ]}
    ],
    features: [
      'Industry-leading noise cancellation with Auto NC Optimizer',
      '30-hour battery life with quick charging',
      'Exceptional sound quality with integrated processor V1',
      'Crystal clear hands-free calling with 8 microphones',
      'Multipoint connection for simultaneous device pairing',
      'Ultra-comfortable lightweight design at just 250g'
    ]
  },
  {
    id: uuidv4(),
    name: 'Bose QuietComfort Ultra Headphones',
    slug: 'bose-quietcomfort-ultra',
    brand: 'Bose',
    category: 'Audio',
    price: 429,
    originalPrice: 479,
    description: 'Bose QuietComfort Ultra Headphones deliver world-class noise cancellation with Immersive Audio for a spatial listening experience. With CustomTune technology that calibrates sound to your ears, premium materials, and up to 24 hours of battery, these are Bose\'s finest.',
    shortDescription: 'Bose flagship headphones with Immersive Spatial Audio',
    rating: 4.7,
    reviewCount: 1543,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80'
    ],
    specifications: {
      'Driver': 'Custom Bose drivers',
      'ANC': 'World-class noise cancellation',
      'Audio': 'Bose Immersive Spatial Audio',
      'Battery': 'Up to 24 hours',
      'Charging': 'USB-C',
      'Bluetooth': '5.3 with multipoint',
      'Weight': '250 g',
      'Customization': 'CustomTune personal calibration'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' },
        { label: 'White Smoke', value: 'white-smoke' },
        { label: 'Sandstone', value: 'sandstone' }
      ]}
    ],
    features: [
      'Bose Immersive Spatial Audio for lifelike sound',
      'World-class noise cancellation with Quiet and Aware modes',
      'CustomTune technology calibrates audio to your ears',
      'Plush protein leather ear cushions for all-day comfort',
      'Up to 24 hours of wireless battery life',
      'Intuitive touch controls and voice assistant support'
    ]
  },
  {
    id: uuidv4(),
    name: 'Apple Watch Ultra 2',
    slug: 'apple-watch-ultra-2',
    brand: 'Apple',
    category: 'Wearables',
    price: 799,
    originalPrice: 849,
    description: 'The most rugged and capable Apple Watch ever. Apple Watch Ultra 2 features the brightest display Apple has ever made, a powerful S9 SiP, precision dual-frequency GPS, and up to 36 hours of battery life. Built for endurance, exploration, and adventure.',
    shortDescription: 'Apple\'s most rugged watch with the brightest display ever',
    rating: 4.8,
    reviewCount: 2156,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80',
      'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&q=80',
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80'
    ],
    specifications: {
      'Display': '49mm Always-On Retina LTPO2 OLED',
      'Brightness': '3000 nits',
      'Chip': 'Apple S9 SiP',
      'GPS': 'Precision dual-frequency L1 + L5',
      'Battery': 'Up to 36 hours / 72 hours low power',
      'Water Resistance': 'WR100 / EN 13319',
      'Durability': 'MIL-STD-810H,钛金属',
      'Connectivity': 'LTE, UWB, Bluetooth 5.3'
    },
    variants: [
      { name: 'Case Color', type: 'color', options: [
        { label: 'Natural Titanium', value: 'natural-titanium' }
      ]},
      { name: 'Band', type: 'band', options: [
        { label: 'Alpine Loop', value: 'alpine-loop' },
        { label: 'Trail Loop', value: 'trail-loop' },
        { label: 'Ocean Band', value: 'ocean-band' }
      ]}
    ],
    features: [
      'Brightest Apple display ever at 3000 nits',
      'Precision dual-frequency GPS for accurate tracking',
      'Depth gauge and water temperature sensor for diving',
      'Customizable Action Button for instant workout control',
      'Siren for emergencies audible up to 180 meters',
      '36 hours of battery life on a single charge'
    ]
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy Watch 6 Classic',
    slug: 'samsung-galaxy-watch-6-classic',
    brand: 'Samsung',
    category: 'Wearables',
    price: 399,
    originalPrice: 449,
    description: 'The Samsung Galaxy Watch 6 Classic brings back the beloved rotating bezel in a slimmer, more refined design. Featuring advanced health monitoring with BioActive Sensor, Wear OS powered by Samsung, and sapphire crystal glass for superior durability.',
    shortDescription: 'Premium smartwatch with rotating bezel and advanced health tracking',
    rating: 4.5,
    reviewCount: 1234,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1545127398-14699f92334b?w=800&q=80',
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80'
    ],
    specifications: {
      'Display': '47mm Super AMOLED',
      'Processor': 'Exynos W930',
      'RAM': '2 GB',
      'Storage': '16 GB',
      'Battery': '425 mAh',
      'OS': 'Wear OS 4 / One UI Watch 5',
      'Durability': 'Sapphire Crystal, IP68, 5ATM',
      'Connectivity': 'Bluetooth, Wi-Fi, LTE (optional)'
    },
    variants: [
      { name: 'Size', type: 'size', options: [
        { label: '43mm', value: '43mm' },
        { label: '47mm', value: '47mm' }
      ]},
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' },
        { label: 'Silver', value: 'silver' }
      ]},
      { name: 'Connectivity', type: 'connectivity', options: [
        { label: 'Bluetooth', value: 'bluetooth' },
        { label: 'LTE', value: 'lte' }
      ]}
    ],
    features: [
      'Iconic rotating bezel for intuitive navigation',
      'BioActive Sensor for heart rate, SpO2, and body composition',
      'Sapphire crystal glass for scratch resistance',
      'Sleep tracking with advanced sleep coaching',
      'Wear OS 4 powered by Samsung for rich app ecosystem',
      'Slimmer design with 20% thinner bezels'
    ]
  },
  {
    id: uuidv4(),
    name: 'iPad Pro M4',
    slug: 'ipad-pro-m4',
    brand: 'Apple',
    category: 'Tablets',
    price: 1099,
    originalPrice: 1199,
    description: 'The iPad Pro with M4 chip is the thinnest Apple product ever. Featuring an Ultra Retina XDR OLED display, the blazing-fast M4 chip, and support for Apple Pencil Pro, it\'s a supercomputer you can hold in your hand.',
    shortDescription: 'Apple\'s thinnest iPad ever with M4 chip and OLED display',
    rating: 4.9,
    reviewCount: 1876,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80'
    ],
    specifications: {
      'Display': '11-inch Ultra Retina XDR OLED',
      'Chip': 'Apple M4',
      'RAM': '8 GB',
      'Storage': '256 GB',
      'Camera': '12MP Wide + LiDAR Scanner',
      'Battery': 'Up to 10 hours',
      'Weight': '444 g (11-inch)',
      'Apple Pencil': 'Apple Pencil Pro supported'
    },
    variants: [
      { name: 'Size', type: 'size', options: [
        { label: '11-inch', value: '11-inch' },
        { label: '13-inch', value: '13-inch' }
      ]},
      { name: 'Color', type: 'color', options: [
        { label: 'Space Black', value: 'space-black' },
        { label: 'Silver', value: 'silver' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '256 GB', value: '256gb' },
        { label: '512 GB', value: '512gb' },
        { label: '1 TB', value: '1tb' },
        { label: '2 TB', value: '2tb' }
      ]},
      { name: 'Connectivity', type: 'connectivity', options: [
        { label: 'Wi-Fi', value: 'wifi' },
        { label: 'Wi-Fi + Cellular', value: 'cellular' }
      ]}
    ],
    features: [
      'M4 chip for desktop-class performance',
      'Ultra Retina XDR OLED display with tandem OLED technology',
      'Thinnest Apple product ever at 5.1mm',
      'Apple Pencil Pro with barrel roll and haptic feedback',
      '12MP camera with LiDAR Scanner for AR',
      'Thunderbolt / USB 4 for pro connectivity'
    ]
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy Tab S9 Ultra',
    slug: 'samsung-galaxy-tab-s9-ultra',
    brand: 'Samsung',
    category: 'Tablets',
    price: 1199,
    originalPrice: 1319,
    description: 'The Samsung Galaxy Tab S9 Ultra features a massive 14.6-inch Dynamic AMOLED 2X display, Snapdragon 8 Gen 2 processor, and comes with the S Pen included. With IP68 water resistance and DeX mode, it\'s a true laptop replacement.',
    shortDescription: 'Samsung\'s largest tablet with 14.6-inch AMOLED and S Pen',
    rating: 4.6,
    reviewCount: 987,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&q=80',
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=80',
      'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&q=80'
    ],
    specifications: {
      'Display': '14.6-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 2',
      'RAM': '12 GB',
      'Storage': '256 GB',
      'Battery': '11,200 mAh',
      'Camera': '13MP Main + 8MP Ultra Wide',
      'Weight': '732 g',
      'Water Resistance': 'IP68'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Graphite', value: 'graphite' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '256 GB', value: '256gb' },
        { label: '512 GB', value: '512gb' },
        { label: '1 TB', value: '1tb' }
      ]},
      { name: 'Connectivity', type: 'connectivity', options: [
        { label: 'Wi-Fi', value: 'wifi' },
        { label: 'Wi-Fi + 5G', value: '5g' }
      ]}
    ],
    features: [
      'Massive 14.6-inch Dynamic AMOLED 2X display',
      'Snapdragon 8 Gen 2 for blazing performance',
      'S Pen included with low latency',
      'IP68 water and dust resistance',
      'Samsung DeX for desktop-like experience',
      'Quad speakers tuned by AKG with Dolby Atmos'
    ]
  },
  {
    id: uuidv4(),
    name: 'AirTag 4-Pack',
    slug: 'airtag-4-pack',
    brand: 'Apple',
    category: 'Accessories',
    price: 99,
    originalPrice: 129,
    description: 'Keep track of your things with Apple AirTag. Attach one to your keys, put another in your backpack, and use the Find My app to locate them. With precision finding, a replaceable battery lasting over a year, and a built-in speaker, AirTags make losing things a thing of the past.',
    shortDescription: 'Apple\'s item tracker with precision finding and one-year battery',
    rating: 4.7,
    reviewCount: 4321,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=800&q=80',
      'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&q=80',
      'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&q=80'
    ],
    specifications: {
      'Size': '31.9 mm diameter, 8.0 mm height',
      'Weight': '11 g',
      'Battery': 'CR2032 (user-replaceable)',
      'Battery Life': 'Over 1 year',
      'Water Resistance': 'IP67',
      'Connectivity': 'Bluetooth 5.0, Ultra Wideband',
      'Speaker': 'Built-in',
      'Compatibility': 'iOS 14.5 or later'
    },
    variants: [
      { name: 'Quantity', type: 'quantity', options: [
        { label: '1-Pack', value: '1-pack' },
        { label: '4-Pack', value: '4-pack' }
      ]}
    ],
    features: [
      'Precision Finding with Ultra Wideband technology',
      'Massive network of Apple devices for lost item tracking',
      'Replaceable CR2032 battery lasts over a year',
      'IP67 water and dust resistance',
      'Built-in speaker for audible alerts',
      'Works seamlessly with the Find My app'
    ]
  },
  {
    id: uuidv4(),
    name: 'Anker 737 Power Bank (PowerCore 24K)',
    slug: 'anker-737-power-bank',
    brand: 'Anker',
    category: 'Accessories',
    price: 109,
    originalPrice: 139,
    description: 'The Anker 737 Power Bank packs a massive 24,000mAh capacity with 140W bidirectional charging. Featuring a smart digital display showing remaining power and charging stats, it can charge a MacBook Pro, iPhone, and iPad simultaneously via three ports.',
    shortDescription: '24,000mAh power bank with 140W bidirectional fast charging',
    rating: 4.6,
    reviewCount: 2876,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1585995603413-eb35b5f4a50b?w=800&q=80',
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&q=80',
      'https://images.unsplash.com/photo-1571508601891-ca5e7a713859?w=800&q=80'
    ],
    specifications: {
      'Capacity': '24,000 mAh / 86.4 Wh',
      'Max Output': '140W (single port)',
      'Ports': '2x USB-C, 1x USB-A',
      'Input': 'USB-C 140W (PD 3.1)',
      'Display': 'Smart digital display',
      'Technology': 'PowerIQ 3.0, GaN',
      'Weight': '630 g',
      'Dimensions': '155.7 × 54.6 × 49.5 mm'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' }
      ]}
    ],
    features: [
      '140W bidirectional fast charging for laptops and phones',
      '24,000mAh capacity charges iPhone 15 nearly 5 times',
      'Smart digital display shows wattage, time remaining, and capacity',
      'Charge 3 devices simultaneously with PowerIQ 3.0',
      'USB-C PD 3.1 compatible with MacBook Pro, iPad Pro, and more',
      'Airline-approved 86.4Wh capacity for carry-on'
    ]
  },
  {
    id: uuidv4(),
    name: 'Samsung Galaxy S24',
    slug: 'samsung-galaxy-s24',
    brand: 'Samsung',
    category: 'Smartphones',
    price: 799,
    originalPrice: 899,
    description: 'The Samsung Galaxy S24 brings Galaxy AI to a compact, comfortable form factor. Featuring a 6.2-inch Dynamic AMOLED 2X display, 50MP camera, and all-day battery life, it delivers the Galaxy experience in a size that fits perfectly in your hand.',
    shortDescription: 'Compact Galaxy AI phone with 50MP camera and all-day battery',
    rating: 4.6,
    reviewCount: 2198,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80'
    ],
    specifications: {
      'Display': '6.2-inch Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3',
      'RAM': '8 GB',
      'Storage': '128 GB',
      'Battery': '4000 mAh',
      'Camera': '50MP Main + 12MP Ultra Wide + 10MP Telephoto',
      'OS': 'Android 14 / One UI 6.1',
      'Weight': '167 g'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Cobalt Violet', value: 'cobalt-violet' },
        { label: 'Amber Yellow', value: 'amber-yellow' },
        { label: 'Onyx Black', value: 'onyx-black' },
        { label: 'Marble Gray', value: 'marble-gray' }
      ]},
      { name: 'Storage', type: 'storage', options: [
        { label: '128 GB', value: '128gb' },
        { label: '256 GB', value: '256gb' }
      ]}
    ],
    features: [
      'Galaxy AI with Circle to Search and Live Translate',
      '50MP camera with 3x optical zoom',
      'Armor Aluminum frame for durability',
      '6.2-inch display in a comfortable, compact design',
      'All-day 4000 mAh battery with 25W fast charging',
      '7 years of OS and security updates'
    ]
  },
  {
    id: uuidv4(),
    name: 'Sony WH-1000XM4',
    slug: 'sony-wh-1000xm4',
    brand: 'Sony',
    category: 'Audio',
    price: 248,
    originalPrice: 349,
    description: 'The Sony WH-1000XM4 headphones deliver industry-leading noise cancellation with exceptional sound quality. Featuring Speak-to-Chat, Adaptive Sound Control, and up to 30 hours of battery life, they offer an immersive and personalized listening experience.',
    shortDescription: 'Sony\'s acclaimed noise-cancelling headphones with adaptive audio',
    rating: 4.7,
    reviewCount: 6543,
    inStock: true,
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&q=80',
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80'
    ],
    specifications: {
      'Driver': '40mm',
      'Frequency Response': '4 Hz - 40,000 Hz',
      'ANC': 'Dual Processor, 5 microphones',
      'Battery': 'Up to 30 hours (NC ON)',
      'Charging': 'USB-C, 10 min = 5 hours',
      'Bluetooth': '5.0 with multipoint',
      'Weight': '254 g',
      'Codecs': 'LDAC, AAC, SBC'
    },
    variants: [
      { name: 'Color', type: 'color', options: [
        { label: 'Black', value: 'black' },
        { label: 'Platinum Silver', value: 'platinum-silver' },
        { label: 'Midnight Blue', value: 'midnight-blue' }
      ]}
    ],
    features: [
      'Industry-leading noise cancellation with QN1 processor',
      'Speak-to-Chat auto-pauses music when you talk',
      'Adaptive Sound Control adjusts to your environment',
      '30-hour battery life with quick charging',
      'Multipoint connection for two devices simultaneously',
      'Wearing detection auto-pauses when headphones are removed'
    ]
  }
];

module.exports = products;
