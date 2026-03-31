import { 
  FaFacebookF, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaXTwitter,
  FaLocationDot,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";

export const SITE_CONFIG = {
  name: "Digital Duniyaa Foundation",
  shortName: "DDF",
  url: "https://digitalduniyaa.org",
  logo: "images/logo", // Cloudinary path (extension ke bina)
  
  contact: {
    phone: [
        { no: "+91 93 350 29 556", link: "tel:+919335029556", label: "Primary" }
    ],
    email: [
        { emailid: "digitalduniyaafoundation@gmail.com", link: "mailto:digitalduniyaafoundation@gmail.com" }
    ],
    address: [
        { 
        //   street: "Nandgram", 
        //   locality: "Ghaziabad", 
        //   city: "Uttar Pradesh", 
        //   pin: "201008",
          full: "Village & Post Chiraigaon, Balua Road, Varanasi (U.P)-221112"
        }
    ],
    hours: "10:00 AM - 6:00 PM",
    mapLink: "https://goo.gl/maps/xyz123", // Apna actual Google Map link yahan dalein
  },

  socials: [
    { 
        id: "fb",
        name: "Facebook", 
        link: "https://www.facebook.com/profile.php?id=61569512177712", 
        icon: <FaFacebookF />,
        color: "hover:bg-blue-600"
    },
    { 
        id: "inst",
        name: "Instagram", 
        link: "https://instagram.com/digitalduniyaa", 
        icon: <FaInstagram />,
        color: "hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500"
    },
    { 
        id: "yt",
        name: "YouTube", 
        link: "https://www.youtube.com/@digitalduniyaafoundation", 
        icon: <FaYoutube />,
        color: "hover:bg-red-600"
    },
    { 
        id: "wa",
        name: "WhatsApp", 
        link: "https://wa.me/919876543210", 
        icon: <FaWhatsapp />,
        color: "hover:bg-green-500"
    },
    { 
        id: "xt",
        name: "Twitter", 
        link: "https://twitter.com/digitalduniyaa", 
        icon: <FaXTwitter />,
        color: "hover:bg-slate-900"
    },
  ],
  reg: "12345/NGO/GZB"
};