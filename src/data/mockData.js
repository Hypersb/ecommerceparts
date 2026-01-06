// Mock product data for car parts e-commerce
export const products = [
  {
    id: 1,
    name: "High Performance Brake Pads",
    category: "Brakes",
    brand: "Brembo",
    price: 89.99,
    condition: "new",
    stock: 45,
    rating: 4.8,
    reviews: 234,
    description: "Premium ceramic brake pads designed for superior stopping power and reduced dust. Compatible with most modern vehicles.",
    compatibility: ["Honda Civic 2016-2023", "Toyota Camry 2015-2022", "Ford Focus 2014-2020"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: true,
    sellerId: 2
  },
  {
    id: 2,
    name: "LED Headlight Bulbs Set",
    category: "Lighting",
    brand: "Philips",
    price: 129.99,
    condition: "new",
    stock: 78,
    rating: 4.9,
    reviews: 456,
    description: "Ultra-bright LED headlight conversion kit with 6000K color temperature. Easy plug-and-play installation.",
    compatibility: ["Universal fit for H11, H7, 9005, 9006 sockets"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ],
    featured: true,
    sellerId: 2
  },
  {
    id: 3,
    name: "Performance Air Filter",
    category: "Engine",
    brand: "K&N",
    price: 59.99,
    condition: "new",
    stock: 120,
    rating: 4.7,
    reviews: 189,
    description: "Reusable high-flow air filter that increases horsepower and acceleration. Washable and guaranteed for life.",
    compatibility: ["Most cars and light trucks"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 4,
    name: "Heavy Duty Shock Absorbers",
    category: "Suspension",
    brand: "Monroe",
    price: 179.99,
    condition: "new",
    stock: 34,
    rating: 4.6,
    reviews: 145,
    description: "Premium gas-charged shock absorbers for improved handling and comfort. Perfect for SUVs and trucks.",
    compatibility: ["Ford F-150 2015-2023", "Chevy Silverado 2014-2022"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: true,
    sellerId: 2
  },
  {
    id: 5,
    name: "Alloy Wheel Set (18 inch)",
    category: "Wheels",
    brand: "Enkei",
    price: 899.99,
    condition: "new",
    stock: 12,
    rating: 4.9,
    reviews: 267,
    description: "Lightweight forged aluminum wheels. Set of 4. Gloss black finish with machined face.",
    compatibility: ["5x114.3 bolt pattern", "Various vehicles"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1609146528376-d7f88b4a0c83?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 6,
    name: "Synthetic Motor Oil 5W-30",
    category: "Fluids",
    brand: "Mobil 1",
    price: 34.99,
    condition: "new",
    stock: 200,
    rating: 4.8,
    reviews: 523,
    description: "Full synthetic motor oil providing outstanding engine protection. 5-quart bottle.",
    compatibility: ["Most gasoline engines"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 7,
    name: "Carbon Fiber Spoiler",
    category: "Exterior",
    brand: "Seibon",
    price: 449.99,
    condition: "new",
    stock: 8,
    rating: 4.7,
    reviews: 98,
    description: "Lightweight carbon fiber rear spoiler. Improves aerodynamics and adds aggressive styling.",
    compatibility: ["Honda Civic 2016-2021 Sedan"],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
      "https://images.unsplash.com/photo-1609146528376-d7f88b4a0c83?w=800"
    ],
    featured: true,
    sellerId: 3
  },
  {
    id: 8,
    name: "Radiator Assembly",
    category: "Cooling",
    brand: "Mishimoto",
    price: 289.99,
    condition: "new",
    stock: 23,
    rating: 4.6,
    reviews: 134,
    description: "Performance aluminum radiator with increased cooling capacity. Direct OEM replacement.",
    compatibility: ["Honda Civic Si 2017-2020"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 9,
    name: "Cat-Back Exhaust System",
    category: "Exhaust",
    brand: "Borla",
    price: 799.99,
    condition: "new",
    stock: 15,
    rating: 4.9,
    reviews: 312,
    description: "Stainless steel cat-back exhaust system. Aggressive sound with power gains. T-304 construction.",
    compatibility: ["Ford Mustang GT 2015-2023"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800"
    ],
    featured: true,
    sellerId: 3
  },
  {
    id: 10,
    name: "Floor Mats Set (All Weather)",
    category: "Interior",
    brand: "WeatherTech",
    price: 149.99,
    condition: "new",
    stock: 67,
    rating: 4.8,
    reviews: 445,
    description: "Custom-fit all-weather floor mats. Advanced surface channeling carries water and debris away.",
    compatibility: ["Various vehicles - select your model"],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 11,
    name: "Performance Spark Plugs",
    category: "Engine",
    brand: "NGK",
    price: 39.99,
    condition: "new",
    stock: 156,
    rating: 4.7,
    reviews: 289,
    description: "Iridium spark plugs for improved fuel efficiency and smoother running. Set of 4.",
    compatibility: ["Most 4-cylinder engines"],
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 12,
    name: "Battery (AGM)",
    category: "Electrical",
    brand: "Optima",
    price: 229.99,
    condition: "new",
    stock: 45,
    rating: 4.9,
    reviews: 678,
    description: "Absorbed Glass Mat battery for superior starting power and deep-cycle capabilities.",
    compatibility: ["Group 34/78 - most vehicles"],
    images: [
      "https://images.unsplash.com/photo-1609146528376-d7f88b4a0c83?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 13,
    name: "Turbo Charger Kit",
    category: "Engine",
    brand: "Garrett",
    price: 1299.99,
    condition: "new",
    stock: 8,
    rating: 4.9,
    reviews: 156,
    description: "Complete turbocharger kit with all necessary hardware. Increases horsepower by 100+. Includes wastegate and boost controller.",
    compatibility: ["Honda Civic Si 2006-2015", "Acura RSX 2002-2006"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800"
    ],
    featured: true,
    sellerId: 3
  },
  {
    id: 14,
    name: "Racing Seats (Bucket Style)",
    category: "Interior",
    brand: "Recaro",
    price: 899.99,
    condition: "new",
    stock: 12,
    rating: 4.8,
    reviews: 89,
    description: "FIA-approved racing bucket seats with premium leather and alcantara. Side bolster support for aggressive driving.",
    compatibility: ["Universal fit with mounting brackets"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 15,
    name: "Fuel Injectors Set",
    category: "Engine",
    brand: "Bosch",
    price: 349.99,
    condition: "new",
    stock: 28,
    rating: 4.7,
    reviews: 178,
    description: "High-flow fuel injectors for performance applications. Set of 4. Provides better atomization and fuel delivery.",
    compatibility: ["Most turbocharged 4-cylinder engines"],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 16,
    name: "Coilover Suspension Kit",
    category: "Suspension",
    brand: "BC Racing",
    price: 1199.99,
    condition: "new",
    stock: 15,
    rating: 4.9,
    reviews: 234,
    description: "Fully adjustable coilover suspension system. 30-way damping adjustment. Lowers vehicle 1-3 inches.",
    compatibility: ["Honda Civic 2016-2023", "Mazda 3 2014-2022"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: true,
    sellerId: 2
  },
  {
    id: 17,
    name: "Cold Air Intake System",
    category: "Engine",
    brand: "AEM",
    price: 299.99,
    condition: "new",
    stock: 42,
    rating: 4.8,
    reviews: 312,
    description: "Complete cold air intake system with heat shield. Gains 10-15 HP. Aggressive intake sound.",
    compatibility: ["Ford Mustang 2015-2023", "Dodge Challenger 2015-2022"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    ],
    featured: true,
    sellerId: 3
  },
  {
    id: 18,
    name: "Aftermarket Steering Wheel",
    category: "Interior",
    brand: "Momo",
    price: 249.99,
    condition: "new",
    stock: 23,
    rating: 4.6,
    reviews: 145,
    description: "350mm diameter racing steering wheel. Leather wrapped with red stitching. Includes quick release hub.",
    compatibility: ["Universal with hub adapter"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 19,
    name: "Performance Clutch Kit",
    category: "Transmission",
    brand: "Exedy",
    price: 549.99,
    condition: "new",
    stock: 18,
    rating: 4.7,
    reviews: 198,
    description: "Stage 2 clutch kit with pressure plate and flywheel. Handles up to 400 HP. Organic friction material.",
    compatibility: ["Honda Civic Si 2006-2015", "Subaru WRX 2008-2014"],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 20,
    name: "Window Tint Film Kit",
    category: "Exterior",
    brand: "3M",
    price: 79.99,
    condition: "new",
    stock: 156,
    rating: 4.5,
    reviews: 267,
    description: "Premium ceramic window tint film. 35% VLT. Blocks 99% UV rays and reduces heat. Complete kit for sedan.",
    compatibility: ["Universal - sedan size"],
    images: [
      "https://images.unsplash.com/photo-1609146528376-d7f88b4a0c83?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 21,
    name: "Front Bumper Lip Splitter",
    category: "Exterior",
    brand: "Maxton Design",
    price: 189.99,
    condition: "new",
    stock: 34,
    rating: 4.7,
    reviews: 123,
    description: "Gloss black front bumper lip splitter. Adds aggressive styling and improves downforce. ABS plastic construction.",
    compatibility: ["BMW 3 Series F30 2012-2019"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 22,
    name: "Transmission Fluid (ATF)",
    category: "Fluids",
    brand: "Valvoline",
    price: 29.99,
    condition: "new",
    stock: 180,
    rating: 4.8,
    reviews: 445,
    description: "Full synthetic automatic transmission fluid. Provides superior protection and smooth shifting. 1 quart.",
    compatibility: ["Most automatic transmissions"],
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 23,
    name: "Oil Catch Can",
    category: "Engine",
    brand: "Mishimoto",
    price: 149.99,
    condition: "new",
    stock: 56,
    rating: 4.6,
    reviews: 189,
    description: "Baffled oil catch can prevents oil vapor from entering intake. Internal air diverter increases air turbulence.",
    compatibility: ["Universal - turbocharged engines"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 24,
    name: "Tow Hook (Racing Style)",
    category: "Exterior",
    brand: "Password JDM",
    price: 34.99,
    condition: "new",
    stock: 234,
    rating: 4.5,
    reviews: 567,
    description: "Anodized aluminum tow hook. Multiple colors available. Lightweight and durable. Screws into factory tow point.",
    compatibility: ["Most vehicles with threaded tow point"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 25,
    name: "Wheel Spacers Set",
    category: "Wheels",
    brand: "Eibach",
    price: 129.99,
    condition: "new",
    stock: 67,
    rating: 4.7,
    reviews: 234,
    description: "20mm wheel spacers. Set of 4. Hubcentric design with extended wheel studs. Improves stance and handling.",
    compatibility: ["5x114.3 bolt pattern"],
    images: [
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 26,
    name: "Racing Harness (5-Point)",
    category: "Interior",
    brand: "Sparco",
    price: 199.99,
    condition: "new",
    stock: 29,
    rating: 4.9,
    reviews: 156,
    description: "FIA-approved 5-point racing harness. Cam-lock system. Black with red accents. Includes mounting hardware.",
    compatibility: ["Universal with proper mounting"],
    images: [
      "https://images.unsplash.com/photo-1609146528376-d7f88b4a0c83?w=800"
    ],
    featured: false,
    sellerId: 2
  },
  {
    id: 27,
    name: "Shift Knob (Weighted)",
    category: "Interior",
    brand: "Raceseng",
    price: 89.99,
    condition: "new",
    stock: 145,
    rating: 4.6,
    reviews: 289,
    description: "Weighted shift knob for smoother, faster shifts. CNC machined from solid aluminum. Multiple thread adapters included.",
    compatibility: ["Most manual transmissions"],
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 28,
    name: "Intercooler (Front Mount)",
    category: "Cooling",
    brand: "Mishimoto",
    price: 649.99,
    condition: "new",
    stock: 14,
    rating: 4.8,
    reviews: 167,
    description: "Bar-and-plate front mount intercooler. Increases cooling efficiency by 25%. Direct bolt-on application.",
    compatibility: ["Subaru WRX/STI 2015-2021"],
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    ],
    featured: true,
    sellerId: 2
  },
  {
    id: 29,
    name: "Lowering Springs",
    category: "Suspension",
    brand: "Eibach",
    price: 269.99,
    condition: "new",
    stock: 48,
    rating: 4.7,
    reviews: 312,
    description: "Pro-Kit lowering springs. Lowers vehicle 1.5 inches front and rear. Maintains OEM ride quality.",
    compatibility: ["Honda Civic 2016-2023", "Toyota Corolla 2014-2022"],
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800"
    ],
    featured: false,
    sellerId: 3
  },
  {
    id: 30,
    name: "Short Shifter Kit",
    category: "Transmission",
    brand: "Skunk2",
    price: 179.99,
    condition: "new",
    stock: 37,
    rating: 4.8,
    reviews: 234,
    description: "Reduces shift throw by 40%. CNC machined from billet steel. Improves shift feel and speed.",
    compatibility: ["Honda Civic Si 2006-2015"],
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
    ],
    featured: false,
    sellerId: 2
  }
];

// Mock user data
export const users = [
  {
    id: 1,
    email: "admin@partthieves.com",
    password: "admin123",
    name: "Admin User",
    role: "admin",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Admin"
  },
  {
    id: 2,
    email: "seller@partthieves.com",
    password: "seller123",
    name: "Pro Auto Parts",
    role: "seller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Seller",
    businessName: "Pro Auto Parts LLC",
    rating: 4.8,
    totalSales: 1247
  },
  {
    id: 3,
    email: "seller2@partthieves.com",
    password: "seller123",
    name: "Speed Shop",
    role: "seller",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Seller2",
    businessName: "Speed Shop Inc",
    rating: 4.6,
    totalSales: 892
  },
  {
    id: 4,
    email: "buyer@partthieves.com",
    password: "buyer123",
    name: "John Buyer",
    role: "buyer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Buyer"
  }
];

// Mock orders data
export const orders = [
  {
    id: "ORD-2024-001",
    userId: 4,
    items: [
      { productId: 1, quantity: 2, price: 89.99 },
      { productId: 2, quantity: 1, price: 129.99 }
    ],
    total: 309.97,
    status: "delivered",
    date: "2024-12-15",
    shippingAddress: "123 Main St, Cityville, ST 12345"
  },
  {
    id: "ORD-2024-002",
    userId: 4,
    items: [
      { productId: 4, quantity: 1, price: 179.99 }
    ],
    total: 179.99,
    status: "shipped",
    date: "2024-12-28",
    shippingAddress: "123 Main St, Cityville, ST 12345"
  },
  {
    id: "ORD-2024-003",
    userId: 4,
    items: [
      { productId: 9, quantity: 1, price: 799.99 }
    ],
    total: 799.99,
    status: "processing",
    date: "2025-01-02",
    shippingAddress: "123 Main St, Cityville, ST 12345"
  }
];

// Categories
export const categories = [
  { id: "brakes", name: "Brakes", icon: "disc", count: 156 },
  { id: "engine", name: "Engine", icon: "zap", count: 289 },
  { id: "suspension", name: "Suspension", icon: "move-vertical", count: 134 },
  { id: "exhaust", name: "Exhaust", icon: "wind", count: 98 },
  { id: "lighting", name: "Lighting", icon: "lightbulb", count: 223 },
  { id: "wheels", name: "Wheels & Tires", icon: "circle", count: 345 },
  { id: "interior", name: "Interior", icon: "layout-dashboard", count: 178 },
  { id: "exterior", name: "Exterior", icon: "box", count: 267 },
  { id: "electrical", name: "Electrical", icon: "plug", count: 189 },
  { id: "cooling", name: "Cooling", icon: "thermometer", count: 112 },
  { id: "fluids", name: "Fluids & Chemicals", icon: "droplet", count: 234 }
];
