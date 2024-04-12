# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    User.destroy_all
  
    require 'open-uri'

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password'
    )

    User.create!(
      email: 'riprocket@gmail.com',
      password: '123456'
    )

    User.create!(
      email: 'sova421@gmail.com',
      password: '123456'
    )

    User.create!(
      email: 'destroyer231@user.io',
      password: '123456'
    )

    p1 = Product.create!(
      name: 'Lenovo X1 Thinkpad', 
      price: '799.99', 
      description: 'Ultralight starting weight of just 1.12kg / 2.48lb')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/lenovo.jpg')
      p1.photo.attach(io: file, filename: 'lenovo.jpg')

    p2 = Product.create!(
      name: 'Nespresso Capsules VertuoLine, Medium and Dark Roast Coffee, Variety Pack, Stormio, Odacio, Melozio, 30 Count, Brews 7.77 Fl Oz (Pack of 3 )', 
      price: '37.50', 
      description: 'NESPRESSO VERTUOLINE VARIETY PACK ASSORTMENT: This Nespresso coffee assortment offers 30 Nespresso Pods in a variety of 3 best-selling coffee blends for the Nespresso VertuoLine System.10 Stormio, 10 Odacio, 10 Melozio
      ')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/nespresso.jpg')
      p2.photo.attach(io: file, filename: 'nespresso.jpg')
      
    p3 = Product.create!(
      name: 'Premier Protein Shake, Chocolate, 30g Protein 1g Sugar 24 Vitamins Minerals Nutrients to Support Immune Health, 11.50 fl oz (Pack of 12)', 
      price: '28.48', 
      description: 'Chocolately goodness: Smooth and creamy, rich chocolate flavored shake; Winner of American Masters of Taste Gold Medal for SUPERIOR TASTING ready-to-drink protein beverages.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/premier_protein.jpg')
      p3.photo.attach(io: file, filename: 'premier_protein.jpg')

    p4 = Product.create!(
      name: 'Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB', 
      price: '199.00', 
      description: 'Experience total immersion with 3D positional audio, hand tracking and easy-to-use controllers working together to make virtual worlds feel real.
      Explore an expanding universe of over 500 titles across gaming, fitness, social/multiplayer and entertainment, including exclusive releases and totally unique VR experiences.
      Enjoy fast, smooth gameplay and immersive graphics as high-speed action unfolds around you with a fast processor and immersive graphics.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/oculus.jpg')
      p4.photo.attach(io: file, filename: 'oculus.jpg')

    p5 = Product.create!(
      name: 'Dyson V11 Extra Cordless Vacuum Cleaner - Nickel/Red, Large', 
      price: '449.99', 
      description: 'Versatile, powerful and cordless for whole-home deep cleaning.
      60% more suction² and up to 60 minutes of run time.¹ Battery-saving trigger helps maximize energy-efficiency, only using power when you need it.
      LED screen displays remaining run time countdown to the second, 3 cleaning modes, and maintenance alerts for complete control of your clean.
      Engineered for homes with pets.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/dyson_vacuum.jpg')
      p5.photo.attach(io: file, filename: 'dyson_vacuum.jpg')
    
    p6 = Product.create!(
      name: 'DEWALT 20V Max Cordless Drill/Driver Kit, Compact, 1/2-Inch (DCD771C2), Yellow', 
      price: '99.00', 
      description: 'Dewalt drill has compact and lightweight design that fits into tight areas.NEW 18V XR Li-Ion compact drill driver featuring XR 1.3Ah Li-Ion battery technology, Clutch Positions : 16.
      High performance motor of the power drill delivers 300 unit watts out (UWO) of power ability completing a wide range of applications')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/dewalt_drill.jpg')
      p6.photo.attach(io: file, filename: 'dewalt_drill.jpg')

    p7 = Product.create!(
      name: 'HelloBaby Upgrade Monitor, 5''Sreen with 30-Hour Battery, Pan-Tilt-Zoom Video Baby Monitor with Camera and Audio, Night Vision, VOX, 2-Way Talk, 8 Lullabies and 1000ft Range No WiFi, Ideal Gifts', 
      price: '67.99', 
      description: '💖【REMOTE 355° PAN and TILT BABY MONITOR & 5" COLOR DISPLAY】: Enjoy a 5" Big Screen on this baby camera monitor. Remote control camera rotate 355° in horizontal and 120° vertical gives you a larger view of your baby\'s room. 2X zoom function ensures clear visuals. Noiseless camera rotation for a peaceful environment.')    
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/hello_baby_monitor.jpg')
      p7.photo.attach(io: file, filename: 'hello_baby_monitor.jpg')

    p8 = Product.create!(
      name: 'Amazon Basics 5-Shelf Adjustable, Heavy Duty Storage Shelving Unit (350 lbs loading capacity per shelf), Steel Organizer Wire Rack, Black, 36" L x 14" W x 72" H', 
      price: '66.65', 
      description: '5 shelf wire rack offers handy storage space and easy access to tools and supplies
      Durable steel construction with a Black finish; each shelf holds up to 350 pounds, evenly distributed; 1750 pound total weight capacity')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/amazon_shelf.jpg')
      p8.photo.attach(io: file, filename: 'amazon_shelf.jpg')

    p9 = Product.create!(
      name: 'MUDEELA Pots and Pans Organizer : Rack under Cabinet, 8-Tier Kitchen Cabinet Organizers and Storage, Light-Duty Adjustable Pot Racks, Pot Organizers inside Cabinet with 3 DIY Methods', 
      price: '21.99', 
      description: '【Maximize Space Efficiently】Be sure to measure the (width / height / depth) size of your cabinet before purchasing the MUDEELA pan rack to ensure that the size of our pot rack suits your cabinet. Minimum Cabinet Size Required: Width≥22'' ; Height≥16.96''. NOTICE: NOT for Heavy-duty cookware. MUDEELA compact pots and pans organizer frees up space without taking up additional. 8-tier ample space allows our pan organizer rack for cabinet to fit frying pans, baking pans, cutting boards, pot lids, etc. Suits kitchen, countertop, cabinet, and pantry.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/pot_organizer.jpg')
      p9.photo.attach(io: file, filename: 'pot_organizer.jpg')

    p10 = Product.create!(
      name: 'Amazon Essentials Men\'s Slim-Fit Vacation Shirt', 
      price: '20.90', 
      description: 'SLIM FIT: Slim fit through the shoulders, chest, and waist.
      STRETCH POPLIN: Lightweight yet durable washed poplin with 2% stretch for comfort and mobility.
      VACATION SHIRTING: This short sleeve poplin shirt is the warm weather solution. With a camp collar and shirttail hem, wear it untucked with shorts for laid-back comfort all vacation long.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/vacation_shirt.jpg')
      p10.photo.attach(io: file, filename: 'vacation_shirt.jpg')

    p11 = Product.create!(
      name: 'TERRO T300B Liquid Ant Killer, 12 Bait Stations', 
      price: '14.98', 
      description: 'Attracts & Kills – Kills common household ants including acrobat, crazy, ghost, little black, odorous house, pavement, and other sweet-eating ants
      Kills the Ants You See & the Ones You Don\'t – As worker ants discover the bait, they share it with the rest of the colony to eliminate them all')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/ant.jpg')
      p11.photo.attach(io: file, filename: 'ant.jpg')
      
    p12 = Product.create!(
      name: 'Succulent Plant Pots, Turtle Planter Flower Pots with Drainage Hole, Cute Planting Pots for Cactus, Succulent Planters for Indoor Plants Home Office Garden Flower Pot Gifts for Plants Lover', 
      price: '13.97', 
      description: 'Unique Plant Pot: Our succulent pots have a cute turtle shape with smiling faces and colourful plant decor that can relax you in your daily life, lift your spirits after a tiring day at work
      Drainage Design: Cute succulent planter made from resin, easy to maintain. Drainage hole of indoor pot prevents overwatering and maintains moisture balance for healthy plant roots')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/turtle.jpg')
      p12.photo.attach(io: file, filename: 'turtle.jpg')

    p13 = Product.create!(
      name: 'Stanley Quencher H2.0 FlowState Stainless Steel Vacuum Insulated Tumbler with Lid and Straw for Water, Iced Tea or Coffee', 
      price: '35.00', 
      description: 'YOUR DREAM TUMBLER: Whichever way your day flows, the H2.0 FlowState tumbler keeps you refreshed with fewer refills. Double wall vacuum insulation means drinks stay cold, iced or hot for hours. Choose between our 14oz, 20oz, 30oz,40oz and 64oz options depending on your hydration needs. The narrow base on all sizes (except 64oz) fits just about any car cup holder, keeping it right by your side.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/stanley.jpg')
      p13.photo.attach(io: file, filename: 'stanley.jpg')

    p14 = Product.create!(
      name: 'HP DeskJet 2755e Wireless Color inkjet-printer, Print, scan, copy, Easy setup, Mobile printing, Best-for home, Instant Ink with HP+,white', 
      price: '84.89', 
      description: '1. FROM AMERICA\'S MOST TRUSTED PRINTER BRAND – Best for home printing, including basic color documents like recipes, forms and travel documents. Print speeds up to 7.5 pages per minute in black or 5.5 pages per minute in color
      2. KEY FEATURES – Print, copy and scan in color, plus mobile and wireless printing')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/tablet.jpg')
      p14.photo.attach(io: file, filename: 'tablet.jpg')

    p15 = Product.create!(
      name: 'SAMSUNG Galaxy Tab A9+ Tablet 11” 64GB Android Tablet, Big Screen, Quad Speakers, Upgraded Chipset, Multi Window Display, Slim, Light, Durable Design, US Version, 2024, Graphite', 
      price: '169.99', 
      description: 'BIG SCREEN. FAMILY-SIZED FUN: Bring fun home to everyone with a bright, engaging 11" screen¹ ; A refresh rate of up to 90Hz makes every experience feel smooth — great for videos, games or fun time for the kids
      RICH SOUND ALL AROUND: Your music; Your shows; Your games; Hear them all loud and clear, thanks to quad speakers powered by Dolby Atmos; Galaxy Tab A9+ delivers a cinema-like audio experience your ears will love')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/printer.jpg')
      p15.photo.attach(io: file, filename: 'printer.jpg')

    p16 = Product.create!(
      name: 'Pickleball Paddles, USAPA Approved Fiberglass Surface Pickleball Set with 2 Pickleball Rackets,4 Pickleball Balls,1 Portable Carry Bag,Pickle Ball Paddle Set ​for Men Women', 
      price: '35.99', 
      description: '【USAPA approve pickleball paddle】The paddles are USA pickleball approved & with USAPA approval lable ith high safety and professionalism, and can be used in tournaments.
      【Premium quality pickleball paddles】The pickleball paddles set is designed with unique fiberglass and polypropylene honeycomb core technology. Provides exceptional power and control. Polypropylene honeycomb technology reduces vibration and achieves stable speed, resulting in optimal ball strike feel. The fiberglass surface provides excellent rotational performance.The pickleball racket lightweight,strong and durable.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/pickleball.jpg')
      p16.photo.attach(io: file, filename: 'pickleball.jpg')

    p17 = Product.create!(
      name: '3-Pack [3.3FT+6.6FT+10FT] 60W USB C to USB C Cable, Type C to Type C Cable,Fast Charging Cable Compatible with iPhone 15/Plus/15 Pro/Pro Max，Samsung Galaxy S23 S22, iPad Pro, MacBook Air and More', 
      price: '9.83', 
      description: 'Universal Compatibility】This c to c type fast charging cable Compatible with 65W/61W/45W/35W/30W/25W/22.5W/20W/18W/15W/12W/5W All USB C charger. iPhone 15/iPhone15 Plus/iPhone15 Pro/iPhone15 Pro Max，MacBook Pro 13 inch, Macbook Air 13 /m1 Inch, MacBook 12 inch, iPad Pro 12.9/11 inch, iPad Air 4/5, iPad Mini 6, Google Pixel 6/6 Pro/5/5a, Samsung Galaxy S23/S22/S22/ S21/S21+/S21 Ultra/ S20/S20+/S20 Ultra, Galaxy A53/A73/A71,Galaxy Note 10/10+/20 Ultra, Switch, PS5 and other USB-C port devices.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/cords.jpg')
      p17.photo.attach(io: file, filename: 'cords.jpg')

    p18 = Product.create!(
      name: 'Magnetic Tiles Kids Toys STEM Magnet Toys for Toddler Magnetic Blocks Building Toys Preschool Learning Sensory Montessori Toys for 3+ Year Old Boys and Girls, Safe Creativity Toddler Kids Toys', 
      price: '19.99', 
      description: '【GREAT STARTER SETS OF MAGNETIC TILES】Encourage STEM learning and creativity with Coodoo Magnetic Tiles Starter Pack! This pack features 40 magnetic tiles in a variety of shapes and rainbow colors. It is the perfect option to start your Magnetic Tiles collection, build big and gain confidence in magnetic tile play. A carrying bag is included for easy, stress-free storage. It also allows kids to take the learning tiles with them easily from room to room.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/toy.jpg')
      p18.photo.attach(io: file, filename: 'toy.jpg')

    p19 = Product.create!(
      name: 'NYX PROFESSIONAL MAKEUP Butter Gloss, Non-Sticky Lip Gloss - Sugar Glass (Clear)', 
      price: '5.97', 
      description: 'Butter Gloss: Buttery soft and silky smooth, our decadent Butter Gloss is available in a wide variety of sumptuous shades; Each glossy color delivers sheer to medium coverage that melts onto your lips
      Cruelty Free Cosmetics: We believe animals belong in our arms, not in a lab; All of our makeup is certified and acknowledged by PETA as a cruelty free brand; We don\'t test any of our products on animals')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/makeup.jpg')
      p19.photo.attach(io: file, filename: 'makeup.jpg')

    p20 = Product.create!(
      name: 'Hasbro Gaming Connect 4 Classic Grid,4 in a Row Game,Strategy Board Games for Kids,2 Player .for Family and Kids,Ages 6 and Up', 
      price: '9.99', 
      description: 'Choose yellow or red discs. For 2 players
      Classic Connect 4 game is disc dropping fun
      Includes grid, 2 legs, slider bar, 21 red discs, 21 yellow discs and instructions
      When you get 4 discs in a row you win')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/connectfour.jpg')
      p20.photo.attach(io: file, filename: 'connectfour.jpg')
    










    p21 = Product.create!(
      name: 'Label Maker Machine with Tape, P21 Bluetooth Label Printer, Wireless Mini Label Makers with Multiple Templates for Organizing Office Home, White',
      price: '19.98',
      description: '✅【2024 New Version】Compared with the traditional label makers, half weight and size of the traditional label maker, smaller, smarter and convenient for users to carry. Wireless bluetooth label maker can slip into your pocket, allow printing anytime, anywhere. We recommend using our NELKO thermal label paper for good printing quality.')
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p21.jpg')
      p21.photo.attach(io: file, filename: 'p21.jpg')
    

      p22 = Product.create!(
        name: 'Apple AirPods (2nd Generation) Wireless Ear Buds, Bluetooth Headphones with Lightning Charging Case Included, Over 24 Hours of Battery Life, Effortless Setup for iPhone',
        price: '89.00',
        description: 'HIGH-QUALITY SOUND — Powered by the Apple H1 headphone chip, AirPods (2nd generation) deliver rich, vivid sound.
        EFFORTLESS SETUP — After a simple one-tap setup, AirPods are automatically on and always connected. They sense when they’re in your ears and pause when you take them out. And sound seamlessly switches between your iPhone, Apple Watch, Mac, iPad, and Apple TV.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p22.jpg')
      p22.photo.attach(io: file, filename: 'p22.jpg')

      
      p23 = Product.create!(
        name: 'Bluetooth Speaker, Cool Portable Wireless Speaker, Stereo Sound with Multi Dazzling LED Light Modes, IPX4 Waterproof, BT5.3, TWS Surround Pairing, Electronics Gadgets for Party Camping Birthday Gifts',
        price: '21.99',
        description: 'Immersive Clear Sound & Dual Playing : Crafted for distortion-free sound, this wireless Bluetooth speaker uses unparalleled 15W HiFi sound quality and advanced technology to deliver powerful, balanced sound with minimal distortion. You can connect two speakers together to create an immersive, high-fidelity stereo experience, filling any room with up to 30W(15W*2) of powerful sound. Perfect for gaming, music and movie playback.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p23.jpg')
      p23.photo.attach(io: file, filename: 'p23.jpg')
      
      p24 = Product.create!(
        name: 'Solar Charger Power Bank, 38800mAh Portable Charger Fast Charger Dual USB Port Built-in Led Flashlight and Compass for All Cell Phone and Electronic Devices',
        price: '22.99',
        description: '【38800mAh Huge Capacity】Solar Charger is equipped with a solar charging panel and 5V/2.1A dual USB output. You can charge your mobile phone when and where, it is convenient and easy to carry, and you don’t have to worry about running out of power on your mobile phone.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p24.jpg')
      p24.photo.attach(io: file, filename: 'p24.jpg')
      
      p25 = Product.create!(
        name: 'Beats Solo3 Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Silver',
        price: '199.95',
        description: 'High-performance wireless Bluetooth headphones
        Features the Apple W1 chip and Class 1 wireless Bluetooth connectivity
        With up to 40 hours of battery life, Beats Solo3 wireless is your perfect everyday headphone
        Compatible with iOS and Android devices
        With Fast Fuel, 5 minutes of charging gives you 3 hours of playback when battery is low
        Adjustable fit with comfort-cushioned ear cups made for everyday use'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p25.jpg')
      p25.photo.attach(io: file, filename: 'p25.jpg')
      
      p26 = Product.create!(
        name: 'Duracell Coppertop AA Batteries 28 Count Pack Double A Battery with Power Boost Ingredients, Long-lasting Power Alkaline AA Battery for Household Devices',
        price: '24.24',
        description: ''
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p26.jpg')
      p26.photo.attach(io: file, filename: 'p26.jpg')
      
      p27 = Product.create!(
        name: 'Uhale 10.1 inch Digital Picture Frame with 32GB Storage Support SD card, Electronic Photo Frames with 1280*800 HD IPS Touch Screen',
        price: '49.97',
        description: '【Instant and Private Photo-sharing】Download the free Uhale APP for Android or iOS mobile phones. After connecting the digital photo frame to wifi and pairing it with your mobile phone,you can use your mobile phone or computer to transfer photos and videos to the digital photo frame no matter where you are in the world.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p27.jpg')
      p27.photo.attach(io: file, filename: 'p27.jpg')
      
      p28 = Product.create!(
        name: 'Sceptre New 27-inch Gaming Monitor 100Hz 1ms DisplayPort HDMI x2 100% sRGB AMD FreeSync Build-in Speakers, Eye Care Frameless Machine Black 2024 (E275W-FW100T)',
        price: '109.97',
        description: ''
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p28.jpg')
      p28.photo.attach(io: file, filename: 'p28.jpg')
      
      p29 = Product.create!(
        name: 'Drone with Camera for Adults, 1080P FPV Drones for kids Beginners with Upgrade Altitude Hold, Voice Control, Gestures Selfie, 90° Adjustable Lens, 3D Flips, 2 Batteries',
        price: '59.99',
        description: '【User-friendly and Versatile】Loiley drones are perfect for beginners and children, offering features like one-key takeoff/landing, altitude hold, emergency stop, and headless mode. It also provides smart app control (APP name: Loiley Fly), allowing users to define flight routes, use voice control and gesture selfies, and enjoy various functions like 360° flips, gravity sensing, and adding music and filters.
        '
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p29.jpg')
      p29.photo.attach(io: file, filename: 'p29.jpg')
      
      p30 = Product.create!(
        name: 'Etekcity Smart Scale for Body Weight, Digital Bathroom Weighing Machine Fat Percentage BMI Muscle, Accurate Composition Analyzer People, Bluetooth Electronic Measurement Tool, 400lb',
        price: '24.99',
        description: '𝙁𝙞𝙧𝙨𝙩-𝙍𝙖𝙩𝙚 𝙌𝙪𝙖𝙡𝙞𝙩𝙮: Don\'t settle for less. As the selling brand of body weight scales in the US, Etekcity is known for innovative and high-performing products. (Source: Stackline/Retail Intelligence, U.S. Amazon Data Market Share, February 2019-2021)'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p30.jpg')
      p30.photo.attach(io: file, filename: 'p30.jpg')







      
      p31 = Product.create!(
        name: 'WLIVE Dresser for Bedroom with 5 Drawers, Wide Chest of Drawers, Fabric Dresser',
        price: '52.99',
        description: 'MULTIFUNCTION DRESSER: Match perfectly with other WLIVE storage towers; This chest of drawers is great for bedroom, closet, living room, hallway, dorm and office.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p31.jpg')
      p31.photo.attach(io: file, filename: 'p31.jpg')
      
      p32 = Product.create!(
        name: 'VTRIN Narrow Shoe Rack with Covers 10 Tiers Tall Shoe Rack for Closet Entryway Sturdy Shoe Rack Organizer',
        price: '29.99',
        description: 'Large Capacity yet Space Saving -- This 10 tier narrow shoe rack is ideal for small space. Its dimensions are of 17.7"L x 11.8"W x 68.9"H yet it’s able to hold up to 20-22 pairs of shoes, making it a great tall shoe rack for closet, cabinet, wardrobe, entryway and bedroom. It can also be a great closet storage organizer for your books and other stuff.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p32.jpg')
      p32.photo.attach(io: file, filename: 'p32.jpg')
      
      p33 = Product.create!(
        name: 'Patio Furniture Set Cover Waterproof, Heavy Duty 600D Funiture Covers for Outdoor Sectional Sofa Set Wicker Rattan Table Chair Rectangular 108" L × 82" W × 28" H',
        price: '26.97',
        description: '【Size】108" L × 82" W × 28" H. The universal design fits up to outdoor sectional furniture sets, rectangular table and chair sets. The patio furniture cover is large enough that can hold 6-8 chairs, 1-2 rectangular tables, or 6-8 double couches. Please measure the furniture size before purchasing.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p33.jpg')
      p33.photo.attach(io: file, filename: 'p33.jpg')
      
      p34 = Product.create!(
        name: '3 Pack Bathroom Small Trash Can with Lid,10L / 2.6 Gallon Slim Garbage Bin Wastebasket with Pop-Up Lid',
        price: '24.99',
        description: 'MAXIMIZE YOUR SPACE- AIDMTONG our ultra-slim and narrow 3-pack bathroom trash can is designed to fit into tight spaces, such as small kitchens, bedrooms, and bathrooms. Measuring 9.4*6.3*11.6 inches, our small garbage can is the perfect size for tight spaces.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p34.jpg')
      p34.photo.attach(io: file, filename: 'p34.jpg')
      
      p35 = Product.create!(
        name: 'Bathroom Furniture Sets, Shelves Over Toilet Bathroom Decor Farmhouse Decorations Aesthetic Décor',
        price: '39.82',
        description: '✅ PATENT DESIGN: Create a farmhouse oasis in your bathroom with decor sets! Includes 2 floating shelves, 1 basket, and 1 decorative sign
        ✅ DURABLE MATERIAL: Medium Density Fiberboard, outlasts wood in damp bathroom environments
        ✅ AMPLE DEPTH: 6.7"D x 15.7"W x 1.5"H. 6.7" depth suitable for toiletries, basket or bath towels. 15.7" width metal basket can hold 4 toilet paper rolls'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p35.jpg')
      p35.photo.attach(io: file, filename: 'p35.jpg')
      
      p36 = Product.create!(
        name: 'Furniture Dolly,Furniture Movers with 5 Wheels,Carbon Steel Panel Heavy Duty Dolly,Furniture Lifter with 5 360° Rotatable Rubber Universal Wheels',
        price: '49.99',
        description: '[SURPRISE GIFT PACKAGE]:Upgraded large panel furniture dolly set, including four 6.5 x 6.5 in moving dolly,1 x pry bar,4 x heightening spacers,4 x flannel non-slip mats,2 x rubber anti-slip mats,1 x pair of safety gloves,1 drawstring storage bag.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p36.jpg')
      p36.photo.attach(io: file, filename: 'p36.jpg')
      
      p37 = Product.create!(
        name: 'VASAGLE End Table with Charging Station, Set of 2, Small Side Tables for Living Room, Bedroom, Nightstand with Outlets and USB Ports',
        price: '49.99',
        description: '[Side Tables with Charging Stations] Low battery? Charge your devices with these small tables featuring two AC outlets, two USB ports, and a 6.5 ft cord each. Also, the proper distances between outlets ensure you can use all of them at the same time'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p37.jpg')
      p37.photo.attach(io: file, filename: 'p37.jpg')
      
      p38 = Product.create!(
        name: 'HONBAY Reversible Sectional Sofa L-Shape Sofa Convertible Couch 4-Seater Sofas Sectional for Apartment Dark Grey',
        price: '399.99',
        description: 'Comfortable Sofa Couch: The cushions you sit on are nice and firm; You\'ll never have to worry about sinking in; The more you sit in it the better
        Fashionable Appearance: HONBAY 4-seat sectional couch sofa with nail-head trim and storage bag'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p38.jpg')
      p38.photo.attach(io: file, filename: 'p38.jpg')
      
      p39 = Product.create!(
        name: 'JUMMICO Recliner Chair Adjustable Home Theater Single Fabric Recliner Sofa Furniture with Thick Seat Cushion and Backrest Modern Living Room Recliners (Aurora Grey)',
        price: '109.99',
        description: 'Material: The Recliner covered by high quality breathable fabric with thick padding provide better comfort, High quality and high breathability for better enjoyment of your favorite TV show or break.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p39.jpg')
      p39.photo.attach(io: file, filename: 'p39.jpg')
      
      p40 = Product.create!(
        name: 'Lilola Home Lexi Synthetic Leather Modern Reversible Sleeper Sectional Sofa with Storage Chaise',
        price: '417.34',
        description: 'Enhanced Comfort of Synthetic Leather- Experience the luxurious feel of synthetic leather, providing unparalleled comfort for your relaxation and leisure.; Assembly Required Yes; Product Dimensions 83.50" L x 53.00" W x 34.00" H; Brand Lilola Home; Pull out sleeper area 71.50" W x 41.00" D; Product Weight (Lb) 192.00'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p40.jpg')
      p40.photo.attach(io: file, filename: 'p40.jpg')





      p41 = Product.create!(
        name: 'Mattel Games Toss Across Kids Outdoor Game, Bean Bag Toss for Camping and Family Night, Get Three-in-a-Row for 2-4 Players',
        price: '21.97',
        description: 'We took classic Tic Tac Toe and added some action!​
        ​Place the Toss Across unit on a floor, turn all targets blank side up, grab your three bean bags, and get ready to toss! ​
        ​Players try to get the rotating triangles to flip to show either X or O. Three in a row wins!'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p41.jpg')
      p41.photo.attach(io: file, filename: 'p41.jpg')

      
      p42 = Product.create!(
        name: 'Hasbro Gaming Bop It! Extreme Electronic Game for 1 or More Players',
        price: '27.99',
        description: 'RAPID-FIRE GAMEPLAY: It\'s the ultimate action-reaction challenge . The Bop It . Extreme electronic game features 4 different modes of play: Solo, Pass It, Party, and One-on-One Challenges
        2-PLAYER GAME: The Bop It . Extreme game lets players experience a 2-player rapid-fire gaming experience as 2 opponents hold the unit and go head-to-head at the same time'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p42.jpg')
      p42.photo.attach(io: file, filename: 'p42.jpg')

      
    
      p43 = Product.create!(
        name: 'LCD Writing Tablet for Kids, Colorful Toddlers Toys Drawing Board, Educational Kid Toys, Doodle Pad Dinosaur Toys for 2 3 4 5 6 7 8 Year Old Boys Girls Birthday Party, 8.5inch',
        price: '9.99',
        description: 'Multi-functional Kids Toys: The LCD Writing Tablet is an educational learning toy for kids. It exercises your child\'s writing and drawing skills, inspire kids\' creativity, develop concentration, imagination, patience. In addition, babies use tablet to doodle, drawing, spelling, math, notes, writing, playing games, vibrant colors and free creative ways can stimulate interest in art, It can let your kids freely release their natural instincts provides endless entertainment for little artists.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p43.jpg')
      p43.photo.attach(io: file, filename: 'p43.jpg')

      
      p44 = Product.create!(
        name: 'Basketball Shooting Game,Desktop Arcade Basketball Game,Tabletop Desk Game Set for Kids Adults',
        price: '9.99',
        description: 'Super Value Pack:You will receive a basketball shooting game set,including 2 basketball boards,2 basketball hoops,3 fences,24 mini basketballs and 1 sticker.After assembly,it measures about 8.1×8.9×11 in/21×23×28 cm,which can easily fit in most desks.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p44.jpg')
      p44.photo.attach(io: file, filename: 'p44.jpg')

      
      p45 = Product.create!(
        name: 'Laradola Dinosaur Toys for 3 4 5 6 7 8 Year Old Boys, Kids Take Apart STEM Construction Building Kids Toys with Electric Drill, Party Christmas Birthday Gifts Boys Girls',
        price: '20.59',
        description: '✅【2024 Newest Take Apart Dinosaur Toys】Our building toys include 3 kinds of dinosaur: blue Tyrannosaurus Rex, green Triceratops, brown Velociraptor. Kids can open this dinosaur Kit box and start playing immediately. The multi-color design helps attract children\'s attention to creative assembly and promotes children\'s teamwork.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p45.jpg')
      p45.photo.attach(io: file, filename: 'p45.jpg')

      
      p46 = Product.create!(
        name: 'Digital Shooting Toy for Kids, Fun Shooting Games, 5 Target Electronic Scoring Auto Reset',
        price: '34.99',
        description: 'Electronic shooting game: After all 5 shooting targets are hit, they will automatically bounce back to their original position within 3 seconds. The hit target will be displayed on the digital screen at one point, with flashing lights and encouraging message sounds. Designed for children ages 4-12. 6 tracks can move targets left and right and can be disassembled and assembled at will. Toy gun adds a lot of fun to children\'s games.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/pp46.jpg')
      p46.photo.attach(io: file, filename: 'pp46.jpg')

      
      p47 = Product.create!(
        name: 'LEGO Creator 3 in 1 Exotic Parrot Building Toy Set, Transforms to 3 Different Animal Figures - from Colorful Parrot, to Swimming Fish, to Cute Frog, Creative Toys for Kids Ages 7 and Up, 31136',
        price: '15.99',
        description: 'This LEGO Creator 3 in 1 animal toy set features 3 animals for kids 7+ years old: a parrot toy perched on a branch, a playful frog and a toy fish
        The toy parrot is richly colored and comes with jointed parts that allow it to rotate its body on the branch and move its wings and tail'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p47.jpg')
      p47.photo.attach(io: file, filename: 'p47.jpg')

      
      p48 = Product.create!(
        name: 'EGO Super Mario Piranha Plant, Build and Display Super Mario Brothers Collectible for Adults and Teens',
        price: '58.88',
        description: 'Buildable display model of a Super Mario Piranha Plant (71426) – Celebrate Mario Day with a building adventure as you capture the finer details of an iconic character from the Super Mario universe in LEGO style
        Create iconic poses – Pose the head, mouth, stalk and leaves of the Super Mario Piranha Plant figure'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p48.jpg')
      p48.photo.attach(io: file, filename: 'p48.jpg')

      
      p49 = Product.create!(
        name: 'Upgraded Flying Orb Ball Toy, Hand Controlled Boomerang Hover Ball, Cosmic Globe Flying Spinner with Endless Tricks',
        price: '28.80',
        description: '【Design Concept of The Flying Orb Ball】Spherical appearance, powerful engine, function based on aviation flight principle, which can realize a variety of flight modes. This girl toys not only brings fun to play but also helps to improve children\'s hands-on ability, operating skills, intelligence, and creativity.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p49.jpg')
      p49.photo.attach(io: file, filename: 'p49.jpg')

      
      p50 = Product.create!(
        name: 'Pbooo Dancing Cactus Mimicking Toy,Talking Repeat Singing Sunny Cactus Toy',
        price: '18.99',
        description: '[Update Adjustable Volume] The dancing cactus adds a volume adjustment function for different scenes. The volume can be adjusted when your child needs loud music for dancing and when your child needs to sleep at a low volume. You can easily adjust the volume, just press and hold the music button. You just hold it down for a few seconds. You can easily adjust the volume by just holding down the music button.'
      )
      file = URI.open('https://amazon-clone-aa-seeds.s3.us-west-1.amazonaws.com/p50.jpg')
      p50.photo.attach(io: file, filename: 'p50.jpg')







      # p51 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p51.photo.attach(io: file, filename: '')
      
      # p52 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p52.photo.attach(io: file, filename: '')
      
      # p53 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p53.photo.attach(io: file, filename: '')
      
      # p54 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p54.photo.attach(io: file, filename: '')
      
      # p55 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p55.photo.attach(io: file, filename: '')
      
      # p56 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p56.photo.attach(io: file, filename: '')
      
      # p57 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p57.photo.attach(io: file, filename: '')
      
      # p58 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p58.photo.attach(io: file, filename: '')
      
      # p59 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p59.photo.attach(io: file, filename: '')
      
      # p60 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p60.photo.attach(io: file, filename: '')
      
      # p61 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p61.photo.attach(io: file, filename: '')
      
      # p62 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p62.photo.attach(io: file, filename: '')
      
      # p63 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p63.photo.attach(io: file, filename: '')
      
      # p64 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p64.photo.attach(io: file, filename: '')
      
      # p65 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p65.photo.attach(io: file, filename: '')
      
      # p66 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p66.photo.attach(io: file, filename: '')
      
      # p67 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p67.photo.attach(io: file, filename: '')
      
      # p68 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p68.photo.attach(io: file, filename: '')
      
      # p69 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p69.photo.attach(io: file, filename: '')
      
      # p70 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p70.photo.attach(io: file, filename: '')
      
      # p71 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p71.photo.attach(io: file, filename: '')
      
      # p72 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p72.photo.attach(io: file, filename: '')
      
      # p73 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p73.photo.attach(io: file, filename: '')
      
      # p74 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p74.photo.attach(io: file, filename: '')
      
      # p75 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p75.photo.attach(io: file, filename: '')
      
      # p76 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p76.photo.attach(io: file, filename: '')
      
      # p77 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p77.photo.attach(io: file, filename: '')
      
      # p78 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p78.photo.attach(io: file, filename: '')
      
      # p79 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p79.photo.attach(io: file, filename: '')
      
      # p80 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p80.photo.attach(io: file, filename: '')
      
      # p81 = Product.create!(
      #   name: '',
      #   price: '',
      #   description: ''
      # )
      # file = URI.open('')
      # p81.photo.attach(io: file, filename: '')




      Review.create!(
  owner: 'John', 
  rating: 5, 
  body: 'This Lenovo X1 Thinkpad is a powerhouse in a compact package! It\'s incredibly lightweight yet delivers exceptional performance. Couldn\'t be happier with my purchase.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 1
)

Review.create!(
  owner: 'Emily', 
  rating: 4, 
  body: 'I never knew coffee could taste this good until I tried Nespresso Capsules VertuoLine! The variety pack offers a great selection, and each cup is rich and flavorful.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 2
)

Review.create!(
  owner: 'Michael', 
  rating: 5, 
  body: 'Premier Protein Shake is my go-to after workouts. The chocolate flavor is delicious, and the protein content is just what I need to refuel.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 3
)

Review.create!(
  owner: 'Sarah', 
  rating: 5, 
  body: 'Quest 2 is a game-changer! The VR experience is mind-blowing, and the headset is comfortable to wear for extended gaming sessions. Highly recommend it to any gamer.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 4
)

Review.create!(
  owner: 'Mark', 
  rating: 5, 
  body: 'The Dyson V11 vacuum is worth every penny! It\'s powerful, versatile, and makes cleaning a breeze. Plus, the battery life is impressive.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 5
)

Review.create!(
  owner: 'Jessica', 
  rating: 5, 
  body: 'DEWALT never disappoints, and this cordless drill is no exception. It\'s sturdy, reliable, and perfect for all my DIY projects around the house.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 6
)

Review.create!(
  owner: 'Alex', 
  rating: 5, 
  body: 'HelloBaby Upgrade Monitor is a lifesaver for new parents! The picture quality is excellent, and the battery life lasts through the night. Peace of mind guaranteed.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 7
)

Review.create!(
  owner: 'Michelle', 
  rating: 5, 
  body: 'Amazon Basics 5-Shelf Adjustable rack is perfect for organizing my garage. It\'s sturdy, easy to assemble, and holds a ton of stuff. Great value for the price!', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 8
)

Review.create!(
  owner: 'Kevin', 
  rating: 5, 
  body: 'MUDEELA Pots and Pans Organizer is a game-changer for my kitchen! It maximizes space and keeps everything neatly organized. Wish I\'d bought it sooner.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 9
)

Review.create!(
  owner: 'Rachel', 
  rating: 5, 
  body: 'Amazon Essentials Men\'s Slim-Fit Vacation Shirt is my new favorite summer shirt! It\'s comfortable, stylish, and perfect for beach vacations. Will definitely buy more colors.', 
  username: 'demo@user.io', 
  user_id: 1, 
  product_id: 10
)


Review.create!(
  owner: "David", 
  rating: 2, 
  body: "Ants everywhere! Tried the TERRO T300B Liquid Ant Killer, but it didn't work. Waste of money.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 11
)

Review.create!(
  owner: "Sophia", 
  rating: 4, 
  body: "These succulent pots are adorable! They add a fun touch to my desk, and the drainage hole is convenient.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 12
)

Review.create!(
  owner: "Daniel", 
  rating: 2, 
  body: "The Stanley Quencher tumbler is overpriced for what it offers. Not impressed with its insulation.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 13
)

Review.create!(
  owner: "Jennifer", 
  rating: 1, 
  body: "The HP DeskJet printer is a headache to set up and prints slowly. Disappointed with the quality.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 14
)

Review.create!(
  owner: "Brian", 
  rating: 3, 
  body: "SAMSUNG Galaxy Tab A9+ is sluggish and freezes often. Not worth the money.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 15
)

Review.create!(
  owner: "Jessica", 
  rating: 2, 
  body: "These pickleball paddles feel flimsy and cheap. Not suitable for serious players.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 16
)

Review.create!(
  owner: "Andrew", 
  rating: 2, 
  body: "The USB C to USB C cables stopped working after a week. Poor quality.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 17
)

Review.create!(
  owner: "Rachel", 
  rating: 1, 
  body: "The magnetic tiles are flimsy and don't stick together well. Not worth the money.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 18
)

Review.create!(
  owner: "Michael", 
  rating: 4, 
  body: "NYX Butter Gloss is too sticky and doesn't last long. Disappointed with the quality.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 19
)

Review.create!(
  owner: "Emily", 
  rating: 2, 
  body: "Connect 4 game is boring and outdated. Not fun for kids or adults.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 20
)




# Review for p21
Review.create!(
  owner: "Sophia", 
  rating: 3, 
  body: "I was excited to try out this label maker, but I found it a bit tricky to set up initially. Once I got the hang of it, though, it worked well for basic labeling needs.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 21
)

# Review for p22
Review.create!(
  owner: "Michael", 
  rating: 4, 
  body: "These AirPods are fantastic! The sound quality is amazing, and they're so easy to set up with my iPhone. My only complaint is that they're a bit pricey.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 22
)

# Review for p23
Review.create!(
  owner: "Emma", 
  rating: 2, 
  body: "I was disappointed with this Bluetooth speaker. The sound quality was not as good as I expected, and the LED lights were more distracting than enjoyable.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 23
)

# Review for p24
Review.create!(
  owner: "Alex", 
  rating: 5, 
  body: "This solar charger is a lifesaver! I take it with me on all my outdoor adventures, and it never lets me down. The built-in flashlight is a handy bonus too.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 24
)

# Review for p25
Review.create!(
  owner: "Olivia", 
  rating: 3, 
  body: "These headphones are stylish and comfortable to wear, but I found the sound quality to be lacking. They're decent for everyday use, but not great for audiophiles.", 
  username: "riprocket@gmail.com", 
  user_id: 1, 
  product_id: 25
)

# Review for p26
Review.create!(
  owner: "Daniel", 
  rating: 2, 
  body: "These batteries didn't last as long as I expected. I had to replace them much sooner than other brands I've used in the past.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 26
)

# Review for p27
Review.create!(
  owner: "Sophie", 
  rating: 4, 
  body: "I love this digital picture frame! It's so easy to transfer photos to it from my phone, and the touch screen interface is intuitive to use.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 27
)

# Review for p28
Review.create!(
  owner: "Ethan", 
  rating: 3, 
  body: "This gaming monitor has a beautiful display, but the speakers are not very good. I had to use external speakers to get decent sound quality.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 28
)

# Review for p29
Review.create!(
  owner: "Ava", 
  rating: 5, 
  body: "This drone exceeded my expectations! It's easy to fly, and the camera quality is impressive. Plus, the extra battery means I can fly for longer.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 29
)

# Review for p30
Review.create!(
  owner: "destroyer231@user.io", 
  rating: 4, 
  body: "I've been using this smart scale for a few weeks now, and it's been a great tool for tracking my fitness goals. The app is easy to use, and the measurements seem accurate.", 
  username: "will_fitness", 
  user_id: 4, 
  product_id: 30
)



# Review for p31
Review.create!(
  owner: "Sophia", 
  rating: 4, 
  body: "This dresser is a great addition to my bedroom! It was easy to assemble, and the fabric drawers are surprisingly sturdy. It's perfect for keeping my clothes organized.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 31
)

# Review for p32
Review.create!(
  owner: "Michael", 
  rating: 2, 
  body: "I had high hopes for this shoe rack, but it turned out to be quite flimsy. The covers don't stay in place very well, and it's not as stable as I would like.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 32
)

# Review for p33
Review.create!(
  owner: "Emma", 
  rating: 5, 
  body: "This furniture cover is a lifesaver! It fits my outdoor sectional sofa perfectly and keeps it protected from the elements. The quality is excellent for the price.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 33
)

# Review for p34
Review.create!(
  owner: "Alex", 
  rating: 3, 
  body: "These small trash cans are convenient for tight spaces, but the pop-up lids tend to get stuck sometimes. Overall, they do the job, but they could be improved.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 34
)

# Review for p35
Review.create!(
  owner: "Olivia", 
  rating: 4, 
  body: "I love this bathroom furniture set! It adds a rustic touch to my bathroom decor, and the shelves are perfect for storing toiletries. The only downside is that it was a bit tricky to assemble.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 35
)

# Review for p36
Review.create!(
  owner: "Daniel", 
  rating: 5, 
  body: "This furniture dolly set is a game-changer! It made moving my heavy furniture so much easier, and the extra accessories were a nice bonus. Highly recommend!", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 36
)

# Review for p37
Review.create!(
  owner: "Sophie", 
  rating: 3, 
  body: "These end tables with charging stations are a convenient addition to my living room, but the cords could be longer. I had to rearrange my furniture to reach the nearest outlet.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 37
)

# Review for p38
Review.create!(
  owner: "Ethan", 
  rating: 4, 
  body: "This sectional sofa is so comfortable! It's perfect for lounging and watching TV. The only downside is that it took longer to assemble than expected.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 38
)

# Review for p39
Review.create!(
  owner: "Ava", 
  rating: 2, 
  body: "I was disappointed with this recliner chair. It looked great in the pictures, but the fabric feels cheap and uncomfortable. Not worth the price in my opinion.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 39
)

# Review for p40
Review.create!(
  owner: "William", 
  rating: 5, 
  body: "I absolutely love this sleeper sectional sofa! It's stylish, comfortable, and the storage chaise is a genius design. Assembly was a breeze too. Highly recommend!", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 40
)





# Review for p41
Review.create!(
  owner: "Sophia", 
  rating: 4, 
  body: "This Toss Across game is a blast! It's a fun twist on classic Tic Tac Toe and perfect for family game nights. The only downside is that the bean bags are a bit lightweight.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 41
)

# Review for p42
Review.create!(
  owner: "Michael", 
  rating: 3, 
  body: "The Bop It! Extreme game is entertaining, but it can be frustratingly fast-paced. It's definitely not for everyone, especially if you're not a fan of rapid-fire gameplay.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 42
)

# Review for p43
Review.create!(
  owner: "Emma", 
  rating: 5, 
  body: "This LCD writing tablet is fantastic! My kids love doodling on it, and I appreciate that it's mess-free. It's also great for practicing writing and drawing skills.", 
  username: "riprocket@gmail.coms", 
  user_id: 2, 
  product_id: 43
)

# Review for p44
Review.create!(
  owner: "Alex", 
  rating: 4, 
  body: "The basketball shooting game is a fun way to pass the time! It's compact and easy to set up on any tabletop. The only downside is that the mini basketballs are a bit flimsy.", 
  username: "riprocket@gmail.com", 
  user_id: 2, 
  product_id: 44
)

# Review for p45
Review.create!(
  owner: "Olivia", 
  rating: 5, 
  body: "These dinosaur toys are a hit with my kids! They love taking them apart and putting them back together. It's a great way to encourage STEM learning and creativity.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 45
)

# Review for p46
Review.create!(
  owner: "Daniel", 
  rating: 2, 
  body: "I was disappointed with the digital shooting toy. It's not very accurate, and the targets don't always reset properly. My kids lost interest in it pretty quickly.", 
  username: "demo@user.io", 
  user_id: 1, 
  product_id: 46
)

# Review for p47
Review.create!(
  owner: "Sophie", 
  rating: 4, 
  body: "The LEGO Creator parrot set is a fun build! My kids enjoyed transforming it into different animals, and the colorful bricks are great for sparking creativity.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 47
)

# Review for p48
Review.create!(
  owner: "Ethan", 
  rating: 3, 
  body: "The LEGO Super Mario Piranha Plant set is cool, but it's a bit overpriced for what you get. The build was straightforward, but it lacks some of the play features of other LEGO sets.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 48
)

# Review for p49
Review.create!(
  owner: "Ava", 
  rating: 5, 
  body: "This flying orb ball toy is amazing! It's so much fun to play with, and the different flight modes keep it interesting. It's also surprisingly durable.", 
  username: "sova421@gmail.com", 
  user_id: 3, 
  product_id: 49
)

# Review for p50
Review.create!(
  owner: "William", 
  rating: 3, 
  body: "The dancing cactus toy is cute and entertaining, but the music can get a bit repetitive. It's a fun novelty item for a while, but it loses its charm after a bit.", 
  username: "destroyer231@user.io", 
  user_id: 4, 
  product_id: 50
)


      # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end