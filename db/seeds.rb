# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Clearing old data..."
User.destroy_all
Payment.destroy_all
ShoppingCart.destroy_all
CartItem.destroy_all
PressOn.destroy_all
Glue.destroy_all
HandCare.destroy_all

puts "Seeding users..."
u1 = User.create(username: "suey", first_name: "Suey", last_name:"Yu", password_digest: "123", billing_address: "Seattle", shipping_address: "seattle", email:"suey@gmail.com", birthday: Date.parse('2001-02-03'))
u2 = User.create(username: "bri", first_name: "Briana", last_name:"Gordon", password_digest: "123", billing_address: "Los Angeles", shipping_address: "Los Angeles", email:"bri@gmail.com", birthday: Date.parse('2002-02-03'))
u3 = User.create(username: "kiana", first_name: "Kiana", last_name:"Smith", password_digest: "321", billing_address:"Michigan",shipping_address: "Michigan",email:"kiana@gmail.com",birthday: Date.parse('1994-08-04'))
u4 = User.create(username: "ashely", first_name: "Ashely", last_name:"Walker", password_digest:"321", billing_address:"Huston",shipping_address: "Huston",email:"ashely@att.net",birthday: Date.parse('1998-05-12'))

puts "Seeding shopping_cart..."
sc1 = ShoppingCart.create(user_id: u1.id)
sc2 = ShoppingCart.create(user_id: u1.id) #purchase
sc3 = ShoppingCart.create(user_id: u2.id) #purchase
sc4 = ShoppingCart.create(user_id: u2.id) #purchase
sc5 = ShoppingCart.create(user_id: u2.id)
sc6 = ShoppingCart.create(user_id: u3.id)
sc7 = ShoppingCart.create(user_id: u3.id) #purchase
sc8 = ShoppingCart.create(user_id: u3.id) #purchase
sc9 = ShoppingCart.create(user_id: u4.id)
sc10 = ShoppingCart.create(user_id: u4.id) #purchase

puts "Seeding payment..."
p1 = Payment.create(user_id: u1.id, shopping_cart_id: sc2.id)
p2 = Payment.create(user_id: u1.id, shopping_cart_id: sc3.id)
p3 = Payment.create(user_id: u2.id, shopping_cart_id: sc4.id)
p4 = Payment.create(user_id: u3.id, shopping_cart_id: sc8.id)
p5 = Payment.create(user_id: u4.id, shopping_cart_id: sc10.id)
p4 = Payment.create(user_id: u3.id, shopping_cart_id: sc7.id)

puts "Seeding press_On..."
po1 = PressOn.create(name:"Lavender Touch",image:"https://img.ltwebstatic.com/images3_pi/2020/08/13/15972989601bf97065e3dc9934dbba3da1c9c7fee3_thumbnail_900x.webp", shape:"coffin",color:"purple", add_on:"", description:"Long,lavender, and coffin ", price:30.50, quantity:10 )
po2 = PressOn.create(name: "Not So Basic",image:"https://cdn.shopify.com/s/files/1/0575/2773/0376/products/41BF1WvH3oL_1024x1024.jpg?v=1623828090", shape:"round",color:"nude", add_on:"marble", description:"Short,nude, with marble design", price:15.00, quantity: 6 )
po3 = PressOn.create(name: "Fire ",image:"https://i.etsystatic.com/21178056/r/il/996ad7/2056535008/il_1588xN.2056535008_ei1a.jpg", shape:"stiletto",color:"red", add_on:"", description:"Long,red,stiletto shaped", price:30.00, quantity:8 )
po4 = PressOn.create(name: "Bubble Gum",image:"https://img.ltwebstatic.com/images3_pi/2021/06/15/16237400726ca04d2114f40a698f4b799ce8113741.webp", shape:"square",color:"pink", add_on:"clould designs", description:"Long,square,pink nails with clouds for designs", price:35.00, quantity:5 )
po5 = PressOn.create(name: "All of the Lights ",image:"https://i.pinimg.com/originals/3b/bd/52/3bbd529e0c5237ca73fc4369f46e8eef.jpg", shape:"coffin",color:"green", add_on:"glow in the dark", description:"Long,coffin shaped nails with an green,glow-in the-dark ombre", price:40.00, quantity: 7)
po6 = PressOn.create(name: "Ying and Yang",image:"https://i.etsystatic.com/22970529/r/il/7b2624/3130214038/il_1588xN.3130214038_i5ye.jpg", shape:"square",color:"pink", add_on:"", description:"Medium legnth, square nails composed of pink and white pain with the Ying and Yang Symbol", price:35.00, quantity:11)
po7 = PressOn.create(name: "Peachtree",image:"https://bellyitchblog.com/wp-content/uploads/2020/09/8512E0F9-2FAC-4FF2-8863-F4AD4F4AC189-564x447.jpeg", shape:"coffin",color:"peach", add_on:"", description:"Medium legnth coffin nails with plain peach polish", price:25.00, quantity:4)
po8 = PressOn.create(name: "Fleek",image:"https://m.media-amazon.com/images/I/51Y7c1jHxrL._SY355_.jpg", shape:"round",color:"white", add_on:"", description:"short,white and round", price:15, quantity:25 )
po9 = PressOn.create(name: "Unicorn Kisses",image:"https://i.pinimg.com/736x/d5/ff/c6/d5ffc6cb577aa67e5c1b9a6ccba2421b.jpg", shape:"coffin",color:"all", add_on:"jewels", description:"Unique freestyle with glitter and jewels", price:55.00 , quantity:9)
po10 = PressOn.create(name: "Galaxy Gal",image:"https://gl-images.condecdn.net/image/KAQA0AoQzab/crop/900/f/margaritasnailzcopy_sq.jpg", shape:"stiletto",color:"chrome", add_on:"chrome polish", description:"Long galaxy chrome nails ", price:50.00, quantity:12)
po11 = PressOn.create(name:"Under The Sea",image:"https://i.ytimg.com/vi/5j341PrgJ7E/maxresdefault.jpg", shape:"coffin",color:"purple", add_on:"jewels", description:"short mermaid nails", price:40, quantity:8 )
po12 = PressOn.create(name: "On That french Tip",image:"https://styleeasily.com/wp-content/uploads/2017/04/28180417-coffin-nail-ideas-.jpg", shape:"coffin",color:"nude", add_on:"french tip", description:"Short nail with French tip", price:30.00, quantity:5)
po13 = PressOn.create(name: "Ice Me Out",image:"https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/bpcAAOSw6o9dQUfY/$_10.JPG?set_id=880000500F", shape:"square",color:"all", add_on:"jewels", description:"Long sleek, covered in Rhinestones", price:70.00, quantity:3)
po14 = PressOn.create(name: "Sprinkles", image:"https://i0.wp.com/cherrycherrybeauty.com/wp-content/uploads/2016/12/Easy-and-Cute-Glitter-Nails-8.jpg?resize=730%2C730", shape:"square",color:"white", add_on:"sparkles", description:"Medium legnth ombre with sparkles", price:50.00, quantity:10)
po15 = PressOn.create(name: "Midnight Dreams",image:"https://m.media-amazon.com/images/I/71I1snTOr7L._SX679_.jpg", shape:"round",color:"black", add_on:"", description:"Round black and Matte", price:20.00 , quantity:14 )
po16 = PressOn.create(name: "Flaming",image:"https://img.ltwebstatic.com/images3_pi/2020/08/13/15972974972272ddc37480ea31b4a490d2edb2a178_thumbnail_900x.webp", shape:"coffin",color:"white", add_on:"", description:"Nude background with white flames", price:30.50, quantity:13 )

