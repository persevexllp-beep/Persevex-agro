export type ProductDetails = {
  overview: string;
  uses: string[];
  ordering: string[];
};

export const productDetails: Record<string, ProductDetails> = {
  cocopeat: {
    overview: "Cocopeat is the fine pith separated from coconut husks. Its light structure holds moisture while allowing air around roots, making it a useful ingredient in growing mixes. The preparation and specification should match your crop and growing system.",
    uses: ["Potting mixes for home gardens and balcony containers", "Nursery trays and seed-starting mixes", "Growing bags and hydroponic systems using appropriately prepared cocopeat"],
    ordering: ["Cart quantities are counted in kilograms.", "Specify whether you need washed or buffered material and any required growing-medium specifications.", "Include the quantity in kilograms and delivery location so packing and transport can be discussed."],
  },
  "coir-fiber": {
    overview: "Coir fiber is the longer natural strand extracted from coconut husks. It is used as a raw material in a range of manufacturing applications. Fiber length, cleanliness and packing requirements can vary by intended use.",
    uses: ["Rope, mat and brush manufacturing", "Padding and other fiber-based products", "Geotextile and erosion-control applications"],
    ordering: ["Cart quantities are counted in kilograms.", "Share the intended application and your preferred fiber specification.", "Mention any baling or packing requirements when requesting a bulk quote."],
  },
  "meat-cuts": {
    overview: "Choose meat cuts to suit the recipes and portions you need. This listing is a starting point for a tailored enquiry; the exact meat type, cut and preparation will be confirmed with your order requirements.",
    uses: ["Household cooking and meal planning", "Restaurant and catering menus", "Bulk kitchen requirements with specified cuts and portions"],
    ordering: ["Cart quantities are counted in kilograms.", "Specify the meat type, preferred cut, and whether you require bone-in or boneless portions.", "Include your delivery location and preferred date to check availability."],
  },
  "mixed-meat": {
    overview: "Order chicken to suit your meals or menu. Share your preferred cuts and preparation requirements so availability can be confirmed. The image illustrates an assortment; your order is for chicken.",
    uses: ["Everyday chicken meals", "Curries, grilling and roasting", "Restaurant and catering menus"],
    ordering: ["Cart quantities are counted in kilograms.", "Specify your preferred chicken cuts and whether you need bone-in or boneless portions.", "Include your delivery location and preferred date to check availability."],
  },
  mutton: {
    overview: "Choose mutton cuts for your household, restaurant or catering requirements. Share the cuts and preparation you prefer when placing your order.",
    uses: ["Mutton curries and stews", "Biryanis and slow-cooked dishes", "Restaurant and catering menus"],
    ordering: ["Cart quantities are counted in kilograms.", "Specify your preferred cuts and whether you need bone-in or boneless portions.", "Include your delivery location and preferred date to check availability."],
  },
  "seasonal-vegetables": {
    overview: "Build your vegetable order around the produce currently available. A seasonal selection can cover a range of everyday kitchen needs, with the exact varieties and quantities confirmed before the order is finalised.",
    uses: ["Everyday household meals", "Restaurant and catering preparation", "Bulk vegetable orders for larger kitchens"],
    ordering: ["Cart quantities represent the total kilograms requested.", "List your preferred vegetables and quantities in the checkout notes.", "Mention whether you are open to substitutions if a requested variety is unavailable."],
  },
  "green-vegetables": {
    overview: "Enquire about green vegetables to suit your cooking or business requirements. Available varieties may include leafy and other green produce; share your preferred selection so the team can confirm what can be supplied.",
    uses: ["Vegetable sides and everyday recipes", "Menus featuring leafy and green produce", "Custom produce orders for home or commercial kitchens"],
    ordering: ["Cart quantities represent the total kilograms requested.", "Specify the varieties and the quantity of each that you need.", "Share your preferred delivery date and ask for confirmation of current availability."],
  },
  "mixed-vegetables": {
    overview: "Create a varied vegetable assortment for the dishes you plan to prepare. This category lets you combine your produce requirements in one enquiry. The image shows an example assortment; your actual selection is confirmed with the team.",
    uses: ["Weekly household produce planning", "Menus with a variety of vegetable dishes", "Custom assortments for catering and business kitchens"],
    ordering: ["Cart quantities represent the total kilograms requested.", "Provide a produce list with the quantity of each vegetable in checkout notes.", "Include any substitution preferences and the delivery location for your quote."],
  },
  "apples": {
    overview: "Apples bring a crisp texture to fresh dishes and soften when cooked, making them versatile for sweet and savoury recipes.",
    uses: ["Fruit bowls and snacks", "Pies, crumbles and baked desserts", "Salads and fruit platters"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "potatoes": {
    overview: "Potatoes work across a wide range of everyday dishes, from simple sides to larger meals for home and catering kitchens.",
    uses: ["Curries and stews", "Roasted and mashed potatoes", "Fries and savoury snacks"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "strawberries": {
    overview: "Strawberries add colour and a sweet, tangy flavour to fresh dishes, drinks and desserts.",
    uses: ["Fruit salads and fresh servings", "Smoothies and milkshakes", "Desserts, sauces and preserves"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "ice-apples": {
    overview: "Ice apples are the tender fruit inside palmyra shells. Mention whether you prefer whole fruit or prepared portions when ordering.",
    uses: ["Seasonal fruit servings", "Fruit drinks and coolers", "Desserts and fruit bowls"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "red-chillies": {
    overview: "Red chillies are a versatile cooking ingredient for recipes that call for a spicy flavour. Specify your preferred variety when ordering.",
    uses: ["Curries and stir-fries", "Chutneys and sauces", "Marinades and pickles"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "oranges": {
    overview: "Oranges offer a bright citrus flavour for fresh servings, drinks and cooking.",
    uses: ["Fresh fruit servings", "Juices and citrus drinks", "Desserts and citrus sauces"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "pineapples": {
    overview: "Pineapples combine sweetness and tartness, lending themselves to fresh fruit dishes as well as cooked recipes.",
    uses: ["Fruit bowls and platters", "Juices and smoothies", "Grilled dishes and desserts"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "sweet-potatoes": {
    overview: "Sweet potatoes bring a naturally sweet flavour and a soft texture when cooked. They can be used in a variety of meals and snacks.",
    uses: ["Roasted and steamed sides", "Curries and savoury dishes", "Mash and baked snacks"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "passion-fruit": {
    overview: "Passion fruit is used for its aromatic pulp and tangy flavour. It makes a distinctive addition to drinks and sweet recipes.",
    uses: ["Juices and fruit drinks", "Dessert toppings and sauces", "Fruit bowls and preserves"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "pomegranates": {
    overview: "Pomegranates contain juicy seeds that add colour and texture to both sweet and savoury dishes.",
    uses: ["Fruit bowls and salads", "Juices and fruit drinks", "Garnishes and dessert toppings"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "grapes": {
    overview: "Grapes are an easy addition to fruit servings and platters. Mention your preferred colour or variety in the order notes.",
    uses: ["Everyday snacking", "Fruit platters and salads", "Fresh desserts and fruit drinks"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "bananas": {
    overview: "Bananas can be enjoyed as fruit or used in drinks and baked recipes. Specify the ripeness you prefer for your planned use.",
    uses: ["Snacks and fruit bowls", "Smoothies and milkshakes", "Banana bread and baking"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "litchis": {
    overview: "Litchis have a delicate flavour and juicy flesh beneath their textured shells, making them a popular choice for fresh servings and desserts.",
    uses: ["Seasonal fruit platters", "Desserts and fruit bowls", "Fruit drinks and coolers"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "papayas": {
    overview: "Papayas can be requested at different stages of ripeness depending on whether they are intended for fresh fruit servings or cooking.",
    uses: ["Ripe fruit servings", "Smoothies and fruit bowls", "Raw papaya preparations"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
  "red-peppers": {
    overview: "Red peppers add colour to a variety of recipes. Specify your preferred pepper variety and heat level when placing your order.",
    uses: ["Sauces and marinades", "Roasted pepper dishes", "Curries and savoury preparations"],
    ordering: ["Cart quantities are counted in kilograms.", "Add your preferred variety, ripeness or preparation requirements in the checkout notes.", "Include your delivery address and preferred timing so availability can be confirmed."],
  },
};
