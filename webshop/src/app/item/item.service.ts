import { Item } from './item.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
//  hetkel seda massiivi ei kasutata, kuna data tuleb konkreetselt baasist.
//  Firebase data liikumise URL: https://webshop-12-default-rtdb.europe-west1.firebasedatabase.app 
private products = [ { title: "Tere või (1) 82%", category: "Piimatooted", price: "1.42", imgSrc: "../assets/tere.jpg"},{ title: "Tere või (2) 82%", category: "Piimatooted", price: "1.44", imgSrc: "../assets/tere.jpg"},{ title: "Tere või (3) 82%", category: "Piimatooted", price: "1.45", imgSrc: "../assets/tere.jpg"},{ title: "Estover PT Hiirte juust 350g viilutatud", category: "Piimatooted", price: "1.22", imgSrc: "../assets/juust-estover-350g-viilut.jpg"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RGkAAOSwD0FfVpOw/s-l225.webp","title":"Mr Porky Pork Scratchings 20 x 18g PACKS ON A PUB SNACK BAR CARD ","price":"15.48","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/fHkAAOSw0YxdnKs2/s-l225.webp","title":"28pc Asian Snack Sampler Box from Japan/Korea/China/Malysia/Hongkong and more..","price":"14.95","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5jQAAOSwsHxfHEfk/s-l225.webp","title":"TIK TOK DELY GELY FRUIT JELLY CHALLENGE CANDY SNACK (10 PIECES PER BAG) 💫ship","price":"12.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rzkAAOSw629fwmSj/s-l225.webp","title":"Jelly Fruit Candy craze  2 Bags Tik Tok famous Challenge 15pcs x 2 TikTok snack","price":"13.41","category":"kommid"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zFkAAOSwHnFVwMFC/s-l225.webp","title":"Umaibo Economy Pack 7 Flavors x 3 or 5 = 21 or 35 bars! Japan Snack/Dagashi","price":"16.80","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/O8oAAOSwnL9bWVrb/s-l225.webp","title":"Konnyaku jelly stick 50 pieces set Japanese Dagashi Snacks For gift Japan Import","price":"22.90","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/MPUAAOSwwKxb3bTP/s-l225.webp","title":"Japanese Snacks Foods Assortment 30pcs set Dagashi Okashi Candy Mochi / AP2A","price":"20.90","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GaIAAOSw5QNfsaLJ/s-l225.webp","title":"Japanese snack 9 set candy umaibo etc bikkuri(surprise) small W","price":"3.99","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PsIAAOSwbRldLdTz/s-l225.webp","title":"Japanese Snack & Candy Box Set, 26 pc, Wide Variety Assortment, w/Tracking","price":"29.80","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mJgAAOSwBvNTovPg/s-l225.webp","title":"Umaibo Economy Pack 10 Flavors x 3=30 bars! incl Premium Ver,Japan Snack/Dagashi","price":"18.80","category":"kommid"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-10AAOSwUUxapezW/s-l225.webp","title":"Japanese candy DAGASHI snacks foods 40pcs ALFORT STRAWBERRY BOX Kawaii Gift F/S","price":"30.99","category":"snäkid"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5kAAAOSwHnFVs3TO/s-l225.webp","title":"\"Puku Puku Tai\", Taiyaki Shaped Monaka, 2 Flavors, Dagashi, Japan Snack","price":"12.48","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z3IAAOSw8lle6BNA/s-l225.webp","title":"Sakura Japan Dagashi Set Japanese Candy Chocolate Snacks - 20 Pieces Box","price":"29.20","category":"kommid"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Io0AAOSw4DVeTglW/s-l225.webp","title":"Konnyaku Jelly Socket 50 Pieces Set Japanese DAGASHI snacks for Gift Japan","price":"24.59","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5pYAAOSw~y9ZCvFv/s-l225.webp","title":"Chilli Snack Collection. Very Hot Chilli Mixed Snacks. Made with Carolina Reaper","price":"8.07","category":"kommid"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vH8AAOSwCmRbBTW8/s-l225.webp","title":"Japanese Candy Dagashi Set Chocolate Noodles Snack Hi-Chew Yum-yum Sticks etc.","price":"11.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XO0AAOSwB5NeONe3/s-l225.webp","title":"30g Crispy Chicken Fried Skin Pepper Spicy Snack Papaya Salad Beer Ramen Halal","price":"6.40","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/L7kAAOSwUKxYmqgk/s-l225.webp","title":"12 x Japanese Fried Crispy Seaweed Classic Flavor Snack Tao Kae Noi BIG SHEET","price":"8.91","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PHgAAOSwPcVVxqkB/s-l225.webp","title":"\"Kabayaki san taro\", Seafood and squid snack, Kabayaki flavor, Dagashi, Japan","price":"9.80","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xY0AAOSw2SNfDVma/s-l225.webp","title":"3x Kinder Ferrero Panecioc Italian Bread & Chocolate Snack (10x) 30g Biscuits...","price":"30.96","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UiMAAOSwx79eywZZ/s-l225.webp","title":"Kinder Cards Waffle Snack Multipack with 5 x 25g","price":"20.20","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/G28AAOSwBvNTnGp-/s-l225.webp","title":"Kanro \"Nuts Bon\" Peanuts Candy, Japan Long-Seller, Snack,","price":"11.80","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HdYAAOSwwolezYzy/s-l225.webp","title":"Test Pack Kinder Ferrero Brioss Colazione più Panecioc Delice Snack Cards Fiesta","price":"38.03","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yZQAAOSwkLNe45Fa/s-l225.webp","title":"Fonzies Snack (100g)","price":"16.83","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rGgAAOSw34FVFNyQ/s-l225.webp","title":"From Japan Umaibo Corn Puffed Snack 30pcs Mentai Spicy","price":"13.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/u~QAAOSw8d9UvgRL/s-l225.webp","title":"From Japan Yaokin Umaibo Corn Puffed Snack 30pcs Cheese","price":"13.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/d34AAOSwNHldrTn4/s-l225.webp","title":"Sakura Japan Dagashi Set Japanese Candy Chocolate Snacks - 30 Pieces Box","price":"50.70","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7ioAAOSw27dfzjQR/s-l225.webp","title":"New ListingLorenz Assorted Snack Box (Pack of 8)","price":"16.15","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vkEAAOSwRO9fepQ5/s-l225.webp","title":"BANDAI Tohato Chocobi Chocolate flavor Crayon Shin-Chan Snack Made in Japan","price":"5.79","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eVMAAOSw~oFXGLuw/s-l225.webp","title":"Denroku \"Ika Pea\" Squid Snack Coating Pea Nuts, 64g, Japanese Snack","price":"3.90","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2zUAAOSwKrhVVfEZ/s-l225.webp","title":"From Japan Yaokin Umaibo Corn Puffed Snack 30pcs Tonkatsu Sauce","price":"13.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JXMAAOSwPR5faHT7/s-l225.webp","title":"Rapunzel - Studentenfutter - 1,5 kg - 4er Pack","price":"133.06","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GOoAAOSwk2tcziv8/s-l225.webp","title":"Inoue, Paripari Koiwashi, Crispy Sardine, 36g, Japanese Snack","price":"6.90","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xDcAAOSwJ7Rfue5c/s-l225.webp","title":"12 x Packs BIG SHEET Spicy Korean Crispy Fried Seaweed Flavour Snack Tao Kae Noi","price":"8.74","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Nb8AAOSwMuherD16/s-l225.webp","title":"ONE CHIP CHALLENGE .... WORLDS HOTTEST CHILLI CHIP x 1 🔥🔥🔥","price":"12.06","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aHEAAOSwum1fzOlS/s-l225.webp","title":"Cadbury Cerise Snack Bar Mûrs 52G (Paquet de 2)","price":"6.25","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Ji8AAOSwOo5fzk-o/s-l225.webp","title":"New ListingCoconut Crispy Roll Spicy  flavor Snack X12 Packs  3-5 Dys DHL","price":"65.00","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kjQAAOSwVt5dR7uH/s-l225.webp","title":"NEW LITTLE DEBBIE ZEBRA CAKES 13 OZ BOX 10 SNACK TWIN WRAPPED FREE SHIPPING BUY","price":"11.69","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iRkAAOSwC9Rea7z4/s-l225.webp","title":"Keto Low Carb Food Sweets Snacks - Keto Low Carb Pralines Keto Sweets Vegan","price":"13.46","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/I8EAAOSwHHBfqCP~/s-l225.webp","title":"🔥 ONE CHIP CHALLENGE WORLDS HOTTEST! Chili EXTREME Tortilla Chilli Chip!!! 🔥🔥","price":"10.58","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z60AAOSwHflfvYN8/s-l225.webp","title":"New ListingCare Package Snack Box Assortment Snack Sampler Gift Box 100 Count Fast Shipping","price":"74.95","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/c4QAAOSwQPVfzlS2/s-l225.webp","title":"New ListingBeer snack box ukrainian food box beer party gift, gift for boyfriend birthday ","price":"19.95","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Sz0AAOSwpF5eXz9Q/s-l225.webp","title":"Calbee, Tohat , Kadou Etc. Japonais Chips Dagashi Gonflé Snack Assortiment 60pcs","price":"96.45","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4S4AAOSw08FeyxAw/s-l225.webp","title":"3X Pringles Ketchup Crisps Snacks Potato Chips 160g","price":"29.63","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/50MAAOSwACpfzX9K/s-l225.webp","title":"New ListingNutella and Go Snack Packs Chocolate Hazelnut Spread with Pretzel Sticks Perf...","price":"41.81","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/AS8AAOSwB09YLvJm/s-l225.webp","title":"Yaokin, Umaibo, Corn Snack Stick, 16 kinds, Japanese Dagashi, Free Choice is OK","price":"44.80","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/w3MAAOSwathfaHTu/s-l225.webp","title":"Rapunzel - Studentenfutter - 200 g - 8er Pack","price":"42.36","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NE0AAOSwfjtdozaa/s-l225.webp","title":"DAGASHI UMAIBOU 10 kinds 50 bars JAPAN snack Free shipping tracking number","price":"29.98","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8IUAAOSwfeZcwGcP/s-l225.webp","title":"Maruesu, Ikatendaiou, Squid Tempra Snack, Soft type, 110g","price":"7.40","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/UHQAAOSwvN1fUn1Q/s-l225.webp","title":"Govinda-Almond-Magic - 120 G - 6er Pack","price":"34.11","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/TbkAAOSw1u5fbyQ2/s-l225.webp","title":"Linea Natura Felix Mini Rice Snack Apple Cinnamon - 50 G - 7er Pack","price":"9.22","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hJIAAOSwcapb3cpZ/s-l225.webp","title":"CHEETOS ESTRELLA LAYS TAFFEL Snacks Variety Potato Chips Selection ","price":"9.89","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7BcAAOSww-lfgxeP/s-l225.webp","title":"Fonzies Italian Corn Snack Crisps ~ 2 x 211.5g Multipacks {18 individual packs}","price":"17.38","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Fv4AAOSw2-FfF-du/s-l225.webp","title":"2 x ONE CHIP CHALLENGE .... WORLDS HOTTEST CHILLI CHIP 🔥🔥🔥 Double Pack","price":"19.54","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/S4QAAOSwcF9UXgzR/s-l225.webp","title":"SNACK A JACKS JUMBO CHOCOLATE CHIP 3 X 180g","price":"12.10","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZTkAAOSwj0tfzOkl/s-l225.webp","title":"Cadbury Cerise Snack Bar Mûrs 52G (Paquet de 4)","price":"12.49","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HysAAOSwTltfzOk2/s-l225.webp","title":"Cadbury Cerise Snack Bar Mûrs 52G (Paquet de 6)","price":"18.76","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IKIAAOSw2IxfS7VJ/s-l225.webp","title":"Gardetto’s Original Recipe Snack Mix Multipack","price":"17.31","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/p7cAAOSw5udfvd6F/s-l225.webp","title":"Keebler pepper jack cheese cracker pack, 8-piece snack pack, 12/carton","price":"34.65","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sAsAAOSwmRVfUooS/s-l225.webp","title":"Govinda-Tiger NATURELL quite - 250 G - 6er Pack","price":"38.84","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SMMAAOSwG-dfbyQ-/s-l225.webp","title":"Linea Natura Felix Mini Rice Snack Raspberry Blueberry - 50 G - 7er Pack","price":"9.22","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3gAAAOSwPlFed2s8/s-l225.webp","title":"Roasted Dried Seasoned Seaweed Thai Snack Sheets Salt Korean 1 Pack 100 Piece ","price":"10.24","category":"snack"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nzAAAOSw0BVeiNki/s-l225.webp","title":"Barazzo Jerky Pork 1kg (25x40g/2x500g) like Beef Jerky Protein Rich Snack","price":"27.80","category":"snack"}]; 
 
//products: Item[] = [];

    constructor(private http:HttpClient) { }
    
    getProducts(): Item[] {
      return this.products;
    }

    getOneProduct(id: string): Item {
      return this.products[id];
    }
    // WebAPI - FirebaseDB
    /*saveProductsToDatabase(products: Item[]) {
      this.http.put("https://webshop-12-default-rtdb.europe-west1.firebasedatabase.app/products.json", this.products).subscribe();
    }*/
    // meetod kui on soov data Firebase pilve-baasi saata :
    
    saveProductsToDatabase(items: Item[]) {
      this.http.put("https://webshop-12-default-rtdb.europe-west1.firebasedatabase.app/products.json", items).subscribe();
    }
    /* */

    fetchProductsFromDatabase() {
      return this.http
      .get<Item[]>("https://webshop-12-default-rtdb.europe-west1.firebasedatabase.app/products.json");      
    }
}