puts "Seeding glue..."
g1 = Glue.create(name: "Sassi", image:"https://image.ikatehouse.com/common/productimages/98051803/B_98051803_main_1501.jpg",  strength:"Medium", description:"Duration 2-3 days" ,price:7.50, quantity:43)
g2 = Glue.create(name: "Bunson",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXtYUCXB6L1SOcXhy3xO6ks5vLHsb07rC2pQ&usqp=CAU", strength:"Stong", description:"Duration 4-7 days" ,price:8.00, quantity:25)
g3 = Glue.create(name: "Star Nail",image:"https://cdn.shopify.com/s/files/1/1457/3256/products/520.jpg?v=1484257569", strength:"Light", description:"Duration 1-2 days" ,price:7.50, quantity:18)

puts "Seeding handCare..."
hc1 = HandCare.create(name: "Curticle Oil", image: "https://www.piggypolish.com/wp-content/uploads/2016/06/PiggyPolish-Apr2018-bwalma-144.jpg", description: "Cranberry scented cuticle oil", price:5.00, quantity:11)
hc2 = HandCare.create(name: "Nail File", image: "https://cdn.powered-by-nitrosell.com/product_images/11/2587/heavy-duty-black-100-100.jpg", description:"Black abrasive nail file", price:1.00, quantity:23)
hc3 = HandCare.create(name: "Nail Kit", image: "https://img.ltwebstatic.com/images3_pi/2021/03/29/16169816065af291a80dc92e370c4212a365ae4489_thumbnail_600x.webp", description: "Pink detailed nail kit", price:10.00, quantity:18)
hc4 = HandCare.create(name: "Hand Creme", image: "https://cdn.shopify.com/s/files/1/0190/5547/6836/products/AHT05_1024x1024.jpg?v=1624997146", description: "Skin-loving hand creme", price:5.00, quantity:10)

puts "Seeding cart_item..."
ct1 = CartItem.create(shopping_cart_id: sc1.id, item_id:po1.id, item_type:"PressOn")
ct2 = CartItem.create(shopping_cart_id: sc2.id, item_id:g1.id, item_type:"Glue")
ct3 = CartItem.create(shopping_cart_id: sc2.id, item_id:hc1.id, item_type:"HandCare")
ct4 = CartItem.create(shopping_cart_id: sc3.id, item_id:po8.id,item_type:"PressOn")
ct5 = CartItem.create(shopping_cart_id: sc3.id,item_id:po12.id,item_type:"PressOn")
ct6 = CartItem.create(shopping_cart_id: sc4.id, item_id:po13.id,item_type:"PressOn")
ct7 = CartItem.create(shopping_cart_id: sc4.id, item_id:po2.id,item_type:"PressOn")
ct8 = CartItem.create(shopping_cart_id: sc5.id, item_id:g1.id,item_type:"Glue")
ct9 = CartItem.create(shopping_cart_id: sc5.id, item_id:po15.id,item_type:"PressOn")
ct10 = CartItem.create(shopping_cart_id: sc6.id, item_id:po4.id,item_type:"PressOn")
ct11 = CartItem.create(shopping_cart_id: sc6.id, item_id:po16.id,item_type:"PressOn")
ct12 = CartItem.create(shopping_cart_id: sc8.id, item_id:po11.id,item_type:"PressOn")
ct13 = CartItem.create(shopping_cart_id: sc8.id, item_id:g2.id,item_type:"Glue")
ct14 = CartItem.create(shopping_cart_id: sc8.id, item_id:hc3.id,item_type:"HandCare")
ct15 = CartItem.create(shopping_cart_id: sc9.id, item_id:po15.id,item_type:"PressOn")
ct16 = CartItem.create(shopping_cart_id: sc10.id, item_id:hc3.id,item_type:"HandCare")


puts "🌱🌱🌱🌱Done!🌱🌱🌱🌱"