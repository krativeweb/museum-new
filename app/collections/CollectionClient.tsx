"use client";

import { useState } from "react";
import GridView from "./GridView";
import ListView from "./ListView";
import CollectionModal from "./CollectionModal";
import "./collections.css";

const items = [
  // ─── GROUND FLOOR ─────────────────────────────
  {
    id: "1",
    title: "LEATHER PORTRAIT - BABA SAHEB 2",
    category: "GROUND FLOOR",
    name: "",
    image: "../images/item_ambedkar.png",
    detail: "Crafted through meticulous hand-stitching, this leather portrait of Dr. B.R. Ambedkar serves as a powerful reflection on memory, dignity, and social transformation. Each piece of leather, assembled with care, honours Ambedkar’s visionary role as the architect of India’s Constitution and advocate of human rights. The usage of leather symbolises the struggles of marginalised communities, and the hand-stitched element of the portrait transforms the struggles into a symbol of pride and resistance. Echoing the constitutional ideals of justice, liberty, equality, and fraternity that Ambedkar embodied."
  },
  {
    id: "2",
    title: "VOTUS INDICA",
    category: "GROUND FLOOR",
    name: "MEGHA JOSHI",
    image: "../images/item12.png",
    detail: "Votus Indica is an imagined, unique Indian bloom. The name Indica, a botanical term, is modern Latin for “of India,” and references a plant’s nativity to India. Votus is a play on the Lotus, which we find often in the artwork of the Constitution as a decorative and metaphorical element. This artwork seeks to make the voting ink on the finger-petals of this bloom the enduring national symbol – over and above all connotations. The blooming success of nation-building lies in the power of the vote of the people, rising from the earth of the nation. It is how diversity can live on and disparity cease to exist."
  },
  {
    id: "3",
    title: "ASCENDING-DESCENDING",
    category: "GROUND FLOOR",
    name: "SUDIPTA DAS",
    image: "../images/item29.png",
    detail: "Ascending-Descending powerfully echoes the opening words of the Preamble, “We the People,” embodying unity and shared responsibility. The sculpture captures the harsh realities of displacement, struggle, and unrest that millions worldwide endure. The figures’ dynamic movement—some ascending toward brighter futures, others descending into new challenges—reflects the continuous uncertainty in the lives of displaced individuals, underscoring a universal plight shared across humanity."
  },
  {
    id: "4",
    title: "TRIAD OF UNITY",
    category: "GROUND FLOOR",
    name: "HARSHA DURUGADDA",
    image: "../images/item6.png",
    detail: "Triad of Unity features an intricately detailed form of three lions, their paws connected at the centre, forming a Y-like shape. This composition pays homage to the Lion Capital of Ashoka, the revered national emblem of India, subtly linking the sculpture to the principles of unity, justice, and sovereignty enshrined in the Constitution of India."
  },
  {
    id: "5",
    title: "THE LOTUS LECTERN",
    category: "GROUND FLOOR",
    name: "VALAY GADA",
    image: "../images/item11.png",
    detail: "The Lotus Lectern is a harmonious fusion of tradition and contemporaneity reflecting modern India. Rising from the earthy depths of clay, the brass lotus synthesises traditional, realistic and innovative forms. This pedestal is inspired by Nandalal Bose’s illustrations in the original Constitution, and honours India’s national flower, and its symbolic triad of purity, prosperity, and fertility."
  },
  {
    id: "6",
    title: "THE WISHING TREE OF JUSTICE",
    category: "GROUND FLOOR",
    name: "SANGAM VANKHADE",
    image: "../images/item18.png",
    detail: "Made using a variety of stones sourced from different regions across India, it reflects the rich and diverse cultures of the nation, emphasising the unity and inclusivity that the Constitution represents. This installation draws inspiration from Shri Nandalal Bose’s artistic vision and highlights the Constitution’s pivotal role in shaping our identity."
  },
  {
    id: "7",
    title: "GENESIS",
    category: "GROUND FLOOR",
    name: "ALEX DAVIS",
    image: "../images/item20.png",
    detail: "Genesis symbolises the origin and growth of India. At its core, a sculpted seed embodies the text of the Preamble, representing the foundation of our democratic values. Suspended by fine stainless steel cables, this seed is encircled by botanical scrolls inspired by the borders in the Constitution, suggesting life emerging from the Constitution’s pages."
  },
  {
    id: "8",
    title: "WEAVING THE FABRIC",
    category: "GROUND FLOOR",
    name: "REKHA GOYAL",
    image: "../images/item25.png",
    detail: "Inspired by the Constitution’s emphasis on secularism, Weaving the Fabric, an installation in ceramic, explores the idea of a community built in its varied cultures, perspectives, and identities. With diversity as the underlying strength and beauty of our country, this installation focuses on the complexity of a nation bound in its differences."
  },
  {
    id: "9",
    title: "THE HOMELAND",
    category: "GROUND FLOOR",
    name: "STUDENTS OF BFA (JINDAL SCHOOL)",
    image: "../images/item26.png",
    detail: "The Homeland features intricate relief work that celebrates the rich tapestry of Indian arts and crafts. The project strives to capture the essence of the homeland through the use of materials like terracotta, reflecting a deep connection to the land and the cultural heritage. The inclusion of real terracotta tiles creates a compelling interplay of texture and depth."
  },

  // ─── FIRST FLOOR ─────────────────────────────
  {
    id: "10",
    title: "75-YEAR JOURNEY WALL (TIMELINE WALL)",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/timeline.png",
    detail: "Conceived as the Timeline Wall, this installation marks the evolution of the Indian Constitution from its historic adoption and signing through seven and a half decades of transformative amendments and pivotal judicial pronouncements. Each milestone has been documented with precise dates and years, complemented by carefully crafted narratives. As visitors traverse the length of this wall, they witness the unfolding of India's constitutional journey in chronological order."
  },
  {
    id: "11",
    title: "INTERACTIVE ROBOT - SAMVID",
    category: "FIRST FLOOR",
    name: "TECHNOLOGY EXHIBIT",
    image: "../images/samvid.png",
    detail: "SAMVID is an interactive guide robot that autonomously shifts all over the first floor and stops at selected exhibits to explain the background and symbolism of each artefact. Equipped with advanced robotics and intelligent navigation, SAMVID interprets pieces by highlighting historical context and constitutional values, demonstrating how technology can preserve heritage for a contemporary audience."
  },
  {
    id: "12",
    title: "INTERACTIVE RADIO (AAJ KE SAMACHAR)",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/radio.png",
    detail: "This installation employs a vintage radio to bridge India’s past and present. Through tactile knobs that allow the selection of decades and languages, visitors can journey across time, uncovering broadcasts that illuminate defining moments in India’s democratic history. It transforms historical discourse into an intimate and resonant experience."
  },
  {
    id: "13",
    title: "IN PRINT: MEDIA & LITERATURE",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/books.png",
    detail: "This section encompasses a collection of special edition books on the Constitution. The elevated placement of the books sends out a deeper message; although the Constitution is within our reach, we often perceive it as a mere legal document instead of a living guide for society. This installation invites visitors to reflect on their own engagement with constitutional knowledge."
  },
  {
    id: "14",
    title: "YOU KNOW RIGHT (WALL ART)",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/rights.png",
    detail: "Focused on Fundamental Rights, each panel represents a real-life case study that invites visitors to apply constitutional principles. Once a choice is made, the visitor can lift the panel to reveal the sealed answer. This hands-on approach serves as a reminder that knowing your Fundamental Rights is key to being an active citizen."
  },
  {
    id: "15",
    title: "BEYOND FUNDAMENTAL RIGHTS",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/legal.png",
    detail: "This section provides a comprehensive understanding of constitutional protections and legal safeguards. By presenting major legal cases in an accessible way, it aims to raise awareness about additional protections available to citizens, empowering them to safeguard themselves from social atrocities."
  },
  {
    id: "16",
    title: "ROTATING BLOCKS - ASSEMBLE THE STORY",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/blocks.png",
    detail: "Movable blocks representing pivotal historical moments. Visitors can rearrange them to create layouts such as the front page of newspapers from 15th August 1947, 26th January 1950, or Nehru’s 'Tryst with Destiny' speech. This physical interaction makes constitutional history engaging and tactile."
  },
  {
    id: "17",
    title: "BALCONY SCULPTURE (METAL ART)",
    category: "FIRST FLOOR",
    name: "",
    image: "../images/balcony.png",
    detail: "A vertical metallic pillar featuring a laser-cut excerpt from the Preamble displayed on each face in India’s official languages. The artwork symbolises the inclusive spirit of the nation, emphasising that even though India is multilingual, it stands united in its constitutional values."
  },
  {
    id: "18",
    title: "THE DAWN OF DEMOCRACY",
    category: "FIRST FLOOR",
    name: "SAYAN MUKHERJEE",
    image: "../images/item21.png",
    detail: "The artwork encapsulates India’s democratic journey, beginning with the phrase “We the People of India.” It illustrates India’s dynamic fusion of tradition and modernity, highlighting themes like freedom of expression, linguistic diversity, and the nation’s dedication to both industrial and agricultural growth."
  },
  {
    id: "19",
    title: "HANDS OF UNITY (एकता के हाथ)",
    category: "FIRST FLOOR",
    name: "AASHTI MILLER",
    image: "../images/item14.png",
    detail: "एकता के हाथ showcases the Constitution as a living document. The artwork is built upon an interwoven interpretation of the Constitution’s front and back covers, featuring hand motifs derived from the document’s original illustrations to celebrate past, present, and future values."
  },
  {
    id: "20",
    title: "A TAPESTRY OF INNUMERABLE FOLDS",
    category: "FIRST FLOOR",
    name: "ANKON MITRA",
    image: "../images/item15.png",
    detail: "Stretching 780 metres with 22 folded panels, this installation evokes the pages of the Constitution inscribed in multiple Indian languages. Suspended above, it invites viewers to reflect on the harmonious movement of India’s languages intertwining to form a unified tapestry."
  },
  {
    id: "21",
    title: "ILLUSION",
    category: "FIRST FLOOR",
    name: "SIBDAS SENGUPTA",
    image: "../images/item22.png",
    detail: "Illusion presents Dr. B. R. Ambedkar’s image on a monumental scale. This magnification transforms his likeness into a symbol akin to a monument, inviting viewers to reflect on the evolving narratives surrounding Ambedkar’s legacy in the current socio-political context."
  },
  {
    id: "22",
    title: "EQUALITY BEFORE LAW",
    category: "FIRST FLOOR",
    name: "PRADEEP B. JOGDAND",
    image: "../images/item7.png",
    detail: "Features several intricately carved faces atop a white boat-like structure. The diverse faces embody the multitude of identities within Indian society, while the boat signifies a vessel of hope navigating through the turbulent waters of societal challenges."
  },
  {
    id: "23",
    title: "FREEDOM GATEWAY",
    category: "FIRST FLOOR",
    name: "WOLF",
    image: "../images/item8.png",
    detail: "A symbolic portal drawing inspiration from the Preamble. The contrasting sides reflect the dual nature of the Constitution: one side rich and ornate (aspirational ideals), and the other modest (foundational text), acting as a guardian of the democratic framework."
  },

  // ─── MEZZANINE ───────────────────────────────
  {
    id: "24",
    title: "UNREAD SENTENCES",
    category: "MEZZANINE",
    name: "VIJAYA CHAUHAN",
    image: "../images/item23.png",
    detail: "Featuring Braille script, this artwork embodies justice, equality, and dignity. Crafted from terracotta and ceramic, it offers a multisensory experience, ensuring viewers of all abilities can engage with the ideals of fraternity and respect for human dignity."
  },
  {
    id: "25",
    title: "TERRITORIAL SUBLIME IV",
    category: "MEZZANINE",
    name: "PINAKI RANJAN MOHANTY",
    image: "../images/item24.png",
    detail: "Uses found wood and stone from Chilika Lake. The flight of migratory flamingos symbolises autonomy and the freedom to choose. The circular form reflects constitutional principles that advocate for unity and inclusivity."
  },
  {
    id: "26",
    title: "THE LAYERED PORTRAIT OF THE NATION",
    category: "MEZZANINE",
    name: "DEBASHISH MUKHERJEE",
    image: "../images/item9.png",
    detail: "Created from 320 metres of layered Khadi fabric, this artwork is a tribute to India's complex tapestry. Khadi stands as a symbol of resilience and unity, with the stacked layers representing the multiplicity of identities that coexist within the nation."
  },
  {
    id: "27",
    title: "PLAY GROUND",
    category: "MEZZANINE",
    name: "TUFAN PRAMANIK",
    image: "../images/item10.png",
    detail: "A powerful visual narrative using charcoal and ink. It juxtaposes the historic old Parliament building with modern infrastructure like the metro system, highlighting how the Constitution serves as a guiding framework for progress over 75 years."
  },
  {
    id: "28",
    title: "FOUNDATION",
    category: "MEZZANINE",
    name: "TUFAN PRAMANIK",
    image: "../images/item19.png",
    detail: "An homage to Nehru, Prasad, and Ambedkar. The Ashokan Pillar rises in the backdrop as a symbol of resilience, bridging ancient heritage with the birth of a republic. The Constitution is rendered in golden ink to underscore its role as a living force."
  },
  {
    id: "29",
    title: "FRAGMENTS OF A NATION",
    category: "MEZZANINE",
    name: "ABDULLA PA",
    image: "../images/item16.png",
    detail: "Explores the intricate pluralities of the Constitution. Shadows cast by elements from the artist's surroundings evoke the Constitution’s intangible influence, ensuring its principles apply equally to all citizens regardless of faith or custom."
  },
  {
    id: "30",
    title: "VISCERAL PATHS",
    category: "MEZZANINE",
    name: "RAVIKUMAR KASHI",
    image: "../images/item17.png",
    detail: "A metaphor for the roots from which the Republic blooms. It invokes the paths that connect people via culture and language. These paths are strewn with lived experiences that are delicate yet resilient and life-giving."
  },
  {
    id: "31",
    title: "VOICES OF VISION",
    category: "MEZZANINE",
    name: "GAUTAM RAHUL",
    image: "../images/item28.png",
    detail: "This mural celebrates the 15 women members of the Constituent Assembly. It serves as a reminder of the vital role women played in shaping India’s democratic journey and advocating for equality."
  },
  {
    id: "32",
    title: "FREEDOM",
    category: "MEZZANINE",
    name: "K.R NARIMAN",
    image: "../images/item4.png",
    detail: "Commemorates the 75th anniversary of the Constitution. The airborne figure represents the core tenets of justice, liberty, equality, and fraternity, emphasizing that the lived experience of these values provides the strongest assurance of their relevance."
  },
  {
    id: "33",
    title: "ECHOES OF LIBERTY",
    category: "MEZZANINE",
    name: "",
    image: "../images/item5.png",
    detail: "A tribute to the guiding principles of the nation. At its centre, a portrait of Netaji Subhash Chandra Bose stands as a symbol of freedom and leadership, with border designs inspired by the original Constitution’s ornate illustrations."
  }
];

const categories = [
  "All Items",
  "GROUND FLOOR",
  "MEZZANINE",
  "FIRST FLOOR",
];

export default function CollectionClient() {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [activeCategory, setActiveCategory] = useState("All Items");
  const [activeItem, setActiveItem] = useState<any>(null);

  const filteredItems =
    activeCategory === "All Items"
      ? items
      : items.filter(item => item.category === activeCategory);

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={cat === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="view-toggle">
          <button onClick={() => setView("grid")}>Grid View</button>
          <button onClick={() => setView("list")}>List View</button>
        </div>
      </div>

      {/* Views */}
      {view === "grid" ? (
        <GridView items={filteredItems} onSelect={setActiveItem} />
      ) : (
        <ListView items={filteredItems} onSelect={setActiveItem} />
      )}

      {/* Modal */}
      {activeItem && (
        <CollectionModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
        />
      )}
    </>
  );
}
