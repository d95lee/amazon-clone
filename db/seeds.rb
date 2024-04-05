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

    Product.create!(
      name: 'Lenovo X1 Thinkpad', 
      price: '799.99', 
      description: 'Ultralight starting weight of just 1.12kg / 2.48lb')

    Product.create!(
      name: 'Nespresso Capsules VertuoLine, Medium and Dark Roast Coffee, Variety Pack, Stormio, Odacio, Melozio, 30 Count, Brews 7.77 Fl Oz (Pack of 3 )', 
      price: '37.50', 
      description: 'NESPRESSO VERTUOLINE VARIETY PACK ASSORTMENT: This Nespresso coffee assortment offers 30 Nespresso Pods in a variety of 3 best-selling coffee blends for the Nespresso VertuoLine System.10 Stormio, 10 Odacio, 10 Melozio
      ')
    
    Product.create!(
      name: 'Premier Protein Shake, Chocolate, 30g Protein 1g Sugar 24 Vitamins Minerals Nutrients to Support Immune Health, 11.50 fl oz (Pack of 12)', 
      price: '28.48', 
      description: 'Chocolately goodness: Smooth and creamy, rich chocolate flavored shake; Winner of American Masters of Taste Gold Medal for SUPERIOR TASTING ready-to-drink protein beverages.')

    Product.create!(
      name: 'Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB', 
      price: '199.00', 
      description: 'Experience total immersion with 3D positional audio, hand tracking and easy-to-use controllers working together to make virtual worlds feel real.
      Explore an expanding universe of over 500 titles across gaming, fitness, social/multiplayer and entertainment, including exclusive releases and totally unique VR experiences.
      Enjoy fast, smooth gameplay and immersive graphics as high-speed action unfolds around you with a fast processor and immersive graphics.')
    
    Product.create!(
      name: 'Dyson V11 Extra Cordless Vacuum Cleaner - Nickel/Red, Large', 
      price: '449.99', 
      description: 'Versatile, powerful and cordless for whole-home deep cleaning.
      60% more suction² and up to 60 minutes of run time.¹ Battery-saving trigger helps maximize energy-efficiency, only using power when you need it.
      LED screen displays remaining run time countdown to the second, 3 cleaning modes, and maintenance alerts for complete control of your clean.
      Engineered for homes with pets.')
    
    
    Product.create!(
      name: 'DEWALT 20V Max Cordless Drill/Driver Kit, Compact, 1/2-Inch (DCD771C2), Yellow', 
      price: '99.00', 
      description: 'Dewalt drill has compact and lightweight design that fits into tight areas.NEW 18V XR Li-Ion compact drill driver featuring XR 1.3Ah Li-Ion battery technology, Clutch Positions : 16.
      High performance motor of the power drill delivers 300 unit watts out (UWO) of power ability completing a wide range of applications')
  
    Product.create!(
      name: 'HelloBaby Upgrade Monitor, 5''Sreen with 30-Hour Battery, Pan-Tilt-Zoom Video Baby Monitor with Camera and Audio, Night Vision, VOX, 2-Way Talk, 8 Lullabies and 1000ft Range No WiFi, Ideal Gifts', 
      price: '67.99', 
      description: '💖【REMOTE 355° PAN and TILT BABY MONITOR & 5" COLOR DISPLAY】: Enjoy a 5" Big Screen on this baby camera monitor. Remote control camera rotate 355° in horizontal and 120° vertical gives you a larger view of your baby\'s room. 2X zoom function ensures clear visuals. Noiseless camera rotation for a peaceful environment.')    

    Product.create!(
      name: 'Amazon Basics 5-Shelf Adjustable, Heavy Duty Storage Shelving Unit (350 lbs loading capacity per shelf), Steel Organizer Wire Rack, Black, 36" L x 14" W x 72" H', 
      price: '66.65', 
      description: '5 shelf wire rack offers handy storage space and easy access to tools and supplies
      Durable steel construction with a Black finish; each shelf holds up to 350 pounds, evenly distributed; 1750 pound total weight capacity')

    Product.create!(
      name: 'MUDEELA Pots and Pans Organizer : Rack under Cabinet, 8-Tier Kitchen Cabinet Organizers and Storage, Light-Duty Adjustable Pot Racks, Pot Organizers inside Cabinet with 3 DIY Methods', 
      price: '21.99', 
      description: '【Maximize Space Efficiently】Be sure to measure the (width / height / depth) size of your cabinet before purchasing the MUDEELA pan rack to ensure that the size of our pot rack suits your cabinet. Minimum Cabinet Size Required: Width≥22'' ; Height≥16.96''. NOTICE: NOT for Heavy-duty cookware. MUDEELA compact pots and pans organizer frees up space without taking up additional. 8-tier ample space allows our pan organizer rack for cabinet to fit frying pans, baking pans, cutting boards, pot lids, etc. Suits kitchen, countertop, cabinet, and pantry.')

    Product.create!(
      name: 'Amazon Essentials Men\'s Slim-Fit Vacation Shirt', 
      price: '20.90', 
      description: 'SLIM FIT: Slim fit through the shoulders, chest, and waist.
      STRETCH POPLIN: Lightweight yet durable washed poplin with 2% stretch for comfort and mobility.
      VACATION SHIRTING: This short sleeve poplin shirt is the warm weather solution. With a camp collar and shirttail hem, wear it untucked with shorts for laid-back comfort all vacation long.')
  
    
    
      # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        password: 'password'
      }) 
    end
  
    puts "Done!"
  end