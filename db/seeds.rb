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
    User.destroy_all
  
    require 'open-uri'

    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('products')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io', 
      password: 'password'
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
    
      # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end