export interface KnowledgeEntry {
  patterns: string[];
  response: string;
}

export const knowledge: KnowledgeEntry[] = [
  // ── Greetings ──────────────────────────────────────────────────────────────
  {
    patterns: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy", "greetings"],
    response: "Hello! 👋 Welcome to Kyen Products & Supplies. How can I help you today? You can ask me about our products, pricing, how to order, or our company.",
  },

  // ── About the company ──────────────────────────────────────────────────────
  {
    patterns: ["who are you", "what is kyen", "about kyen", "about the company", "tell me about", "what do you do", "your company"],
    response: "Kyen Products & Supplies Ltd is a Nigerian agro-processing company based in Port-Harcourt. We transform fresh agricultural produce into high-quality, shelf-stable food products. Founded in 2022, we work directly with over 300 smallholder farmers — 40% of them women — to reduce post-harvest losses and bring nutritious, locally processed food to homes, supermarkets, and restaurants across Nigeria.",
  },
  {
    patterns: ["when was kyen founded", "founded", "history", "our story", "origin", "started"],
    response: "Kyen was founded in 2022 by Yeniseim Wami. We started as regional distributors and expanded into agro-processing in 2023, transforming perishable crops into shelf-stable products like our Onion Flakes and Powder. By 2024 we secured the Kyen trademark.",
  },
  {
    patterns: ["mission", "what is your mission"],
    response: "Our mission is to transform locally grown agricultural produce into premium, value-added products that enhance nutrition, reduce waste, and create market opportunities for smallholder farmers.",
  },
  {
    patterns: ["vision", "what is your vision", "goal", "2030"],
    response: "Our vision is to become Africa's leading innovator in sustainable agro-processing by unlocking the market potential of raw and underutilised agricultural produce by 2030.",
  },
  {
    patterns: ["impact", "farmers", "how many farmers", "jobs", "employment"],
    response: "Our impact so far:\n• 100+ metric tons of produce sourced\n• 300+ smallholder farmers supported (40% women)\n• 25 direct & indirect jobs created (60% filled by women & youth)\n• 8% reduction in post-harvest losses in partner communities\n• Products now in supermarkets, markets & institutions nationwide.",
  },

  // ── Products ───────────────────────────────────────────────────────────────
  {
    patterns: ["products", "what do you sell", "what products", "catalogue", "catalog", "items"],
    response: "We currently offer:\n\n🧅 **Onion Flakes 250g** — ₦3,998\n🫙 **Onion Powder 250g** — ₦4,998\n🍯 **Date Syrup 350ml** — ₦5,990\n🥥 **CocoDates 500g** — ₦6,000\n🥥 **CocoDates 150g** — ₦3,000\n🥥 **CocoDates 70g** — ₦1,008\n📦 **Date Powder 500g** — ₦4,900\n\nAll products are shelf-stable and made from locally sourced Nigerian produce.",
  },
  {
    patterns: ["onion flakes", "flakes"],
    response: "**Onion Flakes 250g** — ₦3,998.00\nOur onion flakes are made from fresh Nigerian onions, dehydrated and processed into crispy, shelf-stable flakes. Perfect for cooking, seasoning, and food processing. Add to cart on our Shop page.",
  },
  {
    patterns: ["onion powder", "powder"],
    response: "**Onion Powder 250g** — ₦4,998.00\nFinely ground from premium Nigerian onions. A versatile spice for soups, stews, marinades, and seasoning blends. Available in our Shop.",
  },
  {
    patterns: ["date syrup", "syrup", "dates syrup"],
    response: "**Date Syrup 350ml** — ₦5,990.00\nA natural, nutrient-rich sweetener made from Nigerian dates. Great as a honey substitute, in smoothies, baking, and cooking. Available in our Shop.",
  },
  {
    patterns: ["cocodates", "coco dates", "date flakes"],
    response: "**CocoDates** — available in 3 sizes:\n• 70g — ₦1,008\n• 150g — ₦3,000\n• 500g — ₦6,000\n\nA delicious blend of coconut and dates, rich in natural energy. Perfect as a snack or ingredient. Shop now on our Products page.",
  },
  {
    patterns: ["date powder", "dates powder"],
    response: "**Date Powder 500g** — ₦4,900.00\nNaturally dried and powdered dates — a healthy sugar alternative with rich flavour. Great for baking, smoothies, and beverages.",
  },

  // ── Pricing ────────────────────────────────────────────────────────────────
  {
    patterns: ["price", "how much", "cost", "pricing", "affordable"],
    response: "Our current prices:\n• Onion Flakes 250g — ₦3,998\n• Onion Powder 250g — ₦4,998\n• Date Syrup 350ml — ₦5,990\n• CocoDates 70g — ₦1,008\n• CocoDates 150g — ₦3,000\n• CocoDates 500g — ₦6,000\n• Date Powder 500g — ₦4,900\n\nAll prices are inclusive. Visit our Shop for full details.",
  },

  // ── Ordering ───────────────────────────────────────────────────────────────
  {
    patterns: ["how to order", "order", "buy", "purchase", "add to cart", "how to buy"],
    response: "To order:\n1. Visit our **Shop** page\n2. Browse and filter by category or price\n3. Click **Add to cart** on any product\n4. Complete checkout\n\nYou can also contact us directly at kyenproducts@gmail.com or +234 811 726 4991 for bulk/institutional orders.",
  },
  {
    patterns: ["bulk order", "wholesale", "institutional", "large order", "distributor"],
    response: "We welcome bulk and institutional orders! Contact our team:\n📧 kyenproducts@gmail.com\n📞 +234 811 726 4991\n\nWe supply supermarkets, restaurants, and institutions across Nigeria.",
  },
  {
    patterns: ["delivery", "shipping", "dispatch", "how long", "when will"],
    response: "For delivery and shipping details, please contact us directly:\n📧 kyenproducts@gmail.com\n📞 +234 811 726 4991\n\nOur team will confirm timelines based on your location.",
  },

  // ── Contact ────────────────────────────────────────────────────────────────
  {
    patterns: ["contact", "reach you", "get in touch", "speak to", "talk to", "customer service", "support"],
    response: "You can reach us through:\n📧 Email: kyenproducts@gmail.com\n📞 Phone: +234 811 726 4991\n📍 Address: Nigerian Stored Agricultural Produce and Research Institute, Mile 4, Port-Harcourt\n\nOr fill out the form on our **Contact Us** page.",
  },
  {
    patterns: ["email", "mail"],
    response: "Our email address is **kyenproducts@gmail.com**. We typically respond within 24 hours.",
  },
  {
    patterns: ["phone", "call", "number", "telephone"],
    response: "You can call or WhatsApp us on **+234 811 726 4991**.",
  },
  {
    patterns: ["address", "location", "where are you", "office", "port harcourt"],
    response: "We are located at:\n📍 Nigerian Stored Agricultural Produce and Research Institute,\nMile 4, Port-Harcourt, Nigeria.",
  },

  // ── Social ─────────────────────────────────────────────────────────────────
  {
    patterns: ["instagram", "social media", "follow", "social"],
    response: "Follow us on Instagram: **@onion_wholeseller_in_nigeria**\nhttps://www.instagram.com/onion_wholeseller_in_nigeria",
  },
  {
    patterns: ["linkedin"],
    response: "Connect with us on LinkedIn: **Kyen Products & Supplies**\nhttp://www.linkedin.com/company/kyen1/",
  },

  // ── Sustainability / Values ────────────────────────────────────────────────
  {
    patterns: ["sustainability", "environment", "waste", "zero waste", "eco"],
    response: "Sustainability is core to what we do. We process 100% of every harvest — nothing goes to waste. Our model reduces post-harvest losses, conserves resources, and strengthens food security in our partner communities.",
  },
  {
    patterns: ["women", "youth", "empowerment", "gender"],
    response: "We actively empower women and youth. 40% of our farmer partners are women, and 60% of the 25 jobs we've created are filled by women and youth. Inclusive growth is part of our DNA.",
  },
  {
    patterns: ["natural", "ingredients", "healthy", "organic", "nutritious"],
    response: "All Kyen products are made from natural, locally sourced Nigerian agricultural produce — no artificial preservatives. Our processing extends shelf life while retaining the natural nutrition of each ingredient.",
  },

  // ── Newsletter ─────────────────────────────────────────────────────────────
  {
    patterns: ["newsletter", "subscribe", "updates", "news"],
    response: "Subscribe to our newsletter at the bottom of our homepage! You'll get updates on new products, promotions, and stories from our farming communities.",
  },

  // ── Fallback ───────────────────────────────────────────────────────────────
  {
    patterns: ["thanks", "thank you", "appreciate"],
    response: "You're welcome! 😊 Is there anything else I can help you with?",
  },
  {
    patterns: ["bye", "goodbye", "see you", "later"],
    response: "Goodbye! Thank you for visiting Kyen Products & Supplies. Have a great day! 🌿",
  },
];

export function getResponse(input: string): string {
  const lower = input.toLowerCase().trim();

  for (const entry of knowledge) {
    for (const pattern of entry.patterns) {
      if (lower.includes(pattern)) {
        return entry.response;
      }
    }
  }

  return "I'm not sure about that, but I'd love to help! You can:\n• Browse our **Shop** for products\n• Visit the **About** page to learn more about us\n• Or contact us directly at **kyenproducts@gmail.com** or **+234 811 726 4991**";
}
