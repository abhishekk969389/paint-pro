const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data/paint.json', 'utf8'));

const baseDetail = data.serviceDetails['interior-painting'];

data.serviceSidebar.servicesList.forEach(svc => {
  if (svc.slug === 'interior-painting') return;

  const [word1, word2] = svc.name.split(' ');

  data.serviceDetails[svc.slug] = {
    slug: svc.slug,
    title: { text1: word1, highlight: word2 || '' },
    subtitle: `Professional ${svc.name} Services`,
    content: [
      `Our ${svc.name.toLowerCase()} services are designed to deliver exceptional results tailored to your specific needs. We use high-quality materials and proven techniques to ensure a beautiful and long-lasting finish.`,
      `Whether you are updating a single room or completing a large-scale project, our expert team is dedicated to providing a clean, efficient, and hassle-free experience from start to finish.`
    ],
    mainImage: svc.image, // Use the image from sidebar list
    features: {
      title: { text1: "Service", highlight: "Features" },
      description: `We provide comprehensive ${svc.name.toLowerCase()} solutions with a focus on durability, protection, and aesthetic excellence.`,
      list: [
        "Premium Quality Materials",
        "Thorough Surface Preparation",
        "Expert Application Techniques",
        "Customized Solutions",
        "Minimal Disruption",
        "Clean & Professional Service",
        "On-Time Project Completion",
        "Guaranteed Satisfaction"
      ],
      image: svc.image // Reuse image
    },
    process: {
      title: { text1: "Our", highlight: "Process" },
      description: `We follow a meticulous step-by-step process to ensure a resilient and beautiful finish for your ${svc.name.toLowerCase()} project.`,
      steps: [
        { icon: "FiMessageSquare", title: "1. Consultation", desc: "We discuss your specific needs, assess the project scope, and provide a detailed estimate." },
        { icon: "FiTool", title: "2. Preparation", desc: "We thoroughly prepare the surfaces to ensure optimal adhesion and a flawless finish." },
        { icon: "FiDroplet", title: "3. Execution", desc: "Our skilled professionals execute the work with precision, care, and attention to detail." },
        { icon: "FiCheckCircle", title: "4. Inspection", desc: "We conduct a final walk-through to ensure the results exceed your expectations." }
      ]
    }
  };
});

fs.writeFileSync('data/paint.json', JSON.stringify(data, null, 2));
console.log('Successfully updated serviceDetails in paint.json');
