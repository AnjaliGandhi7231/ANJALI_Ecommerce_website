const products = [
  // Laptops and Computers
  { name: "MacBook Pro", description: "Latest model with M2 chip, 16GB RAM, and 512GB SSD. Features a stunning Retina display and up to 20 hours of battery life", price: 1999.99, quantity: 10, imgUrl: "https://via.placeholder.com/150" },
  { name: "MacBook Air", description: "Thin and light laptop with M2 chip, 8GB RAM, and 256GB SSD. Perfect for everyday computing", price: 1299.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Laptop", description: "Powerful gaming machine with RTX 4070, Intel i9 processor, 32GB RAM, and 1TB SSD. Perfect for modern gaming", price: 2499.99, quantity: 8, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Laptop Pro", description: "Ultimate gaming laptop with RTX 4090, Intel i9-13900H, 64GB RAM, and 2TB SSD", price: 3499.99, quantity: 5, imgUrl: "https://via.placeholder.com/150" },
  { name: "Chromebook", description: "Lightweight laptop perfect for web browsing and basic tasks. 8GB RAM, 128GB storage, and 12-hour battery life", price: 299.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Chromebook Plus", description: "Premium Chromebook with 1080p display, 16GB RAM, and 256GB storage", price: 499.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Desktop PC", description: "Custom-built desktop with RTX 3060, AMD Ryzen 7, 16GB RAM, and 1TB SSD. Includes keyboard and mouse", price: 1299.99, quantity: 5, imgUrl: "https://via.placeholder.com/150" },
  { name: "Desktop PC Pro", description: "High-end workstation with RTX 4080, AMD Ryzen 9, 64GB RAM, and 4TB storage", price: 2999.99, quantity: 3, imgUrl: "https://via.placeholder.com/150" },
  { name: "Mini PC", description: "Compact desktop computer perfect for home office. Intel i5, 16GB RAM, 512GB SSD", price: 699.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "All-in-One PC", description: "27-inch 4K display with Intel i7, 32GB RAM, and 1TB SSD built-in", price: 1799.99, quantity: 7, imgUrl: "https://via.placeholder.com/150" },
 
  // Phones and Mobile
  { name: "iPhone 15", description: "Latest iPhone model with A16 chip, triple camera system, and 256GB storage. Available in multiple colors", price: 999.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "iPhone 15 Pro", description: "Pro model with A17 chip, titanium frame, and advanced camera system", price: 1199.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "iPhone 15 Pro Max", description: "Ultimate iPhone with 1TB storage, pro camera system, and 6.7-inch display", price: 1499.99, quantity: 10, imgUrl: "https://via.placeholder.com/150" },
  { name: "Samsung S24", description: "Latest Android flagship with AI features and advanced camera", price: 899.99, quantity: 18, imgUrl: "https://via.placeholder.com/150" },
  { name: "Samsung S24 Ultra", description: "Premium Android phone with S-Pen, 200MP camera, and 12GB RAM", price: 1299.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Google Pixel 8", description: "Pure Android experience with amazing AI camera features", price: 699.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "Google Pixel 8 Pro", description: "Advanced Pixel with telephoto lens and larger display", price: 999.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "OnePlus 12", description: "Flagship killer with fast charging and smooth performance", price: 799.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Budget Phone Plus", description: "Affordable 5G phone with great camera and battery life", price: 399.99, quantity: 30, imgUrl: "https://via.placeholder.com/150" },
  { name: "Budget Phone Lite", description: "Entry-level smartphone with solid performance", price: 199.99, quantity: 40, imgUrl: "https://via.placeholder.com/150" },
 
  // Audio Devices
  { name: "AirPods Pro", description: "Premium wireless earbuds with active noise cancellation and spatial audio", price: 249.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "AirPods Max", description: "Over-ear headphones with premium audio and active noise cancellation", price: 549.99, quantity: 10, imgUrl: "https://via.placeholder.com/150" },
  { name: "Sony WH-1000XM5", description: "Industry-leading noise cancelling headphones with premium sound", price: 399.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Sony WF-1000XM5", description: "Premium wireless earbuds with amazing sound quality", price: 299.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Bose QC Ultra", description: "Premium noise cancelling headphones with spatial audio", price: 429.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Headset", description: "Wireless gaming headset with 3D audio and noise-cancelling mic", price: 199.99, quantity: 30, imgUrl: "https://via.placeholder.com/150" },
  { name: "Party Speaker", description: "Powerful Bluetooth speaker with light show and karaoke function", price: 299.99, quantity: 8, imgUrl: "https://via.placeholder.com/150" },
  { name: "Portable Speaker", description: "Waterproof Bluetooth speaker with 24-hour battery life", price: 129.99, quantity: 35, imgUrl: "https://via.placeholder.com/150" },
  { name: "Home Theater System", description: "5.1 channel surround sound system with wireless subwoofer", price: 899.99, quantity: 6, imgUrl: "https://via.placeholder.com/150" },
  { name: "Soundbar Pro Max", description: "Premium soundbar with Dolby Atmos and wireless satellites", price: 999.99, quantity: 4, imgUrl: "https://via.placeholder.com/150" },
 
  // Gaming
  { name: "PS5 Digital", description: "Digital edition PlayStation 5 with DualSense controller", price: 399.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "PS5 Pro", description: "Enhanced PlayStation 5 with 8K support and improved performance", price: 599.99, quantity: 10, imgUrl: "https://via.placeholder.com/150" },
  { name: "Xbox Series S", description: "Digital-only Xbox with 1440p gaming and Quick Resume", price: 299.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Xbox Series X", description: "Full-featured Xbox with 4K gaming and Game Pass support", price: 499.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Nintendo Switch OLED", description: "Enhanced Switch with OLED display and improved audio", price: 349.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "Steam Deck", description: "Portable PC gaming device with custom AMD APU", price: 399.99, quantity: 8, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming PC Ultra", description: "Top-tier gaming PC with RTX 4090 and Intel i9-13900KS", price: 3999.99, quantity: 3, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Monitor 4K", description: "27-inch 4K gaming monitor with 144Hz and HDR", price: 699.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Chair", description: "Ergonomic gaming chair with lumbar support and recline", price: 299.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Gaming Bundle", description: "Gaming keyboard, mouse, and headset combo", price: 199.99, quantity: 30, imgUrl: "https://via.placeholder.com/150" },
 
  // Cameras
  { name: "DSLR Camera", description: "Professional DSLR with 45MP sensor and 4K video", price: 1999.99, quantity: 8, imgUrl: "https://via.placeholder.com/150" },
  { name: "Mirrorless Pro", description: "Full-frame mirrorless with 8K video capability", price: 2499.99, quantity: 6, imgUrl: "https://via.placeholder.com/150" },
  { name: "Mirrorless Lite", description: "Entry-level mirrorless with 4K video and flip screen", price: 899.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Vlog Camera", description: "Compact camera perfect for vlogging and content creation", price: 749.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Action Cam Pro", description: "Waterproof 5K action camera with stabilization", price: 399.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Action Cam Lite", description: "Entry-level 4K action camera with basic features", price: 199.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "Drone Camera", description: "4K drone with obstacle avoidance and 30min flight time", price: 799.99, quantity: 10, imgUrl: "https://via.placeholder.com/150" },
  { name: "Security Cam Pro", description: "4K security camera with night vision and AI detection", price: 199.99, quantity: 30, imgUrl: "https://via.placeholder.com/150" },
  { name: "Webcam 4K", description: "4K webcam with auto-focus and noise-cancelling mics", price: 199.99, quantity: 40, imgUrl: "https://via.placeholder.com/150" },
  { name: "Camera Lens", description: "Professional zoom lens for DSLR and mirrorless cameras", price: 999.99, quantity: 7, imgUrl: "https://via.placeholder.com/150" },
 
  // Smart Home
  { name: "Smart Hub", description: "Central smart home controller with voice assistant", price: 129.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Display 10", description: "10-inch smart display with video calling and recipes", price: 229.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Display 15", description: "15-inch wall-mountable smart display", price: 349.99, quantity: 15, imgUrl: "https://via.placeholder.com/150" },
  { name: "Video Doorbell Pro", description: "Smart doorbell with 2K HDR video and package detection", price: 249.99, quantity: 30, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Lock", description: "WiFi-enabled smart lock with fingerprint reader", price: 199.99, quantity: 20, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Thermostat Pro", description: "Learning thermostat with room sensors and energy reports", price: 279.99, quantity: 18, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Light Starter", description: "Starter kit with hub and 4 color bulbs", price: 199.99, quantity: 25, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Plug Pack", description: "4-pack of WiFi smart plugs with energy monitoring", price: 79.99, quantity: 40, imgUrl: "https://via.placeholder.com/150" },
  { name: "Robot Vacuum", description: "Smart vacuum with mapping and self-emptying base", price: 599.99, quantity: 12, imgUrl: "https://via.placeholder.com/150" },
  { name: "Smart Camera System", description: "4-camera security system with 24/7 recording", price: 399.99, quantity: 8, imgUrl: "https://via.placeholder.com/150" }
];
 
module.exports =products;
  
