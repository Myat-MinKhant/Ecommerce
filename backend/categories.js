const categories = [
    {
        id: 1,
        title: 'iPhones',
        products: [
            {
                id: 1,
                name: "iPhone 14 Pro",
                description:
                    "The iPhone 14 Pro and Pro Max feature a Super Retina XDR OLED display with a typical maximum brightness of 1,000 nits. However, it can go all the way up to 1,600 nits while watching HDR videos, and 2,000 nits outdoors. The display has a refresh rate of 120 Hz and utilizes LTPO technology.",
                price: 1664,
                color: 'deep purple',
                storage: [128],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPhone_14_Pro.png?updatedAt=1689771172278",
            },
            {
                id: 2,
                name: "iPhone 14 Plus",
                description:
                    "The iPhone 14 Plus comes with 6.7-inch OLED display and Apple's improved Bionic A15 processor. On the back there is a Dual camera setup with 12MP main camera and 12MP Ultra-wide sensor.",
                price: 1513,
                color: 'red',
                storage: [128],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPhone_14_plus.png?updatedAt=1689771305491",
            },
            {
                id: 3,
                name: "iPhone 12",
                description:
                    "Apple iPhone 12 is the bigger version of the regular iPhone 12 mini. The handset's hardware include a 6.1-inch OLED display, 5nm Apple A14 Bionic processor, and a dual-camera setup with a large sensor. 5G and Face ID are on board, too.",
                price: 1008,
                color: 'purple',
                storage: [256],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPhone_12.png?updatedAt=1689771388803",
            },
            {
                id: 4,
                name: "iPhone X",
                description:
                    "iPhone X is the future of the smartphone. It is packed with incredible new technologies, like the innovative TrueDepth camera system, beautiful Super Retina display and super fast A11 Bionic chip with neural engine.",
                price: 700,
                color: 'black',
                storage: [128],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPhone_X.png?updatedAt=1689771501290",
            },
            {
                id: 5,
                name: "iPhone 13",
                description:
                    "The iPhone 13 display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 6.06 inches diagonally (actual viewable area is less). Both models: HDR display.",
                price: 1160,
                color: 'blue',
                storage: [128],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPhone_13.png?updatedAt=1689771425738",
            },
        ],
    },
    {
        id: 2,
        title: 'MacBooks',
        products: [
            {
                id: 6,
                name: "MacBook Air 15″",
                description:
                    "Measuring only 11.5mm thin, the new MacBook Air is the world's thinnest 15-inch laptop. The 15-inch MacBook Air features a MagSafe port for charging, and two Thunderbolt ports for connecting accessories. The 15-inch MacBook Air includes a 3.5mm headphone jack for versatile connectivity",
                price: 1899,
                color: 'silver',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/MacBook_Air_15_.png?updatedAt=1689771901267",
            },
            {
                id: 7,
                name: "MacBook Pro 13″",
                description: 'In 2023, Apple switched the Mac Pro from Intel to its own silicon. The current-generation Mac Pro is based on the 24-core M2 Ultra chip and supports up to 76 GPU cores, 192GB of unified memory and 8TB of solid state storage. For expansion, the Mac Pro has six PCI Express slots.',
                price: 1299,
                color: 'silver',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/594255-Product-0-I-637901949777334327.jpg_v=1655873751?updatedAt=1690828953128",
            },
        ],
    },
    {
        id: 3,
        title: 'iPads',
        products: [
            {
                id: 8,
                name: "iPad Pro 11″",
                description: 'iPad makes editing, enjoying, and sharing your photos and videos easy. Capture the perfect shot and make it your own with a suite of powerful built‑in or third‑party editing apps. And use Final Cut Pro for iPad to shoot, edit, finish, and deliver professional videos anywhere you are.',
                price: 799,
                color: 'black',
                storage: [128],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPad%20Pro%2011'.jpg?updatedAt=1690770740104",
            },
            {
                id: 9,
                name: "iPad Air 4",
                description:
                    'The device closely resembles the design of the 11-inch iPad Pro (3rd generation) and has several features that were previously exclusive to the iPad Pro line, such as support for Magic Keyboard and the second-generation Apple Pencil. It is available in five colors: Space Gray, Silver, Rose Gold, Green, and Sky Blue.',
                price: 599,
                color: 'blue',
                storage: [64],
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/iPad%20Air%204.png?updatedAt=1690770750887",
            },
        ],
    },
    {
        id: 4,
        title: 'Headphones',
        products: [
            {
                id: 12,
                name: "Airpod Pro 2",
                description:
                    "They will belong to either the AirPods (3rd Generation) or the AirPods Pro. However, the AirPods Pro (2nd generation) is easier to spot as its MagSafe Charging Case, in particular, has a lanyard loop on the side and speakers at the bottom.",
                price: 249,
                color: 'white',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/Airpod%20Pro%20(2nd%20generation).jpg?updatedAt=1690770740501",
            },
            {
                id: 13,
                name: "Airpod Max",
                description:
                    "AirPods Max combine high-fidelity audio with industry-leading Active Noise Cancellation to deliver an unparalleled listening experience. Each part of their custom-built driver works to produce sound with ultra-low distortion across the audible range.",
                price: 549,
                color: 'white',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/Airpod%20Max.jpg?updatedAt=1690770745257",
            },
        ],
    },
    {
        id: 5,
        title: 'Watches',
        products: [
            {
                id: 10,
                name: "Apple Watch 3",
                description:
                    "Apple Watch Series 3 comes in two models, one with GPS and cellular, and one with GPS, both featuring a 70 percent faster dual-core processor and new wireless chip. Apple Watch Series 3 features a faster dual-core processor and wireless chip.",
                price: 299,
                color: 'black',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/Apple%20Watch%20Series%203.webp?updatedAt=1690770734391",
            },
            {
                id: 11,
                name: "Apple Watch 7",
                description:
                    "Apple Watch Series 7 is the most durable Apple Watch ever built. Fundamental design changes were needed to achieve the vision of the larger Always-On Retina display. These same innovations also helped make the most crack-resistant front crystal yet. Crack ResistantOur strongest front crystal ever.",
                price: 399,
                color: 'green',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/Apple%20Watch%20Series%207.webp?updatedAt=1690770744441",
            },
        ],
    },
    {
        id: 6,
        title: 'Others',
        products: [
            {
                id: 14,
                name: "Apple Magic Mouse",
                description:
                    "Overview. Magic Mouse is wireless and rechargeable, with an optimized foot design that lets it glide smoothly across your desk. The Multi-Touch surface allows you to perform simple gestures such as swiping between web pages and scrolling through documents.",
                price: 99,
                color: 'black',
                image:
                    "https://ik.imagekit.io/tg4ejl7pe/Ecommerce/image/Apple%20Magic%20Mouse.jpg?updatedAt=1690770735577",
            },
        ],
    }
]

module.exports = categories;